"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MessageCircle, X, Send, Bot, User, Compass, Landmark, Utensils, RotateCcw } from "lucide-react";
import { DESTINATIONS, CITIES } from "@/data/rajasthanData";
import { RAJASTHANI_DISHES } from "@/data/cuisineCultureData";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  suggestions?: string[];
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome",
    sender: "bot",
    text: "Khamma Ghani! 🙏 I am RajBot, your royal Rajasthan AI travel concierge. How may I guide your journey through the Land of Kings today?",
    timestamp: "Just now",
    suggestions: [
      "I have 3 days & ₹15,000. Plan my trip!",
      "What are the top street foods in Jaipur?",
      "Hidden stepwells & secret places?",
      "How to travel from Jodhpur to Jaisalmer?"
    ]
  }
];

export const RajBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Intelligent Rajasthan Travel Knowledge Engine
  const generateResponse = async (userPrompt: string): Promise<string> => {
    const q = userPrompt.toLowerCase();

    // Try calling the Next.js API route if available
    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userPrompt })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.reply) return data.reply;
      }
    } catch {
      // Fallback to local intelligent response engine
    }

    // Local Expert Reasoning
    if (q.includes("3 day") || (q.includes("3") && q.includes("day"))) {
      return `🏰 **3-Day Royal Heritage Circuit (Budget ~₹15,000)**:\n\n• **Day 1 (Jaipur):** Dawn at Amber Fort (₹100) & Maota Lake → Pyaaz Kachori at Rawat Mishtan Bhandar → Afternoon at Hawa Mahal & City Palace → Sunset tea at Nahargarh Fort overlooking the Pink City.\n• **Day 2 (Jaipur → Pushkar):** Scenic 2.5-hr drive to sacred Pushkar → Visit 14th-century Lord Brahma Temple → Evening Aarti around Pushkar Lake's 52 ghats → Saffron Malpua at Halwai Gali.\n• **Day 3 (Pushkar → Jodhpur):** 3-hr train to the Blue City → Mehrangarh Fort ramparts & Daulat Khana museum → Creamy Makhaniya Lassi at Mishrilal Clock Tower → Sunset walk through indigo-painted Navchokiya alleys.\n\nEstimated Budget: Stay ₹4,500 + Food ₹3,000 + Transport ₹4,200 + Tickets ₹1,200 = **~₹12,900 total**!`;
    }

    if (q.includes("food") || q.includes("eat") || q.includes("dish") || q.includes("jaipur food")) {
      return `🍛 **Must-Try Rajasthani Delicacies & Legendary Spots**:\n\n1. **Dal Baati Churma:** Wheat dough baked crisp in cow-dung embers and drenched in desi ghee. *Best at: LMB (Jaipur) or Bawarchi (Udaipur)*.\n2. **Laal Maas:** Royal mutton slow-simmered with smoky Mathania red chillies. *Best at: 1559 AD (Udaipur)*.\n3. **Pyaaz Ki Kachori:** Flaky pastry stuffed with spicy caramelised onions. *Best at: Rawat Mishtan Bhandar (Jaipur)*.\n4. **Makhaniya Lassi:** Thick saffron yogurt crowned with white butter. *Best at: Shri Mishrilal Hotel (Jodhpur Clock Tower)*.\n5. **Malai Ghewar:** Honeycomb disc sweet soaked in saffron syrup. *Best at: Sambhar Fini & Ghewar (Jaipur)*.`;
    }

    if (q.includes("hidden") || q.includes("secret") || q.includes("offbeat")) {
      return `💎 **Hidden Rajasthan: Destinations Tourists Usually Miss**:\n\n• **Chand Baori (Abhaneri):** A 1,200-year-old geometric labyrinth with 3,500 perfectly carved stone steps descending 13 storeys.\n• **Kuldhara Ghost Village (Jaisalmer):** Abandoned overnight in 1825 by 84 Paliwal Brahmin hamlets under a mysterious curse.\n• **Raniji Ki Baori (Bundi):** A 46-meter deep subterranean palace with ornate pillar archways carved with Lord Vishnu's avatars.\n• **Bhangarh Fort:** Ruins of an opulent 17th-century walled kingdom wrapped in paranormal folklore at the foot of the Aravallis.\n• **Toorji Ka Jhalra (Jodhpur):** 18th-century stepwell of rose-red sandstone with restored aquamarine spring pools.`;
    }

    if (q.includes("jodhpur to jaisalmer") || q.includes("reach jaisalmer")) {
      return `🐪 **Traveling between Jodhpur & Jaisalmer (280 km)**:\n\n1. **By Train (Most Scenic):** *Jodhpur-Jaisalmer Express (Train 14810)* departs daily at 07:05 AM and reaches Jaisalmer at 12:40 PM. Sleeper: ₹210, 3A: ₹560.\n2. **By Cab (NH11 Highway):** 4.5 hours of smooth, wide desert highway. En route stop at the 8th-century sand-dune temples of Osian. Average fare: ₹3,600 (Sedan) to ₹5,200 (Innova).\n3. **By Bus:** Regular RSRTC Deluxe coaches leave from Jodhpur Paota Circle every hour (₹320 - ₹550).`;
    }

    if (q.includes("best time") || q.includes("weather") || q.includes("season")) {
      return `☀️ **Best Time to Visit Rajasthan**:\n\n• **Peak Heritage Season (October to March):** Ideal pleasant temperatures (12°C – 28°C). Crisp desert breezes and starry nights make it perfect for fort exploration and dune camping.\n• **Festival Winter:** November (Pushkar Camel Fair), January (Jaipur Literature Festival), February (Jaisalmer Desert Festival).\n• **Monsoon Magic (July to September):** Udaipur and Mount Abu turn into lush emerald retreats with cascading waterfalls and overflowing lakes!`;
    }

    // Default helpful concierge answer
    return `🏰 **Rajasthan Travel Insights**:\n\nRajasthan encompasses 9 royal heritage regions, over 35 historic hill fortresses, and centuries of vibrant traditions.\n\nWould you like me to:\n1. Build an AI-curated itinerary for your specific duration & budget?\n2. Share recommendations for authentic palace stays and heritage havelis?\n3. Reveal secret stepwells and offbeat desert sanctuaries?`;
  };

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text.trim(),
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    try {
      const responseText = await generateResponse(userMessage.text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: responseText,
        timestamp: "Just now"
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "My apologies, esteemed traveler. Please ask again and I shall guide your journey through Rajasthan.",
          timestamp: "Just now"
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 md:bottom-6 right-6 z-40 group flex items-center space-x-2.5 p-3.5 bg-gradient-to-r from-[#780016] via-[#0F2C59] to-[#780016] text-amber-200 rounded-full shadow-[0_8px_30px_rgba(120,0,22,0.4)] border border-[#D4AF37]/60 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Ask RajBot AI Assistant"
        >
          <div className="relative">
            <Sparkles className="w-6 h-6 text-[#E5A93C] animate-spin" style={{ animationDuration: "8s" }} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          </div>
          <span className="font-serif font-bold text-sm tracking-wide text-amber-100 pr-1 hidden sm:inline">
            RajBot AI ✨
          </span>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[580px] h-[82vh] bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#D4AF37]/50 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Royal Chat Header */}
          <div className="p-4 bg-gradient-to-r from-[#0F2C59] via-[#1A365D] to-[#780016] text-amber-50 flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#E5A93C] p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full rounded-full bg-[#0F2C59] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#E5A93C]" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h4 className="font-serif font-bold text-base text-amber-100">RajBot</h4>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-[#D4AF37]/20 text-[#E5A93C] rounded border border-[#D4AF37]/40">
                    AI Concierge
                  </span>
                </div>
                <p className="text-[11px] text-amber-200/80">Padharo Mhare Desh • Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setMessages(INITIAL_MESSAGES)}
                title="Reset Conversation"
                className="p-1.5 text-amber-200/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-amber-200/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-jaali-subtle">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-[#780016] text-amber-50 rounded-br-none shadow-md"
                      : "bg-white text-stone-800 border border-[#E8DCCB] rounded-bl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-stone-400 mt-1 px-1">{msg.timestamp}</span>

                {/* Quick suggestions on welcome */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-col space-y-1.5 mt-2.5 w-full">
                    <span className="text-[11px] font-semibold text-stone-500">Popular travel inquiries:</span>
                    {msg.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(suggestion)}
                        className="text-left text-xs px-3 py-2 bg-amber-50/80 hover:bg-amber-100/90 text-[#780016] font-medium rounded-xl border border-amber-200 transition-colors"
                      >
                        ✨ {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-stone-500 text-xs italic bg-white p-3 rounded-2xl rounded-bl-none border border-[#E8DCCB] max-w-[70%]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#780016] animate-bounce [animation-delay:0.4s]" />
                <span>RajBot is consulting royal archives...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Category Chips */}
          <div className="px-3 py-1.5 bg-stone-100 border-t border-stone-200/80 flex items-center space-x-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => handleSend("Suggest a 5-day royal Rajasthan itinerary")}
              className="px-2.5 py-1 bg-white hover:bg-amber-50 text-stone-700 rounded-md whitespace-nowrap border border-stone-200"
            >
              5-Day Itinerary
            </button>
            <button
              onClick={() => handleSend("What are the best street food spots in Jodhpur?")}
              className="px-2.5 py-1 bg-white hover:bg-amber-50 text-stone-700 rounded-md whitespace-nowrap border border-stone-200"
            >
              Jodhpur Food
            </button>
            <button
              onClick={() => handleSend("Tell me about the ghost village Kuldhara")}
              className="px-2.5 py-1 bg-white hover:bg-amber-50 text-stone-700 rounded-md whitespace-nowrap border border-stone-200"
            >
              Kuldhara Ghost Village
            </button>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-[#E8DCCB] flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask anything about Rajasthan travel & heritage..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="flex-1 text-xs sm:text-sm bg-[#FDFBF7] text-stone-900 placeholder:text-stone-400 px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim() || isTyping}
              className="p-2.5 bg-gradient-to-r from-[#0F2C59] to-[#780016] disabled:opacity-40 text-amber-200 rounded-xl hover:opacity-90 transition-opacity flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
