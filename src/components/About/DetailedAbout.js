// About.jsx — /about route page
// Design: Editorial magazine — dark cinematic hero → warm cream body
// SEO: h1, h2, h3, article, section, address, time tags throughout
// Performance: CSS-only animations, SVG illustrations, no heavy assets

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Target, Lightbulb, Users, Zap,
    CheckCircle, TrendingUp, Award, Clock,
    MapPin, Mail, Phone, Star, ChevronDown
} from 'lucide-react';
import './DetailedAbout.css';

/* ─── Intersection Observer hook ─────────────────────────── */
function useReveal(threshold = 0.12) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

/* ─── Data ─────────────────────────────────────────────────── */
const STATS = [
    { value: '150+', label: 'Brands Elevated', sub: 'Across Gujarat & India' },
    { value: '3.2M+', label: 'Monthly Reach', sub: 'Managed channels combined' },
    { value: '4.2×', label: 'Average ROAS', sub: 'Paid campaigns 2023–24' },
    { value: '98%', label: 'Client Retention', sub: 'Renewals year over year' },
];

const VALUES = [
    {
        Icon: Target,
        title: 'Outcomes Over Output',
        body: 'Every rupee of your budget is tracked to a result. We measure success in revenue, retention, and reach — not files delivered or hours logged.',
        accent: '#FF7A00',
    },
    {
        Icon: Lightbulb,
        title: 'Strategy Before Pixels',
        body: 'We research your market, map your competitors, and find the exact message that makes your audience stop scrolling — before a single asset is designed.',
        accent: '#F59E0B',
    },
    {
        Icon: Users,
        title: 'Partners, Not Vendors',
        body: 'You get a dedicated team that attends your Monday calls, understands your margin targets, and thinks about your brand even on weekends.',
        accent: '#EF4444',
    },
    {
        Icon: Zap,
        title: '48-Hour Creative Cycle',
        body: 'Our agile sprints deliver briefs in 48 hours and full campaigns in a week. In digital, speed is a competitive advantage — we keep you perpetually ahead.',
        accent: '#8B5CF6',
    },
];

const MILESTONES = [
    {
        year: '2022',
        season: 'Founding',
        title: 'Started in a Vadodara studio',
        body: 'Two creatives and one developer decided Vadodara\'s businesses deserved world-class digital thinking. The Scroll Buzz launched with three clients and a mission to make brands impossible to ignore.',
    },
    {
        year: '2023',
        season: 'Q1 2023',
        title: 'First 50 brands served',
        body: 'Word spread fast. We hit 50 client brands across Gujarat within 8 months, expanding from design into social media management and performance marketing.',
    },
    {
        year: '2023',
        season: 'Q3 2023',
        title: 'Video & UI/UX division launched',
        body: 'Client demand drove us to build dedicated video production and UX design teams. We became truly full-service — strategy, design, development, marketing, and video under one roof.',
    },
    {
        year: '2024',
        season: 'Q1 2024',
        title: 'Crossed 100 active brands',
        body: 'Recognised as one of Gujarat\'s fastest-growing digital agencies. Campaigns generated ₹4.2× average ROAS and 3.2M+ monthly reach across all managed channels.',
    },
    {
        year: '2024',
        season: 'Q3 2024',
        title: 'Web development studio opened',
        body: 'Launched a dedicated React/Next.js wing for enterprise clients — custom platforms, portals, and eCommerce solutions built to international performance standards.',
    },
    {
        year: '2025',
        season: 'Present',
        title: '150+ brands & still growing',
        body: 'Today we serve brands from startups to market leaders across Gujarat and beyond, delivering integrated digital strategies that compound growth month over month.',
    },
];

const PROCESS = [
    { num: '01', title: 'Discover', desc: 'Brand audit, competitor analysis, audience mapping, and goal alignment in a single deep-dive session.' },
    { num: '02', title: 'Strategise', desc: 'Data-backed roadmap with KPIs, channel mix, content pillars, and a 90-day execution timeline.' },
    { num: '03', title: 'Create', desc: 'Design, copy, video, and code built to platform specs and your exact brand voice — no templates.' },
    { num: '04', title: 'Launch', desc: 'Coordinated multi-channel deployment with real-time monitoring from hour one.' },
    { num: '05', title: 'Optimise', desc: 'Weekly analytics reviews, A/B testing cycles, and iterative improvements that compound month over month.' },
];

