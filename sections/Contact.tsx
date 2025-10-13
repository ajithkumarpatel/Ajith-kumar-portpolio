import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// FIX: Switched to Firebase v9 compat imports to resolve module errors.
import firebase from 'firebase/compat/app';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { GithubIcon, LinkedinIcon, SendIcon, InstagramIcon, FacebookIcon, CheckCircleIcon, AlertTriangleIcon } from '../components/IconComponents.tsx';
import { db } from '../services/firebase.ts';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('sending');
    setResponseMessage('');

    try {
      // FIX: Used Firebase v9 compat syntax for adding a document.
      await db.collection("contacts").add({
        ...formData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() // Adds a server-side timestamp
      });

      setSubmissionStatus('success');
      setResponseMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Reset form

    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmissionStatus('error');
      setResponseMessage('An error occurred. Please try again later.');
    }
  };


  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="text-center max-w-xl mx-auto">
        <p className="mb-8 text-text-dark">
          I'm currently open to new opportunities and collaborations. Feel free to send me a message!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
          <button
            type="submit"
            disabled={submissionStatus === 'sending'}
            className="group inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold px-8 py-3 rounded-md hover:bg-opacity-80 transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
            {submissionStatus !== 'sending' && <SendIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
        
        <AnimatePresence>
          {responseMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`mt-6 flex items-center justify-center gap-3 text-sm font-medium p-3 rounded-md ${
                submissionStatus === 'success' 
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}
            >
              {submissionStatus === 'success' ? <CheckCircleIcon className="w-5 h-5" /> : <AlertTriangleIcon className="w-5 h-5" />}
              <span>{responseMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12">
          <p className="mb-4 text-text-dark">Or connect with me on social media:</p>
          <div className="flex justify-center space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors">
              <GithubIcon className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/ajith-kumar-rayeeshetti-8196352a5" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors">
              <LinkedinIcon className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/ajith_patel__03" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors">
              <InstagramIcon className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/share/1B7ieoMtKa/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors">
              <FacebookIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;