'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';

export default function ClientInitializer() {
  useEffect(() => {
    // 2. Typed.js Initialization
    let typedTextInstance: Typed | null = null;
    let typedSkillsInstance: Typed | null = null;
    let typedLogoInstance: Typed | null = null;

    const textEl = document.querySelector('.text');
    if (textEl) {
      typedTextInstance = new Typed('.text', {
        strings: [
          "a Software Engineer.",
          "a Professional Googler.",
          "a Computer Science Student.",
          "a Frontend Developer.",
          "a Backend Developer.",
          "an IOS Developer.",
          "a Production Engineer.",
          "a Deploy and Pray Engr.",
          "a Site Reliability Engr.",
          "a UI / UX Designer.",
          "an AI / ML Engineer.",
          "Unemployed?",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 3000,
        loop: true,
      });
    }

    const text1El = document.querySelector('.text1');
    if (text1El) {
      typedSkillsInstance = new Typed('.text1', {
        strings: [
          "Java.",
          "Python.",
          "HTML.",
          "JavaScript.",
          "TypeScript",
          "CSS.",
          "React.",
          "Node.js.",
          "Express.js.",
          "MySQL.",
          "PHP.",
          "C++.",
          "Swift.",
          "Bootstrap.",
          "API.",
          "React JS.",
          "Redux.",
          "Next JS.",
          "Figma.",
          "UI / UX.",
          "Tailwind.",
          "Auth JS.",
          "OAuth.",
          "Clerk.",
          "NoSQL.",
          "DBMS.",
          "ORM.",
          "AWS.",
          "MongoDB.",
          "Git.",
          "GitHub.",
          "Continuous Integration(CI).",
          "Continuous Delivery(CD).",
          "Test Driven Development(TDD).",
          "Problem Solving.",
          "Artificial Intelligence.",
          "Machine Learning.",
          "SaaS.",
          "Object Oriented Programming.",
          "RESTful APIs.",
          "IOS.",
          "Android.",
          "HTTP.",
          "Xcode.",
        ],
        typeSpeed: 100,
        backSpeed: 70,
        backDelay: 3000,
        loop: true,
      });
    }

    const text2El = document.querySelector('.text2');
    if (text2El) {
      typedLogoInstance = new Typed('.text2', {
        strings: ["Ahsan."],
        typeSpeed: 200,
        backSpeed: 100,
        backDelay: 3000,
        loop: false,
      });
    }

    // 3. Header Sticky Class on Scroll
    const header = document.querySelector("header");
    const handleScrollSticky = () => {
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScrollSticky);
    handleScrollSticky(); // Run initial check

    // 4. Mobile Menu Toggle
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    const handleMenuClick = () => {
      if (menuIcon && navbar) {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("open");
        menuIcon.setAttribute("aria-expanded", String(navbar.classList.contains("open")));
      }
    };

    if (menuIcon) {
      menuIcon.addEventListener("click", handleMenuClick);
    }

    const handleScrollMenuReset = () => {
      if (menuIcon && navbar) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("open");
        menuIcon.setAttribute("aria-expanded", "false");
      }
    };
    window.addEventListener("scroll", handleScrollMenuReset);

    // 5. Email click handler
    const emailLink = document.getElementById("email");
    const handleEmailClick = (e: Event) => {
      e.preventDefault();
      window.location.href = "mailto:sbaseer25@gmail.com";
    };
    if (emailLink) {
      emailLink.addEventListener("click", handleEmailClick);
    }

    // 6. Theme Toggle (Sync with local storage and body class light-mode)
    const themeToggleBtn = document.getElementById("themeToggle1");
    
    // Sync current UI state with localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }

    const handleThemeToggle = () => {
      document.body.classList.toggle("light-mode");
      const isLightMode = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", isLightMode ? "light" : "dark");
    };

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", handleThemeToggle);
    }

    // 7. Scroll indicator progress bar
    const progressBar = document.querySelector(".progress-bar") as HTMLElement;
    const handleScrollProgressBar = () => {
      if (progressBar) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        progressBar.style.width = `${scrolled}%`;
      }
    };
    window.addEventListener("scroll", handleScrollProgressBar);
    handleScrollProgressBar();

    // 8. Skill Cards focused state on scroll
    let skillFocusFrame: number | null = null;
    const updateSkillFocus = () => {
      if (skillFocusFrame !== null) return;

      skillFocusFrame = window.requestAnimationFrame(() => {
        skillFocusFrame = null;
        const skillCards = document.querySelectorAll('.skill-card');
        if (!skillCards.length) return;

      const viewportCenter = window.innerHeight / 2;
      skillCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distFromCenter = Math.abs(viewportCenter - cardCenter);
        const range = window.innerHeight * 0.4; // Area of effect

        if (distFromCenter < range) {
          card.classList.add('focused');
        } else {
          card.classList.remove('focused');
        }
      });
      });
    };

    const skillCardObserver = new MutationObserver(updateSkillFocus);
    skillCardObserver.observe(document.getElementById('main-content') ?? document.body, {
      childList: true,
      subtree: true,
    });
    window.addEventListener('scroll', updateSkillFocus);
    window.addEventListener('resize', updateSkillFocus);
    window.addEventListener('load', updateSkillFocus);
    updateSkillFocus();

    // 9. Reveal timeline entries
    const revealTimelineEntries = () => {
      const entries = document.querySelectorAll('.timeline-entry');
      const windowHeight = window.innerHeight;
      entries.forEach(entry => {
        const entryPosition = entry.getBoundingClientRect().top;
        if (entryPosition < windowHeight - 100) {
          entry.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealTimelineEntries);
    window.addEventListener('load', revealTimelineEntries);
    revealTimelineEntries();


    // 11. Autoplay carousel safeties (handles cases where .grid-auto-md exists, e.g. on other pages)
    const marqueeContainer = document.querySelector('.grid-auto-md');
    let scrollInterval: NodeJS.Timeout;
    let scrollPosition = 0;
    
    if (marqueeContainer) {
      const startAutoplay = () => {
        const containerWidth = marqueeContainer.scrollWidth;
        scrollInterval = setInterval(() => {
          scrollPosition += 200;
          if (scrollPosition >= containerWidth) {
            scrollPosition = 0;
          }
          marqueeContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }, 6000);
      };

      const stopAutoplay = () => {
        clearInterval(scrollInterval);
      };

      marqueeContainer.addEventListener('mouseenter', stopAutoplay);
      marqueeContainer.addEventListener('mouseleave', startAutoplay);
      startAutoplay();

      // Return cleanup function for autoplay
      return () => {
        clearInterval(scrollInterval);
        marqueeContainer.removeEventListener('mouseenter', stopAutoplay);
        marqueeContainer.removeEventListener('mouseleave', startAutoplay);
      };
    }

    // Return cleanup function for listeners and instances
    return () => {
      if (typedTextInstance) typedTextInstance.destroy();
      if (typedSkillsInstance) typedSkillsInstance.destroy();
      if (typedLogoInstance) typedLogoInstance.destroy();

      window.removeEventListener("scroll", handleScrollSticky);
      window.removeEventListener("scroll", handleScrollMenuReset);
      window.removeEventListener("scroll", handleScrollProgressBar);
      window.removeEventListener("scroll", updateSkillFocus);
      window.removeEventListener("resize", updateSkillFocus);
      window.removeEventListener("load", updateSkillFocus);
      skillCardObserver.disconnect();
      if (skillFocusFrame !== null) {
        window.cancelAnimationFrame(skillFocusFrame);
      }
      window.removeEventListener("scroll", revealTimelineEntries);
      window.removeEventListener("load", revealTimelineEntries);
      
      if (menuIcon) {
        menuIcon.removeEventListener("click", handleMenuClick);
      }
      if (emailLink) {
        emailLink.removeEventListener("click", handleEmailClick);
      }
      if (themeToggleBtn) {
        themeToggleBtn.removeEventListener("click", handleThemeToggle);
      }
    };
  }, []);

  return null;
}
