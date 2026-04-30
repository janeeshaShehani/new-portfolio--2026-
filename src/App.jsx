import { useState, useEffect, useRef } from "react";
import "./App.css";
import { NAV_LINKS, TECH_TAGS, SKILLS, PROJECTS, VOLUNTEERING } from "./data";
import sun from '../public/images/sun.png';
import moon from '../public/images/moon.png';
import Linkedin from '../public/images/linkedin.png';
import Location from '../public/images/location.png';
import Email from '../public/images/email.png';
import emailjs from '@emailjs/browser';


// ── COMPONENTS ───────────────────────────────────────────────────────────────

function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--solid" : ""}${dark ? " dark" : ""}`}>
      <div className="navbar__logo" onClick={() => scrollTo("home")}>
        <span className="logo-badge">J</span>
        <span className="logo-name">Janeesha</span>
      </div>

      <ul className={`navbar__links${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <li key={l}>
            <button onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <button className="btn-icon" onClick={toggleDark} title="Toggle theme" aria-label="Toggle theme">
          {dark ? <img src={sun} alt="Sun" /> : <img src={moon} alt="Moon" />}
        </button>
        <a href="#" className="btn btn--outline btn--sm" download>
          Download CV
        </a>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__left">
        <span className="hero__eyebrow">Welcome to my portfolio</span>
        <h1 className="hero__heading">
          Hi, I'm <span className="gradient-text">Janeesha Shehani</span> 
        </h1>
        <h2 className="hero__sub">AI &amp; Full‑Stack Developer</h2>
        <p className="hero__tagline">
          I craft intelligent web experiences — blending clean code with machine
          learning to build products that actually matter.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects").scrollIntoView({ behavior: "smooth" }); }}>
            View Projects
          </a>
          <a href="#" className="btn btn--outline" download>
            Download CV
          </a>
        </div>
        <div className="hero__tags">
          {TECH_TAGS.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__image-wrap">
          <div className="hero__image-ring" />
          <img
            src="/images/img1.png"
            alt="Janeesha"
            className="hero__image"
          />
          <div className="hero__badge hero__badge--tl">
            <span>🎓</span> CS Undergrad
          </div>
          <div className="hero__badge hero__badge--br">
            <span>💼</span> Open to Work
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

function About() {

  return (
    <section id="about" className="about section">
      <div className="about__image-col">
        <div className="about__image-frame">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80"
            alt="About"
          />
          <div className="about__image-accent" />
        </div>
      </div>

      <div className="about__content">
        <span className="section-label">About Me</span>
        <h2 className="section-heading">Passionate about building things <em>with purpose</em></h2>
        <p className="about__text">
          I'm a Computer Science undergraduate based in Colombo, Sri Lanka, specialising
          in AI and full-stack development. I love turning complex problems into elegant,
          user-friendly solutions — whether that's a machine-learning pipeline or a polished
          React interface.
        </p>
        <p className="about__text">
          When I'm not coding, you'll find me mentoring student developers, contributing to
          open-source, or exploring the latest breakthroughs in generative AI.
        </p>

        
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-header">
        <span className="section-label">Expertise</span>
        <h2 className="section-heading">Skills &amp; Technologies</h2>
        <p className="section-sub">A curated toolkit I reach for on every project</p>
      </div>

      <div className="skills__grid">
        {Object.entries(SKILLS).map(([cat, items]) => (
          <div key={cat} className="skill-card">
            <h3 className="skill-card__title">{cat}</h3>
            <ul className="skill-card__list">
              {items.map((s) => (
                <li key={s} className="skill-pill">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-header">
        <span className="section-label">Work</span>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-sub">Things I've designed, built, and shipped</p>
      </div>

      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <article key={p.title} className="project-card">
            <div className="project-card__img-wrap">
              <img src={p.image} alt={p.title} className="project-card__img" />
              <div className="project-card__overlay" />
            </div>
            <div className="project-card__body">
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span key={t} className="tag tag--sm">{t}</span>
                ))}
              </div>
              <div className="project-card__actions">
                <a href="#" className="btn btn--primary btn--sm">GitHub →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Volunteering() {
  return (
    <section id="volunteering" className="volunteering section">
      <div className="section-header">
        <span className="section-label">Community</span>
        <h2 className="section-heading">Volunteering</h2>
        <p className="section-sub">Giving back to the tech community</p>
      </div>

      <div className="vol__grid">
        {VOLUNTEERING.map((v) => (
          <div key={v.org} className="vol-card">
            <div className="vol-card__body">
              <span className="vol-card__year">{v.year}</span>
              <h3 className="vol-card__org">{v.org}</h3>
              <span className="vol-card__role">{v.role}</span>
              <p className="vol-card__desc">{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("https://formspree.io/f/xpqbzark", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  } else {
    alert("Something went wrong");
  }
};

  return (
    <section id="contact" className="contact section">
      <div className="section-header">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-heading">Let's Work Together</h2>
        <p className="section-sub">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="contact__layout">
        <div className="contact__info">
          <div className="contact__info-item">
            <span className="contact__info-icon"><img src={Email} alt="Email" /></span>
            <div>
              <strong>Email</strong>
              <p>shehanijaneesha507@gmail.com</p>
            </div>
          </div>
          <div className="contact__info-item">
            <span className="contact__info-icon"><img src={Location} alt="Location" /></span>
            <div>
              <strong>Location</strong>
              <p>No:463/A Galapatha, Wadumulla, Bentota</p>
            </div>
          </div>
          <div className="contact__info-item">
            <span className="contact__info-icon"><img src={Linkedin} alt="LinkedIn" /></span>
            <div>
              <strong>LinkedIn</strong>
              <p>https://www.linkedin.com/in/janeesha-divyanjalee-b3a841355/</p>
            </div>
          </div>
          <div className="contact__socials">
            {["GitHub", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="social-btn">{s}</a>
            ))}
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {sent && (
            <div className="form-success">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" placeholder="your@email.com"
                value={form.email} onChange={handleChange} required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message" rows={5} placeholder="Tell me about your project..."
              value={form.message} onChange={handleChange} required
            />
          </div>
          <button type="submit" className="btn btn--primary btn--full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <span className="logo-badge">J</span>
          <span className="logo-name">Janeesha</span>
        </div>
        <p className="footer__copy">© 2025 Janeesha. Designed &amp; built with </p>
        <div className="footer__links">
          {["GitHub", "LinkedIn"].map((s) => (
            <a key={s} href="#">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={`app${dark ? " dark" : ""}`}>
      <Navbar dark={dark} toggleDark={() => setDark((d) => !d)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
}
