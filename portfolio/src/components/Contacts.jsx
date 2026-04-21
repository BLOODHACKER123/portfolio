import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending message...");

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("Message sent successfully. I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSending(false);
  };

  const contacts = [
    {
      icon: "/assets/email.png",
      label: "Email",
      text: "bloodhacker100@gmail.com",
      href: "mailto:bloodhacker100@gmail.com",
    },
    {
      icon: "/assets/call.png",
      label: "Telephone",
      text: "Call Me",
      href: "+94756019029",
    },
    {
      icon: "/assets/inkedin.png",
      label: "LinkedIn",
      text: "Connect on LinkedIn",
      href: "https://www.linkedin.com/davidworner308",
    },
   
    {
      icon: "/assets/whatsapp.png",
      label: "WhatsApp",
      text: "Chat on WhatsApp",
      href: "https://wa.me/1234567890",
    },
    {
      icon: "/assets/fb.png",
      label: "Facebook",
      text: "Message on Facebook",
      href: "https://www.facebook.com",
    },

  ];

  return (
    <section id="contact">
      <p className="section_text_p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="section-container contact-layout">
        <div className="contact-info-upper-container reveal reveal-delay-1">
          {contacts.map((item) => (
            <article className="contact-info-container" key={item.label}>
              <img src={item.icon} alt={`${item.label} icon`} className="icon contact-icon" />
              <div>
                <p className="contact-label">{item.label}</p>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener">
                  {item.text}
                </a>
              </div>
              
            </article>
          ))}
        </div>

        <div className="contact-form-card reveal reveal-delay-2">
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="form-submit" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
            <p className="form-status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}