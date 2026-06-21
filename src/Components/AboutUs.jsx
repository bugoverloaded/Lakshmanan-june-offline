import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "../assets/img66.png";
import imgh6 from "../assets/imgh6.jpeg";
import imgh8 from "../assets/imgh8.jpg";
import sam1 from "../assets/sam1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const values = [
  {
    icon: "🌿",
    title: "Sustainable Fashion",
    desc: "We believe style and sustainability go hand in hand. Every piece in our collection is thoughtfully sourced with the planet in mind.",
  },
  {
    icon: "✨",
    title: "Premium Quality",
    desc: "From fabric selection to final stitch, we hold every garment to the highest standard so you feel confident wearing it.",
  },
  {
    icon: "💎",
    title: "Curated Collections",
    desc: "Our expert stylists handpick each item to ensure a cohesive, on-trend wardrobe that speaks to every lifestyle.",
  },
  {
    icon: "🤝",
    title: "Customer First",
    desc: "Your satisfaction is our priority. We offer seamless shopping, easy returns, and personal styling support whenever you need it.",
  },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Creative Director",
    bg: "linear-gradient(135deg,#eea2a2,#b49fda)",
    initial: "PS",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Product & Sourcing",
    bg: "linear-gradient(135deg,#57c6e1,#7ac5d8)",
    initial: "AM",
  },
  {
    name: "Nisha Kapoor",
    role: "Lead Stylist & Brand Manager",
    bg: "linear-gradient(135deg,#bbc1bf,#b49fda)",
    initial: "NK",
  },
];

const stats = [
  { number: "10K+", label: "Happy Customers" },
  { number: "500+", label: "Curated Styles" },
  { number: "50+", label: "Brand Partners" },
  { number: "4.9★", label: "Average Rating" },
];

