import React, { useRef, useState, useEffect } from 'react';
import './Portfolio.css';

import image1 from "./../../Assets/image1.png"
import image2 from "./../../Assets/image2.png"
import image3 from "./../../Assets/image3.png"
import image4 from "./../../Assets/image4.png"
import image5 from "./../../Assets/image5.png"
import image6 from "./../../Assets/image6.png"
import image7 from "./../../Assets/image7.png"
import image8 from "./../../Assets/image8.png"
import image9 from "./../../Assets/image9.png"
import image10 from "./../../Assets/image10.png"
import image11 from "./../../Assets/image11.png"
import image12 from "./../../Assets/image12.png"
import image13 from "./../../Assets/image13.png"
import image14 from "./../../Assets/image14.png"

// ── Slider data ──────────────────────────────────────────────
const ROW_ONE = [image1, image2, image3, image4, image5, image6, image7];
const ROW_TWO = [image14, image13, image12, image11, image10, image9, image8];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="portfolio">

      {/* ── Header ── */}
      <div className="portfolio-header">
        <h2 className="portfolio-title">Brands that chose to Buzz with us</h2>
        <div className="portfolio-divider" />
        <p className="portfolio-description">
          Explore our work: brands transformed, stories amplified, and results delivered
        </p>
      </div>

      {/* ── Slider grid ── */}
      <div className="portfolio-grid">

        {/* Row 1 — left to right */}
        <ul
          className={`slider ${isVisible ? 'animate' : ''}`}
          style={{ '--items': ROW_ONE.length, '--time': '22s' }}
        >
          {ROW_ONE.map((src, i) => (
            <li key={i} style={{ '--position': i + 1 }}>
              <img src={src} alt="" />
            </li>
          ))}
        </ul>

        {/* Row 2 — right to left */}
        <ul
          className={`second-slider ${isVisible ? 'animate' : ''}`}
          style={{ '--items': ROW_TWO.length, '--time': '22s' }}
        >
          {ROW_TWO.map((src, i) => (
            <li key={i} style={{ '--position': i + 1 }}>
              <img src={src} alt="" />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}