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