"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles } from "lucide-react";

interface AudioStoryPlayerProps {
  title: string;
  storyScript: string;
}

export const AudioStoryPlayer: React.FC<AudioStoryPlayerProps> = ({ title, storyScript }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1.0);
  const [ambientDroneOn, setAmbientDroneOn] = useState(false);
  const [progress, setProgress] = useState(0);

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneOscsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      stopAudio();
    };
  }, []);

  // Web Audio Ambient Desert Sitar / Tanpura Drone generator
  const toggleAmbientDrone = () => {
    if (ambientDroneOn) {
      stopAmbientDrone();
    } else {
      startAmbientDrone();
    }
  };

  const startAmbientDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Desert Tanpura Harmonics (C# root: ~138.59 Hz, fifth: 207.65 Hz)
      const freqs = [138.59, 207.65, 277.18, 415.3];
      const oscs = freqs.map((f) => {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        osc.connect(masterGain);
        osc.start();
        return osc;
      });
      droneOscsRef.current = oscs;
      setAmbientDroneOn(true);
    } catch {
      // AudioContext not allowed before user gesture
    }
  };

  const stopAmbientDrone = () => {
    try {
      droneOscsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      droneOscsRef.current = [];
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    } catch {}
    setAmbientDroneOn(false);
  };

  const playNarration = () => {
    if (!synthRef.current) return;

    if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(storyScript);
    utterance.rate = rate;
    utterance.pitch = 0.95;

    // Pick best English voice
    const voices = synthRef.current.getVoices();
    const indianVoice = voices.find((v) => v.lang.includes("en-IN") || v.name.includes("India"));
    const englishVoice = indianVoice || voices.find((v) => v.lang.startsWith("en"));
    if (englishVoice) utterance.voice = englishVoice;

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      stopAmbientDrone();
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    // Progress estimation based on spoken boundaries
    let charIndex = 0;
    utterance.onboundary = (e) => {
      if (e.name === "word") {
        charIndex = e.charIndex;
        const pct = Math.min(100, Math.round((charIndex / storyScript.length) * 100));
        setProgress(pct);
      }
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
    setProgress(0);

    // Auto start subtle desert ambient drone
    if (!ambientDroneOn) {
      startAmbientDrone();
    }
  };

  const pauseAudio = () => {
    if (synthRef.current && isPlaying) {
      synthRef.current.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    stopAmbientDrone();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-r from-[#0F2C59] via-[#1A365D] to-[#780016] text-amber-50 rounded-2xl p-5 md:p-6 shadow-xl border border-[#D4AF37]/40 relative overflow-hidden">
      {/* Decorative Jharokha arch background pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-48 opacity-10 pointer-events-none bg-[radial-gradient(#FFE259_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#E5A93C] mb-1">
            <Sparkles className="w-4 h-4 animate-spin text-[#D4AF37]" style={{ animationDuration: "6s" }} />
            <span>Royal Audio Chronicle & Storyteller</span>
          </div>
          <h4 className="text-lg md:text-xl font-serif font-bold text-amber-100">{title}</h4>
          <p className="text-xs text-amber-200/80 mt-1 max-w-xl">
            Listen to the verified chronicled legends, royal decrees, and oral histories recited with ambient desert harmonics.
          </p>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center flex-wrap gap-2.5">
          {isPlaying ? (
            <button
              onClick={pauseAudio}
              className="flex items-center space-x-2 px-4 py-2.5 bg-[#D4AF37] hover:bg-[#E5A93C] text-[#0F2C59] font-bold text-sm rounded-xl shadow-lg transition-transform active:scale-95"
            >
              <Pause className="w-4 h-4 fill-current" />
              <span>Pause</span>
            </button>
          ) : (
            <button
              onClick={playNarration}
              className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#E5A93C] hover:to-[#F59E0B] text-[#0F2C59] font-bold text-sm rounded-xl shadow-lg transition-transform active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isPaused ? "Resume Audio" : "Listen to Story"}</span>
            </button>
          )}

          {(isPlaying || isPaused) && (
            <button
              onClick={stopAudio}
              title="Stop Narration"
              className="p-2.5 bg-white/10 hover:bg-white/20 text-amber-200 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Ambient Desert Sitar Drone Toggle */}
          <button
            onClick={toggleAmbientDrone}
            title={ambientDroneOn ? "Mute Desert Ambient Harmonics" : "Enable Desert Sitar Tanpura Drone"}
            className={`flex items-center space-x-1.5 px-3 py-2 text-xs rounded-xl border transition-colors ${
              ambientDroneOn
                ? "bg-amber-400/20 border-amber-300 text-amber-200"
                : "bg-white/5 border-white/15 text-stone-300 hover:bg-white/10"
            }`}
          >
            {ambientDroneOn ? <Volume2 className="w-3.5 h-3.5 text-amber-300" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">Tanpura Drone</span>
          </button>

          {/* Speed Selector */}
          <select
            value={rate}
            onChange={(e) => {
              setRate(parseFloat(e.target.value));
              if (isPlaying) {
                stopAudio();
              }
            }}
            className="text-xs bg-white/10 text-amber-100 rounded-xl px-2.5 py-2 border border-white/20 focus:outline-none"
          >
            <option value="0.8" className="text-stone-900">0.8x</option>
            <option value="1.0" className="text-stone-900">1.0x</option>
            <option value="1.2" className="text-stone-900">1.2x</option>
          </select>
        </div>
      </div>

      {/* Progress Bar & Audio Soundwave Indicator */}
      {(isPlaying || isPaused) && (
        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between text-xs text-amber-300 mb-1.5">
            <div className="flex items-center space-x-2">
              <span className="flex space-x-0.5 items-end h-3">
                <span className={`w-1 bg-amber-400 rounded-full ${isPlaying ? "h-3 animate-pulse" : "h-1"}`} />
                <span className={`w-1 bg-amber-400 rounded-full ${isPlaying ? "h-2 animate-bounce" : "h-1"}`} />
                <span className={`w-1 bg-amber-400 rounded-full ${isPlaying ? "h-3.5 animate-pulse" : "h-1"}`} />
              </span>
              <span>Narrating History</span>
            </div>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
