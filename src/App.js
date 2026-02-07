import React, { useEffect, useState, useRef, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import TextRoller from './components/TextRoller/TextRoller';
import ScrollNav from './components/ScrollNav/ScrollNav';
import mouse from "./Assets/mouse.png"
import Lenis from "lenis";

function App() {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const sections = React.useMemo(() => [
    { id: "home", ref: heroRef },
    { id: "about", ref: aboutRef },
    { id: "services", ref: servicesRef },
    { id: "portfolio", ref: portfolioRef },
    { id: "contact", ref: contactRef },
    { id: "footer", ref: footerRef }
  ], []);
  const lenisRef = useRef();

  const [showScrollbar, setShowScrollbar] = useState(false);
  const [showMouse, setShowMouse] = useState(false);
  const textRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    const animationId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowScrollbar(true)
    }, 5500);
  })

  useEffect(() => {
    const textCompleteTime = 3000;
    setTimeout(() => {
      setShowMouse(true);
    }, textCompleteTime);

    const fadeDelay = textCompleteTime + 1500;
    setTimeout(() => {
      setFadeOut(true);
    }, fadeDelay);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((sec, index) => {
      const element = sec.ref.current;
      if (!element) return;

      const { offsetTop, offsetHeight } = element;

      // LAST SECTION FIX: If user is near the very bottom, highlight footer automatically
      if (index === sections.length - 1) {
        const bottomOffset = document.documentElement.scrollHeight - window.innerHeight - 10;
        if (window.scrollY >= bottomOffset) {
          setActiveIndex(index);
          return;
        }
      }

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveIndex(index);
      }
    });
  }, [sections]);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div className={`abs_ani_con ${showScrollbar ? "show-scrollbar" : "hide-scrollbar"} ${fadeOut ? 'fade-out' : ''}`}>

        <TextRoller finalText="The Scroll Buzz" duration={60} ref={textRef} />

        <div className={`mouse-wrapper ${showMouse ? 'visible' : ''}`}>
          <img src={mouse} alt="Scroll prompt" className="mouse-icon" />
        </div>
        <div className="absolute_animation_container_left"></div>
        <div className="absolute_animation_container_right"></div>
      </div>

      {showScrollbar && (
        <ScrollNav
          activeIndex={activeIndex}
          sections={sections}
        />)
      }

      <div className={`app ${showScrollbar ? "show-scrollbar" : "hide-scrollbar"}`}>
        <Navbar sections={sections} />
        <section ref={sections[0].ref}><Hero /></section>
        {/* <div className='test'> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur necessitatibus mollitia velit fugit odio qui assumenda aliquid eveniet nam hic omnis, ipsum repudiandae nisi, nulla exercitationem? Numquam, a. Nostrum in debitis dolore inventore doloremque unde laboriosam voluptatum perferendis, ipsa magni expedita eos facere voluptates! Quo facilis iusto ex quam voluptate explicabo quod porro reiciendis. Officiis quo facere nihil vitae accusantium nam veritatis excepturi repellendus! Dolore dolor mollitia at sed soluta facere, debitis dolorum quisquam voluptatum provident dolores veniam rem cupiditate, error nobis libero non autem, nisi earum eius suscipit? Ea totam quae distinctio voluptates saepe velit quasi illum, molestiae optio veniam incidunt culpa laboriosam odit autem assumenda cum, labore possimus ipsum. Minima at deserunt vero numquam porro dicta unde incidunt. Sint laborum beatae rem fugiat omnis amet at consequuntur, nesciunt blanditiis nihil necessitatibus ex repellendus vero eaque doloribus praesentium nemo exercitationem aliquid libero officia voluptatibus, asperiores quis? At odit incidunt magni, voluptatum molestias officiis et possimus dolores minima fugiat ab reprehenderit aspernatur ullam sed fuga fugit rerum quisquam unde amet quibusdam voluptas facilis quidem? Id et eos similique accusantium earum ea consequatur quis consectetur, nobis delectus distinctio blanditiis itaque maxime laborum tempore? Veritatis laborum quos molestias pariatur, nesciunt qui beatae nulla aliquid a accusamus! Magnam libero delectus, id nemo, quidem debitis nam enim quae quam accusamus accusantium tenetur amet dolor sapiente illo? Sapiente odio officiis ut tempore, dignissimos, obcaecati ullam perferendis quas dolores error nam! Reprehenderit, adipisci ullam tempora temporibus consectetur omnis voluptatum explicabo sapiente nostrum ipsum quis expedita quia corrupti est nam quisquam repellendus dolores. Deserunt nulla modi ratione cum a repudiandae consequatur molestias dolores temporibus obcaecati nisi ducimus saepe, maxime deleniti culpa iure maiores nihil necessitatibus quis. Debitis fuga cumque dolorem, nesciunt accusamus eum omnis vel dolore architecto soluta quia aspernatur rem quae laudantium aliquam voluptatem similique? </p></div> */}
        <section ref={sections[1].ref}><About /></section>
        <section ref={sections[2].ref}><Services /></section>
        <section ref={sections[3].ref}><Portfolio /></section>
        <section ref={sections[4].ref}><Contact /></section>
        <section ref={sections[5].ref}><Footer /></section>
        {/* <WavyText /> */}
      </div>
    </>
  );
}

export default App;
