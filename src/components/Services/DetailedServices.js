// DetailedServices.jsx — /services route
// SEO: h1, h2, h3, article, section, ul, dl, address, breadcrumb, meta-friendly structure
// Design: Dark cinematic hero → warm cream body (matches About page aesthetic)
// Performance: CSS-only animations, inline SVG illustrations, zero heavy assets

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Code, Share2, Palette, TrendingUp, Layers, Video,
    ArrowRight, Star, ChevronDown, Sparkles,
    Zap, Shield, Clock, Users, BarChart2, Globe,
    Smartphone, ShoppingCart, Search, Mail, Play,
    MousePointer, Layout, Film, Camera
} from 'lucide-react';
import './DetailedServices.css';
import Navbar from "./../Navbar/Navbar";

/* ─── Intersection Observer hook ─────────────────────── */
function useReveal(threshold = 0.1) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

/* ─── SVG Illustrations ───────────────────────────────── */
const IllustrationDev = () => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svc-detail__svg">
        <rect x="30" y="20" width="360" height="220" rx="12" fill="#0d0d0c" stroke="#FF7A00" strokeWidth="1.4" />
        <rect x="30" y="20" width="360" height="32" rx="12" fill="#161614" />
        <rect x="30" y="40" width="360" height="12" fill="#161614" />
        <circle cx="52" cy="36" r="5" fill="#ef4444" opacity="0.7" />
        <circle cx="68" cy="36" r="5" fill="#f59e0b" opacity="0.7" />
        <circle cx="84" cy="36" r="5" fill="#22c55e" opacity="0.7" />
        <rect x="50" y="70" width="80" height="7" rx="3" fill="rgba(255,122,0,0.5)" />
        <rect x="140" y="70" width="120" height="7" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="50" y="86" width="50" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="108" y="86" width="90" height="6" rx="3" fill="rgba(255,122,0,0.3)" />
        <rect x="206" y="86" width="60" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="50" y="100" width="30" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="88" y="100" width="110" height="6" rx="3" fill="rgba(255,122,0,0.2)" />
        <rect x="50" y="115" width="70" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="128" y="115" width="50" height="6" rx="3" fill="rgba(255,122,0,0.4)" />
        <rect x="186" y="115" width="80" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="50" y="130" width="40" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="98" y="130" width="120" height="6" rx="3" fill="rgba(255,122,0,0.25)" />
        <rect x="50" y="148" width="200" height="1" rx="1" fill="rgba(255,255,255,0.05)" />
        <rect x="50" y="162" width="60" height="6" rx="3" fill="rgba(255,122,0,0.6)" />
        <rect x="118" y="162" width="40" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="50" y="176" width="90" height="6" rx="3" fill="rgba(255,255,255,0.07)" />
        <rect x="148" y="176" width="70" height="6" rx="3" fill="rgba(255,122,0,0.3)" />
        <rect x="270" y="60" width="100" height="160" rx="8" fill="#1a1a18" stroke="rgba(255,122,0,0.15)" strokeWidth="1" />
        <rect x="278" y="72" width="84" height="50" rx="4" fill="rgba(255,122,0,0.07)" />
        <rect x="284" y="80" width="50" height="5" rx="2" fill="rgba(255,122,0,0.4)" />
        <rect x="284" y="90" width="70" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="284" y="99" width="55" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="284" y="108" width="65" height="4" rx="2" fill="rgba(255,122,0,0.2)" />
        <rect x="278" y="130" width="84" height="18" rx="5" fill="rgba(255,122,0,0.18)" stroke="rgba(255,122,0,0.3)" strokeWidth="1" />
        <rect x="286" y="136" width="50" height="5" rx="2" fill="rgba(255,122,0,0.7)" />
        <rect x="278" y="156" width="38" height="36" rx="4" fill="#161614" />
        <rect x="322" y="156" width="38" height="36" rx="4" fill="#161614" />
        <rect x="284" y="163" width="26" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
        <rect x="284" y="172" width="18" height="8" rx="2" fill="rgba(255,122,0,0.3)" />
        <rect x="328" y="163" width="26" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
        <rect x="328" y="172" width="18" height="8" rx="2" fill="rgba(255,122,0,0.5)" />
    </svg>
);

