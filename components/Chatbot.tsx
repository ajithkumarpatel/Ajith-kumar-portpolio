import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BotIcon, CloseIcon, SendIcon } from './IconComponents.tsx';
import { runChat } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hi! I'm AK-Bot. Ask me anything about Ajith's portfolio." },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await runChat(input);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiResponse };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { sender: 'ai', text: 'Sorry, something went wrong.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-accent text-primary rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Toggle Chatbot"
        >
          {isOpen ? <CloseIcon className="w-8 h-8" /> : <BotIcon className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-8 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-slate-700"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <header className="bg-slate-900 p-4 text-center font-bold flex-shrink-0">
              <h3 className="text-lg text-text-light">AI Assistant</h3>
            </header>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      layout
                    >
                      <div className={`max-w-[80%] rounded-xl px-4 py-2 ${msg.sender === 'user' ? 'bg-accent text-primary' : 'bg-slate-700 text-text-dark'}`}>
                        <p className="text-sm break-words">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-xl px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-text-dark rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 bg-text-dark rounded-full animate-pulse [animation-delay:0.1s]"></span>
                        <span className="w-2 h-2 bg-text-dark rounded-full animate-pulse [animation-delay:0.2s]"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <footer className="p-4 bg-slate-900/50 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Ajith..."
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-full px-4 py-2 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-accent"
                  disabled={isLoading}
                />
                <button onClick={handleSend} disabled={isLoading} className="bg-accent text-primary rounded-full p-3 disabled:bg-slate-600">
                  <SendIcon className="w-5 h-5" />
                </button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;