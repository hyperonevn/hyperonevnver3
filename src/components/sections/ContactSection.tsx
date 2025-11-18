import React, { useState, lazy } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MapPinIcon, MailIcon, PhoneIcon, SendIcon } from 'lucide-react';
export const ContactSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  return <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,224,255,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">{t('contact.description')}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {t('contact.getInTouch')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00E0FF]/10 p-2 rounded-lg text-[#00E0FF]">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      {t('contact.location.title')}
                    </h4>
                    <p className="text-gray-300">
                      {t('contact.location.address')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00E0FF]/10 p-2 rounded-lg text-[#00E0FF]">
                    <MailIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      {t('contact.email.title')}
                    </h4>
                    <p className="text-gray-300">info@hyperonevn.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00E0FF]/10 p-2 rounded-lg text-[#00E0FF]">
                    <PhoneIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      {t('contact.phone.title')}
                    </h4>
                    <p className="text-gray-300">+84 352 69 89 68</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674198073!2d106.69904807489367!3d10.777057089372479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5d0d8f4!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1695529868267!5m2!1sen!2s" width="100%" height="200" className="rounded-lg border-0" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hyper One Location"></iframe>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {t('contact.sendMessage')}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00E0FF]" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00E0FF]" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00E0FF]" required>
                      <option value="">
                        {t('contact.form.selectSubject')}
                      </option>
                      <option value="general">
                        {t('contact.form.subjects.general')}
                      </option>
                      <option value="service">
                        {t('contact.form.subjects.service')}
                      </option>
                      <option value="partnership">
                        {t('contact.form.subjects.partnership')}
                      </option>
                      <option value="career">
                        {t('contact.form.subjects.career')}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00E0FF]" required></textarea>
                  </div>
                  <div>
                    <button type="submit" className={`w-full flex items-center justify-center px-6 py-3 ${isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#00E0FF] hover:bg-[#00E0FF]/90'} text-black rounded-lg transition-colors`} disabled={isSubmitting}>
                      {isSubmitting ? <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('contact.form.sending')}
                        </span> : <span className="flex items-center">
                          <SendIcon className="h-4 w-4 mr-2" />
                          {t('contact.form.send')}
                        </span>}
                    </button>
                  </div>
                  {submitSuccess && <div className="bg-green-900/30 border border-green-700 text-green-300 px-4 py-3 rounded-lg">
                      {t('contact.form.success')}
                    </div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
