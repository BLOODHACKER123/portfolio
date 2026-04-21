
import React from "react";

export default function Footer() {
  const navItems = ["About", "Education", "Skills", "Projects", "Blogs", "Contact"];

  return (
    <footer id="footer">
      <nav>
        <div className="nav-links-container">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `#${item.toLowerCase()}`;
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
      <p>&copy; {new Date().getFullYear()} Dimuth Samarakoon. All rights reserved.</p>
    </footer>
  );
}
