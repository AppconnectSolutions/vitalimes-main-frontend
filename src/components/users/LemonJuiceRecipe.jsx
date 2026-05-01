import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NannariSection() {

  const navigate = useNavigate();

  // 🔥 Scroll Progress
  const { scrollYProgress } = useScroll();

  // 🔥 Parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="nannari-page">

      {/* 🔥 PROGRESS BAR */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 🔥 HERO */}
      <section className="hero">

        <div className="hero-inner">

          {/* LEFT */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Instant Drink Nannari Lemon Juice Powder</h1>

            <p className="subtitle">
              Mix 31g with 200ml cold water to enjoy a refreshing,
              naturally cooling drink crafted for daily wellness.
            </p>

            <div className="list">
              <p>Suitable for use in</p>
              <ul>
                <li>Catering & Restaurants</li>
                <li>Hotels & Water Halls</li>
                <li>Schools & Colleges</li>
                <li>Home consumption</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="hero-right"
            style={{ y }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src="/assets/images/nannari.png" alt="nannari" />

            <button
              className="shop-btn"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </motion.div>

        </div>

        {/* 🔥 BACKGROUND GLOW */}
        <div className="glow"></div>

      </section>

      {/* 🔥 BENEFITS */}
      <section className="benefits">

        <h2>Benefits</h2>

        <div className="grid">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* CSS */}
      <style>{`

/* PAGE */
.nannari-page {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg,#f6f8f3,#eef5e9);
}

/* 🔥 PROGRESS BAR */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(to right,#4caf50,#ffc107);
  transform-origin: left;
  z-index: 999;
}

/* HERO */
.hero {
  padding: 100px 20px;
  position: relative;
}

.hero-inner {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 2;
}

/* LEFT */
.hero-left {
  flex: 1;
}

.hero-left h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #1b1b1b; /* 🔥 FIXED VISIBILITY */
}

.subtitle {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 30px;
}

.list p {
  font-weight: 600;
  margin-bottom: 10px;
}

.list ul {
  padding-left: 18px;
  color: #555;
  line-height: 1.9;
}

/* RIGHT */
.hero-right {
  text-align: center;
}

.hero-right img {
  width: 380px;
  border-radius: 25px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.2);
  transition: 0.4s;
}

.hero-right img:hover {
  transform: scale(1.05);
}

/* BUTTON */
.shop-btn {
  margin-top: 25px;
  padding: 14px 32px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(45deg,#4caf50,#81c784);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.shop-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

/* 🔥 BACKGROUND GLOW */
.glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(76,175,80,0.25), transparent);
  top: -100px;
  right: -100px;
  filter: blur(120px);
}

/* BENEFITS */
.benefits {
  max-width: 1200px;
  margin: 80px auto;
  padding: 20px;
}

.benefits h2 {
  text-align: center;
  margin-bottom: 40px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 25px;
}

/* CARD */
.card {
  position: relative;
  background: #fff;
  padding: 25px;
  border-radius: 18px;
  overflow: hidden;
}

/* 🔥 GRADIENT BORDER */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 2px;
  border-radius: 18px;
  background: linear-gradient(120deg,#4caf50,#ffc107);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
}

/* HOVER */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

/* RESPONSIVE */
@media(max-width:900px){
  .grid {
    grid-template-columns: repeat(2,1fr);
  }

  .hero-inner {
    flex-direction: column;
    text-align: center;
  }

  .hero-right img {
    width: 100%;
  }
}

@media(max-width:600px){
  .grid {
    grid-template-columns: 1fr;
  }
}

      `}</style>
    </div>
  );
}

/* DATA */
const benefits = [
  { title: "Natural Cooling", desc: "Regulates body temperature and prevents dehydration." },
  { title: "Improves Digestion", desc: "Supports digestion and relieves bloating." },
  { title: "Blood Purifier", desc: "Improves circulation and overall health." },
  { title: "Boosts Energy", desc: "Provides natural energy and refreshment." },
  { title: "Skin Health", desc: "Promotes glowing and healthy skin." },
  { title: "Supports Liver", desc: "Helps improve internal organ function." }
];