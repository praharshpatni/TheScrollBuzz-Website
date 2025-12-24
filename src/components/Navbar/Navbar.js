import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ sections }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // console.log("last scroll", lastScrollY)
      // console.log("current scroll", currentScrollY)

      // Scroll DOWN → hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsScrolled(true); // hidden
      }
      // Scroll UP → show navbar
      else {
        setIsScrolled(false); // visible
      }

      lastScrollY = currentScrollY;

      const scrollPosition = currentScrollY + window.innerHeight / 2;

      sections.forEach((sec) => {
        const element = sec.ref.current;
        if (!element) return;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(sec.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);



  const scrollToSection = (id) => {
    const element = sections.find((sec) => sec.id === id)?.ref.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-hidden' : 'navbar-visible'}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
            <div className="logo-icon">
              <span>S</span>
            </div>
            <span className="logo-text">
              The Scroll <span className="logo-accent">Buzz</span>
              <span className="nav-section-name">
                / {activeSection.toUpperCase()}
              </span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
