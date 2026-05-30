// // import React, { useEffect } from 'react';
// // import './Navbar.css';
// // import TheScrollBuzz from "./../../Assets/TheScrollBuzz.svg"

// // export default function Navbar({ sections }) {
// //   // const [activeSection, setActiveSection] = useState('hero');
// //   // const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     // let lastScrollY = window.scrollY;

// //     const handleScroll = () => {
// //       // const currentScrollY = window.scrollY;
// //       // console.log("last scroll", lastScrollY)
// //       // console.log("current scroll", currentScrollY)

// //       // // Scroll DOWN → hide navbar
// //       // if (currentScrollY > lastScrollY && currentScrollY > 60) {
// //       //   setIsScrolled(true); // hidden
// //       // }
// //       // // Scroll UP → show navbar
// //       // else {
// //       //   setIsScrolled(false); // visible
// //       // }

// //       // lastScrollY = currentScrollY;

// //       // const scrollPosition = currentScrollY + window.innerHeight / 2;

// //       // sections.forEach((sec) => {
// //       //   const element = sec.ref.current;
// //       //   if (!element) return;

// //       //   const { offsetTop, offsetHeight } = element;
// //       //   // if (
// //       //   //   scrollPosition >= offsetTop &&
// //       //   //   scrollPosition < offsetTop + offsetHeight
// //       //   // ) {
// //       //   //   setActiveSection(sec.id);
// //       //   // }
// //       // });
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [sections]);

// //   const scrollToSection = (id) => {
// //     const element = sections.find((sec) => sec.id === id)?.ref.current;
// //     console.log("element", element)
// //     if (element) {
// //       element.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <nav className={`navbar`}>
// //       <div className="navbar-container">
// //         <div className="navbar-content">
// //           <div className="navbar-logo" onClick={() => scrollToSection('home')}>
// //             <div className="logo-icon">
// //               <img src={TheScrollBuzz} alt="" />
// //             </div>
// //             {/* <span className="logo-text">
// //             </span> */}
// //           </div>
// //           <button
// //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// //             className="hero-cta"
// //           >
// //             <span className="hero-cta-text">Get Started</span>
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // Navbar.jsx — redesigned with nav links added back
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import TheScrollBuzz from './../../Assets/TheScrollBuzz.svg';

// const NAV_LINKS = [
//   { id: 'about', label: 'About', path: '/about' },
//   { id: 'services', label: 'Services', path: '/services' },
//   { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
//   { id: 'contact', label: 'Contact' },
// ];

// export default function Navbar({ sections }) {
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
//       <div className="navbar-container">
//         <div className="navbar-content">
//           {/* Logo */}
//           <div className="navbar-logo" onClick={() => scrollToSection('home')}>
//             <div className="logo-icon">
//               <img src={TheScrollBuzz} alt="The Scroll Buzz" />
//             </div>
//           </div>

//           {/* Nav links — desktop */}
//           <ul className="navbar-links">
//             {NAV_LINKS.map((link) => (
//               <li key={link.id}>
//                 <button
//                   className="navbar-link"
//                   onClick={() => {
//                     if (link.path) {
//                       navigate(link.path);
//                     } else {
//                       scrollToSection(link.id);
//                     }
//                   }}
//                 >
//                   {link.label}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* CTA */}
//           <button className="navbar-cta" onClick={() => scrollToSection('contact')}>
//             Get Started
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import TheScrollBuzz from './../../Assets/TheScrollBuzz.png';

const NAV_LINKS = [
  { id: 'about', label: 'About', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export default function Navbar({ sections }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const handleLink = (link) => {
    if (link.path) {
      navigate(link.path);
    } else {
      // If not on home, go home first then scroll
      if (!isHome) {
        navigate('/');
        setTimeout(() => {
          document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogo = () => {
    if (isHome) {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleCTA = () => {
    if (!isHome) {
      navigate('/contact');
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-content">

          {/* Logo */}
          <div className="navbar-logo" onClick={handleLogo} role="button" aria-label="Go to homepage" tabIndex={0} onKeyDown={e => e.key === 'Enter' && handleLogo()}>
            <div className="logo-icon">
              <img src={TheScrollBuzz} alt="The Scroll Buzz" />
            </div>
          </div>

          {/* Desktop nav links */}
          <ul className="navbar-links">
            {NAV_LINKS.map((link) => {
              const isActive = link.path && location.pathname === link.path;
              return (
                <li key={link.id}>
                  <button
                    className={`navbar-link ${isActive ? 'navbar-link--active' : ''}`}
                    onClick={() => handleLink(link)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <button className="navbar-cta" onClick={handleCTA} aria-label="Get started with The Scroll Buzz">
            Get Started
          </button>

          {/* Hamburger — mobile only */}
          <button
            className={`navbar-hamburger ${menuOpen ? 'navbar-hamburger--open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="navbar-mobile-menu"
        className={`navbar-drawer ${menuOpen ? 'navbar-drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => {
          const isActive = link.path && location.pathname === link.path;
          return (
            <button
              key={link.id}
              className={`navbar-drawer__link ${isActive ? 'navbar-drawer__link--active' : ''}`}
              onClick={() => handleLink(link)}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </button>
          );
        })}
        <button className="navbar-drawer__cta" onClick={handleCTA}>
          Get Started
        </button>
      </div>
    </nav>
  );
}