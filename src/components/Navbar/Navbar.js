import React, { useEffect } from 'react';
import './Navbar.css';
import TheScrollBuzz from "./../../Assets/TheScrollBuzz.svg"

export default function Navbar({ sections }) {
  // const [activeSection, setActiveSection] = useState('hero');
  // const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // const currentScrollY = window.scrollY;
      // console.log("last scroll", lastScrollY)
      // console.log("current scroll", currentScrollY)

      // // Scroll DOWN → hide navbar
      // if (currentScrollY > lastScrollY && currentScrollY > 60) {
      //   setIsScrolled(true); // hidden
      // }
      // // Scroll UP → show navbar
      // else {
      //   setIsScrolled(false); // visible
      // }

      // lastScrollY = currentScrollY;

      // const scrollPosition = currentScrollY + window.innerHeight / 2;

      // sections.forEach((sec) => {
      //   const element = sec.ref.current;
      //   if (!element) return;

      //   const { offsetTop, offsetHeight } = element;
      //   // if (
      //   //   scrollPosition >= offsetTop &&
      //   //   scrollPosition < offsetTop + offsetHeight
      //   // ) {
      //   //   setActiveSection(sec.id);
      //   // }
      // });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = sections.find((sec) => sec.id === id)?.ref.current;
    console.log("element", element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            <div className="logo-icon">
              <img src={TheScrollBuzz} alt="" />
            </div>
            {/* <span className="logo-text">
            </span> */}
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-cta"
          >
            <span className="hero-cta-text">Get Started</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
