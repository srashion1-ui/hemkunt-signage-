import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    city: '',
    country: '',
    interestedIn: '',
    message: ''
  });
  
  const [isDrafting, setIsDrafting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSmartDraft = async () => {
    if (!formData.subject && !formData.message) return;
    setIsDrafting(true);
    
    try {
      if (!process.env.API_KEY) {
         setFormData(prev => ({
           ...prev,
           message: `[AI DRAFT]\nDear Hemkunt Team,\n\nI am interested in ${prev.interestedIn || 'your services'}. \n\nRegarding: ${prev.subject}\n\nCould you please provide more information?`
         }));
         setIsDrafting(false);
         return;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Rewrite this short message into a professional business inquiry email for a signage company named Hemkunt Signage.
      User Intent: ${formData.subject}
      Draft details: ${formData.message}
      Interest: ${formData.interestedIn}
      `;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      });
      
      setFormData(prev => ({
        ...prev,
        message: response.text || prev.message
      }));

    } catch(e) {
      console.error(e);
    } finally {
      setIsDrafting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Page Header */}
      <div className="bg-gray-100 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block relative">
             <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0">
               Get In Touch
             </h1>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10 uppercase">
               Contact <span className="text-brand">Us</span>
             </h2>
          </div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Ready to elevate your brand visibility? Reach out to us for a consultation or quote.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Contact Info Side */}
          <div className="col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand flex gap-4">
              <div className="text-brand mt-1"><MapPin /></div>
              <div>
                <h3 className="font-bold text-lg mb-2">Corporate Office:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
            </div>
            
             <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand flex gap-4">
              <div className="text-brand mt-1"><Mail /></div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email Us:</h3>
                <p className="text-gray-600 text-sm mb-1">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand flex gap-4">
              <div className="text-brand mt-1"><Phone /></div>
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us:</h3>
                 {CONTACT_INFO.phones.map(p => (
                   <p key={p} className="text-gray-600 text-sm font-bold">{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hemkunt Signage Pvt. Ltd.</h3>
            
            <form className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input 
                   name="name"
                   placeholder="Your Name" 
                   className="bg-gray-50 border border-gray-300 p-3 rounded focus:border-brand focus:outline-none transition-colors"
                   onChange={handleChange}
                 />
                 <input 
                   name="email"
                   placeholder="Your Email" 
                   type="email"
                   className="bg-gray-50 border border-gray-300 p-3 rounded focus:border-brand focus:outline-none transition-colors"
                   onChange={handleChange}
                 />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input 
                   name="subject"
                   placeholder="Subject" 
                   className="bg-gray-50 border border-gray-300 p-3 rounded focus:border-brand focus:outline-none transition-colors"
                   onChange={handleChange}
                 />
                 <input 
                   name="phone"
                   placeholder="Phone Number" 
                   className="bg-gray-50 border border-gray-300 p-3 rounded focus:border-brand focus:outline-none transition-colors"
                   onChange={handleChange}
                 />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input 
                   name="city"
                   placeholder="City" 
                   className="bg-gray-50 border border-gray-300 p-3 rounded focus:border-brand focus:outline-none transition-colors"
                   onChange={handleChange}
                 />
                 <input 
                   name="country"
                   placeholder="Country" 
                   className="bg-gray-50 border border-gray-300 p-3 rounded focus:border-brand focus:outline-none transition-colors"
                   onChange={handleChange}
                 />
              </div>

              <select 
                 name="interestedIn"
                 className="bg-gray-50 border border-gray-300 p-3 rounded focus:border-brand focus:outline-none transition-colors text-gray-500"
                 onChange={handleChange}
              >
                <option value="">I am interested in...</option>
                <option value="led-signs">LED Signage</option>
                <option value="pylons">Pylons & Totems</option>
                <option value="acp">ACP Facades</option>
                <option value="maintenance">Repair & Maintenance</option>
                <option value="branding">Complete Rebranding</option>
              </select>

              <div className="relative">
                <textarea 
                  name="message"
                  placeholder="Tell us about your project requirements..." 
                  rows={5}
                  value={formData.message}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:border-brand focus:outline-none transition-colors"
                  onChange={handleChange}
                ></textarea>
                <button 
                  type="button"
                  onClick={handleSmartDraft}
                  className="absolute bottom-4 right-4 text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center gap-1 hover:bg-purple-200 transition-colors"
                  disabled={isDrafting}
                >
                  <Sparkles size={12} /> {isDrafting ? 'Drafting...' : 'AI Enhance'}
                </button>
              </div>

              <button className="bg-brand text-white font-bold py-3 px-8 w-full md:w-auto self-start rounded shadow hover:bg-yellow-600 transition-colors uppercase">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;