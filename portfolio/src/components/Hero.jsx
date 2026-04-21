import React from "react";

export default function Hero() {
  const openUrl = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const goTo = (href) => (window.location.href = href);

  const socialLinks = [
    { icon: "/assets/inkedin.png", alt: "LinkedIn", url: "https://linkedin.com/" },
    { icon: "/assets/git.png", alt: "GitHub", url: "https://github.com/" },
    { icon: "/assets/fb.png", alt: "Facebook", url: "https://facebook.com/" },
    { icon: "/assets/yt.png", alt: "YouTube", url: "https://youtube.com/" },
    { icon: "/assets/insta.png", alt: "Instagram", url: "https://instagram.com/" },
  ];

  return (
    <section id="profile">
      <div className="section-container">
        <div className="section__pic-container">
          <div className="profile-orbit">
            <span className="orbit-ring orbit-ring-one" aria-hidden="true" />
            <span className="orbit-ring orbit-ring-two" aria-hidden="true" />
            <span className="orbit-dot orbit-dot-one" aria-hidden="true" />
            <span className="orbit-dot orbit-dot-two" aria-hidden="true" />
            <span className="orbit-dot orbit-dot-three" aria-hidden="true" />
            <div className="profile-image-shell">
              <img
                src="/assets/me.png"
                alt="Dimuth Samarakon profile picture"
                className="profile-image-animated"
              />
            </div>
          </div>
        </div>
        <div className="section__text">
          <p className="section_text_p1">Hello, I'm</p>
          <h1 className="title">Dimuth Samarakoon</h1>
          <p className="section__text__p2">Software Engineering Undergraduate</p>
          <h5 className="fields-text">Fullstack developing &amp; Cybersecurity Enthusiast.</h5>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => openUrl("https://drive.google.com/file/d/15GHnyJi6a4vftevZuG-EWIDINToOflHG/view?usp=sharing")}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => goTo("./#contact")}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            {socialLinks.map((social) => (
              <img
                key={social.alt}
                src={social.icon}
                alt={`My ${social.alt} profile`}
                className="icon"
                onClick={() => openUrl(social.url)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