const IllustrationSocial = () => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svc-detail__svg">
        <rect x="20" y="30" width="120" height="220" rx="16" fill="#0d0d0c" stroke="#FF7A00" strokeWidth="1.4" />
        <rect x="28" y="50" width="104" height="104" rx="10" fill="#1a1a18" />
        <circle cx="80" cy="80" r="22" fill="rgba(255,122,0,0.15)" stroke="rgba(255,122,0,0.3)" strokeWidth="1.5" />
        <path d="M70 80 L80 68 L90 80 L86 80 L86 92 L74 92 L74 80 Z" fill="rgba(255,122,0,0.5)" />
        <rect x="28" y="162" width="44" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="80" y="162" width="52" height="5" rx="2" fill="rgba(255,122,0,0.4)" />
        <rect x="28" y="172" width="104" height="4" rx="2" fill="rgba(255,255,255,0.04)" />
        <rect x="28" y="181" width="80" height="4" rx="2" fill="rgba(255,255,255,0.04)" />
        <rect x="28" y="196" width="28" height="6" rx="3" fill="rgba(255,122,0,0.2)" />
        <rect x="62" y="196" width="28" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="96" y="196" width="28" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="28" y="212" width="55" height="16" rx="6" fill="rgba(255,122,0,0.8)" />
        <rect x="34" y="218" width="43" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
        <rect x="160" y="30" width="240" height="108" rx="14" fill="#0d0d0c" stroke="#FF7A00" strokeWidth="1.4" />
        <rect x="172" y="44" width="216" height="80" rx="8" fill="#161614" />
        <circle cx="194" cy="70" r="16" fill="rgba(255,122,0,0.2)" stroke="rgba(255,122,0,0.35)" strokeWidth="1.5" />
        <rect x="218" y="62" width="80" height="6" rx="3" fill="rgba(255,122,0,0.5)" />
        <rect x="218" y="73" width="130" height="5" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="218" y="82" width="100" height="5" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="218" y="92" width="60" height="5" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="172" y="96" width="48" height="1" fill="rgba(255,122,0,0.1)" />
        <rect x="160" y="152" width="240" height="108" rx="14" fill="#0d0d0c" stroke="rgba(255,122,0,0.3)" strokeWidth="1.4" />
        <rect x="172" y="166" width="216" height="80" rx="8" fill="#161614" />
        <rect x="184" y="178" width="192" height="48" rx="6" fill="rgba(255,122,0,0.06)" />
        <rect x="192" y="186" width="140" height="6" rx="3" fill="rgba(255,255,255,0.07)" />
        <rect x="192" y="197" width="100" height="5" rx="2" fill="rgba(255,255,255,0.04)" />
        <rect x="192" y="207" width="120" height="5" rx="2" fill="rgba(255,122,0,0.3)" />
        <circle cx="356" cy="194" r="10" fill="rgba(255,122,0,0.25)" />
        <path d="M352 194 L356 189 L360 194 L358 194 L358 199 L354 199 L354 194 Z" fill="rgba(255,122,0,0.7)" />
    </svg>
);

const IllustrationDesign = () => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svc-detail__svg">
        <rect x="30" y="20" width="160" height="100" rx="12" fill="#0d0d0c" stroke="#FF7A00" strokeWidth="1.4" />
        <rect x="42" y="32" width="136" height="76" rx="6" fill="#161614" />
        <circle cx="80" cy="66" r="24" fill="rgba(255,122,0,0.12)" stroke="rgba(255,122,0,0.25)" strokeWidth="1.5" />
        <circle cx="80" cy="66" r="12" fill="rgba(255,122,0,0.3)" />
        <circle cx="80" cy="66" r="4" fill="#FF7A00" />
        <rect x="116" y="46" width="50" height="6" rx="3" fill="rgba(255,122,0,0.5)" />
        <rect x="116" y="58" width="40" height="5" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="116" y="68" width="54" height="5" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="116" y="78" width="36" height="5" rx="2" fill="rgba(255,122,0,0.25)" />
        <rect x="220" y="20" width="170" height="100" rx="12" fill="#0d0d0c" stroke="rgba(255,122,0,0.3)" strokeWidth="1.4" />
        <rect x="232" y="32" width="146" height="76" rx="6" fill="#161614" />
        <rect x="244" y="44" width="44" height="44" rx="6" fill="rgba(255,122,0,0.1)" stroke="rgba(255,122,0,0.2)" strokeWidth="1" />
        <path d="M256 60 L258 54 L266 66 L270 62 L278 66 L278 80 L256 80 Z" fill="rgba(255,122,0,0.4)" />
        <circle cx="270" cy="52" r="4" fill="rgba(255,122,0,0.6)" />
        <rect x="298" y="46" width="68" height="6" rx="3" fill="rgba(255,122,0,0.5)" />
        <rect x="298" y="58" width="52" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
        <rect x="298" y="68" width="60" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
        <rect x="298" y="78" width="44" height="5" rx="2" fill="rgba(255,122,0,0.3)" />
        <rect x="30" y="140" width="360" height="120" rx="12" fill="#0d0d0c" stroke="rgba(255,122,0,0.2)" strokeWidth="1.4" />
        <rect x="42" y="152" width="336" height="96" rx="6" fill="#161614" />
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <rect key={i} x={50 + i * 48} y={220 - i * 8 - 20} width="36" height={i * 8 + 20} rx="4" fill={`rgba(255,122,0,${0.15 + i * 0.1})`} />
        ))}
        <polyline points="68,212 116,196 164,200 212,176 260,184 308,162 356,156" stroke="#FF7A00" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="42" y="152" width="80" height="20" rx="4" fill="#0d0d0c" />
        <rect x="48" y="158" width="50" height="5" rx="2" fill="rgba(255,122,0,0.5)" />
        <rect x="48" y="166" width="36" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
    </svg>
);

