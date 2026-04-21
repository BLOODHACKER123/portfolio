import React from "react";

export default function Skills() {
  const frontendSkills = [
    { icon: "/assets/checkmark.png", tech: "/assets/html.png", name: "Html" },
    { icon: "/assets/checkmark.png", tech: "/assets/css.png", name: "CSS" },
    { icon: "/assets/checkmark.png", tech: "/assets/js.png", name: "JS" },
    { icon: "/assets/checkmark.png", tech: "/assets/java.png", name: "Java" },
    { icon: "/assets/checkmark.png", tech: "/assets/git1.png", name: "C" },
  ];

  const backendSkills = [
    { icon: "/assets/checkmark.png", tech: "/assets/sql.png", name: "MySQL" },
    { icon: "/assets/checkmark.png", tech: "/assets/git1.png", name: "Git" },
  ];

  const aiTools = [
    "/assets/gemini.png",
    "/assets/chatgpt.png",
    "/assets/perplexity.png",
    "/assets/claude.png",
    "/assets/github.png",
    "/assets/leonardo.png",
    "/assets/midjourney.jpg",
  ];

  return (
    <section id="skills">
      <p className="section_text_p1">Explore my</p>
      <h1 className="title">Skills</h1>
      <div className="section-container stack">
        <div className="experience-details-container">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend &amp; Languages</h2>
            <div className="article-container">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="skills-article">
                  <img
                    src={skill.icon}
                    alt="checkmark icon"
                    className="icon"
                  />
                  <img src={skill.tech} alt={`${skill.name} icon`} className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend &amp; Tools</h2>
            <div className="article-container">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="skills-article">
                  <img
                    src={skill.icon}
                    alt="checkmark icon"
                    className="icon"
                  />
                  <img src={skill.tech} alt={`${skill.name} icon`} className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              ))}
              <div className="skills-article ai-tools-article">
                <div className="ai-tools-icons">
                  <img
                    src="/assets/checkmark.png"
                    alt="checkmark icon"
                    className="icon"
                  />
                  {aiTools.map((tool) => (
                    <img
                      key={tool}
                      src={tool}
                      alt="AI Tool icon"
                      className="icon"
                    />
                  ))}
                </div>
                <h3>AI Tools</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
}