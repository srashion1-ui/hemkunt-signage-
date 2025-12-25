
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, SERVICES, COMPANY_NAME } from '../constants.tsx';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: `Welcome to ${COMPANY_NAME}! I'm your AI signage consultant. How can I assist with your branding project today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are a world-class AI assistant for ${COMPANY_NAME}, a leading signage company.
        Services: ${SERVICES.map(s => s.title).join(', ')}.
        Products: ${PRODUCTS.map(p => p.title).join(', ')}.
        Guidelines: Professional, helpful, concise (max 60 words). 
        Always encourage users to contact the team for specialized quotes.
        Mention that we handle projects Pan-India.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        config: { systemInstruction }
      });

      const text = response.text || "I'm sorry, I couldn't process that right now. Please try again or call our support team.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting. Feel free to use the contact form for urgent inquiries!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] md:w-[400px] bg-black border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-10 fade-in duration-500">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand to-brand-red p-5 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <Sparkles className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Hemkunt AI</h3>
                <p className="text-[10px] text-white/70">Online & ready to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-6 overflow-y-auto bg-[#050505] flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand text-black self-end rounded-tr-none font-medium' 
                    : 'bg-zinc-900 text-white self-start rounded-tl-none border border-white/5 shadow-md'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start bg-zinc-900 text-white p-4 rounded-2xl rounded-tl-none text-sm border border-white/5">
                 <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#0a0a0a] border-t border-white/10 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about LED letters, pylons..."
              className="flex-1 bg-zinc-900 text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-brand/50 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-brand text-black p-3 rounded-xl hover:scale-105 transition-all disabled:opacity-50 shadow-lg shadow-brand/20"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand hover:bg-brand-red text-black p-5 rounded-full shadow-[0_10px_30px_rgba(245,158,11,0.3)] transition-all transform hover:scale-110 flex items-center justify-center neon-border"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default AIAssistant;
