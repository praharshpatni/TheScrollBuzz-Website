import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Palette, Code, Share2, Layers, Video } from 'lucide-react';
import './Services.css';

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

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

  const services = [
    {
      Icon: Code,
      title: 'Website Development',
      shortDesc: 'High-performance digital experiences',
      fullDesc: 'Custom websites, landing pages, and eCommerce platforms built with cutting-edge technology for maximum impact.',
      features: ['Custom Websites', 'eCommerce', 'Landing Pages', 'Web Applications'],
      color: 'pink',
    },
    {
      Icon: Share2,
      title: 'Social Media Management',
      shortDesc: 'Content that makes waves',
      fullDesc: 'End-to-end social media management, from strategy to content creation, community engagement to growth hacking.',
      features: ['Content Calendar', 'Community Management', 'Influencer Outreach', 'Performance Analytics'],
      color: 'blue',
    },
    {
      Icon: Palette,
      title: 'Graphic Designing',
      shortDesc: 'Visual stories that captivate',
      fullDesc: 'From logos to complete brand identities, we create stunning visuals that make your brand unforgettable.',
      features: ['Logo Design', 'Social Media Graphics',
        "Flyers & Brochures",
        "Business Cards",
        "Stationery Design",
        "Powerpoint presentation",
        "Print Ads / Magazine",
        "Catalog Design & Banners",
        "Company Profile Design",
        "Product Packaging Design",
        "Branding"],
      color: 'purple',
    },
    {
      Icon: TrendingUp,
      title: 'Digital Marketing',
      shortDesc: 'Data-driven campaigns that convert',
      fullDesc: 'Strategic SEO, PPC ads, content marketing, and growth hacking to amplify your brand reach and drive measurable results.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Content Strategy', 'Analytics & Reporting'],
      color: 'cyan',
    },
    {
      Icon: Layers,
      title: 'UI/UX Design',
      shortDesc: 'Interfaces that feel magical',
      fullDesc: 'User-centered design that combines aesthetics with functionality, creating seamless experiences users love.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      color: 'teal',
    },
    {
      Icon: Video,
      title: 'Creative Video Editing',
      shortDesc: 'Stories that move audiences',
      fullDesc: 'Professional video editing for social media, commercials, and brand stories that engage and inspire.',
      features: ['Social Media Videos', 'Commercials', 'Motion Graphics', 'Brand Films'],
      color: 'indigo',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services"
    >
      <div className="services-background">
        <svg className="services-grid" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="services-container">
        <div className={`services-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="services-title">
            Our Services
          </h2>
          <div className="services-divider"></div>
          <p className="services-description">
            Full-spectrum digital solutions designed to elevate your brand and dominate your market
          </p>
        </div>

        <div className="services-grid-container">
          {services.map((service, index) => {
            const Icon = service.Icon;
            const isExpanded = expandedService === index;

            return (
              <div
                key={service.title}
                className={`service-card ${isVisible ? 'visible' : ''} ${isExpanded ? 'expanded' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setExpandedService(isExpanded ? null : index)}
              >
                <div className="service-card-overlay"></div>

                <div className="service-card-content">
                  <div className="service-icon">
                    <Icon size={32} />
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short-desc">{service.shortDesc}</p>

                  <div className={`service-expanded ${isExpanded ? 'show' : ''}`}>
                    <p className="service-full-desc">{service.fullDesc}</p>
                    <div className="service-features">
                      {service.features.map((feature) => (
                        <div key={feature} className="service-feature">
                          <div className="service-feature-dot"></div>
                          <span className="service-feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="service-learn-more">
                    {isExpanded ? 'Show Less' : 'Learn More →'}
                  </button>
                </div>

                <div className="service-card-glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
