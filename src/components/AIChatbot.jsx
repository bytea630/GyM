import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, Zap, ShieldAlert, Dumbbell } from 'lucide-react';

const initialMessages = [
  {
    sender: 'bot',
    text: '⚡ Welcome to ABS GYM AI Intelligence! I am your futuristic fitness assistant. How can I power up your workout today?'
  }
];

const quickQueries = [
  'What are the gym timings?',
  'What are the membership prices?',
  'Who are the main coaches?',
  'Where is ABS GYM located?',
  'How to book a free trial?'
];

const AIChatbot = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getBotResponse = (userMsg) => {
    const query = userMsg.toLowerCase();

    if (query.includes('timing') || query.includes('time') || query.includes('open') || query.includes('hours')) {
      return '⏰ ABS GYM Batch Timings:\n\n• Morning Batch: 05:00 AM – 09:00 AM\n• Evening Batch: 05:00 PM – 10:00 PM\n\nOpen 6 days a week with special Sunday sessions!';
    }
    if (query.includes('price') || query.includes('membership') || query.includes('cost') || query.includes('fee') || query.includes('plan')) {
      return '💪 ABS GYM Membership Plans:\n\n1️⃣ Starter Pass (1 Month): ₹1,000\n2️⃣ Power Pack (3 Months - BEST VALUE): ₹2,000 (Save ₹1000!)\n\nZero online payment needed — pay at gym front desk!';
    }
    if (query.includes('coach') || query.includes('trainer') || query.includes('gaurav') || query.includes('aniket') || query.includes('mohsin')) {
      return '🏆 ABS GYM Master Trainers:\n\n• Gaurav Ghodake - Head Strength & Powerlifting Coach\n• Aniket - Hypertrophy & Bodybuilding Master\n• Mohsin Shaikh - HIIT & Functional Conditioning Expert';
    }
    if (query.includes('location') || query.includes('address') || query.includes('where') || query.includes('map')) {
      return '📍 ABS GYM Location:\n\nCoordinates: 18.113563257178427, 75.02604413538481\nContact Phone: +91 9175519757\nInstagram: @abs_gym7591\n\nTap the map section on our site for direct Google Maps navigation!';
    }
    if (query.includes('trial') || query.includes('book') || query.includes('join')) {
      return '🔥 Want to claim your FREE trial pass? Tap the "Book Free Trial" button to reserve your slot immediately!';
    }
    if (query.includes('workout') || query.includes('program') || query.includes('fat loss') || query.includes('muscle')) {
      return '⚡ ABS GYM Programs available:\n\n1. Heavy Strength Training\n2. Fat Loss HIIT\n3. Lean Muscle Hypertrophy\n4. 1-on-1 Personal Coaching\n5. Cardio & Group Conditioning';
    }

    return '🤖 I am trained specifically on ABS GYM operations! You can ask me about membership plans (₹1000/1mo or ₹2000/3mo), morning/evening timings, trainers, or click "Book Free Trial" to join!';
  };

  const handleSend = (textToSend) => {
    const queryText = textToSend || input;
    if (!queryText.trim()) return;

    // Add User Message
    const userMessage = { sender: 'user', text: queryText };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI thinking response
    setTimeout(() => {
      const botAnswer = getBotResponse(queryText);
      setMessages((prev) => [...prev, { sender: 'bot', text: botAnswer }]);
    }, 400);
  };

  return (
    <>
      {/* Floating Cyberbot Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-br from-[#FF5500] to-[#FF8800] text-white shadow-neon-orange hover:shadow-neon-orange-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
        aria-label="Open AI Assistant"
      >
        <div className="relative">
          <Bot className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#090A0E] animate-ping" />
        </div>
        <span className="hidden sm:inline-block font-bold text-xs uppercase tracking-wider font-subheading pr-1">
          ABS AI Assistant
        </span>
      </button>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 glass-panel rounded-3xl border border-[#FF5500]/60 shadow-2xl overflow-hidden flex flex-col h-[520px] animate-float-slow">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#10121A] to-[#181C28] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/20 border border-[#FF5500] flex items-center justify-center text-[#FF5500]">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase font-heading">
                  ABS GYM CYBERBOT
                </h3>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center space-x-1 font-subheading">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI OS Active</span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-medium shadow-neon-orange-sm rounded-br-none'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Query Chips */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickQueries.map((chip, cIdx) => (
              <button
                key={cIdx}
                onClick={() => handleSend(chip)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-900 hover:bg-[#FF5500]/20 text-[10px] font-semibold text-slate-300 hover:text-[#FF5500] border border-slate-800 transition-colors shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-[#08090C] border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask ABS AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500]"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-[#FF5500] text-white hover:bg-[#FF7700] transition-colors shadow-neon-orange-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default AIChatbot;
