// import React, { useState, useEffect, useRef } from 'react';
// import { Mail, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
// import './Contact.css';
// import {
//   FaInstagram,
//   FaFacebookF
// } from "react-icons/fa";

// export default function Contact() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

//   const socialLinks = [
//     { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/thescrollbuzz.in/" },
//     { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61583928221752" },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     // Create FormData object
//     const formDataObj = new FormData();

//     // Add all form fields
//     formDataObj.append('name', formData.name);
//     formDataObj.append('email', formData.email);
//     formDataObj.append('phone', formData.phone || 'Not provided');
//     formDataObj.append('service', formData.service);
//     formDataObj.append('message', formData.message);

//     // Web3Forms required fields
//     formDataObj.append('access_key', 'd4d064b1-8cdd-458d-9cb1-45eb661a6b2d');
//     formDataObj.append('subject', 'New Contact Form Submission - TheScrollBuzz');
//     formDataObj.append('from_name', 'TheScrollBuzz Website Contact Form');

//     // Honeypot - should be empty
//     formDataObj.append('botcheck', '');

//     try {
//       console.log('Sending form data to Web3Forms...');

//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formDataObj,
//         headers: {
//           'Accept': 'application/json',
//         },
//       });

//       const result = await response.json();
//       console.log('Web3Forms Response:', result);

//       if (response.ok && result.success) {
//         setSubmitStatus({
//           type: 'success',
//           message: '✅ Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours!'
//         });

//         // Reset form
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           service: '',
//           message: '',
//         });
//       } else {
//         // Show detailed error from Web3Forms
//         const errorMsg = result.message || 'Failed to send message. Please try again.';
//         console.error('Web3Forms Error:', result);
//         throw new Error(errorMsg);
//       }
//     } catch (error) {
//       console.error('Form submission error:', error);

//       // More specific error messages
//       let errorMessage = 'Oops! Something went wrong. ';

//       if (error.message.includes('Failed to fetch')) {
//         errorMessage += 'Please check your internet connection and try again.';
//       } else if (error.message.includes('rate limit')) {
//         errorMessage += 'Too many submissions. Please try again in a few minutes.';
//       } else {
//         errorMessage += 'Please try again or email us directly at info@thescrollbuzz.in';
//       }

//       setSubmitStatus({
//         type: 'error',
//         message: errorMessage
//       });
//     } finally {
//       setIsSubmitting(false);

//       // Clear success messages after 8 seconds, error messages after 10 seconds
//       const clearTime = submitStatus.type === 'success' ? 8000 : 10000;
//       setTimeout(() => {
//         setSubmitStatus({ type: '', message: '' });
//       }, clearTime);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     { Icon: Mail, label: 'Email', value: 'info@thescrollbuzz.in', href: 'mailto:info@thescrollbuzz.in' },
//     { Icon: MapPin, label: 'Location', value: 'SF-35, Shree Siddheshwar plaza,New VIP Rd, nr. Sakar Complex, Sheshnarayan Society,Vadodara, Gujarat, 390019' },
//     { Icon: MessageSquare, label: 'Contact Us', value: '+91-9328839591' },
//   ];

//   return (
//     <section
//       id="contact"
//       ref={sectionRef}
//       className="contact"
//     >
//       {/* <div className="contact-background">
//         <div className="contact-glow contact-glow-left"></div>
//         <div className="contact-glow contact-glow-right"></div>
//       </div> */}

//       <div className="contact-container">
//         <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
//           <h2 className="contact-title">
//             Get In Touch
//           </h2>
//           <div className="contact-divider"></div>
//           <p className="contact-description">
//             Ready to make your brand scroll-worthy? Let's create something extraordinary together.
//           </p>
//         </div>

//         <div className="contact-content">
//           <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
//             <div>
//               <h3 className="contact-info-title">Let's Talk</h3>
//               <p className="contact-info-text">
//                 Whether you're a startup looking to make waves or an established brand ready for a refresh,
//                 we're here to turn your vision into reality.
//               </p>
//             </div>

//             <div className="contact-info-items">
//               {contactInfo.map((info, index) => {
//                 const Icon = info.Icon;
//                 const content = info.href ? (
//                   <a href={info.href} className="contact-info-link">
//                     <p className="contact-info-value">{info.value}</p>
//                   </a>
//                 ) : (
//                   <p className="contact-info-value">{info.value}</p>
//                 );

//                 return (
//                   <div
//                     key={info.label}
//                     className="contact-info-item"
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <div className="contact-info-icon">
//                       <Icon size={20} />
//                     </div>
//                     <div>
//                       <p className="contact-info-label">{info.label}</p>
//                       {content}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="contact-social">
//               <p className="contact-social-text">Follow us:</p>
//               <div className="contact-social-buttons">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="contact-social-button"
//                     aria-label={social.name}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className={`contact-form-wrapper ${isVisible ? 'visible' : ''}`}>
//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="contact-form-overlay"></div>

