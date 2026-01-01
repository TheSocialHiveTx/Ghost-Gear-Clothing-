
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/gemini';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Yo! Welcome to the Ghost Archive. I am the Curator. You lookin for grails, tryna sell some heat, or just checkin the vibe?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    let fullResponse = '';
    const stream = geminiService.sendMessageStream(userMessage);
    
    // Add an initial placeholder for the model response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].text = fullResponse;
          return updated;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-yellow-400 text-slate-900 rounded-2xl shadow-[8px_8px_0px_0px_#8b5cf6] flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-ghost text-2xl"></i>}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-[60] w-[350px] md:w-[420px] h-[550px] bg-slate-900 border-4 border-slate-800 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
          <div className="bg-slate-800 p-6 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center border-2 border-yellow-400">
                 <i className="fa-solid fa-ghost text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-black text-white uppercase italic tracking-tighter leading-none">Ghost Curator</h3>
                <p className="text-[9px] text-green-400 font-black uppercase tracking-widest mt-2 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Authenticating...</span>
                </p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium ${
                  msg.role === 'user' 
                    ? 'bg-yellow-400 text-slate-900 rounded-tr-none shadow-md' 
                    : 'bg-slate-800 text-slate-200 border-2 border-slate-700 rounded-tl-none shadow-xl'
                }`}>
                  {msg.text || (msg.role === 'model' && isTyping ? <i className="fa-solid fa-ellipsis animate-pulse"></i> : '')}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-900 border-t-2 border-slate-800">
            <div className="flex space-x-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about the archive..."
                className="flex-1 bg-slate-800 border-2 border-slate-700 text-white text-xs px-5 py-3 rounded-xl focus:outline-none focus:border-yellow-400 transition-colors placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center hover:bg-purple-500 disabled:opacity-50 transition-all active:scale-90 shadow-lg"
              >
                <i className="fa-solid fa-bolt"></i>
              </button>
            </div>
            <p className="text-[8px] text-slate-600 mt-4 text-center font-black uppercase tracking-[0.4em]">Encrypted Ghost Comms</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
