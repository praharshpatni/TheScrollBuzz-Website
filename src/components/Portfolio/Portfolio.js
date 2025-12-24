import React, { useRef, useState, useEffect } from 'react';
import './Portfolio.css';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import ScrollTrigger from "gsap/ScrollTrigger";

// import { FaRegRegistered } from "react-icons/fa6";

import image1 from "./../../Assets/image1.jpg"
import image2 from "./../../Assets/image2.png"
import image3 from "./../../Assets/image3.png"
import image4 from "./../../Assets/image4.jpg"
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
  // const portfolioImages = [
  //   { src: image1, r: 2, c: 2 },
  //   { src: image2, r: 1, c: 5 },
  //   { src: image3, r: 4, c: 2 },
  //   { src: image4, r: 3, c: 1 },

  //   { src: image5, r: 6, c: 6 },
  //   { src: image6, r: 5, c: 5 },
  //   { src: image7, r: 7, c: 3 },
  //   { src: image8, r: 8, c: 1 },

  //   { src: image9, r: 9, c: 4 },
  //   { src: image10, r: 10, c: 6 },
  //   { src: image11, r: 11, c: 2 },
  //   { src: image12, r: 4, c: 6 },

  //   { src: image13, r: 12, c: 4 },
  //   { src: image14, r: 1, c: 3 },
  //   { src: image15, r: 8, c: 6 },
  //   { src: image16, r: 6, c: 2 },

  //   { src: image17, r: 5, c: 3 },
  //   { src: image18, r: 7, c: 5 },
  //   { src: image19, r: 11, c: 4 },
  //   { src: image20, r: 2, c: 6 },

  //   { src: image21, r: 12, c: 1 },
  //   { src: image22, r: 10, c: 3 },
  // ];



  // useGSAP(() => {
  //   document.querySelectorAll(".image_container").forEach((elem) => {
  //     let image = elem.querySelector("img");
  //     let t1 = gsap.timeline();

  //     let xTransform = gsap.utils.random(-50, 50);

  //     t1.set(
  //       image,
  //       {
  //         transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
  //       },
  //       "start"
  //     )
  //       .to(
  //         image,
  //         {
  //           scale: 0,
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: image,
  //             start: "top top",
  //             end: "bottom top",
  //             scrub: true,
  //           },
  //         },
  //         "start"
  //       )
  //       .to(elem, {
  //         xPercent: xTransform,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: image,
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: true,
  //         },
  //       });
  //   });
  // });


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry of portfolio", entry)
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

  // const projects = [
  //   {
  //     title: 'TechStartup Rebrand',
  //     category: 'Branding & Identity',
  //     description: 'Complete brand transformation for a SaaS startup',
  //     color: 'from-cyan-500 to-blue-600',
  //   },
  //   {
  //     title: 'E-Commerce Platform',
  //     category: 'Web Development',
  //     description: 'High-converting online store with 300% revenue increase',
  //     color: 'from-purple-500 to-pink-600',
  //   },
  //   {
  //     title: 'Social Campaign',
  //     category: 'Digital Marketing',
  //     description: 'Viral social media campaign reaching 5M+ impressions',
  //     color: 'from-teal-500 to-cyan-600',
  //   },
  //   {
  //     title: 'Mobile App UI',
  //     category: 'UI/UX Design',
  //     description: 'Award-winning fintech app interface design',
  //     color: 'from-pink-500 to-purple-600',
  //   },
  //   {
  //     title: 'Brand Video Series',
  //     category: 'Video Production',
  //     description: 'Cinematic brand storytelling for luxury fashion',
  //     color: 'from-blue-500 to-purple-600',
  //   },
  //   {
  //     title: 'Corporate Website',
  //     category: 'Web Development',
  //     description: 'Enterprise-level website with advanced animations',
  //     color: 'from-cyan-500 to-teal-600',
  //   },
  // ];

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

      {/* <div className="portfolio-container">
        <div className="columns_container">
          {portfolioImages.map((item, index) => (
            <div
              key={index}
              className="image_container"
              style={{ "--r": item.r, "--c": item.c }}
            >
              <img src={item.src} alt={`portfolio-${index}`} />
            </div>
          ))}

          <div className="center_fixed_container">
            <h1>PORTFOLIO</h1>
            <p>
              Explore our work: brands transformed, stories amplified, and results delivered{" "}
              <sup>
                <FaRegRegistered />
              </sup>
            </p>
          </div>
        </div>

      </div> */}
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
            <img src={image4} alt="" />
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

        {/* <div className="slider">

        </div> */}
      </div>

      {/* <div className="portfolio-cta">
        <button className="portfolio-button">
          <span className="portfolio-button-text">View All Projects</span>
          <div className="portfolio-button-overlay"></div>
        </button>
      </div> */}
      {/* {projects.map((project, index) => (
          <div
            key={project.title}
            className={`portfolio-card ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`portfolio-card-bg ${project.color}`}></div>

            <div className="portfolio-image">
              <div className={`portfolio-image-gradient ${project.color} ${hoveredIndex === index ? 'hovered' : ''}`}></div>

              <div className="portfolio-image-overlay">
                <div className={`portfolio-icon-wrapper ${hoveredIndex === index ? 'visible' : ''}`}>
                </div>
              </div>
            </div>

            <div className="portfolio-content">
              <div className="portfolio-category">
                <span>{project.category}</span>
              </div>
              <h3 className="portfolio-project-title">{project.title}</h3>
              <p className="portfolio-project-description">{project.description}</p>

              <div className={`portfolio-link ${hoveredIndex === index ? 'visible' : ''}`}>
                <span>View Project</span>
              </div>
            </div>

            <div className="portfolio-card-glow"></div>
          </div>
        ))} */}
    </section>

  );
}
