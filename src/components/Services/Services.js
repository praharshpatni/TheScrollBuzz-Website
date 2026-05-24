// import React, { useState, useEffect, useRef } from 'react';
// import { TrendingUp, Palette, Code, Share2, Layers, Video } from 'lucide-react';
// import './Services.css';

// export default function Services() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [expandedService, setExpandedService] = useState(null);

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

//   const services = [
//     {
//       Icon: Code,
//       title: 'Website Development',
//       shortDesc: 'High-performance digital experiences',
//       fullDesc: 'Custom websites, landing pages, and eCommerce platforms built with cutting-edge technology for maximum impact.',
//       features: ['Custom Websites', 'eCommerce', 'Landing Pages', 'Web Applications'],
//       color: 'pink',
//     },
//     {
//       Icon: Share2,
//       title: 'Social Media Management',
//       shortDesc: 'Content that makes waves',
//       fullDesc: 'End-to-end social media management, from strategy to content creation, community engagement to growth hacking.',
//       features: ['Content Calendar', 'Community Management', 'Influencer Outreach', 'Performance Analytics'],
//       color: 'blue',
//     },
//     {
//       Icon: Palette,
//       title: 'Graphic Designing',
//       shortDesc: 'Visual stories that captivate',
//       fullDesc: 'From logos to complete brand identities, we create stunning visuals that make your brand unforgettable.',
//       features: ['Logo Design', 'Social Media Graphics',
//         "Flyers & Brochures",
//         "Business Cards",
//         "Stationery Design",
//         "Powerpoint presentation",
//         "Print Ads / Magazine",
//         "Catalog Design & Banners",
//         "Company Profile Design",
//         "Product Packaging Design",
//         "Branding"],
//       color: 'purple',
//     },
//     {
//       Icon: TrendingUp,
//       title: 'Digital Marketing',
//       shortDesc: 'Data-driven campaigns that convert',
//       fullDesc: 'Strategic SEO, PPC ads, content marketing, and growth hacking to amplify your brand reach and drive measurable results.',
//       features: ['SEO Optimization', 'PPC Campaigns', 'Content Strategy', 'Analytics & Reporting'],
//       color: 'cyan',
//     },
//     {
//       Icon: Layers,
//       title: 'UI/UX Design',
//       shortDesc: 'Interfaces that feel magical',
//       fullDesc: 'User-centered design that combines aesthetics with functionality, creating seamless experiences users love.',
//       features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
//       color: 'teal',
//     },
//     {
//       Icon: Video,
//       title: 'Creative Video Editing',
//       shortDesc: 'Stories that move audiences',
//       fullDesc: 'Professional video editing for social media, commercials, and brand stories that engage and inspire.',
//       features: ['Social Media Videos', 'Commercials', 'Motion Graphics', 'Brand Films'],
//       color: 'indigo',
//     },
//   ];

//   return (
//     <section
//       id="services"
//       ref={sectionRef}
//       className="services"
//     >
//       <div className="services-background">
//         <svg className="services-grid" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path
//                 d="M 40 0 L 0 0 0 40"
//                 fill="none"
//                 stroke="rgba(255, 122, 0, 0.25)"
//                 strokeWidth="0.5"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div className="services-container">
//         <div className={`services-header ${isVisible ? 'visible' : ''}`}>
//           <h2 className="services-title">
//             Our Services
//           </h2>
//           <div className="services-divider"></div>
//           <p className="services-description">
//             Full-spectrum digital solutions designed to elevate your brand and dominate your market
//           </p>
//         </div>

//         <div className="services-grid-container">
//           {services.map((service, index) => {
//             const Icon = service.Icon;
//             const isExpanded = expandedService === index;

//             return (
//               <div
//                 key={service.title}
//                 className={`service-card ${isVisible ? 'visible' : ''} ${isExpanded ? 'expanded' : ''} `}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//                 onClick={() => setExpandedService(isExpanded ? null : index)}
//               >
//                 <div className="service-card-overlay"></div>

//                 <div className="service-card-content">
//                   <div className="service-icon">
//                     <Icon size={32} />
//                   </div>

//                   <h3 className="service-title">{service.title}</h3>
//                   <p className="service-short-desc">{service.shortDesc}</p>

//                   <div className={`service-expanded ${isExpanded ? 'show' : ''}`}>
//                     <p className="service-full-desc">{service.fullDesc}</p>
//                     <div className="service-features">
//                       {service.features.map((feature) => (
//                         <div key={feature} className="service-feature">
//                           <div className="service-feature-dot"></div>
//                           <span className="service-feature-text">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <button className="service-learn-more">
//                     {isExpanded ? 'Show Less' : 'Learn More →'}
//                   </button>
//                 </div>

