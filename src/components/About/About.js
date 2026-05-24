// import React, { useEffect, useRef, useState } from 'react';
// import { Target, Lightbulb, Users, Zap } from 'lucide-react';
// import './About.css';

// export default function About() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const values = [
//     {
//       Icon: Target,
//       title: 'Mission',
//       description: 'Transform brands into scroll-stopping digital experiences that captivate and convert.',
//       color: 'cyan',
//     },
//     {
//       Icon: Lightbulb,
//       title: 'Vision',
//       description: 'Lead the digital revolution by crafting innovative, bold, and memorable brand stories.',
//       color: 'purple',
//     },
//     {
//       Icon: Users,
//       title: 'Team',
//       description: 'Youth-driven creatives obsessed with perfection, innovation, and pushing boundaries.',
//       color: 'pink',
//     },
//     {
//       Icon: Zap,
//       title: 'Energy',
//       description: 'Fast-paced, tech-forward approach that keeps brands ahead in the digital race.',
//       color: 'blue',
//     },
//   ];

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="about"
//     >
//       <div className="about-background">
//         <div className="about-glow about-glow-left"></div>
//         <div className="about-glow about-glow-right"></div>
//       </div>

//       <div className="about-container">
//         <div className={`about-header ${isVisible ? 'visible' : ''}`}>
//           <h2 className="about-title">
//             About Us
//           </h2>
//           <div className="about-divider"></div>
//           <p className="about-description">
//             We're a digital-first creative powerhouse that turns brands into cultural moments.
//             Modern, bold, and obsessively focused on making your brand unforgettable.
//           </p>
//         </div>

//         <div className="about-grid">
//           {values.map((value, index) => {
//             const Icon = value.Icon;
//             return (
//               <div
//                 key={value.title}
//                 className={`about-card ${isVisible ? 'visible' : ''}`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 <div className={`about-card-overlay about-card-overlay-${value.color}`}></div>

//                 <div className="about-card-content">
//                   <div className={`about-icon about-icon-${value.color}`}>
//                     <Icon size={32} />
//                   </div>

//                   <h3 className="about-card-title">{value.title}</h3>
//                   <p className="about-card-description">{value.description}</p>
//                 </div>

//                 <div className={`about-card-glow about-card-glow-${value.color}`}></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// About.jsx — redesigned with richer content and process section
import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Users, Zap, CheckCircle, TrendingUp, Award, Clock } from 'lucide-react';
import './About.css';

const VALUES = [
  {
    Icon: Target,
    title: 'Mission-Driven',
    description:
      'Every campaign, pixel, and post is anchored to one goal: your measurable growth. We don\'t chase vanity metrics — we engineer outcomes.',
  },
  {
    Icon: Lightbulb,
    title: 'Ideas First',
    description:
      'Strategy before execution. We research your audience, study your competitors, and map a path that makes your brand undeniably relevant.',
  },
  {
    Icon: Users,
    title: 'Your Team',
    description:
      'We embed ourselves in your brand\'s DNA. You get dedicated strategists, designers, and creators who think like co-founders, not contractors.',
  },
  {
    Icon: Zap,
    title: 'Agile & Fast',
    description:
      'Digital moves fast. So do we. Rapid iterations, weekly performance reviews, and real-time pivots keep you perpetually ahead of the curve.',
  },
];

const PROCESS = [
  { num: '01', title: 'Discover', desc: 'Deep-dive audit of your brand, audience, and competitive landscape.' },
  { num: '02', title: 'Strategize', desc: 'Data-backed roadmap built around your specific business objectives.' },
  { num: '03', title: 'Create', desc: 'World-class content, design, and campaigns crafted for maximum impact.' },
  { num: '04', title: 'Launch', desc: 'Precision deployment across channels with real-time monitoring.' },
  { num: '05', title: 'Optimize', desc: 'Relentless iteration guided by analytics to compound your results.' },
];

const ACHIEVEMENTS = [
  { Icon: Award, text: 'Top Digital Agency, Gujarat 2024' },
  { Icon: TrendingUp, text: '4.2x Average ROAS for Clients' },
  { Icon: Clock, text: '48hr Turnaround on Creative Briefs' },
  { Icon: CheckCircle, text: 'ISO-Certified Quality Process' },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="about">
      {/* Background texture */}
      <div className="about-bg-pattern" aria-hidden="true" />

      <div className="about-container">

        {/* Header */}
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <span className="about-eyebrow">Who We Are</span>
          <h2 className="about-title">Built for Brands That<br />Refuse to Blend In</h2>
          <div className="about-divider" />
          <p className="about-description">
            The Scroll Buzz is a full-service digital agency headquartered in Vadodara, Gujarat.
            We combine strategic thinking with creative excellence to turn your brand into a
            market force — one that earns attention, builds loyalty, and drives revenue.
          </p>
        </div>

        {/* Values grid */}
        <div className="about-values-grid">
          {VALUES.map((v, i) => {
            const Icon = v.Icon;
            return (
              <div
                key={v.title}
                className={`about-value-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="value-icon-wrap">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.description}</p>
              </div>
            );
          })}
        </div>

        {/* Process timeline */}
        <div className={`about-process ${isVisible ? 'visible' : ''}`}>
          <h3 className="process-heading">How We Work</h3>
          <div className="process-steps">
            {PROCESS.map((step, i) => (
              <div key={step.num} className="process-step" style={{ transitionDelay: `${i * 100 + 300}ms` }}>
                <div className="process-step-num">{step.num}</div>
                <div className="process-connector" aria-hidden="true" />
                <div className="process-step-body">
                  <h4 className="process-step-title">{step.title}</h4>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements strip */}
        <div className={`about-achievements ${isVisible ? 'visible' : ''}`}>
          {ACHIEVEMENTS.map((a) => {
            const Icon = a.Icon;
            return (
              <div key={a.text} className="achievement-item">
                <Icon size={18} strokeWidth={1.8} className="achievement-icon" />
                <span>{a.text}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}