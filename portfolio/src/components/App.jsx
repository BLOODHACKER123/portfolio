import { useEffect, useState } from 'react';
import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Blogs from './Blogs';
import Projects from './Projects';
import Contact from './Contacts';
import Footer from './Footer';
import BackToTop from './BackToTop';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return 'dark';
  });

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar isDark={theme === 'dark'} onThemeToggle={handleThemeToggle} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Blogs />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
