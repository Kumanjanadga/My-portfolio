import React, { useState } from 'react';
import { Phone, Mail, MapPin, Github, Linkedin, Send, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // EmailJS configuration - Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_sxc0xpr';
  const EMAILJS_TEMPLATE_ID = 'template_557bish';
  const EMAILJS_PUBLIC_KEY = '3WZbaEBjRQKaT56-P';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS send request
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'akilakumanjanag@gmail.com'
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <div className="border-2 border-black inline-block px-8 py-3 mb-8">
            <h1 className="text-2xl font-bold tracking-wider">CONTACT ME</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's connect and bring your ideas to life. 
            I'm always excited to work on challenging and innovative projects.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto py-16 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Get In Touch</h2>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone Numbers</h3>
                  <p className="text-gray-600">+94 76 295 6154</p>
                  <p className="text-gray-600">+94 78 881 0100</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">akilakumanjanag@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-600">Galgoda Road, Mahahengoda,</p>
                  <p className="text-gray-600">Baddegama, Galle, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Kumanjanadga" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a href="https://linkedin.com/in/akila-kumanjana" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="mailto:akilakumanjanag@gmail.com" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Send Me a Message</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800">Failed to send message. Please try again or email me directly.</p>
              </div>
            )}
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}