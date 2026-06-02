import React, { useEffect, useRef, useState } from "react";
import "./DetailedPortfolio.css";
import Testimonials from "./Testimonials";
import Navbar from "./../Navbar/Navbar";

/* ─────────────────────────────────────────────
   MOCK DATA  — swap src values for real imports
   ───────────────────────────────────────────── */
// const CATEGORIES = ["All", "Social Media", "Branding", "Content", "Campaigns", "SEO"];

const PROJECTS = [
    {
        id: 1,
        title: "The Scroll Buzz",
        category: "Branding",
        tags: ["Logo Design", "Brand Identity", "Typography"],
        description:
            "Complete brand overhaul for a fast-growing digital news outlet. We crafted a visual language that balances credibility with modern energy.",
        result: "3× engagement lift in 60 days",
        color: "#FF6B35",
        img: null, // replace with: import img1 from './Assets/image1.jpg'
        featured: true,
    },
    {
        id: 2,
        title: "FreshCart Campaign",
        category: "Campaigns",
        tags: ["Paid Social", "Creative Strategy", "Video"],
        description:
            "Multi-platform festive campaign that drove record-breaking app installs through hyper-localised creatives.",
        result: "₹2.4 Cr revenue in 30 days",
        color: "#22c55e",
        img: null,
        featured: true,
    },
    {
        id: 3,
        title: "Bloom Beauty",
        category: "Social Media",
        tags: ["Instagram", "Reels", "UGC"],
        description:
            "Built an organic content engine for a D2C beauty brand from 0 to 50k followers with zero paid spend.",
        result: "50k followers, 0 ad spend",
        color: "#f472b6",
        img: null,
        featured: false,
    },
    {
        id: 4,
        title: "TechNova SEO",
        category: "SEO",
        tags: ["On-Page SEO", "Link Building", "Content"],
        description:
            "Comprehensive SEO strategy that moved 40+ keywords to page 1 within four months for a SaaS startup.",
        result: "Page 1 for 40+ keywords",
        color: "#6366f1",
        img: null,
        featured: false,
    },
    {
        id: 5,
        title: "EduPath Content",
        category: "Content",
        tags: ["Copywriting", "Email", "Blog"],
        description:
            "Crafted a 6-month content calendar and wrote all assets for an ed-tech platform launch.",
        result: "28% email open rate",
        color: "#f59e0b",
        img: null,
        featured: false,
    },
    {
        id: 6,
        title: "Urbanware Brand",
        category: "Branding",
        tags: ["Visual Identity", "Packaging", "Guidelines"],
        description:
            "End-to-end brand identity system for a streetwear label entering the Indian youth market.",
        result: "Featured in 3 national magazines",
        color: "#14b8a6",
        img: null,
        featured: true,
    },
    {
        id: 7,
        title: "GreenBite Social",
        category: "Social Media",
        tags: ["Facebook", "Community", "Reels"],
        description:
            "Turned a vegan café's dormant page into a thriving community through consistent storytelling.",
        result: "400% reach increase",
        color: "#84cc16",
        img: null,
        featured: false,
    },
    {
        id: 8,
        title: "LuxeHome Ads",
        category: "Campaigns",
        tags: ["Google Ads", "Retargeting", "CRO"],
        description:
            "Performance marketing for a premium home-décor brand targeting Tier-1 cities.",
        result: "4.8× ROAS",
        color: "#c084fc",
        img: null,
        featured: false,
    },
];

// const STATS = [
//     { value: "120+", label: "Brands Served" },
//     { value: "₹15 Cr+", label: "Revenue Generated" },
//     { value: "300M+", label: "Impressions Delivered" },
//     { value: "98%", label: "Client Retention" },
// ];

/* ─────────────────────────────────────────────
   TINY HELPERS
   ───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

/* ─────────────────────────────────────────────
   SUBCOMPONENTS
   ───────────────────────────────────────────── */
// function StatBar() {
//     const [ref, visible] = useInView(0.2);
//     return (
//         <div className="pf-stats" ref={ref} aria-label="Key statistics">
//             {STATS.map((s, i) => (
//                 <div
//                     key={s.label}
//                     className={`pf-stat ${visible ? "pf-stat--in" : ""}`}
//                     style={{ "--delay": `${i * 0.12}s` }}
//                 >
//                     <span className="pf-stat__value">{s.value}</span>
//                     <span className="pf-stat__label">{s.label}</span>
//                 </div>
//             ))}
//         </div>
//     );
// }