const IllustrationMarketing = () => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svc-detail__svg">
        <rect x="20" y="20" width="380" height="240" rx="14" fill="#0d0d0c" stroke="#FF7A00" strokeWidth="1.4" />
        <rect x="20" y="20" width="380" height="30" rx="14" fill="#161614" />
        <rect x="20" y="38" width="380" height="12" fill="#161614" />
        <rect x="36" y="29" width="60" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="108" y="29" width="40" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="340" y="29" width="48" height="6" rx="3" fill="rgba(255,122,0,0.4)" />
        <rect x="36" y="64" width="160" height="80" rx="8" fill="#1a1a18" stroke="rgba(255,122,0,0.15)" strokeWidth="1" />
        <rect x="44" y="72" width="80" height="5" rx="2" fill="rgba(255,122,0,0.5)" />
        <rect x="44" y="82" width="60" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <path d="M44 120 L60 104 L76 112 L96 92 L116 100 L136 84 L152 90 L184 76 L184 128 L44 128 Z" fill="rgba(255,122,0,0.08)" />
        <polyline points="44,120 60,104 76,112 96,92 116,100 136,84 152,90 184,76" stroke="#FF7A00" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="36" y="158" width="76" height="76" rx="8" fill="#1a1a18" stroke="rgba(255,122,0,0.15)" strokeWidth="1" />
        <rect x="44" y="166" width="50" height="5" rx="2" fill="rgba(255,122,0,0.4)" />
        <rect x="44" y="180" width="60" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <text x="80" y="218" textAnchor="middle" fill="#FF7A00" fontSize="18" fontWeight="800" fontFamily="Syne,sans-serif">4.2×</text>
        <rect x="44" y="224" width="60" height="4" rx="2" fill="rgba(255,122,0,0.2)" />
        <rect x="126" y="158" width="76" height="76" rx="8" fill="#1a1a18" stroke="rgba(255,122,0,0.15)" strokeWidth="1" />
        <rect x="134" y="166" width="50" height="5" rx="2" fill="rgba(255,122,0,0.4)" />
        <text x="166" y="210" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="16" fontWeight="800" fontFamily="Syne,sans-serif">98%</text>
        <rect x="134" y="220" width="60" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="216" y="64" width="184" height="170" rx="8" fill="#1a1a18" stroke="rgba(255,122,0,0.15)" strokeWidth="1" />
        <rect x="224" y="74" width="100" height="5" rx="2" fill="rgba(255,122,0,0.5)" />
        <rect x="224" y="84" width="70" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        {[0, 1, 2, 3, 4, 5].map(i => (
            <React.Fragment key={i}>
                <rect x="224" y={100 + i * 30} width={100 + Math.random() * 60 | 0} height="8" rx="4" fill={`rgba(255,122,0,${0.15 + i * 0.07})`} />
                <rect x="330" y={100 + i * 30} width="60" height="8" rx="4" fill="rgba(255,255,255,0.04)" />
            </React.Fragment>
        ))}
    </svg>
);

const IllustrationUX = () => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svc-detail__svg">
        <rect x="30" y="15" width="160" height="250" rx="20" fill="#0d0d0c" stroke="#FF7A00" strokeWidth="1.4" />
        <rect x="42" y="40" width="136" height="200" rx="10" fill="#161614" />
        <rect x="58" y="56" width="104" height="16" rx="5" fill="rgba(255,122,0,0.15)" stroke="rgba(255,122,0,0.2)" strokeWidth="1" />
        <rect x="64" y="60" width="60" height="7" rx="3" fill="rgba(255,122,0,0.5)" />
        <rect x="58" y="82" width="104" height="56" rx="6" fill="rgba(255,122,0,0.06)" />
        <rect x="66" y="90" width="50" height="5" rx="2" fill="rgba(255,122,0,0.4)" />
        <rect x="66" y="100" width="88" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="66" y="109" width="72" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="66" y="118" width="60" height="4" rx="2" fill="rgba(255,122,0,0.2)" />
        <rect x="58" y="148" width="48" height="48" rx="8" fill="rgba(255,122,0,0.1)" stroke="rgba(255,122,0,0.2)" strokeWidth="1" />
        <rect x="64" y="154" width="36" height="5" rx="2" fill="rgba(255,122,0,0.4)" />
        <rect x="64" y="163" width="28" height="20" rx="4" fill="rgba(255,122,0,0.25)" />
        <rect x="114" y="148" width="48" height="48" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="120" y="154" width="36" height="5" rx="2" fill="rgba(255,255,255,0.07)" />
        <rect x="120" y="163" width="28" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
        <rect x="58" y="208" width="104" height="20" rx="6" fill="rgba(255,122,0,0.7)" />
        <rect x="84" y="215" width="52" height="5" rx="2" fill="rgba(255,255,255,0.5)" />
        <rect x="230" y="15" width="170" height="250" rx="14" fill="#0d0d0c" stroke="rgba(255,122,0,0.25)" strokeWidth="1.4" />
        <rect x="242" y="32" width="146" height="220" rx="8" fill="#161614" />
        <rect x="252" y="44" width="126" height="30" rx="6" fill="rgba(255,122,0,0.08)" stroke="rgba(255,122,0,0.15)" strokeWidth="1" />
        <rect x="260" y="52" width="80" height="6" rx="3" fill="rgba(255,122,0,0.5)" />
        <rect x="260" y="62" width="60" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="252" y="84" width="60" height="56" rx="6" fill="rgba(255,122,0,0.06)" />
        <rect x="260" y="92" width="44" height="5" rx="2" fill="rgba(255,122,0,0.4)" />
        <rect x="260" y="102" width="40" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="260" y="111" width="36" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="260" y="122" width="40" height="10" rx="4" fill="rgba(255,122,0,0.3)" />
        <rect x="322" y="84" width="60" height="56" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <rect x="330" y="92" width="44" height="5" rx="2" fill="rgba(255,255,255,0.07)" />
        <rect x="330" y="102" width="36" height="4" rx="2" fill="rgba(255,255,255,0.04)" />
        <rect x="252" y="152" width="130" height="80" rx="6" fill="rgba(255,122,0,0.04)" stroke="rgba(255,122,0,0.1)" strokeWidth="1" />
        <rect x="260" y="162" width="80" height="5" rx="2" fill="rgba(255,122,0,0.4)" />
        {[0, 1, 2, 3, 4].map(i => (
            <rect key={i} x="260" y={174 + i * 10} width={60 + i * 8} height="4" rx="2" fill="rgba(255,255,255,0.04)" />
        ))}
        <rect x="260" y="224" width="114" height="4" rx="2" fill="rgba(255,122,0,0.15)" />
    </svg>
);

