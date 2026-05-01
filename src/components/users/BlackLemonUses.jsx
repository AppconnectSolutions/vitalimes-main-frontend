import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaLeaf,
  FaHeartbeat,
  FaAppleAlt,
  FaCheckCircle
} from "react-icons/fa";

export default function BlackLemonUses() {

  const [text, setText] = useState("");
  const fullText = "Enhance your dishes with natural sour flavor 🍋";

  useEffect(() => {
    window.scrollTo(0, 0);

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">

      {/* HERO */}
      <div className="hero">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}>
          🍋 Black Lemon Powder
        </motion.h1>
        <p className="typing">{text}</p>
      </div>

      {/* PRODUCT */}
      <motion.div
        className="product-section"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <img
          src="/assets/images/Blacklemon_powder_2.png"
          alt="Black Lemon"
          className="product-img"
        />
      </motion.div>

      {/* USES GRID */}
      <div className="uses-container">
        {uses.map((item, i) => (
          <motion.div
            key={i}
            className="use-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <FaUtensils />
              <h3>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 PREMIUM INFO SECTION */}
      <div className="info-wrapper">

        {/* LEFT */}
        <motion.div
          className="info-box"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>🍽️ How to Use</h2>

          <ul>
            <li><FaCheckCircle /> Soak in water, filter & use like tamarind</li>
            <li><FaCheckCircle /> Same method applies for powder</li>
            <li><FaUtensils /> Use in chutneys, biryani, gravies & soups</li>
            <li><FaAppleAlt /> Can be used in desserts like cake & ice cream</li>
            <li><FaLeaf /> 100% natural & preservative-free</li>
            <li><FaLeaf /> Rich source of Vitamin C</li>
          </ul>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="info-box highlight"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>✨ Advantages</h2>

          <ul>
            <li><FaLeaf /> Helps detox liver & intestine</li>
            <li><FaHeartbeat /> Supports heart health</li>
            <li><FaCheckCircle /> Reduces bad cholesterol</li>
            <li><FaLeaf /> Rich in minerals (Ca, Mg, Fe, K)</li>
            <li><FaAppleAlt /> Improves hydration & digestion</li>
            <li><FaCheckCircle /> Strengthens bones & flexibility</li>
          </ul>
        </motion.div>

      </div>

      {/* CSS */}
      <style>{`

.page {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f6f8f3, #eef5e9);
}

/* HERO */
.hero {
  text-align: center;
  padding: 70px 20px 30px;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(45deg, #2e7d32, #81c784);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typing {
  font-size: 1.2rem;
  color: #555;
}

/* PRODUCT */
.product-section {
  text-align: center;
}

.product-img {
  width: 280px;
  border-radius: 20px;
  transition: 0.3s;
}

.product-img:hover {
  transform: scale(1.05);
}

/* USE GRID */
.uses-container {
  max-width: 1200px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  padding: 20px;
}

.use-card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

.use-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: 0.4s;
}

.use-card:hover img {
  transform: scale(1.1);
}

/* OVERLAY */
.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  text-align: center;
}

.overlay h3 {
  margin-top: 5px;
}

/* 🔥 SIDE SECTION */
.info-wrapper {
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 80px auto;
  padding: 20px;
  flex-wrap: wrap;
}

/* CARD */
.info-box {
  flex: 1;
  min-width: 320px;
  padding: 30px;
  border-radius: 25px;

  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(15px);

  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
  transition: 0.4s;
  position: relative;
}

/* 🔥 GLOW EFFECT */
.info-box::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 25px;
  background: linear-gradient(120deg, #81c784, #fbc02d);
  opacity: 0;
  transition: 0.4s;
  z-index: -1;
  filter: blur(20px);
}

.info-box:hover::before {
  opacity: 0.6;
}

.info-box:hover {
  transform: translateY(-10px) scale(1.02);
}

/* RIGHT CARD */
.highlight {
  background: linear-gradient(135deg, #fff8e1, #fff3c4);
}

/* TEXT */
.info-box h2 {
  font-size: 1.7rem;
  margin-bottom: 15px;
  font-weight: 700;
}

/* LIST */
.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #333;
}

/* ICON STYLE */
.info-box li svg {
  color: #2e7d32;
  font-size: 16px;
}

/* MOBILE */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .info-wrapper {
    flex-direction: column;
  }
}

      `}</style>
    </div>
  );
}

/* DATA */
const uses = [
  { title: "Chutneys", img: "/assets/images/chutney.png" },
  { title: "Biryani", img: "/assets/images/biryani.png" },
  { title: "Gravy", img: "/assets/images/gravy.png" },
  { title: "Soups", img: "/assets/images/soup.png" },
];