const SERVICES_PREVIEW = [
    { label: 'Website Development', href: '/services', color: '#2563EB' },
    { label: 'Social Media Management', href: '/services', color: '#7C3AED' },
    { label: 'Graphic Designing', href: '/services', color: '#D97706' },
    { label: 'Digital Marketing & SEO', href: '/services', color: '#059669' },
    { label: 'UI/UX Design', href: '/services', color: '#0891B2' },
    { label: 'Creative Video Editing', href: '/services', color: '#DC2626' },
];

const WHY_ITEMS = [
    'Full-service under one roof — no briefing multiple agencies',
    'Dedicated account manager for every single client',
    'Custom strategy built from scratch, never a template',
    'Weekly performance reports with real benchmarks',
    'Transparent pricing with zero hidden retainers or markups',
    'India-based team with globally-trained creative instincts',
    'Proven track record in competitive Gujarat & India markets',
];

/* ─── Inline SVG Illustration — Agency Monitor ────────────── */
const IllustrationAgency = () => (
    <svg viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="ab-hero-svg">
        {/* Monitor shell */}
        <rect x="90" y="50" width="300" height="190" rx="14" fill="#161614" stroke="#FF7A00" strokeWidth="1.8" />
        <rect x="106" y="66" width="268" height="158" rx="7" fill="#0d0d0c" />
        {/* Screen: trending line */}
        <polyline points="120,200 160,165 205,178 255,142 300,158 340,122 365,135"
            stroke="#FF7A00" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Screen: secondary line */}
        <polyline points="120,214 160,205 205,200 255,190 300,192 340,180 365,174"
            stroke="rgba(255,122,0,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Area fill under line */}
        <polygon points="120,200 160,165 205,178 255,142 300,158 340,122 365,135 365,224 120,224"
            fill="url(#chartGrad)" opacity="0.25" />
        <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
            </linearGradient>
        </defs>
        {/* Mini bars */}
        <rect x="125" y="184" width="11" height="16" rx="2" fill="rgba(255,122,0,0.25)" />
        <rect x="143" y="172" width="11" height="28" rx="2" fill="rgba(255,122,0,0.45)" />
        <rect x="161" y="162" width="11" height="38" rx="2" fill="#FF7A00" />
        <rect x="179" y="175" width="11" height="25" rx="2" fill="rgba(255,122,0,0.5)" />
        {/* Stand */}
        <rect x="228" y="240" width="44" height="8" rx="4" fill="#1e1e1c" />
        <rect x="242" y="236" width="16" height="12" rx="2" fill="#161614" />
        {/* Floating card 1 */}
        <rect x="400" y="70" width="100" height="56" rx="10" fill="#161614" stroke="rgba(255,122,0,0.25)" strokeWidth="1.2" />
        <rect x="410" y="82" width="28" height="28" rx="6" fill="rgba(255,122,0,0.12)" />
        <circle cx="424" cy="96" r="7" fill="rgba(255,122,0,0.4)" />
        <rect x="446" y="86" width="44" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="446" y="97" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />
        <rect x="446" y="108" width="38" height="4" rx="2" fill="rgba(255,122,0,0.3)" />
        {/* Floating card 2 */}
        <rect x="10" y="150" width="72" height="68" rx="10" fill="#161614" stroke="rgba(255,122,0,0.2)" strokeWidth="1.2" />
        <rect x="20" y="162" width="52" height="6" rx="3" fill="rgba(255,255,255,0.07)" />
        <text x="36" y="198" textAnchor="middle" fill="#FF7A00" fontSize="20" fontWeight="800" fontFamily="Syne,sans-serif">4.2×</text>
        <rect x="20" y="205" width="52" height="4" rx="2" fill="rgba(255,122,0,0.2)" />
        {/* Dot grid decoration */}
        {[0, 1, 2, 3, 4].flatMap(col => [0, 1, 2, 3].map(row => (
            <circle key={`${col}-${row}`} cx={420 + col * 14} cy={160 + row * 14} r="1.5" fill="rgba(255,122,0,0.18)" />
        )))}
        {/* Small orbit circle */}
        <circle cx="460" cy="290" r="24" fill="none" stroke="rgba(255,122,0,0.2)" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="484" cy="290" r="5" fill="#FF7A00" opacity="0.6" />
    </svg>
);

