import React, { useEffect, useState } from "react";

export default function Navbar({ isDark = false, onThemeToggle = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnDesktop);
    return () => window.removeEventListener("resize", closeMenuOnDesktop);
  }, []);

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Dimuth Samarakon</div>
        <div className="nav-actions">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="theme-toggle"
            type="button"
            aria-pressed={isDark}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onThemeToggle}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      <nav id="hamburger-nav" aria-label="Mobile navigation">
        <div>
          <div className="logo">Dimuth Samarakon</div>
          <div className="hamburger-menu">
            <button
              type="button"
              className={`hamburger-icon ${menuOpen ? "open" : ""}`}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              type="button"
              aria-pressed={isDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => {
                onThemeToggle();
                setMenuOpen(false);
              }}
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
