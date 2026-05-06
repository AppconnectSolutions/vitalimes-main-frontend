import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LemonSeedOilSection() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToBenefits = () => {
    const section = document.getElementById("seed-benefits");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="seed-page">
      <motion.div
        className="seed-scroll-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="seed-bg-circle circle-one"></div>
      <div className="seed-bg-circle circle-two"></div>
      <div className="seed-bg-circle circle-three"></div>

      {/* HERO SECTION */}
      <section className="seed-hero">
        <motion.div
          className="seed-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="premium-badge">Natural • Pure • Premium</span>

          <h1 className="title">
            Natural Goodness. <span>Everyday Wellness.</span>
          </h1>

          <p className="subtitle">
            Premium lemon seed oil for food, skincare, hair care and daily
            wellness routines.
          </p>

          <p className="desc">
            Extracted from quality lemon seeds, this versatile oil is suitable
            for culinary use, skin nourishment, hair care and premium natural
            product applications.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn" onClick={() => navigate("/product/65")}>
              Shop Now
            </button>

            <button className="learn-btn" onClick={scrollToBenefits}>
              View Benefits
            </button>
          </div>

          <div className="trust-points">
            <div>100% Natural</div>
            <div>Skin & Hair Care</div>
            <div>Culinary Use</div>
          </div>
        </motion.div>

        <motion.div
          className="image-box"
          initial={{ opacity: 0, scale: 0.75, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="product-glow"></div>

          <img
            src="/assets/images/category_lemon_seed_oil.png"
            alt="Lemon Seed Oil"
            className="seed-img"
          />

          <motion.div
            className="floating-card top-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Premium Quality
          </motion.div>

          <motion.div
            className="floating-card bottom-card"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            Natural Care
          </motion.div>
        </motion.div>
      </section>

      {/* PREMIUM MARKETING HIGHLIGHTS */}
      <section className="marketing-section">
        {marketingHighlights.map((item, i) => (
          <motion.div
            key={item.title}
            className="marketing-card"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <span className="card-ribbon">{item.tag}</span>

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
      <section className="seed-section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Usage Guide</span>
          <h2>How to Use Lemon Seed Oil</h2>
          <p>
            Use it carefully in small quantities depending on food, skin, or hair
            care application.
          </p>
        </motion.div>

        <div className="seed-grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`seed-card ${card.highlight ? "highlight-card" : ""}`}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              whileHover={{ y: -14, scale: 1.03 }}
            >
              <span className="card-ribbon">{card.tag}</span>

              <div className="premium-icon-box light">
                <card.Icon />
              </div>

              <h3>{card.title}</h3>
              <div className="gold-line"></div>

              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="seed-benefits" className="benefits-section">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Why Choose Lemon Seed Oil</span>
          <h2>Product Benefits</h2>
          <p>
            Premium lemon seed oil for modern users looking for food, skincare
            and hair care benefits.
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -12 }}
            >
              <div className="benefit-top-accent"></div>

              <div className="premium-icon-box dark">
                <benefit.Icon />
              </div>

              <h3>{benefit.title}</h3>
              <div className="gold-line"></div>
              <p>{benefit.desc}</p>
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
          <h2>Bring Natural Lemon Goodness Into Your Daily Routine</h2>
          <p>
            Try Vitalimes Lemon Seed Oil for culinary use, skin nourishment,
            hair care and premium wellness routines.
          </p>

          <button onClick={() => navigate("/product/65")}>
            Buy Lemon Seed Oil
          </button>
        </motion.div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .seed-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
          background:
            radial-gradient(circle at top left, rgba(255, 210, 48, 0.35), transparent 32%),
            radial-gradient(circle at bottom right, rgba(8, 120, 54, 0.22), transparent 34%),
            linear-gradient(135deg, #fffdf2 0%, #f7ffe8 46%, #ffffff 100%);
          color: #10210f;
        }

        .seed-scroll-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 5px;
          width: 100%;
          background: linear-gradient(90deg, #0b6b35, #ffd12f, #149447);
          transform-origin: left;
          z-index: 9999;
          box-shadow: 0 5px 20px rgba(20, 148, 71, 0.35);
        }

        .seed-hero {
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
          background: rgba(244, 250, 216, 0.85);
          border: 1px solid rgba(217, 178, 34, 0.28);
          color: #0b7d3b;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          box-shadow: 0 14px 35px rgba(7, 86, 41, 0.10);
          backdrop-filter: blur(12px);
        }

        .title {
          margin: 0;
          max-width: 720px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(46px, 6vw, 78px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #102f1e;
        }

        .title span {
          color: #d8a708;
          display: inline-block;
        }

        .subtitle {
          margin: 22px 0 12px;
          color: #0b7d3b;
          font-size: 18px;
          font-weight: 800;
        }

        .desc {
          max-width: 660px;
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

        .shop-btn,
        .learn-btn {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 15px 30px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 900;
          transition: all 0.35s ease;
        }

        .shop-btn {
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: white;
          box-shadow: 0 18px 42px rgba(6, 63, 32, 0.32);
        }

        .learn-btn {
          background: rgba(255, 255, 255, 0.82);
          color: #0b7d3b;
          border: 1px solid rgba(11, 125, 59, 0.18);
          box-shadow: 0 14px 35px rgba(7, 86, 41, 0.1);
        }

        .shop-btn:hover,
        .learn-btn:hover {
          transform: translateY(-5px) scale(1.04);
        }

        .trust-points {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .trust-points div {
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(11, 125, 59, 0.14);
          color: #425137;
          font-size: 13px;
          font-weight: 800;
          backdrop-filter: blur(10px);
        }

        .trust-points div::before {
          content: "✓ ";
          color: #0b7d3b;
          font-weight: 950;
        }

        .image-box {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-glow {
          position: absolute;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background:
            radial-gradient(circle, rgba(255, 213, 46, 0.78), rgba(21, 148, 71, 0.18), transparent 68%);
          filter: blur(5px);
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .seed-img {
          position: relative;
          z-index: 2;
          width: min(390px, 88%);
          border-radius: 28px;
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

        .marketing-section {
          max-width: 1180px;
          margin: 0 auto 85px;
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
          position: relative;
          z-index: 2;
        }

        .marketing-card,
        .seed-card,
        .benefit-card {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 24px 65px rgba(54, 72, 18, 0.12);
          backdrop-filter: blur(16px);
          transition: all 0.35s ease;
        }

        .marketing-card {
          padding: 34px;
        }

        .seed-card {
          padding: 34px;
        }

        .benefit-card {
          padding: 34px;
        }

        .marketing-card::before,
        .seed-card::before,
        .benefit-card::before {
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

        .marketing-card:hover::before,
        .seed-card:hover::before,
        .benefit-card:hover::before {
          left: 130%;
        }

        .highlight-card {
          background:
            radial-gradient(circle at top left, rgba(255, 213, 46, 0.22), transparent 38%),
            rgba(255, 255, 255, 0.84);
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

        .premium-icon-box {
          width: 72px;
          height: 72px;
          margin-bottom: 22px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #f8ffe5, #ffffff);
          border: 1px solid rgba(217, 178, 34, 0.32);
          color: #0b7d3b;
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

        .premium-icon-box.light {
          background: linear-gradient(145deg, #fffaf0, #ffffff);
          color: #d1a000;
        }

        .premium-icon-box svg {
          width: 34px;
          height: 34px;
          stroke: currentColor;
          stroke-width: 1.8;
          fill: none;
        }

        .premium-icon-box.dark svg {
          width: 30px;
          height: 30px;
        }

        .gold-line {
          width: 44px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #d9a908, #ffd75b);
          margin: 0 0 18px;
        }

        .marketing-card h3,
        .seed-card h3,
        .benefit-card h3 {
          margin: 0 0 12px;
          font-family: 'Playfair Display', serif;
          color: #102f1e;
          font-size: 27px;
          line-height: 1.15;
          font-weight: 800;
        }

        .benefit-card h3 {
          font-size: 25px;
        }

        .marketing-card p,
        .benefit-card p {
          margin: 0;
          color: #5e674f;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
        }

        .seed-section,
        .benefits-section,
        .facts-section,
        .cta-section {
          max-width: 1220px;
          margin: 95px auto;
          padding: 20px;
          position: relative;
          z-index: 2;
        }

        .section-heading {
          max-width: 780px;
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
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .section-heading p {
          margin: 16px 0 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.7;
        }

        .seed-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .seed-card ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .seed-card li {
          position: relative;
          margin-bottom: 13px;
          padding-left: 28px;
          color: #4f5d3f;
          font-size: 14.8px;
          line-height: 1.55;
          font-weight: 600;
        }

        .seed-card li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #0b7d3b;
          font-weight: 950;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .benefit-top-accent {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 58px;
          height: 9px;
          border-radius: 0 0 12px 12px;
          background: linear-gradient(90deg, #d9a908, #ffd75b);
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

        .seed-bg-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(3px);
          opacity: 0.38;
          z-index: 1;
          animation: floatCircle 6s ease-in-out infinite;
        }

        .circle-one {
          width: 260px;
          height: 260px;
          background: #ffd22e;
          top: 80px;
          right: 7%;
        }

        .circle-two {
          width: 180px;
          height: 180px;
          background: #159447;
          top: 730px;
          left: 4%;
          animation-delay: 1.2s;
        }

        .circle-three {
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

        @keyframes floatCircle {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(25px) scale(1.06);
          }
        }

        @media (max-width: 1024px) {
          .seed-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .title,
          .desc {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons,
          .trust-points {
            justify-content: center;
          }

          .marketing-section,
          .seed-grid,
          .benefits-grid,
          .facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .premium-icon-box,
          .gold-line {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 768px) {
          .seed-hero {
            padding: 75px 16px 45px;
          }

          .image-box {
            min-height: 380px;
          }

          .seed-img {
            width: min(310px, 88%);
          }

          .hero-buttons {
            flex-direction: column;
          }

          .shop-btn,
          .learn-btn {
            width: 100%;
          }

          .marketing-section,
          .seed-grid,
          .benefits-grid,
          .facts-grid {
            grid-template-columns: 1fr;
          }

          .facts-box {
            padding: 30px 22px;
          }

          .cta-box {
            padding: 42px 22px;
          }

          .seed-section,
          .benefits-section,
          .facts-section,
          .cta-section {
            margin: 70px auto;
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 42px;
          }

          .subtitle {
            font-size: 16px;
          }

          .desc {
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
function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 4C12 4 6 8.5 4 16c5.8 1.2 12.2-1.8 16-12Z" />
      <path d="M4 16c4.5-1.5 8-4 11-8" />
      <path d="M5 20c.8-2 1.8-3.3 3.2-4.3" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3l1.8 5.1L19 10l-5.2 1.9L12 17l-1.8-5.1L5 10l5.2-1.9L12 3Z" />
      <path d="M19 14l.9 2.4L22 17l-2.1.6L19 20l-.9-2.4L16 17l2.1-.6L19 14Z" />
      <path d="M5 4l.7 1.8L7.5 6.5l-1.8.7L5 9l-.7-1.8-1.8-.7 1.8-.7L5 4Z" />
    </svg>
  );
}

function HandDropIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3s3 3.2 3 5.4A3 3 0 0 1 9 8.4C9 6.2 12 3 12 3Z" />
      <path d="M4 14h4.5l2 2H15c1.2 0 2 .8 2 2H9" />
      <path d="M4 18h11.5c2.8 0 4.4-1.5 5.5-3.5" />
      <path d="M4 12v8" />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7 3v8" />
      <path d="M5 3v4.5a2 2 0 0 0 4 0V3" />
      <path d="M7 11v10" />
      <path d="M16 3c2 2 3 4.5 3 7.5V21" />
      <path d="M16 3v18" />
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

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 20s-7-4.4-9-9.2C1.5 7.2 3.6 4 7 4c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.4 0 5.5 3.2 4 6.8C19 15.6 12 20 12 20Z" />
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

function BowlLeafIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 10h14l-1.2 7.5A3 3 0 0 1 14.8 20H9.2a3 3 0 0 1-3-2.5L5 10Z" />
      <path d="M8 10c.5-3 2.5-5 6-6 0 3-1.5 5-4.5 6" />
      <path d="M14 10c.7-2 2.2-3.2 4.5-3.8-.1 2.3-1.2 3.7-3.3 4.3" />
    </svg>
  );
}

function GemIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 4h12l4 6-10 11L2 10l4-6Z" />
      <path d="M2 10h20" />
      <path d="M8 10l4 11 4-11" />
      <path d="M8 10l2-6" />
      <path d="M16 10l-2-6" />
    </svg>
  );
}

/* DATA */
const marketingHighlights = [
  {
    title: "Multi-Purpose Oil",
    tag: "Culinary & Wellness",
    Icon: LeafIcon,
    desc: "Suitable for food, skincare, hair care and natural wellness-focused routines.",
  },
  {
    title: "Premium Natural Appeal",
    tag: "Naturally Premium",
    Icon: SparkleIcon,
    desc: "A lemon-based oil presented for users who prefer clean and natural products.",
  },
  {
    title: "Easy Daily Usage",
    tag: "Made for Everyday",
    Icon: HandDropIcon,
    desc: "A small quantity can be used in different ways based on the application.",
  },
];

const cards = [
  {
    title: "Culinary Use",
    tag: "Food Application",
    Icon: FoodIcon,
    items: [
      "Add a few drops to salads, smoothies or selected dishes.",
      "Use in small quantity for lemon flavor and aroma.",
      "Best used as a finishing oil, not for heavy frying.",
    ],
  },
  {
    title: "Skin Care Use",
    tag: "Skin Nourishment",
    Icon: SkinIcon,
    highlight: true,
    items: [
      "Mix with a carrier oil before applying to skin.",
      "Use gently for skin nourishment and hydration.",
      "Do a patch test before regular use.",
    ],
  },
  {
    title: "Hair Care Use",
    tag: "Hair Support",
    Icon: HairIcon,
    items: [
      "Mix with coconut oil or preferred hair oil.",
      "Massage gently into the scalp.",
      "Helps support soft, shiny and healthy-looking hair.",
    ],
  },
];

const benefits = [
  {
    title: "Healthy Fat Profile",
    Icon: HeartIcon,
    desc: "Contains healthy fat-based nutrition support as part of a balanced lifestyle.",
  },
  {
    title: "Skin Nourishment",
    Icon: SkinIcon,
    desc: "Supports soft, smooth and hydrated-looking skin when used properly.",
  },
  {
    title: "Hair Care Support",
    Icon: HairIcon,
    desc: "Can be used with carrier oils to support scalp and hair nourishment.",
  },
  {
    title: "Natural Aroma",
    Icon: LemonIcon,
    desc: "Provides a fresh lemon-based natural aroma for selected applications.",
  },
  {
    title: "Versatile Usage",
    Icon: BowlLeafIcon,
    desc: "Suitable for culinary, cosmetic and personal care product usage.",
  },
  {
    title: "Premium Product Feel",
    Icon: GemIcon,
    desc: "Designed for users looking for natural, clean and premium lemon-based products.",
  },
];

const facts = [
  "Rich in healthy fats",
  "Zero carbohydrates and sugars",
  "Low in sodium",
  "Calcium-free",
  "Balanced pH for skin-friendly positioning",
  "Natural pale greenish-yellow viscous liquid",
];