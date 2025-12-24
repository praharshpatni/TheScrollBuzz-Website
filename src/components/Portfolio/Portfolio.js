import React, { useRef, useState, useEffect } from 'react';
import './Portfolio.css';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import ScrollTrigger from "gsap/ScrollTrigger";

// import { FaRegRegistered } from "react-icons/fa6";

import image1 from "./../../Assets/image1.jpg"
import image2 from "./../../Assets/image2.png"
import image3 from "./../../Assets/image3.png"
import image15 from "./../../Assets/image15.png"
import image5 from "./../../Assets/image5.png"
import image6 from "./../../Assets/image6.png"
import image7 from "./../../Assets/image7.jpg"
import image8 from "./../../Assets/image8.png"
import image9 from "./../../Assets/image9.jpg"
import image10 from "./../../Assets/image10.jpg"
import image11 from "./../../Assets/image11.png"
import image12 from "./../../Assets/image12.jpg"
import image13 from "./../../Assets/image13.jpg"
import image14 from "./../../Assets/image14.jpg"
// import image15 from "./../../Assets/image15.png"
// import image16 from "./../../Assets/image16.jpg"
// import image17 from "./../../Assets/image17.png"
// import image18 from "./../../Assets/image18.jpg"
// import image19 from "./../../Assets/image19.png"
// import image20 from "./../../Assets/image20.png"
// import image21 from "./../../Assets/image21.jpg"
// import image22 from "./../../Assets/image22.png"


export default function Portfolio() {
  // const [hoveredIndex, setHoveredIndex] = useState(null);

  // gsap.registerPlugin(ScrollTrigger);
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

    console.log("section ref correct", sectionRef.current)

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="portfolio"
    >
      <div className="portfolio-background">
        <div className="portfolio-glow portfolio-glow-right"></div>
        <div className="portfolio-glow portfolio-glow-left"></div>
      </div>


      <div className={`portfolio-header ${isVisible ? 'visible' : ''}`}>
        <h2 className="portfolio-title">
          Portfolio
        </h2>
        <div className="portfolio-divider"></div>
        <p className="portfolio-description">
          Explore our work: brands transformed, stories amplified, and results delivered
        </p>
      </div>
      <div className="portfolio-grid">
        <ul className="slider" style={{ '--items': 7, '--time': '20s', }}>
          <li style={{ '--position': 1 }}>
            <img src={image1} alt="" />
          </li>
          <li style={{ '--position': 2 }}>
            <img src={image2} alt="" />
          </li>
          <li style={{ '--position': 3 }}>
            <img src={image3} alt="" />
          </li>
          <li style={{ '--position': 4 }}>
            <img src={image15} alt="" />
          </li>
          <li style={{ '--position': 5 }}>
            <img src={image5} alt="" />
          </li>
          <li style={{ '--position': 6 }}>
            <img src={image6} alt="" />
          </li>
          <li style={{ '--position': 7 }}>
            <img src={image7} alt="" />
          </li>

        </ul>

        {/* second slider */}
        <ul className="second-slider" style={{ '--items': 7, '--time': '20s', }}>
          <li style={{ '--position': 1 }}>
            <img src={image8} alt="" />
          </li>
          <li style={{ '--position': 2 }}>
            <img src={image9} alt="" />
          </li>
          <li style={{ '--position': 3 }}>
            <img src={image10} alt="" />
          </li>
          <li style={{ '--position': 4 }}>
            <img src={image11} alt="" />
          </li>
          <li style={{ '--position': 5 }}>
            <img src={image12} alt="" />
          </li>
          <li style={{ '--position': 6 }}>
            <img src={image13} alt="" />
          </li>
          <li style={{ '--position': 7 }}>
            <img src={image14} alt="" />
          </li>

        </ul>
      </div>
    </section>

  );
}