function ProjectCard({ project, index }) {
    const [ref, visible] = useInView(0.1);
    return (
        <article
            ref={ref}
            className={`pf-card ${project.featured ? "pf-card--featured" : ""} ${visible ? "pf-card--in" : ""}`}
            style={{ "--accent": project.color, "--delay": `${(index % 3) * 0.1}s` }}
            aria-label={`Portfolio project: ${project.title}`}
        >
            {/* Colour splash */}
            <div className="pf-card__splash" aria-hidden="true" />

            {/* Image / placeholder */}
            <div className="pf-card__img-wrap">
                {project.img ? (
                    <img src={project.img} alt={project.title} className="pf-card__img" loading="lazy" />
                ) : (
                    <div className="pf-card__img-placeholder" aria-hidden="true">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                    </div>
                )}
                <span className="pf-card__category">{project.category}</span>
            </div>

            {/* Body */}
            <div className="pf-card__body">
                <h3 className="pf-card__title">{project.title}</h3>
                <p className="pf-card__desc">{project.description}</p>

                {/* Tags */}
                <ul className="pf-card__tags" aria-label="Project tags">
                    {project.tags.map((t) => (
                        <li key={t} className="pf-card__tag">{t}</li>
                    ))}
                </ul>

                {/* Result pill */}
                <div className="pf-card__result" aria-label="Result">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                    </svg>
                    {project.result}
                </div>
            </div>
        </article>
    );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
export default function PortfolioPage() {
    // const [active, setActive] = useState("All");
    // const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

    return (
        <>
            {/* ── SEO / meta handled via react-helmet or <head> in your framework ── */}
            {/* <title>Portfolio | The Buzz Agency — Digital Marketing Results</title> */}

            <main className="pf-page" id="main-content">

                <Navbar />

                {/* ══ HERO ══════════════════════════════════════════════════ */}
                <header className="pf-hero" role="banner">
                    <div className="pf-hero__noise" aria-hidden="true" />
                    <div className="pf-hero__glow pf-hero__glow--a" aria-hidden="true" />
                    <div className="pf-hero__glow pf-hero__glow--b" aria-hidden="true" />

                    <div className="pf-hero__inner">
                        <p className="pf-hero__eyebrow">
                            <span className="pf-hero__dot" aria-hidden="true" />
                            Our Work
                        </p>

                        <h1 className="pf-hero__title">
                            Stories we've
                            <br />
                            <em>made buzz.</em>
                        </h1>

                        <p className="pf-hero__sub">
                            From scrappy startups to established brands — every project we take on gets our
                            full creative firepower. Real strategies. Real results.
                        </p>

                        {/* Schema breadcrumb hint */}
                        {/* <nav aria-label="Breadcrumb" className="pf-hero__breadcrumb">
                            <ol itemScope itemType="https://schema.org/BreadcrumbList">
                                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                    <a itemProp="item" href="/"><span itemProp="name">Home</span></a>
                                    <meta itemProp="position" content="1" />
                                </li>
                                <li aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                    <span itemProp="name">Portfolio</span>
                                    <meta itemProp="position" content="2" />
                                </li>
                            </ol>
                        </nav> */}
                    </div>

                    {/* Decorative ticker */}
                    <div className="pf-ticker" aria-hidden="true">
                        {Array(6).fill("BRANDS · CAMPAIGNS · CONTENT · SEO · BRANDING · SOCIAL ·").map((t, i) => (
                            <span key={i}>{t}&nbsp;</span>
                        ))}
                    </div>
                </header>

                {/* ══ STATS ═════════════════════════════════════════════════ */}
                {/* <section className="pf-section pf-section--stats" aria-label="Agency statistics">
                    <StatBar />
                </section> */}

                {/* ══ FILTER + GRID ═════════════════════════════════════════ */}
                <section className="pf-section" aria-labelledby="projects-heading">
                    <div className="pf-container">

                        <div className="pf-section__head">
                            <h2 id="projects-heading" className="pf-section__title">
                                Featured Projects
                            </h2>
                            <p className="pf-section__sub">
                                Filter by service to find work that matches your goals.
                            </p>
                        </div>

                        {/* Filter pills */}
                        {/* <nav className="pf-filter" aria-label="Filter projects by category" role="navigation">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    className={`pf-filter__btn ${active === cat ? "pf-filter__btn--active" : ""}`}
                                    onClick={() => setActive(cat)}
                                    aria-pressed={active === cat}
                                >
                                    {cat}
                                </button>
                            ))}
                        </nav> */}

                        {/* Grid */}
                        <div
                            className="pf-grid"
                            role="list"
                            aria-label="Portfolio projects"
                            aria-live="polite"
                        >
                            {PROJECTS.map((p, i) => (
                                <div role="listitem" key={p.id}>
                                    <ProjectCard project={p} index={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══ PROCESS ═══════════════════════════════════════════════ */}
                <section className="pf-section pf-section--process" aria-labelledby="process-heading">
                    <div className="pf-container">
                        <div className="pf-section__head">
                            <h2 id="process-heading" className="pf-section__title pf-section__title--light">
                                How we make the buzz happen
                            </h2>
                        </div>
                        <ol className="pf-process" aria-label="Our process">
                            {[
                                { n: "01", title: "Discovery", body: "We deep-dive into your brand, market, and audience before touching a single pixel." },
                                { n: "02", title: "Strategy", body: "Data-backed creative roadmap tailored to your goals and budget." },
                                { n: "03", title: "Execution", body: "Rapid, iterative delivery with constant feedback loops." },
                                { n: "04", title: "Amplify", body: "We measure, optimise, and scale what works — ruthlessly." },
                            ].map((step) => (
                                <li key={step.n} className="pf-process__step">
                                    <span className="pf-process__num" aria-hidden="true">{step.n}</span>
                                    <h3 className="pf-process__title">{step.title}</h3>
                                    <p className="pf-process__body">{step.body}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* ══ TESTIMONIAL ═══════════════════════════════════════════ */}
                {/* <section className="pf-section pf-section--testimonial" aria-labelledby="testimonial-heading">
                    <div className="pf-container pf-container--narrow">
                        <h2 id="testimonial-heading" className="pf-section__title">
                            What our clients say
                        </h2>
                        <div className="pf-testimonials">
                            {[
                                {
                                    quote: "The Buzz Agency didn't just run our ads — they rebuilt our entire digital presence. The results speak for themselves.",
                                    name: "Priya Sharma",
                                    role: "Founder, Bloom Beauty",
                                },
                                {
                                    quote: "Within 3 months we were ranking for terms our competitors had owned for years. Unreal work.",
                                    name: "Rahul Mehta",
                                    role: "CEO, TechNova",
                                },
                                {
                                    quote: "Creative, responsive, and genuinely invested in our growth. Feels like an in-house team.",
                                    name: "Ananya Joshi",
                                    role: "Marketing Head, FreshCart",
                                },
                            ].map((t, i) => (
                                <blockquote key={i} className="pf-testimonial" itemScope itemType="https://schema.org/Review">
                                    <p className="pf-testimonial__quote" itemProp="reviewBody">"{t.quote}"</p>
                                    <footer className="pf-testimonial__footer">
                                        <cite className="pf-testimonial__name" itemProp="author">{t.name}</cite>
                                        <span className="pf-testimonial__role">{t.role}</span>
                                    </footer>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                </section> */}
                <Testimonials />

                {/* ══ CTA ═══════════════════════════════════════════════════ */}
                <section className="pf-section pf-cta-section" aria-labelledby="cta-heading">
                    <div className="pf-container pf-container--narrow pf-cta">
                        <div className="pf-cta__glow" aria-hidden="true" />
                        <p className="pf-hero__eyebrow">
                            <span className="pf-hero__dot" aria-hidden="true" />
                            Ready to buzz?
                        </p>
                        <h2 id="cta-heading" className="pf-cta__title">
                            Let's build something<br />remarkable together.
                        </h2>
                        <p className="pf-cta__sub">
                            Drop us a message and we'll get back within 24 hours with a tailored proposal.
                        </p>
                        <a href="/contact" className="pf-cta__btn" aria-label="Contact us to start your project">
                            Start a Project
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </section>

            </main>
        </>
    );
}