const IllustrationVideo = () => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svc-detail__svg">
        <rect x="20" y="24" width="260" height="180" rx="14" fill="#0d0d0c" stroke="#FF7A00" strokeWidth="1.4" />
        <rect x="32" y="36" width="236" height="156" rx="8" fill="#161614" />
        <circle cx="150" cy="114" r="36" fill="rgba(255,122,0,0.12)" stroke="rgba(255,122,0,0.25)" strokeWidth="1.5" />
        <circle cx="150" cy="114" r="22" fill="rgba(255,122,0,0.2)" />
        <path d="M143 105 L143 123 L163 114 Z" fill="#FF7A00" />
        <rect x="32" y="168" width="236" height="24" rx="0" fill="rgba(0,0,0,0.4)" />
        <rect x="40" y="176" width="80" height="3" rx="2" fill="rgba(255,122,0,0.3)" />
        <rect x="40" y="176" width="32" height="3" rx="2" fill="#FF7A00" />
        <circle cx="130" cy="178" r="4" fill="#FF7A00" />
        <rect x="218" y="172" width="12" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
        <rect x="233" y="172" width="12" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="300" y="24" width="104" height="180" rx="14" fill="#0d0d0c" stroke="rgba(255,122,0,0.25)" strokeWidth="1.4" />
        <rect x="312" y="36" width="80" height="80" rx="6" fill="#161614" />
        <path d="M336 64 L336 78 L348 71 Z" fill="rgba(255,122,0,0.5)" />
        <rect x="312" y="126" width="80" height="6" rx="3" fill="rgba(255,122,0,0.4)" />
        <rect x="312" y="137" width="80" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="312" y="146" width="60" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="312" y="162" width="36" height="16" rx="5" fill="rgba(255,122,0,0.6)" />
        <rect x="20" y="216" width="384" height="48" rx="12" fill="#0d0d0c" stroke="rgba(255,122,0,0.15)" strokeWidth="1" />
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <rect key={i} x={32 + i * 54} y="224" width="44" height="32" rx="4" fill={i === 2 ? "rgba(255,122,0,0.3)" : "rgba(255,255,255,0.03)"} stroke={i === 2 ? "rgba(255,122,0,0.5)" : "rgba(255,255,255,0.05)"} strokeWidth="1" />
        ))}
    </svg>
);

