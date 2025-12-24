import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  // const mouse = { x: null, y: null };

  // useEffect(() => {

  //   window.addEventListener("mousemove", (e) => {
  //     mouse.x = e.clientX;
  //     mouse.y = e.clientY;
  //   });

  // })

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,

      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-background">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>
      </div>

      <div className="hero-content">
        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            The Scroll Buzz
          </h1>
          <div className="hero-divider"></div>
        </div>

        <p className="hero-subtitle">
          We make your brand{' '}
          <span className="hero-subtitle-accent">scroll-worthy</span>
        </p>

        <div className="hero-services">
          {['Digital Marketing', 'Web Development', 'Graphic Design', 'Branding', 'UI/UX'].map((service, index) => (
            <span
              key={service}
              className="hero-service-tag"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service}
            </span>
          ))}
        </div>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="hero-cta"
        >
          <span className="hero-cta-text">Get Started</span>
          {/* <div className="hero-cta-overlay"></div> */}
        </button>
      </div>

      <button
        onClick={scrollToAbout}
        className="hero-scroll"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
