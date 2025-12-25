import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, SERVICES, COMPANY_NAME } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: `Hello! I'm the ${COMPANY_NAME} AI Assistant. How can I help you with our signage solutions today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
         // Fallback if no API key is set in environment (mock response)
         setTimeout(() => {
           setMessages(prev => [...prev, { role: 'model', text: "I'm currently running in demo mode. Please configure the Gemini API Key to enable real responses." }]);
           setIsLoading(false);
         }, 1000);
         return;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemContext = `
        You are an AI assistant for ${COMPANY_NAME}, a signage and branding company.
        We offer services: ${SERVICES.map(s => s.title).join(', ')}.
        We sell products: ${PRODUCTS.map(p => p.title).join(', ')}.
        Our goal is to be helpful, professional, and encourage users to contact us for quotes.
        Keep answers concise (under 50 words usually).
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: systemContext + "\n\nUser Question: " + userMessage }] }
        ]
      });

      const text = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting to the server right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[400px] animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand to-yellow-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="text-white h-5 w-5" />
              <h3 className="font-bold text-white">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-black flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`max-w-[85%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-gray-800 text-white self-end rounded-br-none' 
                    : 'bg-gray-100 text-black self-start rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start bg-gray-100 text-black p-3 rounded-lg rounded-bl-none text-sm">
                 <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-gray-800 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about our signage..."
              className="flex-1 bg-black text-white text-sm px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-brand"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-brand text-black p-2 rounded hover:bg-white transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand hover:bg-white text-black p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default AIAssistant;