export default function AboutUs() {
  return (
    <div className="about-wrapper overflow-x-hidden">
      {/* ── NAVBAR ─────────────────────────────────────────── */}
      <header className="home-navbar d-flex align-items-center justify-content-between px-4 py-3 sticky-top">
        <div className="d-flex align-items-center">
          <div className="text-center">
            <h1 className="h3 mb-0" style={{ fontFamily: "Times New Roman" }}>
              Welcome to Fashion-Hub
            </h1>
            <p className="small mb-0">Your one-stop e-commerce destination</p>
          </div>
        </div>

        <nav className="d-none d-md-flex align-items-center gap-4">
          <Link to="/" className="text-dark text-decoration-none fw-semibold">Home</Link>
          <Link to="/AboutUs" className="text-dark text-decoration-none fw-semibold">AboutUs</Link>
          <Link to="/Login" className="text-dark text-decoration-none fw-semibold">Login</Link>
          <Link to="/Signup" className="text-dark text-decoration-none fw-semibold">Signup</Link>
        </nav>

        <div className="d-flex align-items-center gap-2">
          <img className="icon-img" src={icon} alt="icon" style={{ width: "40px", height: "40px" }} />
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="position-relative text-white d-flex align-items-center justify-content-center" style={{ minHeight: "70vh", overflow: "hidden" }}>
        <img
          src={imgh8}
          alt="Fashion Hero"
          className="position-absolute w-100 h-100"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div className="position-absolute w-100 h-100" style={{ background: "linear-gradient(135deg,rgba(0,0,0,0.6) 0%,rgba(180,159,218,0.45) 100%)" }} />
        <div className="position-relative text-center px-3" style={{ zIndex: 2, maxWidth: "750px" }}>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="text-uppercase fw-bold mb-2"
            style={{ letterSpacing: "4px", fontSize: "0.85rem", color: "#f5d0d0" }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="display-3 fw-bold mb-4"
            style={{ fontFamily: "Georgia, serif", lineHeight: 1.2 }}
          >
            Redefining Fashion, <br />One Thread at a Time
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="lead mb-4"
            style={{ opacity: 0.9 }}
          >
            Fashion-Hub was born from a passion for effortless style and the belief that every woman deserves to look and feel extraordinary — every single day.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
            <Link to="/" className="btn btn-warning text-white fw-bold px-5 py-2 rounded-pill me-3">
              Shop Now
            </Link>
            <a href="#our-story" className="btn btn-outline-light fw-bold px-5 py-2 rounded-pill">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(to right,#eea2a2 0%,#bbc1bf 19%,#57c6e1 42%,#b49fda 79%,#7ac5d8 100%)" }}>
        <div className="container py-4">
          <div className="row g-3 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="col-6 col-md-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h2 className="fw-bold mb-0" style={{ fontSize: "2rem", fontFamily: "Georgia, serif" }}>{s.number}</h2>
                <p className="mb-0 small fw-semibold text-dark">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ──────────────────────────────────────── */}
      <section id="our-story" className="py-5" style={{ background: "#fdfaf7" }}>
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="position-relative">
                <img
                  src={imgh6}
                  alt="Our Story"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ width: "100%", objectFit: "cover", maxHeight: "500px" }}
                />
                <div
                  className="position-absolute d-flex align-items-center justify-content-center text-white text-center p-3 rounded-4 shadow"
                  style={{
                    bottom: "-20px",
                    right: "-20px",
                    width: "140px",
                    height: "140px",
                    background: "linear-gradient(135deg,#b49fda,#eea2a2)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  <div>
                    <div className="fw-bold" style={{ fontSize: "1.8rem" }}>5+</div>
                    <div className="small">Years of Style</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-uppercase fw-bold mb-2" style={{ letterSpacing: "3px", color: "#b49fda", fontSize: "0.8rem" }}>
                Who We Are
              </p>
              <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
                A Sanctuary for the <span style={{ color: "#b49fda" }}>Modern Woman</span>
              </h2>
              <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                Founded in 2019, Fashion-Hub started as a small boutique with a big dream — to make premium, trend-forward fashion accessible to every woman. What began in a cozy studio has grown into a thriving online destination loved by thousands.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
                We partner with ethical artisans and sustainable suppliers to bring you collections that are not just beautiful, but responsibly made. Every piece tells a story — and we want that story to be yours.
              </p>
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: "3px", height: "60px", background: "linear-gradient(#b49fda,#eea2a2)", borderRadius: "10px" }} />
                <p className="fst-italic text-muted mb-0" style={{ lineHeight: 1.7 }}>
                  "Fashion is not just clothing — it's a language. We help you speak it fluently."
                  <br />
                  <strong className="text-dark">— Priya Sharma, Founder</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ─────────────────────────────────────── */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container py-4">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-uppercase fw-bold mb-2" style={{ letterSpacing: "3px", color: "#b49fda", fontSize: "0.8rem" }}>
              What Drives Us
            </p>
            <h2 className="display-5 fw-bold" style={{ fontFamily: "Georgia, serif" }}>Our Core Values</h2>
          </motion.div>
          <div className="row g-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="col-sm-6 col-lg-3"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div
                  className="h-100 p-4 rounded-4 text-center about-value-card"
                  style={{
                    border: "1px solid #f0e8ff",
                    background: "linear-gradient(160deg,#fdf9ff,#fff)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <div className="mb-3" style={{ fontSize: "2.5rem" }}>{v.icon}</div>
                  <h5 className="fw-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>{v.title}</h5>
                  <p className="text-muted mb-0 small" style={{ lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ─────────────────────────────────── */}
      <section
        className="py-5 text-white text-center position-relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#b49fda 0%,#57c6e1 50%,#eea2a2 100%)" }}
      >
        <motion.div
          className="container position-relative"
          style={{ zIndex: 2 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-uppercase fw-bold mb-2" style={{ letterSpacing: "3px", fontSize: "0.8rem", opacity: 0.85 }}>
            Our Mission
          </p>
          <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Style That Empowers
          </h2>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "650px", opacity: 0.95 }}>
            We are on a mission to help every woman curate a wardrobe that is authentically hers — blending confidence, comfort, and style without compromise.
          </p>
          <Link to="/Signup" className="btn btn-light fw-bold px-5 py-2 rounded-pill text-dark">
            Join Fashion-Hub
          </Link>
        </motion.div>
      </section>

      {/* ── MEET THE TEAM ──────────────────────────────────── */}
      <section className="py-5" style={{ background: "#fdfaf7" }}>
        <div className="container py-4">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-uppercase fw-bold mb-2" style={{ letterSpacing: "3px", color: "#b49fda", fontSize: "0.8rem" }}>
              The Visionaries
            </p>
            <h2 className="display-5 fw-bold" style={{ fontFamily: "Georgia, serif" }}>Meet the Team</h2>
          </motion.div>
          <div className="row g-4 justify-content-center">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="col-sm-6 col-lg-4"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="text-center p-4 rounded-4 h-100 about-team-card" style={{ background: "#fff", border: "1px solid #f0e8ff", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 text-white fw-bold"
                    style={{ width: "90px", height: "90px", background: member.bg, fontSize: "1.5rem", fontFamily: "Georgia, serif" }}
                  >
                    {member.initial}
                  </div>
                  <h5 className="fw-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>{member.name}</h5>
                  <p className="text-muted small mb-3">{member.role}</p>
                  <div className="d-flex justify-content-center gap-3">
                    {["instagram", "linkedin", "twitter"].map((s) => (
                      <a key={s} href="#" className="text-muted" style={{ transition: "color 0.2s" }}>
                        <i className={`bi bi-${s}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ────────────────────────────────────── */}
      <section
        className="py-5 text-white position-relative d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        <img src={sam1} alt="" className="position-absolute w-100 h-100" style={{ objectFit: "cover", opacity: 0.35 }} />
        <div className="position-absolute w-100 h-100" style={{ background: "rgba(0,0,0,0.55)" }} />
        <motion.div
          className="container text-center position-relative"
          style={{ zIndex: 2, maxWidth: "750px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ fontSize: "3rem", color: "#b49fda", lineHeight: 1 }}>"</div>
          <p className="lead fst-italic mb-4" style={{ lineHeight: 1.9 }}>
            Fashion-Hub transformed how I think about getting dressed. It's not just a store — it's a movement. The quality is incredible, the curation is impeccable, and I always feel seen.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <div className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: "50px", height: "50px", background: "linear-gradient(135deg,#b49fda,#eea2a2)", fontFamily: "Georgia, serif" }}>
              S
            </div>
            <div className="text-start">
              <div className="fw-bold">Samantha Rhodes</div>
              <div className="small" style={{ color: "#f5d0d0" }}>Loyal Customer since 2020</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-5 bg-white text-center">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>
            Ready to Elevate Your Style?
          </h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "500px" }}>
            Join thousands of women who trust Fashion-Hub for their wardrobe essentials and statement pieces.
          </p>
          <Link to="/" className="btn btn-warning text-white fw-bold px-5 py-2 rounded-pill me-3 mb-2">
            Shop Collection
          </Link>
          <Link to="/Signup" className="btn btn-outline-secondary fw-bold px-5 py-2 rounded-pill mb-2">
            Create Account
          </Link>
        </motion.div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2025 Fashion-Hub. All rights reserved.</p>
      </footer>

      <style>{`
        .about-value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(180,159,218,0.2) !important;
        }
        .about-team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(180,159,218,0.18) !important;
        }
      `}</style>
    </div>
  );
}