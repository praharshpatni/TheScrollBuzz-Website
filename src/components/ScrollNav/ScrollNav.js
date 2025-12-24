import React from "react";
import "./ScrollNav.css";
import {
    FaHome,
    FaServicestack,
    FaUserAlt,
    FaBriefcase,
    FaPhoneAlt,
    FaThumbtack
} from "react-icons/fa";

export default function ScrollNav({ activeIndex, sections }) {
    const iconMap = {
        hero: <FaHome />,
        about: <FaUserAlt />,
        services: <FaServicestack />,
        portfolio: <FaBriefcase />,
        contact: <FaPhoneAlt />,
        footer: <FaThumbtack />
    };

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <div className="scroll-nav">
            {sections.map((sec, i) => (
                <button
                    key={i}
                    className={`nav-icon ${activeIndex === i ? "active" : ""}`}
                    onClick={() => scrollToSection(sec.ref)}
                >
                    {iconMap[sec.id.toLowerCase()] || "•"}
                    <span className="label">{sec.id}</span>
                </button>
            ))}
        </div>
    );
}
