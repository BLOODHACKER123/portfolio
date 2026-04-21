import React from "react";

export default function About() {
  const highlights = [
    "Full Stack Development",
    "Cybersecurity",
    "Cloud Basics",
    "UI-Focused Engineering",
  ];

  return (
    <section id="about">
      <p className="section_text_p1">Get to know more</p>
      <h1 className="title">About Me</h1>
      <div className="section-container about-layout">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <div className="details about-photo-card">
                <img
                  className="about-pic"
                  src="/assets/aboutpic.png"
                  alt="About profile"
                />
              </div>
            </div>

            <div className="details-container">
              <div className="details about-content-card">
                <h2 className="about-content-title">Building practical software with clean experiences</h2>
                <div className="aboutme1">
                  <p>
                    Hello! I'm Dimuth, currently a 2nd-year Software Engineering
                    undergraduate at the University of Kelaniya. My studies have
                    given me a strong foundation in software development principles
                    and a keen interest in building technology that makes an
                    impact.
                  </p>
                  <p>
                    As a Full Stack Developer, I enjoy working across both frontend
                    and backend development. This passion enables me to design
                    seamless, interactive user interfaces while also creating
                    efficient and scalable server-side systems that power modern web
                    applications.
                  </p>
                </div>
                <div className="about-highlights" aria-label="Core focus areas">
                  {highlights.map((item) => (
                    <span key={item} className="about-highlight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#education")}
      />
    </section>
  );
}