/* ─── Service Data ────────────────────────────────────────── */
const SERVICES = [
    {
        id: 'web-development',
        slug: 'website-development',
        Icon: Code,
        IllustrationComp: IllustrationDev,
        label: 'Development',
        title: 'Website Development',
        tagline: 'High-performance digital experiences that convert',
        desc: 'From blazing-fast landing pages to complex eCommerce ecosystems — we architect React/Next.js web experiences that are fast, SEO-optimised, and built to turn visitors into loyal customers.',
        longDesc: 'In 2024, your website is your hardest-working salesperson. We build it to perform — sub-2-second load times, Google Core Web Vitals scores in the green, and conversion-focused UX baked into every pixel. Whether you need a brochure site, a full eCommerce platform, or a custom web app, our developers deliver code that\'s clean, maintainable, and scalable.',
        color: '#2563EB',
        features: [
            { Icon: Globe, text: 'Custom React / Next.js Websites' },
            { Icon: ShoppingCart, text: 'eCommerce — Shopify & WooCommerce' },
            { Icon: Smartphone, text: 'Responsive & Progressive Web Apps' },
            { Icon: Search, text: 'Core Web Vitals & SEO Optimisation' },
            { Icon: Zap, text: 'Landing Pages & High-Conversion Funnels' },
            { Icon: Shield, text: 'Maintenance, Hosting & Support Plans' },
        ],
        process: ['Discovery & Wireframe', 'UI Design Sign-Off', 'Development Sprint', 'QA & Speed Audit', 'Launch & Monitor'],
        stats: [{ val: '<2s', label: 'Load Time Target' }, { val: '100', label: 'PageSpeed Score' }, { val: '3×', label: 'Conversion Lift' }],
        highlight: false,
    },
    {
        id: 'social-media',
        slug: 'social-media-management',
        Icon: Share2,
        IllustrationComp: IllustrationSocial,
        label: 'Social Media',
        title: 'Social Media Management',
        tagline: 'Content that builds communities and drives revenue',
        desc: 'End-to-end social strategy — from content calendars and community management to influencer outreach and paid social campaigns that compound month over month.',
        longDesc: 'Social media without strategy is just noise. We build a repeatable engine: deep audience research, platform-native content, community management that actually responds, and paid campaigns layered on top of organic momentum. Your feeds become a growth channel, not a chore.',
        color: '#7C3AED',
        features: [
            { Icon: Layout, text: 'Monthly Content Calendar & Scheduling' },
            { Icon: Users, text: 'Instagram, Facebook & LinkedIn Growth' },
            { Icon: Globe, text: 'Community Management & DM Response' },
            { Icon: Star, text: 'Influencer Identification & Outreach' },
            { Icon: BarChart2, text: 'Paid Social Campaigns (Meta & LinkedIn Ads)' },
            { Icon: Clock, text: 'Monthly Analytics Reports with Benchmarks' },
        ],
        process: ['Audience Research', 'Content Pillars', 'Calendar Build', 'Publish & Engage', 'Analyse & Iterate'],
        stats: [{ val: '3.2M+', label: 'Monthly Reach Managed' }, { val: '40%', label: 'Avg Engagement Lift' }, { val: '6mo', label: 'Avg to #1 Niche Presence' }],
        highlight: false,
    },
    {
        id: 'graphic-design',
        slug: 'graphic-designing',
        Icon: Palette,
        IllustrationComp: IllustrationDesign,
        label: 'Design',
        title: 'Graphic Designing',
        tagline: 'Visual identity that makes your brand impossible to ignore',
        desc: 'A complete visual identity system — from logo to every branded touchpoint — crafted to make your brand instantly recognisable and deeply desirable.',
        longDesc: 'Great design isn\'t decoration — it\'s differentiation. We build brand systems that communicate your values before anyone reads a single word. From the precise geometry of your logo to the weight of your business card stock, every choice is intentional and strategically aligned to your market position.',
        color: '#D97706',
        badge: 'Most Popular',
        features: [
            { Icon: Sparkles, text: 'Logo Design & Complete Brand Identity' },
            { Icon: Layout, text: 'Social Media Graphic Templates' },
            { Icon: Globe, text: 'Flyers, Brochures & Catalogues' },
            { Icon: Users, text: 'Business Cards, Stationery & Packaging' },
            { Icon: BarChart2, text: 'PowerPoint & Company Profile Design' },
            { Icon: Camera, text: 'Print Ads, Hoardings & Banners' },
        ],
        process: ['Brand Discovery', 'Mood Board & Direction', 'Concept Design', 'Revisions', 'Final Asset Delivery'],
        stats: [{ val: '48h', label: 'First Concept Delivery' }, { val: '∞', label: 'Revision Rounds' }, { val: '100%', label: 'Vector Source Files' }],
        highlight: true,
    },
    {
        id: 'digital-marketing',
        slug: 'digital-marketing-seo',
        Icon: TrendingUp,
        IllustrationComp: IllustrationMarketing,
        label: 'Marketing',
        title: 'Digital Marketing & SEO',
        tagline: 'Data-driven campaigns that put you on page one — and keep you there',
        desc: 'Strategic SEO, PPC, and content marketing engineered to capture high-intent buyers on Google, Meta, and beyond — with full attribution so you know exactly what\'s working.',
        longDesc: 'Most agencies talk about rankings. We talk about revenue. Our performance marketing team runs a tight loop: keyword research → technical SEO → content → paid amplification → conversion tracking → reinvestment. Every rupee is accounted for and every campaign is built to compound.',
        color: '#059669',
        features: [
            { Icon: Search, text: 'Technical SEO & On-Page Optimisation' },
            { Icon: TrendingUp, text: 'Google Ads (Search, Display, Shopping)' },
            { Icon: Globe, text: 'Meta & LinkedIn Paid Campaigns' },
            { Icon: Mail, text: 'Email Marketing & Automation Sequences' },
            { Icon: MousePointer, text: 'Conversion Rate Optimisation (CRO)' },
            { Icon: BarChart2, text: 'GA4, Search Console & Monthly Reporting' },
        ],
        process: ['Keyword & Competitor Audit', 'Technical SEO Fixes', 'Content & Link Building', 'Paid Campaign Launch', 'CRO & Reporting'],
        stats: [{ val: '4.2×', label: 'Average ROAS' }, { val: 'P1', label: 'Google Ranking Goal' }, { val: '98%', label: 'Client Retention' }],
        highlight: false,
    },
    {
        id: 'ui-ux-design',
        slug: 'ui-ux-design',
        Icon: Layers,
        IllustrationComp: IllustrationUX,
        label: 'UI / UX',
        title: 'UI/UX Design',
        tagline: 'Interfaces that feel intuitive, look stunning, and convert',
        desc: 'User-centred design that marries stunning aesthetics with intuitive flows — reducing friction, increasing delight, and turning complex products into effortless experiences.',
        longDesc: 'A beautiful interface that confuses users is a liability. A plain interface that works is a missed opportunity. We engineer the intersection — pixel-perfect visuals backed by validated user research, clear information architecture, and relentless usability testing. The result: interfaces that users love and businesses profit from.',
        color: '#0891B2',
        features: [
            { Icon: Users, text: 'User Research, Interviews & Personas' },
            { Icon: Layout, text: 'Information Architecture & User Flows' },
            { Icon: MousePointer, text: 'Wireframing & Interactive Prototyping (Figma)' },
            { Icon: Sparkles, text: 'High-Fidelity UI Design & Design Systems' },
            { Icon: Shield, text: 'Usability Testing & Accessibility Audit' },
            { Icon: Code, text: 'Developer Handoff with Detailed Specs' },
        ],
        process: ['Research & Empathy', 'IA & Flows', 'Wireframes', 'High-Fi Design', 'Prototype & Test'],
        stats: [{ val: '60%', label: 'Avg Drop-off Reduction' }, { val: '3.4×', label: 'Task Completion Lift' }, { val: 'WCAG', label: 'AA Accessibility' }],
        highlight: false,
    },
    {
        id: 'video-editing',
        slug: 'creative-video-editing',
        Icon: Video,
        IllustrationComp: IllustrationVideo,
        label: 'Video',
        title: 'Creative Video Editing',
        tagline: 'Scroll-stopping content for every screen and feed',
        desc: 'Short-form reels, cinematic brand films, and motion-graphic-rich ads that demand attention — crafted for the exact platform algorithms and audience behaviours of 2024.',
        longDesc: 'Video is the most consumed content format on every platform. We approach each video as a performance asset — scripted for retention, edited for platform-native engagement, and optimised with captions, hooks, and calls-to-action that actually convert viewers into customers.',
        color: '#DC2626',
        features: [
            { Icon: Play, text: 'Instagram Reels & YouTube Shorts' },
            { Icon: Film, text: 'Brand Films, Explainers & Commercials' },
            { Icon: Zap, text: 'Motion Graphics, Titles & Animation' },
            { Icon: Globe, text: 'YouTube Channel Editing & Thumbnails' },
            { Icon: Layout, text: 'Subtitles, Captions & Accessibility' },
            { Icon: Sparkles, text: 'Colour Grading & Sound Design' },
        ],
        process: ['Brief & Storyboard', 'Raw Footage Review', 'Rough Cut', 'Motion & Grade', 'Final Delivery'],
        stats: [{ val: '48h', label: 'First Cut Turnaround' }, { val: '4K', label: 'Max Export Resolution' }, { val: '12+', label: 'Platform Formats' }],
        highlight: false,
    },
];

