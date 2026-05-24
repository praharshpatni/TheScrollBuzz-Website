// import React from 'react';
// import { Heart } from 'lucide-react';
// import './Footer.css';
// import TheScrollBuzzLogo from "./../../Assets/TheScrollBuzz.svg"

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">

//       <div className="footer-container">
//         <div className="footer-grid">
//           <div className="footer-brand">
//             <div className="footer-logo" onClick={() =>
//               document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
//             }>
//               <img src={TheScrollBuzzLogo} alt="" />
//             </div>
//             <p className="footer-brand-description">
//               Making your brand scroll-worthy through innovative digital solutions,
//               creative design, and strategic marketing.
//             </p>
//             <p className="footer-brand-tagline">
//               Modern. Bold. Scroll-Obsessed.
//             </p>
//           </div>

//           <div className="footer-links">
//             <h4 className="footer-links-title">Quick Links</h4>
//             <ul className="footer-links-list">
//               {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
//                 <li key={link}>
//                   <button
//                     onClick={() => {
//                       document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
//                     }}
//                     className="footer-link"
//                   >
//                     {link}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="footer-services">
//             <h4 className="footer-services-title">Services</h4>
//             <ul className="footer-services-list">
//               {['Digital Marketing', 'Web Development', 'Graphic Design', 'UI/UX Design'].map((service) => (
//                 <li key={service}>
//                   <button
//                     onClick={() => {
//                       document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
//                     }}
//                     className="footer-service-link"
//                   >
//                     {service}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p className="footer-copyright">
//             <span>© {currentYear} The Scroll Buzz. Made with</span>
//             <Heart className="footer-heart" size={16} fill="currentColor" />
//             <span>and passion</span>
//           </p>

//           <div className="footer-legal">
//             <button className="footer-legal-link">
//               Privacy Policy
//             </button>
//             <button className="footer-legal-link">
//               Terms of Service
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Footer.jsx — redesigned with richer content
import React from 'react';
import { Heart, Mail, MapPin, Phone, Instagram, Facebook, ArrowRight } from 'lucide-react';
import './Footer.css';
import TheScrollBuzzLogo from './../../Assets/TheScrollBuzz.svg';

const SERVICES_LIST = [
  'Website Development',
  'Social Media Management',
  'Graphic Designing',
  'Digital Marketing',
  'UI/UX Design',
  'Video Editing',
];

const CONTACT_ITEMS = [
  { Icon: Mail, text: 'info@thescrollbuzz.in', href: 'mailto:info@thescrollbuzz.in' },
  { Icon: Phone, text: '+91 93288 39591', href: 'tel:+919328839591' },
  { Icon: MapPin, text: 'SF-35, New VIP Rd, Vadodara, Gujarat 390019' },
];

const SOCIALS = [
  {
    label: 'Instagram',
    Icon: Instagram,
    url: 'https://www.instagram.com/thescrollbuzz.in/',
  },
  {
    label: 'Facebook',
    Icon: Facebook,
    url: 'https://www.facebook.com/profile.php?id=61583928221752',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        {/* Top CTA band */}
        <div className="footer-cta-band">
          <div className="footer-cta-text">
            <h3>Ready to make your brand scroll-worthy?</h3>
            <p>Let's build something extraordinary together.</p>
          </div>
          <button
            className="footer-cta-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Main grid */}
        <div className="footer-grid">
          {/* Brand col */}
          <div className="footer-brand">
            <div
              className="footer-logo"
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <img src={TheScrollBuzzLogo} alt="The Scroll Buzz" />
            </div>
            <p className="footer-brand-desc">
              A full-service digital agency in Vadodara transforming brands into
              scroll-stopping, revenue-generating digital forces.
            </p>
            <p className="footer-tagline">Modern. Bold. Scroll-Obsessed.™</p>

            <div className="footer-socials">
              {SOCIALS.map((s) => {
                const Icon = s.Icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={s.label}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-col-list">
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <button
                    className="footer-link"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="footer-link-dot" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigate</h4>
            <ul className="footer-col-list">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    className="footer-link"
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="footer-link-dot" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              {CONTACT_ITEMS.map((item, i) => {
                const Icon = item.Icon;
                return (
                  <li key={i} className="footer-contact-item">
                    <Icon size={14} strokeWidth={1.8} className="footer-contact-icon" />
                    {item.href ? (
                      <a href={item.href} className="footer-contact-link">{item.text}</a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} The Scroll Buzz. All rights reserved. Made with
            <Heart size={13} fill="#FF7A00" stroke="none" className="footer-heart" />
            in Vadodara.
          </p>
          <div className="footer-legal">
            <button className="footer-legal-link">Privacy Policy</button>
            <button className="footer-legal-link">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}