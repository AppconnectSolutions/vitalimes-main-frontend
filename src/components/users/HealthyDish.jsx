import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LemonSeedOilUses() {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const productY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const [text, setText] = useState("");
  const fullText = "Pure lemon peel essence for food, wellness and personal care";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const scrollToUses = () => {
    const section = document.getElementById("essential-oil-uses");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="essential-page">
      {/* SCROLL PROGRESS */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* BACKGROUND EFFECTS */}
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-orb orb-three"></div>

      {/* HERO SECTION */}
      <section className="hero-section">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="premium-badge">Vitalimes Premium Essential Oil</span>

          <h1>
            Lemon <span>Essential Oil</span>
          </h1>

          <p className="typing">{text}</p>

          <p className="hero-desc">
            Vitalimes Lemon Essential Oil is extracted from lemon peel and
            designed for selected food flavouring, steam aroma use, and cosmetic
            blending. A small quantity gives a fresh citrus aroma and premium
            lemon experience.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/product/64")}>
              Shop Now
            </button>

            <button className="secondary-btn" onClick={scrollToUses}>
              View Uses
            </button>
          </div>

          <div className="trust-row">
            <div>Extracted from Lemon Peel</div>
            <div>Natural Citrus Aroma</div>
            <div>Multi-Purpose Use</div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          style={{ y: productY }}
          initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="product-glow"></div>

          <img
            src="/assets/images/category_essential_oil.png"
            alt="Vitalimes Lemon Essential Oil"
            className="product-img"
          />

          <motion.div
            className="floating-card top-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Lemon Peel Extract
          </motion.div>

          <motion.div
            className="floating-card bottom-card"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            Fresh Citrus Aroma
          </motion.div>
        </motion.div>
      </section>

      {/* FOOD RECIPE IMAGES - KEPT NEAR TOP */}
      <section className="recipe-section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Food Recipe Applications</span>
          <h2>Use in Selected Food & Drinks</h2>
          <p>
            Add only a very small quantity for aroma and flavour. Best used in
            beverages, dressings and finishing applications.
          </p>
        </motion.div>

        <div className="recipe-grid">
          {foodRecipes.map((item, index) => (
            <motion.div
              key={item.title}
              className="recipe-card"
              initial={{ opacity: 0, y: 55, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              <img src={item.img} alt={item.title} />

              <div className="recipe-overlay"></div>

              <div className="recipe-content">
                <div className="recipe-icon">
                  <item.Icon />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREMIUM HIGHLIGHTS */}
      <section className="highlight-section">
        {highlights.map((item, index) => (
          <motion.div
            className="highlight-card"
            key={item.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="premium-icon-box">
              <item.Icon />
            </div>

            <h3>{item.title}</h3>
            <div className="gold-line"></div>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* HOW TO USE */}
      <section id="essential-oil-uses" className="uses-section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Usage Guide</span>
          <h2>How to Use Lemon Essential Oil</h2>
          <p>
            Use carefully in small quantities. For skin or hair use, always mix
            with a suitable carrier oil before applying.
          </p>
        </motion.div>

        <div className="usage-grid">
          {usageCards.map((item, index) => (
            <motion.div
              key={item.title}
              className={`usage-card ${item.highlight ? "highlight" : ""}`}
              initial={{ opacity: 0, y: 55, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              <span className="card-ribbon">{item.tag}</span>

              <div className="premium-icon-box dark">
                <item.Icon />
              </div>

              <h3>{item.title}</h3>
              <div className="gold-line"></div>

              <ul>
                {item.items.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SAFETY / NOTES */}
      <section className="safety-section">
        <motion.div
          className="safety-box"
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span>Important Note</span>
            <h2>Use Responsibly</h2>
            <p>
              Essential oils are highly concentrated. Use only small quantities.
              Avoid direct application on skin without dilution. Patch test is
              recommended for cosmetic use.
            </p>
          </div>

          <div className="safety-points">
            {safetyPoints.map((point) => (
              <div className="safety-point" key={point}>
                <span>✓</span>
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="facts-section">
        <motion.div
          className="facts-box"
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Product Highlights</h2>

          <div className="facts-grid">
            {facts.map((fact) => (
              <div className="fact-item" key={fact}>
                <span>✓</span>
                {fact}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Add Premium Lemon Aroma to Your Daily Routine</h2>
          <p>
            Try Vitalimes Lemon Essential Oil for selected food flavouring,
            aromatic steam use, and cosmetic blending.
          </p>

          <button onClick={() => navigate("/product/64")}>
            Buy Lemon Essential Oil
          </button>
        </motion.div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .essential-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
          color: #10210f;
          background:
            radial-gradient(circle at top left, rgba(255, 210, 48, 0.38), transparent 32%),
            radial-gradient(circle at bottom right, rgba(8, 120, 54, 0.22), transparent 34%),
            linear-gradient(135deg, #fffdf2 0%, #fff8c9 42%, #f7ffe8 100%);
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 5px;
          width: 100%;
          background: linear-gradient(90deg, #0b7d3b, #ffd12f, #e6a400);
          transform-origin: left;
          z-index: 9999;
          box-shadow: 0 5px 20px rgba(230, 164, 0, 0.35);
        }

        .hero-section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 95px 20px 65px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 55px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .premium-badge {
          display: inline-flex;
          margin-bottom: 22px;
          padding: 10px 22px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(217, 178, 34, 0.28);
          color: #0b7d3b;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          box-shadow: 0 14px 35px rgba(7, 86, 41, 0.10);
          backdrop-filter: blur(12px);
        }

        .hero-left h1 {
          max-width: 760px;
          margin: 0;
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -1.4px;
          color: #102f1e;
        }

        .hero-left h1 span {
          color: #d8a708;
          display: inline-block;
        }

        .typing {
          min-height: 28px;
          margin: 22px 0 12px;
          color: #0b7d3b;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 850;
        }

        .hero-desc {
          max-width: 680px;
          margin: 0 0 32px;
          color: #59634f;
          font-size: 17px;
          line-height: 1.8;
          font-weight: 500;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 28px;
        }

        .primary-btn,
        .secondary-btn {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 15px 30px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 900;
          transition: all 0.35s ease;
        }

        .primary-btn {
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: white;
          box-shadow: 0 18px 42px rgba(6, 63, 32, 0.32);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.82);
          color: #0b7d3b;
          border: 1px solid rgba(11, 125, 59, 0.18);
          box-shadow: 0 14px 35px rgba(7, 86, 41, 0.1);
        }

        .primary-btn:hover,
        .secondary-btn:hover {
          transform: translateY(-5px) scale(1.04);
        }

        .trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .trust-row div {
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(11, 125, 59, 0.14);
          color: #425137;
          font-size: 13px;
          font-weight: 800;
          backdrop-filter: blur(10px);
        }

        .trust-row div::before {
          content: "✓ ";
          color: #0b7d3b;
          font-weight: 950;
        }

        .hero-right {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background:
            radial-gradient(circle, rgba(255, 213, 46, 0.8), rgba(21, 148, 71, 0.16), transparent 68%);
          filter: blur(5px);
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .product-img {
          position: relative;
          z-index: 2;
          width: min(390px, 88%);
          border-radius: 30px;
          filter: drop-shadow(0 35px 45px rgba(0, 0, 0, 0.22));
          animation: productFloat 4s ease-in-out infinite;
        }

        .floating-card {
          position: absolute;
          z-index: 3;
          padding: 12px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(217, 178, 34, 0.28);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(14px);
          color: #0b7d3b;
          font-size: 14px;
          font-weight: 900;
        }

        .top-card {
          top: 75px;
          left: 15px;
        }

        .bottom-card {
          bottom: 80px;
          right: 15px;
        }

        .recipe-section,
        .highlight-section,
        .uses-section,
        .safety-section,
        .facts-section,
        .cta-section {
          max-width: 1220px;
          margin: 85px auto;
          padding: 20px;
          position: relative;
          z-index: 2;
        }

        .section-heading {
          max-width: 800px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .section-heading span {
          display: inline-block;
          color: #0b7d3b;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .section-heading h2 {
          margin: 0;
          color: #102f1e;
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.08;
        }

        .section-heading p {
          margin: 16px 0 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.7;
        }

        .recipe-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 22px;
        }

        .recipe-card {
          position: relative;
          height: 285px;
          overflow: hidden;
          border-radius: 32px;
          box-shadow: 0 24px 65px rgba(54, 72, 18, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.82);
          cursor: pointer;
        }

        .recipe-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.75s ease;
        }

        .recipe-card:hover img {
          transform: scale(1.14) rotate(1.2deg);
        }

        .recipe-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.78)),
            radial-gradient(circle at top right, rgba(255, 213, 46, 0.25), transparent 38%);
          z-index: 1;
        }

        .recipe-content {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 20px;
          z-index: 2;
          color: white;
        }

        .recipe-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.92);
          color: #0b7d3b;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 13px;
        }

        .recipe-icon svg {
          width: 23px;
          height: 23px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.8;
        }

        .recipe-content h3 {
          margin: 0 0 7px;
          font-size: 22px;
          font-weight: 900;
        }

        .recipe-content p {
          margin: 0;
          color: rgba(255,255,255,0.86);
          font-size: 13.5px;
          line-height: 1.5;
          font-weight: 500;
        }

        .highlight-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .highlight-card,
        .usage-card {
          position: relative;
          overflow: hidden;
          padding: 34px;
          border-radius: 34px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 24px 65px rgba(54, 72, 18, 0.12);
          backdrop-filter: blur(16px);
          transition: all 0.35s ease;
        }

        .highlight-card::before,
        .usage-card::before,
        .safety-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.55),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.85s;
        }

        .highlight-card:hover::before,
        .usage-card:hover::before,
        .safety-box:hover::before {
          left: 130%;
        }

        .premium-icon-box {
          width: 72px;
          height: 72px;
          margin-bottom: 22px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #fffaf0, #ffffff);
          border: 1px solid rgba(217, 178, 34, 0.34);
          color: #d1a000;
          box-shadow:
            0 18px 35px rgba(7, 86, 41, 0.10),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .premium-icon-box.dark {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          background: linear-gradient(145deg, #064620, #0b7d3b);
          border: 2px solid #d9b222;
          color: #ffd75b;
          box-shadow: 0 18px 36px rgba(6, 63, 32, 0.22);
        }

        .premium-icon-box svg {
          width: 34px;
          height: 34px;
          stroke: currentColor;
          stroke-width: 1.8;
          fill: none;
        }

        .card-ribbon {
          display: inline-flex;
          padding: 6px 18px;
          margin-bottom: 22px;
          border-radius: 999px;
          background: rgba(235, 243, 198, 0.95);
          color: #5a6d4d;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          border: 1px solid rgba(217, 178, 34, 0.18);
        }

        .gold-line {
          width: 44px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #d9a908, #ffd75b);
          margin: 0 0 18px;
        }

        .highlight-card h3,
        .usage-card h3 {
          margin: 0 0 12px;
          font-family: 'Playfair Display', serif;
          color: #102f1e;
          font-size: 25px;
          line-height: 1.15;
          font-weight: 800;
        }

        .highlight-card p {
          margin: 0;
          color: #5e674f;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
        }

        .usage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .usage-card.highlight {
          background:
            radial-gradient(circle at top left, rgba(255, 213, 46, 0.22), transparent 38%),
            rgba(255, 255, 255, 0.84);
        }

        .usage-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .usage-card li {
          position: relative;
          margin-bottom: 13px;
          padding-left: 28px;
          color: #4f5d3f;
          font-size: 14.8px;
          line-height: 1.55;
          font-weight: 600;
        }

        .usage-card li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #0b7d3b;
          font-weight: 950;
        }

        .safety-box {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 35px;
          align-items: center;
          padding: 42px;
          border-radius: 38px;
          background:
            radial-gradient(circle at top left, rgba(255, 213, 46, 0.28), transparent 36%),
            rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 28px 75px rgba(54, 72, 18, 0.14);
          backdrop-filter: blur(16px);
        }

        .safety-box span {
          display: inline-block;
          color: #0b7d3b;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .safety-box h2 {
          margin: 0 0 14px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
          color: #102f1e;
        }

        .safety-box p {
          margin: 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.75;
          font-weight: 500;
        }

        .safety-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .safety-point {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.74);
          border: 1px solid rgba(217, 178, 34, 0.14);
          color: #4f5d3f;
          font-size: 14.5px;
          font-weight: 700;
        }

        .safety-point span {
          margin: 0;
          color: #0b7d3b;
        }

        .facts-box {
          padding: 44px;
          border-radius: 38px;
          background: linear-gradient(
            135deg,
            rgba(11, 125, 59, 0.96),
            rgba(6, 63, 32, 0.96)
          );
          color: white;
          box-shadow: 0 28px 75px rgba(6, 63, 32, 0.28);
          position: relative;
          overflow: hidden;
        }

        .facts-box::after {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          right: -120px;
          top: -120px;
          background: rgba(255, 213, 46, 0.22);
        }

        .facts-box h2 {
          margin: 0 0 28px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          position: relative;
          z-index: 1;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          position: relative;
          z-index: 1;
        }

        .fact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.11);
          border: 1px solid rgba(255, 255, 255, 0.14);
          font-size: 14.5px;
          font-weight: 700;
        }

        .fact-item span {
          color: #ffd22e;
          font-weight: 950;
        }

        .cta-box {
          padding: 58px 30px;
          border-radius: 42px;
          text-align: center;
          background:
            radial-gradient(circle at top left, rgba(255, 213, 46, 0.42), transparent 32%),
            linear-gradient(135deg, #ffffff, #f5ffe6);
          border: 1px solid rgba(11, 125, 59, 0.12);
          box-shadow: 0 28px 75px rgba(54, 72, 18, 0.14);
        }

        .cta-box h2 {
          max-width: 800px;
          margin: 0 auto 15px;
          color: #102f1e;
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.1;
          font-weight: 800;
        }

        .cta-box p {
          max-width: 680px;
          margin: 0 auto 28px;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.7;
        }

        .cta-box button {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 15px 32px;
          border-radius: 999px;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: white;
          font-size: 15px;
          font-weight: 900;
          box-shadow: 0 18px 42px rgba(6, 63, 32, 0.32);
          transition: all 0.35s ease;
        }

        .cta-box button:hover {
          transform: translateY(-5px) scale(1.04);
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(3px);
          opacity: 0.35;
          z-index: 1;
          animation: floatOrb 6s ease-in-out infinite;
        }

        .orb-one {
          width: 260px;
          height: 260px;
          background: #ffd22e;
          top: 80px;
          right: 7%;
        }

        .orb-two {
          width: 180px;
          height: 180px;
          background: #159447;
          top: 720px;
          left: 4%;
          animation-delay: 1.2s;
        }

        .orb-three {
          width: 130px;
          height: 130px;
          background: #ffe46b;
          bottom: 260px;
          right: 5%;
          animation-delay: 2s;
        }

        @keyframes productFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes floatOrb {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(25px) scale(1.06);
          }
        }

        @media (max-width: 1100px) {
          .recipe-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-left h1,
          .hero-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons,
          .trust-row {
            justify-content: center;
          }

          .highlight-section,
          .usage-grid,
          .facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .safety-box {
            grid-template-columns: 1fr;
          }

          .premium-icon-box,
          .gold-line {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 75px 16px 45px;
          }

          .hero-right {
            min-height: 380px;
          }

          .product-img {
            width: min(310px, 88%);
          }

          .hero-buttons {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }

          .recipe-grid,
          .highlight-section,
          .usage-grid,
          .facts-grid,
          .safety-points {
            grid-template-columns: 1fr;
          }

          .recipe-card {
            height: 280px;
          }

          .safety-box,
          .facts-box,
          .cta-box {
            padding: 30px 22px;
          }

          .recipe-section,
          .highlight-section,
          .uses-section,
          .safety-section,
          .facts-section,
          .cta-section {
            margin: 70px auto;
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-left h1 {
            font-size: 40px;
          }

          .typing,
          .hero-desc {
            font-size: 15px;
          }

          .premium-badge {
            font-size: 11px;
            padding: 8px 15px;
          }

          .floating-card {
            font-size: 12px;
            padding: 10px 12px;
          }

          .top-card {
            left: 0;
          }

          .bottom-card {
            right: 0;
          }

          .section-heading h2 {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}

/* PREMIUM INLINE SVG ICONS */
function TeaIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 8h12v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8Z" />
      <path d="M17 10h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 4c1 1 .5 2 0 3" />
      <path d="M12 4c1 1 .5 2 0 3" />
      <path d="M4 20h15" />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3s5 5.2 5 9a5 5 0 0 1-10 0c0-3.8 5-9 5-9Z" />
      <path d="M10 13c1.2 1 2.8 1 4 0" />
    </svg>
  );
}

function SaladIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 10h14l-1.2 7.5A3 3 0 0 1 14.8 20H9.2a3 3 0 0 1-3-2.5L5 10Z" />
      <path d="M8 10c.5-3 2.5-5 6-6 0 3-1.5 5-4.5 6" />
      <path d="M14 10c.7-2 2.2-3.2 4.5-3.8-.1 2.3-1.2 3.7-3.3 4.3" />
    </svg>
  );
}

function CookingIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 8h12l-1 10a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3L6 8Z" />
      <path d="M9 8V5a3 3 0 0 1 6 0v3" />
      <path d="M8 12h8" />
    </svg>
  );
}

function SkinIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3s5 5.2 5 9a5 5 0 0 1-10 0c0-3.8 5-9 5-9Z" />
      <path d="M10 13c1.2 1 2.8 1 4 0" />
      <path d="M8 20c2.5 1.2 5.5 1.2 8 0" />
    </svg>
  );
}

function HairIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7 20c0-6 3-8 3-13" />
      <path d="M12 20c0-5 2.5-7 2.5-12" />
      <path d="M17 20c0-4 2-6 2-10" />
      <path d="M6 7c3-3 8-3 11 0" />
      <path d="M18 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </svg>
  );
}

function AromaIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 19c-3-2-3-5 0-8 2-2 1-4 0-6" />
      <path d="M13 19c-3-2-3-5 0-8 2-2 1-4 0-6" />
      <path d="M18 19c-3-2-3-5 0-8 2-2 1-4 0-6" />
    </svg>
  );
}

function LemonIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 14c0-5 4-9 9-9 2.5 0 4.2.9 5 2-1.1 6.5-5 11-11 11-1.8 0-3-.5-4-1.2.3-1 .6-1.8 1-2.8Z" />
      <path d="M15 4c.8-1.4 2-2 4-2-.2 2-1.2 3.2-3 3.8" />
      <path d="M8 15c3-1 5.5-3.2 7-6" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3l1.8 5.1L19 10l-5.2 1.9L12 17l-1.8-5.1L5 10l5.2-1.9L12 3Z" />
      <path d="M19 14l.9 2.4L22 17l-2.1.6L19 20l-.9-2.4L16 17l2.1-.6L19 14Z" />
    </svg>
  );
}

function SteamIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7 18h10" />
      <path d="M9 21h6" />
      <path d="M8 14c-2-2-1-4 1-6 1.5-1.5 1.2-3 .2-4" />
      <path d="M13 14c-2-2-1-4 1-6 1.5-1.5 1.2-3 .2-4" />
      <path d="M18 14c-2-2-1-4 1-6 1.5-1.5 1.2-3 .2-4" />
    </svg>
  );
}

/* DATA */
const foodRecipes = [
  {
    title: "Hot Tea",
    desc: "Use 1 drop for fresh lemon aroma.",
    img: "/assets/images/oil_detox.png",
    Icon: TeaIcon,
  },
  {
    title: "Drinking Water",
    desc: "Add a very small quantity for citrus note.",
    img: "/assets/images/oil_detox.png",
    Icon: WaterIcon,
  },
  {
    title: "Salad Dressing",
    desc: "Blend with dressing for lemon flavour.",
    img: "/assets/images/oil_salad.png",
    Icon: SaladIcon,
  },
  {
    title: "Food Finishing",
    desc: "Use as a finishing aroma in selected dishes.",
    img: "/assets/images/oil_cooking.png",
    Icon: CookingIcon,
  },
  {
    title: "Warm Drink",
    desc: "Use carefully in selected warm beverages.",
    img: "/assets/images/oil_detox.png",
    Icon: TeaIcon,
  },
];

