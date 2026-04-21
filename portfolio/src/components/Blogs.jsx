import React from "react";

export default function Blogs() {
  const blogPosts = [
    {
      category: "Engineering",
      date: "Mar 2026",
      title: "Importance of Diagrams",
      image: "/assets/diagrams.png",
      link: "https://medium.com/@davidworner308/importance-of-diagrams-755b1cfc76e0",
    },
    {
      category: "tech",
      date: "Dec 2025",
      title: "Performance Improvement of Optical Isolators",
      image: "/assets/education.png",
      link: "https://medium.com/@davidworner308/performance-improvement-of-optical-isolators-using-statistical-quality-tools-5e4b8420c74e",
    },
    {
      category: "Cyber security",
      date: "Jun 2025",
      title: "CIA Triad",
      image: "/assets/cia.png",
      link: "https://medium.com/@davidworner308/the-cia-triad-the-backbone-of-cybersecurity-c3da2ac43d0b",
    },
  ];

  return (
    <section id="blogs">
      <p className="section_text_p1">Writing Desk</p>
      <h1 className="title">Latest Blogs</h1>
      <div className="section-container stack blog-layout">
        <div className="blog-intro">
          <h3>Notes from the build log</h3>
          <p className="text-muted-foreground">
            I share posts about important things about IT and Tech and community
            stories every other week. Here are a few highlights.
          </p>
          <a
            className="btn btn-outline"
            href="https://medium.com/@davidworner308/"
            target="_blank"
            rel="noreferrer"
          >
            View all posts
          </a>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="blog-card">
              <header>
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </header>
              <h3>{post.title}</h3>
              <div
                className="blog-card-thumb"
                style={{ backgroundImage: `url('${post.image}')` }}
              ></div>
              <a
                className="blog-link"
                href={post.link}
                target="_blank"
                rel="noreferrer"
              >
                Continue reading →
              </a>
            </article>
          ))}
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
