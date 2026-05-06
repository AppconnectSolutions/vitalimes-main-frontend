import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function LemonRecipeCombined() {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.35]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToUses = () => {
    const section = document.getElementById("additional-uses-section");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="premium-page">
      {/* PREMIUM SCROLL BAR */}
      <motion.div
        className="premium-progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* FLOATING BACKGROUND */}
      <div className="bg-circle bg-circle-one"></div>
      <div className="bg-circle bg-circle-two"></div>
      <div className="bg-circle bg-circle-three"></div>

      {/* HERO SECTION */}
      <motion.section
        className="premium-hero"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Natural Lemon Powder Uses
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Suitable for <span>Everyday Use</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Prepare refreshing lemon juice, tasty lemon rice, lemon soda,
          mint drinks, tea, biryani, chicken dishes, and desserts using our
          lemon powder.
        </motion.p>

        <motion.button
          type="button"
          className="hero-btn"
          onClick={scrollToUses}
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.96 }}
        >
          Explore Uses
          <span>↓</span>
        </motion.button>
      </motion.section>

      {/* LEMON JUICE */}
      <section className="premium-recipe-section">
        <motion.div
          className="recipe-image-box"
          initial={{ opacity: 0, x: -90, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/assets/images/lemon_juice.png" alt="Lemon Juice" />
          <div className="image-label">Refreshing Drink</div>
        </motion.div>

        <motion.div
          className="premium-recipe-card"
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="card-count">01</span>
          <h2>🧃 Lemon Juice Preparation</h2>

          <ul>
            <li>Mix 6g lemon powder with 1 liter water</li>
            <li>Add 130g sugar and stir well</li>
            <li>Enough for 5 people</li>
            <li>Prepare lemon soda, mint, tea, and more</li>
            <li>Serve chilled for the best taste</li>
          </ul>
        </motion.div>
      </section>

      {/* LEMON RICE */}
      <section className="premium-recipe-section reverse">
        <motion.div
          className="premium-recipe-card"
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="card-count">02</span>
          <h2>🍚 Lemon Rice Preparation</h2>

          <ul>
            <li>Mix lemon powder with water</li>
            <li>Prepare tempering with oil and spices</li>
            <li>Add the lemon mixture</li>
            <li>Mix with cooked rice evenly</li>
            <li>Serve hot with your favorite side dish</li>
          </ul>
        </motion.div>

        <motion.div
          className="recipe-image-box"
          initial={{ opacity: 0, x: 90, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/assets/images/lemon_banner.png" alt="Lemon Rice" />
          <div className="image-label">Tasty Food Use</div>
        </motion.div>
      </section>

      {/* ADDITIONAL USES */}
      <section id="additional-uses-section" className="premium-uses-section">
        <motion.div
          className="uses-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span>More Applications</span>
          <h2>Additional Uses</h2>
          <p>
            Use lemon powder in multiple recipes and beverages with easy
            preparation and consistent taste.
          </p>
        </motion.div>

        <div className="premium-grid">
          {uses.map((item, i) => (
            <motion.div
              key={item.title}
              className="premium-use-card"
              initial={{ opacity: 0, y: 65, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -14,
                scale: 1.035,
                transition: { duration: 0.25 },
              }}
            >
              <img src={item.img} alt={item.title} />

              <div className="use-gradient"></div>

              <div className="use-content">
                <span className="use-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CSS SAME FILE */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .premium-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(255, 224, 102, 0.35), transparent 28%),
            radial-gradient(circle at bottom right, rgba(123, 181, 45, 0.25), transparent 30%),
            linear-gradient(135deg, #fffef4 0%, #f6fbe9 45%, #ffffff 100%);
          font-family: 'Poppins', sans-serif;
          color: #17210f;
        }

        .premium-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #4caf50, #ffd43b, #7cb518);
          transform-origin: left;
          z-index: 9999;
          box-shadow: 0 4px 18px rgba(124, 181, 24, 0.45);
        }

        .premium-hero {
          max-width: 980px;
          margin: 0 auto;
          padding: 105px 20px 70px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          padding: 10px 22px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(124, 181, 24, 0.2);
          color: #5f8e13;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 14px 35px rgba(74, 111, 20, 0.12);
          backdrop-filter: blur(12px);
          margin-bottom: 20px;
        }

        .premium-hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 76px);
          line-height: 1.03;
          font-weight: 950;
          letter-spacing: -1.6px;
          color: #17210f;
        }

        .premium-hero h1 span {
          color: #79a812;
          position: relative;
          display: inline-block;
        }

        .premium-hero h1 span::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 9px;
          height: 15px;
          background: linear-gradient(90deg, rgba(255, 212, 59, 0.7), rgba(124, 181, 24, 0.25));
          border-radius: 20px;
          z-index: -1;
        }

        .premium-hero p {
          max-width: 760px;
          margin: 24px auto 32px;
          color: #5e674f;
          font-size: 17px;
          line-height: 1.8;
          font-weight: 500;
        }

        .hero-btn {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 15px 28px;
          border-radius: 999px;
          background: linear-gradient(135deg, #8abd18, #4d7805);
          color: #ffffff;
          font-size: 15px;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 18px 42px rgba(77, 120, 5, 0.32);
        }

        .hero-btn span {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.22);
          animation: arrowBounce 1.4s ease-in-out infinite;
        }

        .premium-recipe-section {
          max-width: 1220px;
          margin: 70px auto;
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .premium-recipe-section.reverse {
          grid-template-columns: 1fr 1fr;
        }

        .recipe-image-box {
          position: relative;
          height: 430px;
          border-radius: 38px;
          overflow: hidden;
          box-shadow:
            0 28px 70px rgba(44, 61, 15, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.75);
        }

        .recipe-image-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.28));
          z-index: 1;
        }

        .recipe-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }

        .recipe-image-box:hover img {
          transform: scale(1.12) rotate(1.2deg);
        }

        .image-label {
          position: absolute;
          left: 24px;
          bottom: 24px;
          z-index: 2;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          color: #5f8e13;
          font-size: 13px;
          font-weight: 900;
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }

        .premium-recipe-card {
          position: relative;
          padding: 46px;
          border-radius: 38px;
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(18px);
          box-shadow:
            0 24px 65px rgba(54, 72, 18, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          overflow: hidden;
        }

        .premium-recipe-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255,255,255,0.55),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.8s;
        }

        .premium-recipe-card:hover::before {
          left: 130%;
        }

        .premium-recipe-card:hover {
          box-shadow: 0 32px 85px rgba(54, 72, 18, 0.18);
        }

        .card-count {
          position: absolute;
          right: 30px;
          top: 24px;
          font-size: 64px;
          line-height: 1;
          font-weight: 950;
          color: rgba(124, 181, 24, 0.12);
        }

        .premium-recipe-card h2 {
          margin: 0 0 24px;
          font-size: clamp(25px, 3vw, 36px);
          font-weight: 950;
          color: #17210f;
          letter-spacing: -0.5px;
          position: relative;
          z-index: 1;
        }

        .premium-recipe-card ul {
          margin: 0;
          padding: 0;
          list-style: none;
          position: relative;
          z-index: 1;
        }

        .premium-recipe-card li {
          position: relative;
          margin-bottom: 15px;
          padding: 14px 16px 14px 46px;
          border-radius: 18px;
          background: rgba(247, 255, 226, 0.7);
          color: #4f5d3f;
          font-size: 15.5px;
          line-height: 1.5;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .premium-recipe-card li::before {
          content: "✓";
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8abd18, #4d7805);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 900;
        }

        .premium-recipe-card li:hover {
          transform: translateX(8px);
          background: rgba(235, 251, 197, 0.95);
        }

        .premium-uses-section {
          max-width: 1220px;
          margin: 120px auto 140px;
          padding: 20px;
          position: relative;
          z-index: 2;
        }

        .uses-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 60px;
        }

        .uses-heading span {
          display: inline-block;
          color: #679610;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .uses-heading h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 54px);
          font-weight: 950;
          letter-spacing: -1px;
          color: #17210f;
        }

        .uses-heading p {
          margin: 16px auto 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.7;
        }

        .premium-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .premium-use-card {
          position: relative;
          height: 315px;
          border-radius: 34px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 22px 60px rgba(54, 72, 18, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.72);
        }

        .premium-use-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.38),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.8s;
          z-index: 3;
        }

        .premium-use-card:hover::before {
          left: 130%;
        }

        .premium-use-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.75s ease;
        }

        .premium-use-card:hover img {
          transform: scale(1.15) rotate(1.4deg);
        }

        .use-gradient {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.78)),
            radial-gradient(circle at top right, rgba(255, 217, 64, 0.25), transparent 38%);
          z-index: 1;
        }

        .use-content {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          color: white;
        }

        .use-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          margin-bottom: 14px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.22);
        }

        .use-content h3 {
          margin: 0 0 8px;
          font-size: 24px;
          font-weight: 950;
          letter-spacing: -0.3px;
        }

        .use-content p {
          margin: 0;
          color: rgba(255,255,255,0.88);
          font-size: 14.5px;
          line-height: 1.5;
          font-weight: 500;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(3px);
          opacity: 0.45;
          z-index: 1;
          animation: floatShape 6s ease-in-out infinite;
        }

        .bg-circle-one {
          width: 260px;
          height: 260px;
          background: #ffd84d;
          top: 70px;
          right: 8%;
        }

        .bg-circle-two {
          width: 180px;
          height: 180px;
          background: #95c93d;
          top: 720px;
          left: 4%;
          animation-delay: 1.3s;
        }

        .bg-circle-three {
          width: 120px;
          height: 120px;
          background: #fff176;
          bottom: 220px;
          right: 4%;
          animation-delay: 2s;
        }

        @keyframes floatShape {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(26px) scale(1.06);
          }
        }

        @keyframes arrowBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }

        @media (max-width: 1024px) {
          .premium-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .premium-recipe-section {
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .premium-hero {
            padding: 85px 16px 45px;
          }

          .premium-recipe-section,
          .premium-recipe-section.reverse {
            grid-template-columns: 1fr;
            margin: 45px auto;
            padding: 16px;
          }

          .recipe-image-box {
            height: 280px;
          }

          .premium-recipe-card {
            padding: 30px 22px;
          }

          .premium-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .premium-use-card {
            height: 285px;
          }

          .hero-btn {
            width: 100%;
          }

          .premium-uses-section {
            margin: 80px auto 100px;
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .premium-hero h1 {
            font-size: 38px;
          }

          .premium-hero p {
            font-size: 15.5px;
          }

          .hero-badge {
            font-size: 11px;
            padding: 8px 15px;
          }

          .card-count {
            font-size: 48px;
            right: 20px;
            top: 20px;
          }

          .premium-recipe-card li {
            font-size: 14px;
            padding-left: 42px;
          }

          .use-content h3 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}

const uses = [
  {
    title: "Lemon Soda",
    icon: "🥤",
    img: "/assets/images/lemon_soda.png",
    text: "Perfect for refreshing soda and chilled summer drinks.",
  },
  {
    title: "Lemon Mint",
    icon: "🌿",
    img: "/assets/images/lemon_mint.png",
    text: "Useful for mint lemon drinks and cooling beverages.",
  },
  {
    title: "Lemon Tea",
    icon: "🍵",
    img: "/assets/images/lemontea.jpeg",
    text: "Adds a natural lemon taste to hot or iced tea.",
  },
  {
    title: "Biryani",
    icon: "🍛",
    img: "/assets/images/biriyani.jpeg",
    text: "Can be used to enhance flavor in rice and biryani recipes.",
  },
  {
    title: "Chicken",
    icon: "🍗",
    img: "/assets/images/chicken.jpeg",
    text: "Useful for marination and tangy chicken preparation.",
  },
  {
    title: "Desserts",
    icon: "🍰",
    img: "/assets/images/dessert.jpeg",
    text: "Adds a lemon flavor note to desserts and sweet dishes.",
  },
];