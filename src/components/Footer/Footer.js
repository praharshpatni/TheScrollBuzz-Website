import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';
import TheScrollBuzzLogo from "./../../Assets/TSB_Final_Logo_PNG.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-glow"></div>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo" onClick={() =>
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
            }>
              <img src={TheScrollBuzzLogo} alt="" />
              {/* <div className="footer-logo-icon">
                <span>S</span>
              </div>
              <span className="footer-logo-text">
                The Scroll <span className="footer-logo-accent">Buzz</span>
              </span> */}
            </div>
            <p className="footer-brand-description">
              Making your brand scroll-worthy through innovative digital solutions,
              creative design, and strategic marketing.
            </p>
            <p className="footer-brand-tagline">
              Modern. Bold. Scroll-Obsessed.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="footer-link"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-services">
            <h4 className="footer-services-title">Services</h4>
            <ul className="footer-services-list">
              {['Digital Marketing', 'Web Development', 'Graphic Design', 'UI/UX Design'].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="footer-service-link"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            <span>© {currentYear} The Scroll Buzz. Made with</span>
            <Heart className="footer-heart" size={16} fill="currentColor" />
            <span>and passion</span>
          </p>

          <div className="footer-legal">
            <button className="footer-legal-link">
              Privacy Policy
            </button>
            <button className="footer-legal-link">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
