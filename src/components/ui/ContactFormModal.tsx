import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'website',
    budget: 'medium',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const result = await emailjs.send(
        'service_pmn7chl',
        'template_1xjiuyh',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        },
        'NbWDI2v8K_njAE7JS'
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: 'website',
            budget: 'medium',
            message: '',
          });
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden h-[95vh] sm:h-[65vh]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white hover:text-white/80 z-10"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="bg-[#08183e] text-white p-3">
              <h2 className="text-xl font-libre font-bold">Request Your Free Quote</h2>
              <p className="mt-1 text-sm text-white/80">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {/* Form */}
            <div className="p-3 sm:p-4 h-[calc(95vh-90px)] sm:h-[calc(65vh-90px)]">
              {submitSuccess ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Thank You!</h3>
                  <p className="text-sm text-gray-600">Your request has been submitted successfully. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4 h-full sm:h-auto flex flex-col">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08183e] focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08183e] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08183e] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08183e] focus:border-transparent"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08183e] focus:border-transparent"
                      >
                        <option value="website">Website Development</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="webapp">Web Application</option>
                        <option value="mobile">Mobile App</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08183e] focus:border-transparent"
                      >
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex-grow sm:flex-grow-0">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08183e] focus:border-transparent h-[calc(100%-2rem)] sm:h-32"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="text-red-500 text-xs sm:text-sm">{submitError}</div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#08183e] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-sm font-semibold hover:bg-[#023157] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal; 