/* ─── Component ────────────────────────────────────────────── */
export default function About() {
    const [heroRef, heroVisible] = useReveal(0.05);
    const [statsRef, statsVisible] = useReveal(0.1);
    const [storyRef, storyVisible] = useReveal(0.08);
    const [valuesRef, valuesVisible] = useReveal(0.08);
    const [processRef, processVisible] = useReveal(0.08);
    const [whyRef, whyVisible] = useReveal(0.08);
    const [servicesRef, svcVisible] = useReveal(0.08);
    const [ctaRef, ctaVisible] = useReveal(0.1);

    useEffect(() => {
        document.title = 'About The Scroll Buzz — Digital Marketing Agency in Vadodara, Gujarat';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">

            {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
            <section className="ab-hero" ref={heroRef} aria-labelledby="ab-h1">
                {/* Background layers */}
                <div className="ab-hero__bg" aria-hidden="true">
                    <div className="ab-hero__grain" />
                    <div className="ab-hero__blob ab-hero__blob--1" />
                    <div className="ab-hero__blob ab-hero__blob--2" />
                    <div className="ab-hero__vlines">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="ab-hero__vline" />)}
                    </div>
                </div>

                <div className={`ab-hero__left ${heroVisible ? 'ab--in' : ''}`}>
                    {/* Breadcrumb nav */}
                    <nav className="ab-breadcrumb" aria-label="Breadcrumb navigation">
                        <Link to="/" className="ab-breadcrumb__link">Home</Link>
                        <span aria-hidden="true"> › </span>
                        <span aria-current="page">About</span>
                    </nav>

                    <div className="ab-hero__tag" aria-hidden="true">
                        <span className="ab-hero__tag-dot" />
                        Vadodara, Gujarat · Est. 2022
                    </div>

                    <h1 id="ab-h1" className="ab-hero__h1">
                        We are<br />
                        <em>The Scroll<br />Buzz.</em>
                    </h1>

                    <p className="ab-hero__lead">
                        A full-service digital agency combining strategic clarity, creative obsession,
                        and performance-first thinking to help businesses across India dominate their
                        digital markets.
                    </p>

                    <div className="ab-hero__actions">
                        <Link to="/contact" className="ab-btn ab-btn--primary">
                            Work With Us <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                        <Link to="/portfolio" className="ab-btn ab-btn--ghost">
                            See Our Work
                        </Link>
                    </div>

                    <div className="ab-hero__trust" aria-label="Trusted by 150+ brands, 5 star rating">
                        <div className="ab-hero__stars" aria-hidden="true">
                            {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FF7A00" stroke="none" />)}
                        </div>
                        <span>Trusted by 150+ brands across India</span>
                    </div>
                </div>

                <div className={`ab-hero__right ${heroVisible ? 'ab--in' : ''}`} aria-hidden="true">
                    <IllustrationAgency />
                    {/* Floating stat chips */}
                    <div className="ab-hero__chip ab-hero__chip--1">
                        <strong>150+</strong><span>Brands Served</span>
                    </div>
                    <div className="ab-hero__chip ab-hero__chip--2">
                        <strong>4.2×</strong><span>Avg ROAS</span>
                    </div>
                    <div className="ab-hero__chip ab-hero__chip--3">
                        <strong>98%</strong><span>Retention</span>
                    </div>
                </div>

                <button className="ab-hero__scroll" onClick={() => document.getElementById('ab-stats')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Scroll down">
                    <ChevronDown size={20} aria-hidden="true" />
                </button>
            </section>

            {/* ══════════════════════════════
          2. STATS BAND
      ══════════════════════════════ */}
            <section id="ab-stats" className="ab-stats" ref={statsRef} aria-labelledby="ab-stats-label">
                <h2 id="ab-stats-label" className="ab-sr-only">Our Impact in Numbers</h2>
                <div className="ab-stats__inner">
                    {STATS.map((s, i) => (
                        <article
                            key={s.label}
                            className={`ab-stat-card ${statsVisible ? 'ab--in' : ''}`}
                            style={{ transitionDelay: `${i * 85}ms` }}
                        >
                            <strong className="ab-stat-card__value">{s.value}</strong>
                            <span className="ab-stat-card__label">{s.label}</span>
                            <span className="ab-stat-card__sub">{s.sub}</span>
                        </article>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════
          3. STORY + TIMELINE
      ══════════════════════════════ */}
            <section className="ab-story" ref={storyRef} aria-labelledby="ab-story-h2">
                <div className="ab-container">
                    <div className="ab-story__grid">

                        {/* Text column */}
                        <div className={`ab-story__text ${storyVisible ? 'ab--in' : ''}`}>
                            <span className="ab-eyebrow">Our Story</span>
                            <h2 id="ab-story-h2" className="ab-h2">
                                From a Vadodara studio<br />to Gujarat's most creative<br />digital agency
                            </h2>
                            <p className="ab-body--lg">
                                The Scroll Buzz was born from a simple frustration — too many brilliant
                                Vadodara businesses being underserved by agencies that treated them as
                                afterthoughts. We built the agency we wished had existed.
                            </p>
                            <p className="ab-body">
                                Today we're a team of strategists, designers, developers, content creators,
                                and performance marketers united by one conviction: your brand deserves
                                to be impossible to scroll past. We don't measure success in deliverables.
                                We measure it in the growth line on your dashboard.
                            </p>
                            <blockquote className="ab-story__quote">
                                <p>
                                    "We don't just make things look good. We make them <em>work</em> —
                                    harder, smarter, and longer than anything you've built before."
                                </p>
                                <footer><cite>— Founding Team, The Scroll Buzz</cite></footer>
                            </blockquote>

                            {/* Mini services list */}
                            <div className="ab-story__services-hint">
                                <span className="ab-eyebrow ab-eyebrow--sm">What we do</span>
                                <ul className="ab-story__services-list" aria-label="Services offered">
                                    {['Website Development', 'Social Media Management', 'Graphic Design',
                                        'Digital Marketing & SEO', 'UI/UX Design', 'Video Editing'].map(s => (
                                            <li key={s}>
                                                <span aria-hidden="true">→</span> {s}
                                            </li>
                                        ))}
                                </ul>
                                <Link to="/services" className="ab-link-arrow">
                                    Explore all services <ArrowRight size={13} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        {/* Timeline column */}
                        <div className={`ab-story__timeline ${storyVisible ? 'ab--in' : ''}`}>
                            <h3 className="ab-story__timeline-heading">How We Got Here</h3>
                            <ol className="ab-timeline" aria-label="Company milestones">
                                {MILESTONES.map((m, i) => (
                                    <li
                                        key={m.title}
                                        className={`ab-timeline__item ${storyVisible ? 'ab--in' : ''}`}
                                        style={{ transitionDelay: `${i * 90 + 200}ms` }}
                                    >
                                        <div className="ab-timeline__dot" aria-hidden="true" />
                                        <div className="ab-timeline__card">
                                            <div className="ab-timeline__meta">
                                                <time dateTime={m.year} className="ab-timeline__year">{m.year}</time>
                                                <span className="ab-timeline__season">{m.season}</span>
                                            </div>
                                            <h4 className="ab-timeline__title">{m.title}</h4>
                                            <p className="ab-timeline__body">{m.body}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          4. VALUES
      ══════════════════════════════ */}
            <section className="ab-values" ref={valuesRef} aria-labelledby="ab-values-h2">
                <div className="ab-container">
                    <header className={`ab-section-header ${valuesVisible ? 'ab--in' : ''}`}>
                        <span className="ab-eyebrow ab-eyebrow--center">How We Think</span>
                        <h2 id="ab-values-h2" className="ab-h2 ab-h2--center">
                            Four principles behind<br />every decision we make
                        </h2>
                        <p className="ab-section-sub">
                            Not values on a wall poster — working convictions you'll experience on your
                            first brief and every deliverable after it.
                        </p>
                    </header>

                    <div className="ab-values__grid">
                        {VALUES.map((v, i) => {
                            const Icon = v.Icon;
                            return (
                                <article
                                    key={v.title}
                                    className={`ab-value-card ${valuesVisible ? 'ab--in' : ''}`}
                                    style={{ '--accent': v.accent, transitionDelay: `${i * 100}ms` }}
                                >
                                    <div className="ab-value-card__num" aria-hidden="true">0{i + 1}</div>
                                    <div className="ab-value-card__icon" aria-hidden="true">
                                        <Icon size={20} strokeWidth={1.6} />
                                    </div>
                                    <h3 className="ab-value-card__title">{v.title}</h3>
                                    <p className="ab-value-card__body">{v.body}</p>
                                    <div className="ab-value-card__accent-line" aria-hidden="true" />
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          5. PROCESS
      ══════════════════════════════ */}
            <section className="ab-process" ref={processRef} aria-labelledby="ab-process-h2">
                <div className="ab-container">
                    <header className={`ab-section-header ${processVisible ? 'ab--in' : ''}`}>
                        <span className="ab-eyebrow ab-eyebrow--center">How We Work</span>
                        <h2 id="ab-process-h2" className="ab-h2 ab-h2--center">
                            Five steps. One goal.<br />Measurable growth every time.
                        </h2>
                        <p className="ab-section-sub">
                            Every engagement — from a single logo to a full-year marketing retainer —
                            runs through the same rigorous process that has delivered consistent results
                            for 150+ brands across India.
                        </p>
                    </header>

                    <ol className="ab-process__list" aria-label="Our 5-step process">
                        {PROCESS.map((step, i) => (
                            <li
                                key={step.num}
                                className={`ab-process__item ${processVisible ? 'ab--in' : ''}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="ab-process__item-inner">
                                    <div className="ab-process__num" aria-label={`Step ${step.num}`}>{step.num}</div>
                                    <div className="ab-process__connector" aria-hidden="true" />
                                    <div className="ab-process__body">
                                        <h3 className="ab-process__title">{step.title}</h3>
                                        <p className="ab-process__desc">{step.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>

                    {/* Achievements band */}
                    <div className={`ab-achievements ${processVisible ? 'ab--in' : ''}`}>
                        {[
                            { Icon: Award, text: 'Top Digital Agency, Gujarat 2024' },
                            { Icon: TrendingUp, text: '4.2× Average Campaign ROAS' },
                            { Icon: Clock, text: '48hr Creative Turnaround' },
                            { Icon: CheckCircle, text: '98% Client Retention Rate' },
                        ].map((a, i) => {
                            const Icon = a.Icon;
                            return (
                                <React.Fragment key={a.text}>
                                    <div className="ab-achievements__item">
                                        <Icon size={15} className="ab-achievements__icon" aria-hidden="true" />
                                        <span>{a.text}</span>
                                    </div>
                                    {i < 3 && <div className="ab-achievements__sep" aria-hidden="true" />}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          6. WHY US — dark section
      ══════════════════════════════ */}
            <section className="ab-why" ref={whyRef} aria-labelledby="ab-why-h2">
                <div className="ab-why__watermark" aria-hidden="true">SCROLL BUZZ</div>
                <div className="ab-container ab-why__grid">

                    <div className={`ab-why__text ${whyVisible ? 'ab--in' : ''}`}>
                        <span className="ab-eyebrow ab-eyebrow--light">Why The Scroll Buzz</span>
                        <h2 id="ab-why-h2" className="ab-h2 ab-h2--light">
                            What makes us different from every<br />other agency in Vadodara
                        </h2>
                        <p className="ab-body ab-body--muted">
                            Gujarat has dozens of agencies all promising the world. We'd rather show
                            you the receipts. Here's exactly what you get when you choose The Scroll Buzz —
                            and what you simply won't find anywhere else at this level.
                        </p>
                        <Link to="/contact" className="ab-btn ab-btn--primary ab-btn--mt">
                            Start the Conversation <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                    </div>

                    <ul
                        className={`ab-why__list ${whyVisible ? 'ab--in' : ''}`}
                        aria-label="Reasons to choose The Scroll Buzz"
                    >
                        {WHY_ITEMS.map((item, i) => (
                            <li
                                key={item}
                                className="ab-why__item"
                                style={{ transitionDelay: `${i * 65}ms` }}
                            >
                                <CheckCircle size={17} className="ab-why__check" aria-hidden="true" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </section>

            {/* ══════════════════════════════
          7. SERVICES PREVIEW
      ══════════════════════════════ */}
            <section className="ab-svc" ref={servicesRef} aria-labelledby="ab-svc-h2">
                <div className="ab-container">
                    <header className={`ab-section-header ${svcVisible ? 'ab--in' : ''}`}>
                        <span className="ab-eyebrow ab-eyebrow--center">What We Do</span>
                        <h2 id="ab-svc-h2" className="ab-h2 ab-h2--center">
                            Six disciplines.<br />One integrated strategy.
                        </h2>
                        <p className="ab-section-sub">
                            Every service compounds with the others — consistent brand voice, more
                            touchpoints, and exponential growth across every channel your customers use.
                        </p>
                    </header>

                    <ul className="ab-svc__grid" aria-label="Our digital marketing services">
                        {SERVICES_PREVIEW.map((svc, i) => (
                            <li
                                key={svc.label}
                                className={`ab-svc__pill ${svcVisible ? 'ab--in' : ''}`}
                                style={{ '--color': svc.color, transitionDelay: `${i * 75}ms` }}
                            >
                                <Link to={svc.href} className="ab-svc__pill-inner">
                                    <span className="ab-svc__dot" aria-hidden="true" />
                                    <span className="ab-svc__label">{svc.label}</span>
                                    <ArrowRight size={13} className="ab-svc__arrow" aria-hidden="true" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={`ab-svc__footer ${svcVisible ? 'ab--in' : ''}`}>
                        <Link to="/services" className="ab-btn ab-btn--outline">
                            Explore All Services in Detail <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          8. CONTACT STRIP — SEO address
      ══════════════════════════════ */}
            <aside className="ab-contact-strip" aria-label="Contact details for The Scroll Buzz">
                <div className="ab-container ab-contact-strip__inner">
                    <address className="ab-contact-strip__addr">
                        <a href="mailto:info@thescrollbuzz.in" className="ab-contact-strip__item">
                            <Mail size={14} aria-hidden="true" /> info@thescrollbuzz.in
                        </a>
                        <a href="tel:+919328839591" className="ab-contact-strip__item">
                            <Phone size={14} aria-hidden="true" /> +91 93288 39591
                        </a>
                        <span className="ab-contact-strip__item">
                            <MapPin size={14} aria-hidden="true" />
                            SF-35, Shree Siddheshwar Plaza, New VIP Rd, Vadodara, Gujarat 390019
                        </span>
                    </address>
                </div>
            </aside>

            {/* ══════════════════════════════
          9. CTA FINALE
      ══════════════════════════════ */}
            <section className="ab-cta" ref={ctaRef} aria-labelledby="ab-cta-h2">
                <div className="ab-cta__grid-overlay" aria-hidden="true" />
                <div className={`ab-cta__content ${ctaVisible ? 'ab--in' : ''}`}>
                    <h2 id="ab-cta-h2" className="ab-cta__h2">
                        Ready to join 150+ brands<br />that chose to stand out?
                    </h2>
                    <p className="ab-cta__sub">
                        Book a free 30-minute strategy call. We'll audit your current digital presence
                        and recommend exactly where to invest for the fastest, most sustainable growth.
                    </p>
                    <div className="ab-cta__actions">
                        <Link to="/contact" className="ab-cta__btn-white">
                            Book a Free Strategy Call <ArrowRight size={17} aria-hidden="true" />
                        </Link>
                        <Link to="/portfolio" className="ab-cta__btn-border">
                            View Our Portfolio
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}