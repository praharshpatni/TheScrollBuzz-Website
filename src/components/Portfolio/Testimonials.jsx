import React from "react";
import "./Testimonials.css";

const REVIEWS = [
  {
    quote:
      "Working with Scrollbuzz has been a game changer for our Interior Design Studio. Their creative approach truly understands our aesthetic and brand voice. Professional, responsive, and full of fresh ideas.",
    name: "Ojaswi Korpavalikar",
    role: "O & S Interior · Pune",
    tag: "Social Media",
  },
  {
    quote:
      "They took the time to understand the business in detail before suggesting anything — no generic advice. Knowledge of local SEO and content strategy is thorough and practical.",
    name: "Teethheal Clinics",
    role: "Dental Clinic · Pune",
    tag: "Local SEO",
  },
  {
    quote:
      "Creative and professional graphic designs that perfectly matched our brand. Great communication, quick delivery, and impressive attention to detail. Highly recommended!",
    name: "Vistra Wealth",
    role: "Mutual Fund Distributor",
    tag: "Graphic Design",
  },
  {
    quote:
      "Their social media creatives, marketing ideas, and consistent support helped us improve our online presence and connect with more customers. Highly recommended for restaurant branding!",
    name: "City Point Restro",
    role: "Restaurant · Uganda",
    tag: "Social Media",
  },
  {
    quote:
      "From logo designing to website development to marketing execution — complete marketing solutions at one stop. Highly recommended.",
    name: "Tradesync Impex",
    role: "Textile Export · Nashik",
    tag: "Full-Service",
  },
  {
    quote:
      "I explained exactly how I wanted my logo and they delivered the same. Thank you Scrollbuzz for making this amazing logo for my dental clinic.",
    name: "Divya Bavaskar",
    role: "Abnave Dental · Pune",
    tag: "Logo Design",
  },
  {
    quote:
      "Excellent branding, social media, and website development services. Creative, professional, and highly responsive. Very satisfied with the digital presence they created.",
    name: "Earth Ortho Pvt Ltd",
    role: "Orthopaedic Mfg · Vadodara",
    tag: "Branding + Web",
  },
];

// Each row gets ALL reviews so there's always enough content to fill the viewport
// We then render 4 copies — the animation only uses the first 50% (2 copies worth),
// so there is always a full identical set waiting, making the reset invisible.
const ROW_ONE = REVIEWS;
const ROW_TWO = [...REVIEWS].reverse(); // reversed so rows feel distinct

function Card({ r }) {
  return (
    <div className="tm-card" aria-hidden="true">
      <div className="tm-card__stars">★★★★★</div>
      <blockquote className="tm-card__quote">"{r.quote}"</blockquote>
      <div className="tm-card__bottom">
        <div>
          <p className="tm-card__name">{r.name}</p>
          <p className="tm-card__role">{r.role}</p>
        </div>
        <span className="tm-card__tag">{r.tag}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // 4 copies = the animation moves translateX(-50%) which is exactly 2 copies.
  // The remaining 2 copies are always offscreen-right ready to fill in.
  // Result: the "join" between end→start is always inside the hidden 50%,
  // never visible in the viewport.
  const row1Items = [...ROW_ONE, ...ROW_ONE, ...ROW_ONE, ...ROW_ONE];
  const row2Items = [...ROW_TWO, ...ROW_TWO, ...ROW_TWO, ...ROW_TWO];

  return (
    <section className="tm-section" aria-labelledby="tm-h2">
      <div className="tm-header">
        <div className="tm-eyebrow" aria-hidden="true">
          <span className="tm-eyebrow__dot" />
          Client Reviews
        </div>
        <h2 id="tm-h2" className="tm-headline">
          Brands That Choose to Buzz with us
        </h2>
        <p className="tm-sub">
          150+ brands · India, Uganda &amp; beyond · 5.0 ★ average
        </p>
      </div>

      {/* Accessible list — hidden from visual flow, read by screen readers */}
      <ul className="tm-sr-list" aria-label="Client testimonials">
        {REVIEWS.map((r) => (
          <li key={r.name}>
            <blockquote>
              <p>{r.quote}</p>
              <footer>
                — {r.name}, {r.role}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>

      <div className="tm-track-wrap" aria-hidden="true">
        {/* Row 1 — left */}
        <div className="tm-track tm-track--ltr">
          {row1Items.map((r, i) => (
            <Card key={`r1-${i}`} r={r} />
          ))}
        </div>

        {/* Row 2 — right */}
        <div className="tm-track tm-track--rtl">
          {row2Items.map((r, i) => (
            <Card key={`r2-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