//                 <div className="service-card-glow"></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// Services.jsx — redesigned with richer feature content and design
import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Palette, Code, Share2, Layers, Video, ArrowRight, Sparkles } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    Icon: Code,
    label: 'Development',
    title: 'Website Development',
    tagline: 'High-performance digital experiences',
    desc: 'From blazing-fast landing pages to complex eCommerce ecosystems — we architect web experiences that convert visitors into loyal customers.',
    features: [
      'Custom React / Next.js Websites',
      'eCommerce (Shopify, WooCommerce)',
      'Landing Pages & Funnels',
      'Progressive Web Apps',
      'Speed & SEO Optimization',
      'Maintenance & Support',
    ],
    highlight: false,
  },
  {
    Icon: Share2,
    label: 'Social Media',
    title: 'Social Media Management',
    tagline: 'Content that makes waves',
    desc: 'End-to-end social strategy — from content calendars and community management to influencer outreach and growth hacking that compounds.',
    features: [
      'Monthly Content Calendar',
      'Instagram & Facebook Growth',
      'Community Management',
      'Influencer Identification & Outreach',
      'Paid Social Campaigns',
      'Monthly Performance Reports',
    ],
    highlight: false,
  },
  {
    Icon: Palette,
    label: 'Design',
    title: 'Graphic Designing',
    tagline: 'Visual stories that captivate',
    desc: 'A complete visual identity system — from logo to every branded touchpoint — crafted to make your brand instantly recognizable and deeply desirable.',
    features: [
      'Logo & Brand Identity',
      'Social Media Graphics',
      'Flyers, Brochures & Catalogues',
      'Business Cards & Stationery',
      'Product Packaging Design',
      'PowerPoint & Company Profile',
      'Print Ads & Banners',
    ],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    Icon: TrendingUp,
    label: 'Marketing',
    title: 'Digital Marketing',
    tagline: 'Data-driven campaigns that convert',
    desc: 'Strategic SEO, PPC, and content marketing engineered to put you on page one, in front of buyers with intent — and keep you there.',
    features: [
      'Technical & On-Page SEO',
      'Google & Meta Ads (PPC)',
      'Content Marketing Strategy',
      'Email Marketing Automation',
      'Conversion Rate Optimization',
      'Analytics & Monthly Reporting',
    ],
    highlight: false,
  },
  {
    Icon: Layers,
    label: 'UI/UX',
    title: 'UI/UX Design',
    tagline: 'Interfaces that feel magical',
    desc: 'User-centred design that marries stunning aesthetics with intuitive flows — reducing friction and turning complex products into delightful experiences.',
    features: [
      'User Research & Personas',
      'Information Architecture',
      'Wireframing & Prototyping',
      'High-Fidelity UI Design',
      'Usability Testing',
      'Design System Creation',
    ],
    highlight: false,
  },
  {
    Icon: Video,
    label: 'Video',
    title: 'Creative Video Editing',
    tagline: 'Stories that move audiences',
    desc: 'Scroll-stopping reels, cinematic brand films, and motion-graphic-rich ads that demand attention on every feed and screen.',
    features: [
      'Instagram Reels & Short-form',
      'Brand Films & Commercials',
      'Motion Graphics & Animation',
      'YouTube Channel Editing',
      'Subtitles & Captions',
      'Colour Grading',
    ],
    highlight: false,
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="services">
      {/* Grid watermark */}
      <div className="services-watermark" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="svc-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,122,0,0.12)" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-grid)" />
        </svg>
      </div>

      <div className="services-container">
        <div className={`services-header ${isVisible ? 'visible' : ''}`}>
          <span className="services-eyebrow">What We Do</span>
          <h2 className="services-title">Full-Spectrum Digital<br />Solutions</h2>
          <div className="services-divider" />
          <p className="services-desc">
            Six core disciplines. One integrated strategy. Every service designed to compound
            with the others, creating a flywheel of growth for your brand.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, i) => {
            const Icon = svc.Icon;
            const isOpen = expanded === i;
            return (
              <div
                key={svc.title}
                className={`svc-card ${svc.highlight ? 'svc-card--featured' : ''} ${isVisible ? 'visible' : ''} ${isOpen ? 'open' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {svc.badge && (
                  <div className="svc-badge">
                    <Sparkles size={12} />
                    {svc.badge}
                  </div>
                )}

                <div className="svc-card-top">
                  <div className="svc-label">{svc.label}</div>
                  <div className="svc-icon">
                    <Icon size={26} strokeWidth={1.6} />
                  </div>
                  <h3 className="svc-title">{svc.title}</h3>
                  <p className="svc-tagline">{svc.tagline}</p>
                  <p className="svc-desc">{svc.desc}</p>
                </div>

                <div className={`svc-features ${isOpen ? 'open' : ''}`}>
                  <ul>
                    {svc.features.map((f) => (
                      <li key={f}>
                        <span className="svc-feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="svc-toggle"
                  onClick={() => setExpanded(isOpen ? null : i)}
                >
                  <span>{isOpen ? 'Show Less' : 'View All Deliverables'}</span>
                  <ArrowRight size={14} className={isOpen ? 'rotate' : ''} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`services-cta ${isVisible ? 'visible' : ''}`}>
          <p>Not sure which service fits your needs?</p>
          <button
            className="services-cta-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free Consultation
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}