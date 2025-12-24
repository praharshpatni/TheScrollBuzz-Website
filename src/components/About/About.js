import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Users, Zap } from 'lucide-react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const values = [
    {
      Icon: Target,
      title: 'Mission',
      description: 'Transform brands into scroll-stopping digital experiences that captivate and convert.',
      color: 'cyan',
    },
    {
      Icon: Lightbulb,
      title: 'Vision',
      description: 'Lead the digital revolution by crafting innovative, bold, and memorable brand stories.',
      color: 'purple',
    },
    {
      Icon: Users,
      title: 'Team',
      description: 'Youth-driven creatives obsessed with perfection, innovation, and pushing boundaries.',
      color: 'pink',
    },
    {
      Icon: Zap,
      title: 'Energy',
      description: 'Fast-paced, tech-forward approach that keeps brands ahead in the digital race.',
      color: 'blue',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about"
    >
      <div className="about-background">
        <div className="about-glow about-glow-left"></div>
        <div className="about-glow about-glow-right"></div>
      </div>

      <div className="about-container">
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="about-title">
            About Us
          </h2>
          <div className="about-divider"></div>
          <p className="about-description">
            We're a digital-first creative powerhouse that turns brands into cultural moments.
            Modern, bold, and obsessively focused on making your brand unforgettable.
          </p>
        </div>

        <div className="about-grid">
          {values.map((value, index) => {
            const Icon = value.Icon;
            return (
              <div
                key={value.title}
                className={`about-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`about-card-overlay about-card-overlay-${value.color}`}></div>

                <div className="about-card-content">
                  <div className={`about-icon about-icon-${value.color}`}>
                    <Icon size={32} />
                  </div>

                  <h3 className="about-card-title">{value.title}</h3>
                  <p className="about-card-description">{value.description}</p>
                </div>

                <div className={`about-card-glow about-card-glow-${value.color}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
