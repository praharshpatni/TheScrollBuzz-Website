// import React, { useEffect, useRef } from 'react';
// import { ChevronDown } from 'lucide-react';
// import './Hero.css';

// export default function Hero() {
//   const canvasRef = useRef(null);

//   // const mouse = { x: null, y: null };

//   // useEffect(() => {

//   //   window.addEventListener("mousemove", (e) => {
//   //     mouse.x = e.clientX;
//   //     mouse.y = e.clientY;
//   //   });

//   // })

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];

//     for (let i = 0; i < 100; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 2.5,
//         speedX: (Math.random() - 0.5) * 0.5,
//         speedY: (Math.random() - 0.5) * 0.5,
//         opacity: Math.random() * 0.5 + 0.2,

//       });
//     }

//     function animate() {
//       if (!ctx || !canvas) return;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

//         ctx.fillStyle = `rgba(255, 122, 0, ${particle.opacity})`;

//         ctx.fill();

//         particle.x += particle.speedX;
//         particle.y += particle.speedY;

//         if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const scrollToAbout = () => {
//     document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="hero">
//       <canvas ref={canvasRef} className="hero-canvas" />

//       <div className="hero-background">
//         <div className="hero-glow hero-glow-left"></div>
//         <div className="hero-glow hero-glow-right"></div>
//       </div>

//       <div className="hero-content">
//         <div className="hero-title-wrapper">
//           <h1 className="hero-title">
//             The Scroll Buzz
//           </h1>
//           <div className="hero-divider"></div>
//         </div>

//         <p className="hero-subtitle">
//           We make your brand{' '}
//           <span className="hero-subtitle-accent">scroll-worthy</span>
//         </p>

//         <div className="hero-services">
//           {['Digital Marketing', 'Web Development', 'Graphic Design', 'Branding', 'UI/UX'].map((service, index) => (
//             <span
//               key={service}
//               className="hero-service-tag"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {service}
//             </span>
//           ))}
//         </div>

//         <button
//           onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//           className="hero-cta"
//         >
//           <span className="hero-cta-text">Get Started</span>
//         </button>
//       </div>

//       <button
//         onClick={scrollToAbout}
//         className="hero-scroll"
//       >
//         <ChevronDown size={40} />
//       </button>
//     </section>
//   );
// }

// Hero.jsx — redesigned with richer content and stronger design
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './Hero.css';

const STATS = [
  { value: '150+', label: 'Brands Elevated' },
  { value: '3.2M', label: 'Reach Generated' },
  { value: '98%', label: 'Client Retention' },
  { value: '5★', label: 'Average Rating' },
];

const TAGS = [
  { label: 'Digital Marketing', icon: '📈' },
  { label: 'Web Development', icon: '💻' },
  { label: 'Graphic Design', icon: '🎨' },
  { label: 'Social Media', icon: '📱' },
  { label: 'UI/UX Design', icon: '✦' },
  { label: 'Video Editing', icon: '🎬' },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.35 + 0.08,
    }));

    let raf;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,122,0,${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      raf = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Ambient glows */}
      <div className="hero-glow hero-glow-tl" />
      <div className="hero-glow hero-glow-br" />

      {/* Decorative grid lines */}
      <div className="hero-grid-lines" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="grid-line" style={{ left: `${(i + 1) * 20}%` }} />
        ))}
      </div>

      <div className="hero-content">
        {/* Eyebrow badge */}
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          <span>Vadodara's Premier Digital Agency</span>
        </div>

        {/* Main title */}
        <div className="hero-title-block">
          <h1 className="hero-headline">
            <span className="headline-line">We Make</span>
            <span className="headline-line headline-accent">Brands Buzz.</span>
          </h1>
          <p className="hero-subline">
            Scroll-stopping content. Revenue-driving campaigns.<br />
            Digital presence that your competitors will envy.
          </p>
        </div>

        {/* Service tags */}
        <div className="hero-tags">
          {TAGS.map((tag, i) => (
            <span
              key={tag.label}
              className="hero-tag"
              style={{ animationDelay: `${4.8 + i * 0.1}s` }}
            >
              <span className="tag-icon">{tag.icon}</span>
              {tag.label}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="hero-actions">
          <button
            className="cta-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Start Your Growth</span>
            <ArrowRight size={18} />
          </button>
          <button
            className="cta-ghost"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Work
          </button>
        </div>

        {/* Stats row */}
        <div className="hero-stats">
          {STATS.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
              {i < STATS.length - 1 && <div className="stat-sep" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <button
        className="hero-scroll-cue"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}