const WHY_ITEMS = [
    { Icon: Zap, title: 'One Agency, All Channels', body: 'No briefing six vendors. One team owns every service — strategy is coherent, brand voice is consistent.' },
    { Icon: BarChart2, title: 'Revenue-First Thinking', body: 'Every campaign ties back to a commercial metric. We measure success in growth, not deliverables.' },
    { Icon: Clock, title: '48-Hour Creative Cycle', body: 'Agile sprints mean you see first concepts in 48 hours and full campaigns inside a week.' },
    { Icon: Shield, title: 'Full Transparency', body: 'Weekly reports, live dashboards, and zero hidden retainers. You always know exactly where your money goes.' },
];

const FAQS = [
    { q: 'How long does a typical website project take?', a: 'Most brochure websites are delivered in 3–4 weeks. Complex eCommerce or custom web apps typically take 6–10 weeks depending on scope, integrations, and content readiness.' },
    { q: 'Do you work with startups or only established businesses?', a: 'Both. We work with funded startups building their first brand presence all the way to established Gujarat businesses scaling nationally. Our pricing and packages adapt to your stage.' },
    { q: 'Can I hire you for just one service, like only SEO?', a: 'Absolutely. Every service is available standalone. That said, integrated strategies consistently outperform siloed ones — we\'ll show you exactly why when we meet.' },
    { q: 'What makes The Scroll Buzz different from other Vadodara agencies?', a: 'We\'re genuinely full-service under one roof, we dedicate a named account manager to every client, and we hold ourselves to commercial KPIs — not just deliverable counts. 98% client retention speaks louder than any pitch.' },
    { q: 'How are your packages priced?', a: 'Project-based pricing for one-time deliverables (websites, brand identity), monthly retainers for ongoing services (social, SEO, paid ads). All pricing is transparent — no surprises, no hidden markups.' },
];

