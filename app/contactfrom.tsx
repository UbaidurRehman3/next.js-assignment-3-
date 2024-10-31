// app/components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    messageType: 'General Inquiry',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for contacting me, I will get back to you soon!');
  };

  return (
    <section id="contact" className="py-10 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
          {/* Name Field */}
          <input
            className="w-full p-2 mb-4 border border-gray-300"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          {/* Email Field */}
          <input
            className="w-full p-2 mb-4 border border-gray-300"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          {/* Phone Number Field */}
          <input
            className="w-full p-2 mb-4 border border-gray-300"
            type="tel"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />

          {/* Subject Field */}
          <input
            className="w-full p-2 mb-4 border border-gray-300"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />

          {/* Message Type (Dropdown) */}
          <select
            className="w-full p-2 mb-4 border border-gray-300"
            value={formData.messageType}
            onChange={(e) => setFormData({ ...formData, messageType: e.target.value })}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Feedback">Feedback</option>
          </select>

          {/* Message Field */}
          <textarea
            className="w-full p-2 mb-4 border border-gray-300"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />

          {/* Submit Button */}
          <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-8">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/public/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/public/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/public/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>

        {/* Optional Google Map Integration */}
        {/* Uncomment if needed */}
        {/* 
        <div className="mt-10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=your-location-map-embed-url" 
            width="100%" 
            height="300" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"></iframe>
        </div> 
        */}
      </div>
    </section>
  );
};

export default ContactForm;
