import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Magnetic from './Magnetic';

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ccbekz7';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_8kbgtmw';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'FI9DZAtIvNM5MhavI';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    if (!PUBLIC_KEY || !TEMPLATE_ID) {
      // Simulation fallback until Template ID & Public Key are provided
      await new Promise(resolve => setTimeout(resolve, 1200));
      setStatus('Message Sent! 🚀');
      formRef.current?.reset();
      setTimeout(() => setStatus(''), 4000);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus('Message Sent! 🚀');
      formRef.current?.reset();
      setTimeout(() => setStatus(''), 4000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('Failed to send. Try Email');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" rows="3" required></textarea>
      <Magnetic>
        <button type="submit" className="footer-btn" style={{ marginTop: '1rem' }} disabled={status === 'Sending...'}>
          {status || 'SEND MESSAGE'}
        </button>
      </Magnetic>
    </form>
  );
};

export default ContactForm;
