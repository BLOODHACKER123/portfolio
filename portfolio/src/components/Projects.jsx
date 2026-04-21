import React, { useRef } from "react";

export default function Projects() {
  const trackRef = useRef(null);

  const scrollProjects = (direction) => {
    if (!trackRef.current) return;
    const amount = Math.round(trackRef.current.clientWidth * 0.85);
    trackRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      imgSrc: "/assets/me.png",
      title: "Portfolio Website",
      description:
        "A responsive React portfolio with animated sections, smooth navigation, and polished component architecture.",
      githubLink: "https://github.com/BLOODHACKER123",
      visitLink: "#",
      metrics: ["React + Vite", "Responsive UI", "Component-based"],
    },
    {
      imgSrc: "",
      title: "",
      description:
        "",
      githubLink: "https://github.com/BLOODHACKER123",
      visitLink: "#",
      metrics: ["JavaScript", "UI/UX", "Productivity"],
    },
    {
      imgSrc: "",
      title: "",
      description:
        "",
      githubLink: "https://github.com/BLOODHACKER123",
      visitLink: "#",
      metrics: ["Security", "Education", "Web App"],
    },
    {
      imgSrc: "",
      title: "",
      description:
        "",
      githubLink: "https://github.com/BLOODHACKER123",
      visitLink: "#",
      metrics: ["Dashboard", "React", "State Management"],
    },
    {
      imgSrc: "",
      title: "",
      description:
        "",
      githubLink: "https://github.com/BLOODHACKER123",
      visitLink: "#",
      metrics: ["AI Tools", "Frontend", "Automation"],
    },
    {
      imgSrc: "",
      title: "",
      description:
        "",
      githubLink: "https://github.com/BLOODHACKER123",
      visitLink: "#",
      metrics: ["MySQL", "CRUD", "Reporting"],
    },
  ];

  return (
    <section id="projects">
      <p className="section_text_p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="section-container stack projects-layout">
        <div className="section-header carousel-header">
          <div>
            <p className="text-muted-foreground">Scroll through featured builds</p>
          </div>
          <div className="carousel-controls" aria-label="Project carousel controls">
            <button
              type="button"
              className="carousel-btn"
              aria-label="Previous projects"
              onClick={() => scrollProjects("prev")}
            >
              &#8249;
            </button>
            <button
              type="button"
              className="carousel-btn"
              aria-label="Next projects"
              onClick={() => scrollProjects("next")}
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className="carousel-shell" aria-label="Projects carousel">
          <div className="carousel-track manual-carousel projects-carousel-track" ref={trackRef}>
            {projects.map((project) => (
              <article key={project.title} className="carousel-card project-carousel-card">
                <img src={project.imgSrc} alt={project.title} className="project-carousel-image" />
                <h2 className="about-title">{project.title}</h2>
                <p className="text-muted-foreground">{project.description}</p>
                <ul className="project-metrics">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="timeline-tag">
                      {metric}
                    </li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a className="btn btn-color-2" href={project.githubLink} target="_blank" rel="noreferrer noopener">
                    GitHub
                  </a>
                  <a className="btn btn-color-1" href={project.visitLink}>
                    Visit Site
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
}
