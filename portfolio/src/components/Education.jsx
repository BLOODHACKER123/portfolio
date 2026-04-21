import React from "react";

export default function Education() {
  const timelineCards = [
    {
      title: "BSc (Hons) Software Engineering",
      year: "2024 – Present",
      institution: "University of Kelaniya · Faculty of Science",
      description:
        "Cybersecurity and full-stack development focused undergraduate program exploring resilient cloud infrastructures, human-centered UX, and industry-grade DevSecOps workflows.",
      tags: ["Cur GPA", "Cybersecurity", "Full-stack"],
    },
    {
      title: "G.C.E A / L — Physical Science",
      year: "2023-2024",
      institution: "Pinnawala Central College · Sri Lanka",
      description:
        "Completed Mathematics, Chemistry, and Physics with distinction, achieving a Z-Score of 1.5382 while running STEM outreach initiatives for juniors.",
      tags: ["Z-Score 1.5382", "Robotics"],
    },
  ];

  const certifications = [
    {
      title: "AWS Well Architectured Foundation Certificate",
      meta: "AWS · 2026",
      tag: "AWS · Cloud Architecture",
    },
    {
      title: "AWS Networking Basics",
      meta: "AWS · 2026",
      tag: "Cloud computing · Networking",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      meta: "Amazon Web Services · 2026",
      tag: "Architecting · Billing · Security",
    },
    {
      title: "Introduction To Cyber Security",
      meta: "Simple Learn SkilUp · 2026",
      tag: "Cybersecurity · Networking",
    },
  ];

  const badges = [
    { title: "Introduction To AI", meta: "Microsoft · 2026" },
    { title: "Introduction To Generative AI and Agents", meta: "Microsoft · 2026" },
    { title: "Microsoft Learn Cloud Skills", meta: "Microsoft · 2026" },
    { title: "Introduction to Cloud Infrastructure", meta: "AWS · 2026" },
    { title: "Introduction To Windows IOT", meta: "Microsoft · 2026" },
    { title: "Introduction To Accessibility", meta: "Microsoft · 2026" },
    { title: "Introduction to Devops", meta: "Microsoft · 2026" },
  ];

  return (
    <section id="education">
      <p className="section_text_p1">My Journey</p>
      <h1 className="title">Education &amp; Credentials</h1>
      <div className="section-container stack education-layout">
        <div className="education-timeline">
          {timelineCards.map((card, idx) => (
            <article
              key={idx}
              className="details-container timeline-card"
            >
              <div className="timeline-header">
                <h3 className="text-xl">{card.title}</h3>
                <span className="text-year">{card.year}</span>
              </div>
              <p className="timeline-meta">{card.institution}</p>
              <div className="timeline-body">
                <p className="text-muted-foreground">{card.description}</p>
                <div className="timeline-tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="credential-section">
          <div className="section-header">
            <h3 className="text-xl">Certifications</h3>
            <p className="text-muted-foreground1">
              Selected professional credentials and nano degrees
            </p>
          </div>
          <div className="carousel-shell" aria-label="Certifications carousel">
            <div className="carousel-track animate-carousel-slow">
              {[...certifications, ...certifications].map((cert, idx) => (
                <article key={`${cert.title}-${idx}`} className="carousel-card">
                  <p className="credential-title">{cert.title}</p>
                  <p className="credential-meta">{cert.meta}</p>
                  <span className="credential-tag">{cert.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="credential-section">
          <div className="section-header">
            <h3 className="text-xl">Badges &amp; Micro-Credentials</h3>
            <p className="text-muted-foreground1">
              Community recognitions and skill challenges
            </p>
          </div>
          <div className="carousel-shell" aria-label="Badges carousel">
            <div className="carousel-track animate-carousel-fast">
              {[...badges, ...badges].map((badge, idx) => (
                <article key={`${badge.title}-${idx}`} className="carousel-card">
                  <p className="credential-title">{badge.title}</p>
                  <p className="credential-meta">{badge.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#skills")}
      />
    </section>
  );
}
