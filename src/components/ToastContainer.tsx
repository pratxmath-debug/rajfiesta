"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Sparkles, CheckCircle2, Info, X } from "lucide-react";

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full px-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 animate-in slide-in-from-bottom-2 ${
            toast.type === "royal"
              ? "bg-[#0F2C59]/95 text-amber-100 border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(120,0,22,0.25)]"
              : toast.type === "success"
              ? "bg-[#780016]/95 text-amber-50 border-amber-300/40"
              : "bg-stone-900/90 text-stone-100 border-stone-700"
          }`}
        >
          <div className="flex items-center space-x-3">
            {toast.type === "royal" ? (
              <Sparkles className="w-5 h-5 text-[#E5A93C] flex-shrink-0 animate-pulse" />
            ) : toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            ) : (
              <Info className="w-5 h-5 text-amber-300 flex-shrink-0" />
            )}
            <p className="text-sm font-medium leading-snug">{toast.message}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-3 text-stone-400 hover:text-white p-1 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