//               <div className="contact-form-content">
//                 <div className="contact-form-group">
//                   <label htmlFor="name" className="contact-form-label">Full Name *</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="contact-form-input"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div className="contact-form-group">
//                   <label htmlFor="email" className="contact-form-label">Email Address *</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="contact-form-input"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div className="contact-form-group">
//                   <label htmlFor="phone" className="contact-form-label">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="contact-form-input"
//                     placeholder="+91 XXXXX XXXXX"
//                   />
//                 </div>

//                 <div className="contact-form-group">
//                   <label htmlFor="service" className="contact-form-label">Service Interested In *</label>
//                   <select
//                     id="service"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                     className="contact-form-select"
//                   >
//                     <option value="">Select a service</option>
//                     <option value="Digital Marketing">Digital Marketing</option>
//                     <option value="Graphic Design">Graphic Design</option>
//                     <option value="Website Development">Website Development</option>
//                     <option value="Social Media Management">Social Media Management</option>
//                     <option value="UI/UX Design">UI/UX Design</option>
//                     <option value="Video Editing">Video Editing</option>
//                     <option value="Brand Strategy">Brand Strategy</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>

//                 <div className="contact-form-group">
//                   <label htmlFor="message" className="contact-form-label">Message *</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     className="contact-form-textarea"
//                     placeholder="Tell us about your project..."
//                   />
//                 </div>

//                 {submitStatus.message && (
//                   <div className={`contact-form-status ${submitStatus.type}`}>
//                     {submitStatus.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
//                     <span>{submitStatus.message}</span>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="contact-form-button"
//                 >
//                   <span className="contact-form-button-content">
//                     <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
//                     {!isSubmitting && <Send size={18} />}
//                   </span>
//                   <div className="contact-form-button-overlay"></div>
//                 </button>

//                 <div className="contact-form-note">
//                   <small>By submitting this form, you agree to our privacy policy and consent to being contacted by TheScrollBuzz.</small>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Contact.jsx — redesigned
import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Contact.css';

const CONTACT_ITEMS = [
  { Icon: Mail, label: 'Email', value: 'info@thescrollbuzz.in', href: 'mailto:info@thescrollbuzz.in' },
  { Icon: Phone, label: 'Call Us', value: '+91 93288 39591', href: 'tel:+919328839591' },
  {
    Icon: MapPin,
    label: 'Office',
    value: 'SF-35, Shree Siddheshwar Plaza, New VIP Rd, Vadodara, Gujarat 390019',
  },
];

const SOCIALS = [
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/thescrollbuzz.in/' },
  { name: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/profile.php?id=61583928221752' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([k, v]) => formDataObj.append(k, v || 'Not provided'));
    formDataObj.append('access_key', 'd4d064b1-8cdd-458d-9cb1-45eb661a6b2d');
    formDataObj.append('subject', 'New Contact Form Submission - TheScrollBuzz');
    formDataObj.append('from_name', 'TheScrollBuzz Website Contact Form');
    formDataObj.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj,
        headers: { Accept: 'application/json' },
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: "Thank you! We've received your message and will reply within 24 hours." });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please email us directly at info@thescrollbuzz.in' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 10000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <span className="contact-eyebrow">Get In Touch</span>
          <h2 className="contact-title">Let's Build Something <span>Extraordinary</span></h2>
          <div className="contact-divider" />
          <p className="contact-description">
            Ready to make your brand scroll-worthy? Tell us about your project and
            we'll craft a strategy that gets you results.
          </p>
        </div>

        <div className="contact-content">
          {/* Info panel */}
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <div>
              <h3 className="contact-info-headline">Let's Talk</h3>
              <p className="contact-info-subtext">
                Whether you're a startup building from scratch or an established brand
                ready for a bold refresh — we're here to turn your vision into reality.
                Every project starts with a conversation.
              </p>
            </div>

            <div className="contact-info-items">
              {CONTACT_ITEMS.map((item, i) => {
                const Icon = item.Icon;
                return (
                  <div key={item.label} className="contact-info-item">
                    <div className="contact-info-icon">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="contact-info-label">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="contact-info-link">
                          <p className="contact-info-value">{item.value}</p>
                        </a>
                      ) : (
                        <p className="contact-info-value">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-social">
              <p className="contact-social-label">Follow Us</p>
              <div className="contact-social-row">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`contact-form-wrapper ${isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-grid">
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="contact-form-input" placeholder="John Doe" />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="contact-form-input" placeholder="john@example.com" />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="phone" className="contact-form-label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="contact-form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="service" className="contact-form-label">Service Interested In *</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required className="contact-form-select">
                    <option value="">Select a service</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Brand Strategy">Brand Strategy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="contact-form-group full">
                  <label htmlFor="message" className="contact-form-label">Your Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="contact-form-textarea" placeholder="Tell us about your brand and what you want to achieve..." />
                </div>
              </div>

              {submitStatus.message && (
                <div className={`contact-form-status ${submitStatus.type}`}>
                  {submitStatus.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="contact-form-btn">
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send size={16} />}
              </button>

              <p className="contact-form-note">
                By submitting this form, you agree to our privacy policy and consent to being
                contacted by The Scroll Buzz regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}