/* ─── Accordion ───────────────────────────────────────────── */
function FAQItem({ q, a, i }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`svc-faq__item ${open ? 'open' : ''}`}>
            <button
                className="svc-faq__q"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                id={`faq-q-${i}`}
                aria-controls={`faq-a-${i}`}
            >
                <span>{q}</span>
                <ChevronDown size={18} className="svc-faq__chevron" aria-hidden="true" />
            </button>
            <div className="svc-faq__a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                <p>{a}</p>
            </div>
        </div>
    );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function DetailedServices() {
    const [heroRef, heroVisible] = useReveal(0.05);
    const [statsRef, statsVisible] = useReveal(0.1);
    const [gridRef, gridVisible] = useReveal(0.05);
    const [whyRef, whyVisible] = useReveal(0.08);
    const [faqRef, faqVisible] = useReveal(0.08);
    const [ctaRef, ctaVisible] = useReveal(0.1);

    useEffect(() => {
        document.title = 'Digital Marketing Services in Vadodara, Gujarat — The Scroll Buzz';
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="svc-page">
            <Navbar />
            {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
            <section className="svc-hero" ref={heroRef} aria-labelledby="svc-h1">
                <div className="svc-hero__bg" aria-hidden="true">
                    <div className="svc-hero__grain" />
                    <div className="svc-hero__blob svc-hero__blob--1" />
                    <div className="svc-hero__blob svc-hero__blob--2" />
                    <div className="svc-hero__grid" />
                </div>

                <div className="svc-hero__inner">
                    {/* <nav className="svc-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/" className="svc-breadcrumb__link">Home</Link>
                        <span aria-hidden="true"> › </span>
                        <span aria-current="page">Services</span>
                    </nav> */}

                    <div className={`svc-hero__content ${heroVisible ? 'sv--in' : ''}`}>
                        <div className="svc-hero__tag" aria-hidden="true">
                            <span className="svc-hero__tag-dot" />
                            Vadodara, Gujarat · Full-Service Digital Agency
                        </div>

                        <h1 id="svc-h1" className="svc-hero__h1">
                            Six services.<br />
                            <em>One growth engine.</em>
                        </h1>

                        <p className="svc-hero__lead">
                            Every discipline we offer is engineered to compound with the others —
                            creating an integrated digital flywheel that accelerates your brand's
                            growth month over month.
                        </p>

                        <div className="svc-hero__pills" aria-label="Services navigation">
                            {SERVICES.map(s => (
                                <a key={s.id} href={`#${s.id}`} className="svc-pill" style={{ '--c': s.color }}>
                                    <s.Icon size={13} aria-hidden="true" />
                                    {s.label}
                                </a>
                            ))}
                        </div>

                        <div className="svc-hero__actions">
                            <Link to="/contact" className="svc-btn svc-btn--primary">
                                Get a Free Consultation <ArrowRight size={15} aria-hidden="true" />
                            </Link>
                            <Link to="/portfolio" className="svc-btn svc-btn--ghost">
                                View Our Work
                            </Link>
                        </div>
                    </div>

                    {/* Trust bar */}
                    <div className={`svc-hero__trust ${heroVisible ? 'sv--in' : ''}`}>
                        {[
                            { val: '150+', label: 'Brands Served' },
                            { val: '4.2×', label: 'Avg ROAS' },
                            { val: '98%', label: 'Retention' },
                            { val: '6', label: 'Services' },
                        ].map(t => (
                            <div key={t.label} className="svc-hero__trust-item">
                                <strong>{t.val}</strong>
                                <span>{t.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          2. STATS BAND
      ══════════════════════════════ */}
            <div className="svc-stats-band" ref={statsRef} aria-label="Key performance metrics">
                {[
                    { val: '150+', sub: 'Active Brand Clients' },
                    { val: '3.2M+', sub: 'Monthly Reach Managed' },
                    { val: '4.2×', sub: 'Average Campaign ROAS' },
                    { val: '98%', sub: 'Year-on-Year Retention' },
                ].map((s, i) => (
                    <div
                        key={s.sub}
                        className={`svc-stats-band__item ${statsVisible ? 'sv--in' : ''}`}
                        style={{ animationDelay: `${i * 80}ms` }}
                    >
                        <strong>{s.val}</strong>
                        <span>{s.sub}</span>
                    </div>
                ))}
            </div>

            {/* ══════════════════════════════
          3. SERVICE DETAIL SECTIONS
      ══════════════════════════════ */}
            <div className="svc-details" ref={gridRef}>
                {SERVICES.map((svc, i) => {
                    const Illustration = svc.IllustrationComp;
                    const isEven = i % 2 === 0;
                    return (
                        <article
                            key={svc.id}
                            id={svc.id}
                            className={`svc-detail ${isEven ? 'svc-detail--light' : 'svc-detail--cream'} ${gridVisible ? 'sv--in' : ''}`}
                            style={{ animationDelay: `${Math.min(i * 60, 300)}ms` }}
                            aria-labelledby={`svc-h2-${svc.id}`}
                        >
                            {svc.badge && (
                                <div className="svc-detail__badge" aria-label={svc.badge}>
                                    <Sparkles size={11} aria-hidden="true" /> {svc.badge}
                                </div>
                            )}

                            <div className={`svc-detail__grid ${isEven ? '' : 'svc-detail__grid--rev'}`}>

                                {/* Text column */}
                                <div className="svc-detail__text">
                                    <div className="svc-detail__meta">
                                        <span className="svc-detail__label" style={{ color: svc.color }}>{svc.label}</span>
                                        <div className="svc-detail__icon" style={{ background: svc.color }} aria-hidden="true">
                                            <svc.Icon size={22} strokeWidth={1.6} />
                                        </div>
                                    </div>

                                    <h2 id={`svc-h2-${svc.id}`} className="svc-detail__h2">{svc.title}</h2>
                                    <p className="svc-detail__tagline">{svc.tagline}</p>
                                    <p className="svc-detail__desc">{svc.desc}</p>
                                    <p className="svc-detail__long">{svc.longDesc}</p>

                                    {/* Stats row */}
                                    <div className="svc-detail__stats" aria-label={`${svc.title} performance metrics`}>
                                        {svc.stats.map(st => (
                                            <div key={st.label} className="svc-detail__stat">
                                                <strong style={{ color: svc.color }}>{st.val}</strong>
                                                <span>{st.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <h3 className="svc-detail__feat-heading">What's included</h3>
                                    <ul className="svc-detail__features" aria-label={`${svc.title} deliverables`}>
                                        {svc.features.map(f => (
                                            <li key={f.text}>
                                                <span className="svc-detail__feat-icon" style={{ background: `${svc.color}18`, color: svc.color }} aria-hidden="true">
                                                    <f.Icon size={14} strokeWidth={1.7} />
                                                </span>
                                                {f.text}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Process mini-steps */}
                                    <div className="svc-detail__process" aria-label={`${svc.title} process`}>
                                        <h3 className="svc-detail__process-heading">Our process</h3>
                                        <ol className="svc-detail__steps">
                                            {svc.process.map((step, si) => (
                                                <li key={step} style={{ '--step-color': svc.color }}>
                                                    <span className="svc-detail__step-num">{String(si + 1).padStart(2, '0')}</span>
                                                    <span className="svc-detail__step-label">{step}</span>
                                                    {si < svc.process.length - 1 && <ArrowRight size={12} className="svc-detail__step-arrow" aria-hidden="true" />}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>

                                    <Link to="/contact" className="svc-btn svc-btn--color" style={{ '--c': svc.color }}>
                                        Start This Service <ArrowRight size={14} aria-hidden="true" />
                                    </Link>
                                </div>

                                {/* Illustration column */}
                                <div className="svc-detail__visual" aria-hidden="true">
                                    <div className="svc-detail__visual-inner" style={{ '--c': svc.color }}>
                                        <Illustration />
                                        <div className="svc-detail__visual-bg" />
                                    </div>
                                </div>

                            </div>
                        </article>
                    );
                })}
            </div>

            {/* ══════════════════════════════
          4. WHY CHOOSE US
      ══════════════════════════════ */}
            <section className="svc-why" ref={whyRef} aria-labelledby="svc-why-h2">
                <div className="svc-why__watermark" aria-hidden="true">FULL SERVICE</div>
                <div className="svc-container">
                    <header className={`svc-section-header ${whyVisible ? 'sv--in' : ''}`}>
                        <span className="svc-eyebrow svc-eyebrow--light">Why The Scroll Buzz</span>
                        <h2 id="svc-why-h2" className="svc-h2 svc-h2--light">
                            One agency, every channel,<br />zero excuses.
                        </h2>
                        <p className="svc-section-sub svc-section-sub--muted">
                            Most agencies specialise in one lane. We built The Scroll Buzz precisely because
                            integrated strategies consistently outperform siloed ones — and our results prove it.
                        </p>
                    </header>

                    <div className="svc-why__grid">
                        {WHY_ITEMS.map((w, i) => (
                            <article
                                key={w.title}
                                className={`svc-why-card ${whyVisible ? 'sv--in' : ''}`}
                                style={{ animationDelay: `${i * 90}ms` }}
                            >
                                <div className="svc-why-card__icon" aria-hidden="true">
                                    <w.Icon size={20} strokeWidth={1.6} />
                                </div>
                                <h3 className="svc-why-card__title">{w.title}</h3>
                                <p className="svc-why-card__body">{w.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
          5. FAQ — structured data friendly
      ══════════════════════════════ */}
            <section className="svc-faq" ref={faqRef} aria-labelledby="svc-faq-h2">
                <div className="svc-container svc-faq__inner">
                    <header className={`svc-section-header ${faqVisible ? 'sv--in' : ''}`}>
                        <span className="svc-eyebrow svc-eyebrow--center">FAQs</span>
                        <h2 id="svc-faq-h2" className="svc-h2 svc-h2--center">
                            Questions we hear all the time
                        </h2>
                    </header>

                    <dl className={`svc-faq__list ${faqVisible ? 'sv--in' : ''}`}>
                        {FAQS.map((f, i) => (
                            <FAQItem key={i} q={f.q} a={f.a} i={i} />
                        ))}
                    </dl>
                </div>
            </section>

            {/* ══════════════════════════════
          6. CONTACT STRIP
      ══════════════════════════════ */}
            <aside className="svc-contact-strip" aria-label="Contact The Scroll Buzz">
                <div className="svc-container svc-contact-strip__inner">
                    <address className="svc-contact-strip__addr">
                        <a href="mailto:info@thescrollbuzz.in" className="svc-contact-strip__item">
                            <Mail size={13} aria-hidden="true" /> info@thescrollbuzz.in
                        </a>
                        <a href="tel:+919328839591" className="svc-contact-strip__item">
                            <span aria-hidden="true">📞</span> +91 93288 39591
                        </a>
                        <span className="svc-contact-strip__item">
                            <span aria-hidden="true">📍</span>
                            SF-35, Shree Siddheshwar Plaza, New VIP Rd, Vadodara 390019
                        </span>
                    </address>
                </div>
            </aside>

            {/* ══════════════════════════════
          7. CTA
      ══════════════════════════════ */}
            <section className="svc-cta" ref={ctaRef} aria-labelledby="svc-cta-h2">
                <div className="svc-cta__grid-overlay" aria-hidden="true" />
                <div className={`svc-cta__content ${ctaVisible ? 'sv--in' : ''}`}>
                    <div className="svc-cta__stars" aria-label="5 star rating">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FF7A00" stroke="none" aria-hidden="true" />)}
                    </div>
                    <h2 id="svc-cta-h2" className="svc-cta__h2">
                        Ready to build something<br />your competitors can't match?
                    </h2>
                    <p className="svc-cta__sub">
                        Book a free 30-minute strategy session. We'll audit your current digital presence
                        and map out exactly which services will deliver the fastest, most sustainable ROI.
                    </p>
                    <div className="svc-cta__actions">
                        <Link to="/contact" className="svc-cta__btn-white">
                            Book Free Strategy Call <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                        <Link to="/about" className="svc-cta__btn-border">
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}