const highlights = [
  {
    title: "Extracted from Lemon Peel",
    Icon: LemonIcon,
    desc: "Made from lemon peel to deliver a clean and refreshing citrus aroma.",
  },
  {
    title: "Premium Natural Appeal",
    Icon: SparkleIcon,
    desc: "Designed for users looking for a concentrated lemon-based product.",
  },
  {
    title: "Multi-Purpose Use",
    Icon: AromaIcon,
    desc: "Suitable for selected food flavouring, steam aroma, and cosmetic blending.",
  },
];

const usageCards = [
  {
    title: "Food Use",
    tag: "Selected Food Flavouring",
    Icon: TeaIcon,
    items: [
      "Add 1 drop to hot tea or selected beverages.",
      "Use very small quantity in water or drinks.",
      "Can be used in selected food applications for lemon aroma.",
    ],
  },
  {
    title: "Steam Aroma Use",
    tag: "Aromatic Steam",
    Icon: SteamIcon,
    highlight: true,
    items: [
      "Boil water and pour it into a suitable vessel.",
      "Add 1–2 drops of lemon essential oil.",
      "Use for a refreshing citrus steam aroma experience.",
    ],
  },
  {
    title: "Cosmetic Use",
    tag: "Diluted Application",
    Icon: SkinIcon,
    items: [
      "Mix with a suitable carrier oil before skin use.",
      "For hair, mix with coconut oil or preferred hair oil.",
      "Do a patch test before regular cosmetic use.",
    ],
  },
];

const safetyPoints = [
  "Use only in small quantities",
  "Dilute before skin or hair use",
  "Avoid direct contact with eyes",
  "Keep away from children",
];

const facts = [
  "Extracted from lemon peel",
  "100% natural product positioning",
  "No chemical preservatives added",
  "Fresh citrus aroma",
  "Suitable for selected food and cosmetic applications",
  "Highly concentrated essential oil",
];