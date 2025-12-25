import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';
import {
  // FaTwitter,
  FaInstagram,
  // FaLinkedinIn,
  // FaBehance,
  FaFacebookF
} from "react-icons/fa";

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/thescrollbuzz.in/" },
    // { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
    // { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    // { name: "Behance", icon: <FaBehance />, url: "https://behance.net" },
    { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61583928221752" },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitMessage('Thank you! We\'ll get back to you soon.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { Icon: Mail, label: 'Email', value: 'info@thescrollbuzz.in' },
    // { Icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { Icon: MapPin, label: 'Location', value: 'Vadodara, Gujarat, INDIA.' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact"
    >
      <div className="contact-background">
        <div className="contact-glow contact-glow-left"></div>
        <div className="contact-glow contact-glow-right"></div>
      </div>

      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="contact-title">
            Get In Touch
          </h2>
          <div className="contact-divider"></div>
          <p className="contact-description">
            Ready to make your brand scroll-worthy? Let's create something extraordinary together.
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <div>
              <h3 className="contact-info-title">Let's Talk</h3>
              <p className="contact-info-text">
                Whether you're a startup looking to make waves or an established brand ready for a refresh,
                we're here to turn your vision into reality.
              </p>
            </div>

            <div className="contact-info-items">
              {contactInfo.map((info, index) => {
                const Icon = info.Icon;
                return (
                  <div
                    key={info.label}
                    className="contact-info-item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="contact-info-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="contact-info-label">{info.label}</p>
                      <p className="contact-info-value">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-social">
              <p className="contact-social-text">Follow us:</p>
              <div className="contact-social-buttons">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-button"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`contact-form-wrapper ${isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <div className="contact-form-overlay"></div>

              <input type="hidden" name="access_key" value="d4d064b1-8cdd-458d-9cb1-45eb661a6b2d" />

              <input type="hidden" name="subject" value="New Contact Form Submission - TheScrollBuzz" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />  {/* Anti-spam honeypot */}

              <div className="contact-form-content">

                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone" className="contact-form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-form-input"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="service" className="contact-form-label">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="contact-form-select"
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="web-development">Website Development</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="video-editing">Video Editing</option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="contact-form-textarea"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitMessage && (
                  <div className="contact-form-message">{submitMessage}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-form-button"
                >
                  <span className="contact-form-button-content">
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <Send size={18} />}
                  </span>
                  <div className="contact-form-button-overlay"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
