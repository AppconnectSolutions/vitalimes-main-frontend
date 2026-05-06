import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaUtensils,
  FaLeaf,
  FaAppleAlt,
  FaCheckCircle,
  FaMugHot,
  FaSeedling,
  FaShieldAlt,
  FaGem,
  FaLemon,
  FaShoppingBag,
} from "react-icons/fa";

export default function BlackLemonUses() {
  const [text, setText] = useState("");
  const fullText = "A premium natural sour taste enhancer for modern cooking";

  const { scrollYProgress } = useScroll();
  const productY = useTransform(scrollYProgress, [0, 1], [0, -90]);

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

  const scrollToBenefits = () => {
    const section = document.getElementById("black-lemon-benefits");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="black-lemon-page">
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
          <span className="premium-badge">Natural Sour Taste Enhancer</span>

          <h1>
            Black Lemon & <span>Black Lemon Powder</span>
          </h1>

          <p className="typing">{text}</p>

          <p className="hero-desc">
            Vitalimes Black Lemon Powder is crafted to bring a deep, traditional
            sour taste to chutneys, gravies, biryani, soups, meat dishes,
            vegetarian dishes, beverages and selected desserts.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              <FaShoppingBag />
              Shop Now
            </button>

            <button className="secondary-btn" onClick={scrollToBenefits}>
              View Benefits
            </button>
          </div>

          <div className="trust-row">
            <div>100% Natural</div>
            <div>Rich Sour Taste</div>
            <div>Food Friendly</div>
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
            src="/assets/images/Blacklemon_powder_2.png"
            alt="Vitalimes Black Lemon Powder"
            className="product-img"
          />

          <motion.div
            className="floating-card top-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Premium Sour Taste
          </motion.div>

          <motion.div
            className="floating-card bottom-card"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            100% Natural
          </motion.div>
        </motion.div>
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
      <section className="how-section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>How to Use in Food</span>
          <h2>Easy to Use Like Tamarind</h2>
          <p>
            Use black lemon or black lemon powder to add natural sour taste and
            depth of flavour to everyday dishes.
          </p>
        </motion.div>

        <div className="how-card">
          <div className="how-content">
            <div className="steps">
              {howToUse.map((item, index) => (
                <motion.div
                  className="step-item"
                  key={item.title}
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="step-icon">
                    <item.Icon />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="how-highlight">
            <h3>Best Used In</h3>
            <p>
              Chutneys, gravies, biryani, soups, sambar, rasam, lemon tea,
              Arabic dishes, vegetarian and non-vegetarian recipes.
            </p>
          </div>
        </div>
      </section>

      {/* USES GRID */}
      <section className="uses-section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Food Applications</span>
          <h2>Perfect for Multiple Recipes</h2>
          <p>
            A versatile sour taste enhancer for traditional, modern and
            food-service cooking needs.
          </p>
        </motion.div>

        <div className="uses-container">
          {uses.map((item, i) => (
            <motion.div
              key={item.title}
              className="use-card"
              initial={{ opacity: 0, y: 55, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              <img src={item.img} alt={item.title} />

              <div className="use-overlay"></div>

              <div className="use-content">
                <div className="use-icon">
                  <item.Icon />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="black-lemon-benefits" className="benefits-section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Product Advantages</span>
          <h2>Why Choose Black Lemon Powder?</h2>
          <p>
            A premium natural ingredient for adding sour flavour, aroma and
            traditional taste to food preparations.
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 55, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              <div className="premium-icon-box dark">
                <item.Icon />
              </div>

              <h3>{item.title}</h3>
              <div className="gold-line"></div>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
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
          <h2>Add Traditional Sour Taste to Every Dish</h2>
          <p>
            Try Vitalimes Black Lemon Powder for chutneys, gravies, biryani,
            soups, beverages and premium food-service recipes.
          </p>

          <button>Shop Black Lemon Powder</button>
        </motion.div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .black-lemon-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
          color: #18130f;
          background:
            radial-gradient(circle at top left, rgba(255, 210, 48, 0.35), transparent 32%),
            radial-gradient(circle at bottom right, rgba(23, 23, 23, 0.15), transparent 34%),
            linear-gradient(135deg, #fffdf2 0%, #fff5be 45%, #ffffff 100%);
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 5px;
          width: 100%;
          background: linear-gradient(90deg, #18130f, #ffd12f, #0b7d3b);
          transform-origin: left;
          z-index: 9999;
          box-shadow: 0 5px 20px rgba(24, 19, 15, 0.3);
        }

        .hero-section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 95px 20px 75px;
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
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(217, 178, 34, 0.28);
          color: #18130f;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          box-shadow: 0 14px 35px rgba(24, 19, 15, 0.08);
          backdrop-filter: blur(12px);
        }

        .hero-left h1 {
          margin: 0;
          max-width: 760px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -1.4px;
          color: #18130f;
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
          color: #5b554c;
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
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .primary-btn {
          background: linear-gradient(135deg, #18130f, #3a2d1d);
          color: white;
          box-shadow: 0 18px 42px rgba(24, 19, 15, 0.28);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.82);
          color: #18130f;
          border: 1px solid rgba(24, 19, 15, 0.16);
          box-shadow: 0 14px 35px rgba(24, 19, 15, 0.08);
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
          border: 1px solid rgba(24, 19, 15, 0.12);
          color: #4a4037;
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
            radial-gradient(circle, rgba(255, 213, 46, 0.78), rgba(24, 19, 15, 0.18), transparent 68%);
          filter: blur(5px);
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .product-img {
          position: relative;
          z-index: 2;
          width: min(390px, 88%);
          border-radius: 30px;
          filter: drop-shadow(0 35px 45px rgba(0, 0, 0, 0.24));
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
          color: #18130f;
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

        .highlight-section,
        .how-section,
        .uses-section,
        .benefits-section,
        .facts-section,
        .cta-section {
          max-width: 1220px;
          margin: 95px auto;
          padding: 20px;
          position: relative;
          z-index: 2;
        }

        .highlight-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 20px;
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
          color: #18130f;
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.08;
        }

        .section-heading p {
          margin: 16px 0 0;
          color: #5b554c;
          font-size: 16px;
          line-height: 1.7;
        }

        .highlight-card,
        .benefit-card {
          position: relative;
          overflow: hidden;
          padding: 34px;
          border-radius: 34px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 24px 65px rgba(24, 19, 15, 0.10);
          backdrop-filter: blur(16px);
          transition: all 0.35s ease;
        }

        .highlight-card::before,
        .benefit-card::before,
        .how-card::before {
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
        .benefit-card:hover::before,
        .how-card:hover::before {
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
            0 18px 35px rgba(24, 19, 15, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .premium-icon-box.dark {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          background: linear-gradient(145deg, #18130f, #3a2d1d);
          border: 2px solid #d9b222;
          color: #ffd75b;
          box-shadow: 0 18px 36px rgba(24, 19, 15, 0.22);
        }

        .premium-icon-box svg,
        .step-icon svg,
        .use-icon svg {
          width: 32px;
          height: 32px;
        }

        .gold-line {
          width: 44px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #d9a908, #ffd75b);
          margin: 0 0 18px;
        }

        .highlight-card h3,
        .benefit-card h3 {
          margin: 0 0 12px;
          font-family: 'Playfair Display', serif;
          color: #18130f;
          font-size: 25px;
          line-height: 1.15;
          font-weight: 800;
        }

        .highlight-card p,
        .benefit-card p {
          margin: 0;
          color: #5b554c;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
        }

        .how-card {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 35px;
          align-items: center;
          padding: 42px;
          border-radius: 38px;
          background:
            radial-gradient(circle at top left, rgba(255, 213, 46, 0.28), transparent 36%),
            rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 28px 75px rgba(24, 19, 15, 0.11);
          backdrop-filter: blur(16px);
        }

        .steps {
          display: grid;
          gap: 18px;
        }

        .step-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.74);
          border: 1px solid rgba(217, 178, 34, 0.14);
        }

        .step-icon {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background: linear-gradient(135deg, #18130f, #3a2d1d);
          color: #ffd75b;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-icon svg {
          width: 20px;
          height: 20px;
        }

        .step-item h4 {
          margin: 0 0 5px;
          color: #18130f;
          font-size: 17px;
          font-weight: 900;
        }

        .step-item p {
          margin: 0;
          color: #5b554c;
          font-size: 14.5px;
          line-height: 1.6;
        }

        .how-highlight {
          padding: 36px;
          border-radius: 32px;
          text-align: center;
          background: linear-gradient(135deg, #18130f, #3a2d1d);
          color: white;
          box-shadow: 0 24px 60px rgba(24, 19, 15, 0.25);
        }

        .how-highlight h3 {
          margin: 0 0 18px;
          font-family: 'Playfair Display', serif;
          font-size: 34px;
          line-height: 1.1;
          color: #ffd75b;
        }

        .how-highlight p {
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 15.5px;
          line-height: 1.8;
          font-weight: 600;
        }

        .uses-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .use-card {
          position: relative;
          height: 310px;
          overflow: hidden;
          border-radius: 32px;
          box-shadow: 0 24px 65px rgba(24, 19, 15, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.82);
          cursor: pointer;
        }

        .use-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.75s ease;
        }

        .use-card:hover img {
          transform: scale(1.14) rotate(1.2deg);
        }

        .use-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.78)),
            radial-gradient(circle at top right, rgba(255, 213, 46, 0.25), transparent 38%);
          z-index: 1;
        }

        .use-content {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 22px;
          z-index: 2;
          color: white;
        }

        .use-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.9);
          color: #18130f;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .use-icon svg {
          width: 22px;
          height: 22px;
        }

        .use-content h3 {
          margin: 0 0 8px;
          font-size: 23px;
          font-weight: 900;
        }

        .use-content p {
          margin: 0;
          color: rgba(255,255,255,0.86);
          font-size: 14px;
          line-height: 1.5;
          font-weight: 500;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .facts-box {
          padding: 44px;
          border-radius: 38px;
          background: linear-gradient(
            135deg,
            rgba(24, 19, 15, 0.96),
            rgba(58, 45, 29, 0.96)
          );
          color: white;
          box-shadow: 0 28px 75px rgba(24, 19, 15, 0.28);
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
          background: rgba(255, 213, 46, 0.20);
        }

        .facts-box h2 {
          margin: 0 0 28px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          position: relative;
          z-index: 1;
          color: #ffd75b;
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
            linear-gradient(135deg, #ffffff, #fff6cd);
          border: 1px solid rgba(24, 19, 15, 0.10);
          box-shadow: 0 28px 75px rgba(24, 19, 15, 0.12);
        }

        .cta-box h2 {
          max-width: 800px;
          margin: 0 auto 15px;
          color: #18130f;
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.1;
          font-weight: 800;
        }

        .cta-box p {
          max-width: 680px;
          margin: 0 auto 28px;
          color: #5b554c;
          font-size: 16px;
          line-height: 1.7;
        }

        .cta-box button {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 15px 32px;
          border-radius: 999px;
          background: linear-gradient(135deg, #18130f, #3a2d1d);
          color: white;
          font-size: 15px;
          font-weight: 900;
          box-shadow: 0 18px 42px rgba(24, 19, 15, 0.28);
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
          background: #18130f;
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
          .benefits-grid,
          .facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .uses-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .how-card {
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

          .highlight-section,
          .benefits-grid,
          .facts-grid,
          .uses-container {
            grid-template-columns: 1fr;
          }

          .how-card,
          .facts-box,
          .cta-box {
            padding: 30px 22px;
          }

          .highlight-section,
          .how-section,
          .uses-section,
          .benefits-section,
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

/* DATA */
const highlights = [
  {
    title: "Natural Sour Taste",
    Icon: FaLemon,
    desc: "Adds a deep sour flavour similar to tamarind and enhances traditional dishes.",
  },
  {
    title: "Food-Service Friendly",
    Icon: FaUtensils,
    desc: "Suitable for restaurants, catering, hotels, cafés and bulk cooking needs.",
  },
  {
    title: "Premium Natural Appeal",
    Icon: FaGem,
    desc: "A 100% natural product with rich taste, aroma and versatile food usage.",
  },
];

const howToUse = [
  {
    title: "For Whole Black Lemon",
    Icon: FaLeaf,
    desc: "Crush and soak in water, filter, and use the extract for sour taste in food.",
  },
  {
    title: "For Black Lemon Powder",
    Icon: FaSeedling,
    desc: "Add directly in small quantity or mix with water depending on the recipe.",
  },
  {
    title: "For Recipes",
    Icon: FaUtensils,
    desc: "Use in chutneys, gravies, biryani, soups, sambar, rasam, tea and more.",
  },
];

const uses = [
  {
    title: "Chutneys",
    img: "/assets/images/chutney.png",
    Icon: FaUtensils,
    desc: "Adds natural sour taste and depth.",
  },
  {
    title: "Biryani",
    img: "/assets/images/biryani.png",
    Icon: FaUtensils,
    desc: "Enhances aroma and flavour balance.",
  },
  {
    title: "Gravy",
    img: "/assets/images/gravy.png",
    Icon: FaAppleAlt,
    desc: "Improves taste in rich preparations.",
  },
  {
    title: "Soups",
    img: "/assets/images/soup.png",
    Icon: FaMugHot,
    desc: "Gives a warm sour flavour note.",
  },
];

const benefits = [
  {
    title: "Hydration Support",
    Icon: FaLeaf,
    desc: "A traditional food ingredient often used in recipes and beverages for refreshing sour taste.",
  },
  {
    title: "Mineral Profile",
    Icon: FaGem,
    desc: "Black lemon naturally contains minerals such as calcium, iron, magnesium and potassium.",
  },
  {
    title: "Vitamin C Source",
    Icon: FaShieldAlt,
    desc: "Can contribute citrus-based Vitamin C value as part of normal food usage.",
  },
  {
    title: "Digestive Comfort",
    Icon: FaAppleAlt,
    desc: "A light sour ingredient commonly used in food preparations and traditional recipes.",
  },
  {
    title: "Natural Aroma",
    Icon: FaLemon,
    desc: "Adds a unique dried lemon aroma to vegetarian and non-vegetarian dishes.",
  },
  {
    title: "Versatile Usage",
    Icon: FaCheckCircle,
    desc: "Can be used across chutneys, meats, fish, vegetables, soups, tea, sambar and rasam.",
  },
];

const facts = [
  "100% natural product",
  "No chemical preservatives added",
  "Rich sour taste enhancer",
  "Suitable for vegetarian and non-vegetarian dishes",
  "Can be used like tamarind in selected recipes",
  "Useful for chutneys, gravies, biryani, soups and beverages",
];