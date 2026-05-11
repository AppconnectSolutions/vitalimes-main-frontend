// src/components/recipes/LemonJuicePowderRecipes.jsx
import React, { useEffect } from "react";
import {
  Leaf,
  CupSoda,
  GlassWater,
  Sparkles,
  Droplets,
  CheckCircle,
  ArrowRight,
  Store,
  School,
  Hotel,
  Utensils,
} from "lucide-react";

export default function LemonJuicePowderRecipes() {
      useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const recipes = [
    {
      title: "Lemon Soda",
      subtitle: "Refreshing fizzy summer drink",
      img: "/assets/images/recepies/lemon_soda.jpeg",
      tag: "Chilled & Refreshing",
      steps: [
        "Add 31g Vitalimes Instant Drink Lemon Juice Powder.",
        "Pour 200ml chilled soda water.",
        "Stir well until fully mixed.",
        "Serve immediately with ice cubes.",
      ],
    },
    {
      title: "Lemon Tea",
      subtitle: "Warm citrus tea for everyday refreshment",
      img: "/assets/images/recepies/lemon_tea1.jpeg",
      tag: "Warm & Soothing",
      steps: [
        "Prepare one cup of hot black tea.",
        "Add the required quantity of lemon juice powder.",
        "Stir well until the powder dissolves.",
        "Serve warm for a fresh lemon tea taste.",
      ],
    },
    {
      title: "Lemon Sarbath",
      subtitle: "Traditional cooling drink for hot days",
      img: "/assets/images/recepies/lemon_sarpath.jpeg",
      tag: "Traditional Cooler",
      steps: [
        "Add 31g Vitalimes Lemon Juice Powder.",
        "Mix with 200ml cold drinking water.",
        "Add ice cubes if needed.",
        "Stir well and serve chilled.",
      ],
    },
  ];

  const usagePlaces = [
    { icon: <Utensils size={17} />, label: "Catering" },
    { icon: <Store size={17} />, label: "Restaurants" },
    { icon: <Hotel size={17} />, label: "Hotels" },
    { icon: <GlassWater size={17} />, label: "Water Halls" },
    { icon: <School size={17} />, label: "School & College Canteens" },
  ];

  const benefits = [
    "Easy way to prepare tasty lemon drinks at home.",
    "Can be used for multiple drink recipes like soda, tea, mint and sarbath.",
    "Refreshing lemon taste for daily use.",
    "Convenient option for catering, hotels, restaurants and canteens.",
    "Made for quick preparation with cold drinking water.",
  ];

  return (
    <section className="lemon-recipe-page">
      <div className="lemon-bg-glow lemon-bg-glow-one"></div>
      <div className="lemon-bg-glow lemon-bg-glow-two"></div>

      <div className="recipe-container">
        {/* HERO */}
        <div className="recipe-hero">
          <div className="recipe-hero-content">
            <span className="premium-badge">
              <Leaf size={14} />
              Instant Drink Mix
            </span>

            <h1>
              Instant Drink <span>Lemon Juice Powder</span>
            </h1>

            <p>
              Vitalimes Instant Drink Lemon Juice Powder is a quick and tasty
              way to prepare refreshing lemon-based drinks. Mix 31g powder with
              200ml cold drinking water and enjoy a delicious lemon drink.
            </p>

            <div className="hero-actions">
              <a href="#recipes" className="primary-btn">
                View Recipes
                <ArrowRight size={16} />
              </a>

              <a href="#benefits" className="secondary-btn">
                View Benefits
              </a>
            </div>

            <div className="quick-points">
              <span>
                <CheckCircle size={14} />
                Easy to Mix
              </span>
              <span>
                <CheckCircle size={14} />
                Refreshing Taste
              </span>
              <span>
                <CheckCircle size={14} />
                Daily Use
              </span>
            </div>
          </div>

          <div className="recipe-hero-image-wrap">
            <div className="hero-product-card">
              <img
                src="/assets/images/recepies/instant_juice.jpeg"
                alt="Vitalimes Instant Drink Lemon Juice Powder"
                onError={(e) => {
                  e.currentTarget.src =
                    "/assets/images/recepies/lemonpowder_receipes.png";
                }}
              />
            </div>

            <div className="floating-label label-one">
              <Sparkles size={14} />
              Premium Taste
            </div>

            <div className="floating-label label-two">
              <Droplets size={14} />
              Mix with 200ml Water
            </div>
          </div>
        </div>

        {/* HOW TO USE */}
        <div className="info-section">
          <div className="section-heading">
            <span>How to Use</span>
            <h2>Simple Preparation</h2>
            <p>
              Take 31g of Vitalimes Instant Drink Lemon Juice Powder, mix well
              in 200ml cold drinking water and enjoy the taste.
            </p>
          </div>

          <div className="usage-grid">
            <div className="usage-card">
              <span className="step-no">01</span>
              <h4>Add Powder</h4>
              <p>Add 31g lemon juice powder into a clean glass.</p>
            </div>

            <div className="usage-card">
              <span className="step-no">02</span>
              <h4>Mix Water</h4>
              <p>Pour 200ml cold drinking water and stir well.</p>
            </div>

            <div className="usage-card">
              <span className="step-no">03</span>
              <h4>Serve Fresh</h4>
              <p>Serve chilled and enjoy the refreshing lemon taste.</p>
            </div>
          </div>
        </div>

        {/* RECIPES */}
        <div className="recipes-section" id="recipes">
          <div className="section-heading">
            <span>Drink Recipes</span>
            <h2>Make More With Lemon Powder</h2>
            <p>
              Use the same Vitalimes lemon juice powder to prepare multiple
              drinks for home, restaurants, events and canteens.
            </p>
          </div>

          <div className="recipe-card-grid">
            {recipes.map((recipe, index) => (
              <div
                className="premium-recipe-card"
                key={recipe.title}
                style={{ animationDelay: `${index * 0.14}s` }}
              >
                <div className="recipe-img-box">
                  <img src={recipe.img} alt={recipe.title} />
                  <div className="recipe-img-overlay"></div>

                  <span className="recipe-tag">{recipe.tag}</span>
                </div>

                <div className="recipe-card-body">
                  <h3>{recipe.title}</h3>
                  <p>{recipe.subtitle}</p>

                  <ul>
                    {recipe.steps.map((step) => (
                      <li key={step}>
                        <CheckCircle size={14} />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* USAGE PLACES */}
        <div className="places-section">
          <div className="section-heading">
            <span>Where to Use</span>
            <h2>Perfect For Many Places</h2>
          </div>

          <div className="places-grid">
            {usagePlaces.map((place, index) => (
              <div
                className="place-card"
                key={place.label}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="place-icon">{place.icon}</div>
                <span>{place.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="benefits-section" id="benefits">
          <div className="benefit-left">
            <span className="premium-badge">
              <Sparkles size={14} />
              Benefits
            </span>

            <h2>Why Customers Love This Drink Mix</h2>

            <p>
              Vitalimes Instant Drink Lemon Juice Powder is designed for fast
              preparation, refreshing taste and versatile use across home and
              commercial needs.
            </p>
          </div>

          <div className="benefit-list">
            {benefits.map((item, index) => (
              <div
                className="benefit-item"
                key={item}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER INFO */}
        <div className="recipe-footer-box">
          <h3>VITALIME AGRO TECH PRIVATE LIMITED</h3>
          <p>Kovilpatti - 628503</p>

          <div className="footer-contact-grid">
            <span>Ph: +91 95859 92035</span>
            <span>Customer care: care@vitalimes.com</span>
            <span>Website: www.vitalimes.com</span>
          </div>
        </div>
      </div>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap");

        html {
          scroll-behavior: smooth;
        }

        .lemon-recipe-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 80px 20px 70px;
          background:
            radial-gradient(circle at top left, rgba(255, 216, 50, 0.22), transparent 28%),
            radial-gradient(circle at bottom right, rgba(31, 59, 47, 0.12), transparent 32%),
            #ffffff;
          font-family: "Poppins", sans-serif;
          color: #1f3b2f;
        }

        .lemon-bg-glow {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 999px;
          filter: blur(20px);
          opacity: 0.55;
          pointer-events: none;
          animation: glowMove 7s ease-in-out infinite;
        }

        .lemon-bg-glow-one {
          top: 8%;
          left: -90px;
          background: rgba(255, 209, 24, 0.26);
        }

        .lemon-bg-glow-two {
          bottom: 10%;
          right: -90px;
          background: rgba(31, 59, 47, 0.16);
          animation-delay: 1.5s;
        }

        .recipe-container {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin: 0 auto;
        }

        .recipe-hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 42px;
          align-items: center;
          min-height: 560px;
          padding: 42px;
          border-radius: 42px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,250,220,0.92));
          border: 1px solid rgba(31, 59, 47, 0.12);
          box-shadow: 0 30px 90px rgba(31, 59, 47, 0.12);
          overflow: hidden;
          animation: fadeUp 0.75s ease both;
        }

        .recipe-hero-content {
          animation: slideInLeft 0.85s ease both;
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 999px;
          background: rgba(31, 59, 47, 0.08);
          border: 1px solid rgba(31, 59, 47, 0.14);
          color: #1f3b2f;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.9px;
          margin-bottom: 18px;
        }

        .recipe-hero h1 {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1.05;
          font-weight: 800;
          color: #1f3b2f;
          letter-spacing: -1px;
        }

        .recipe-hero h1 span {
          color: #d8a708;
        }

        .recipe-hero p {
          max-width: 620px;
          margin: 22px 0 0;
          color: #4f665b;
          font-size: 16px;
          line-height: 1.8;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .primary-btn,
        .secondary-btn {
          min-height: 46px;
          padding: 0 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 900;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .primary-btn {
          background: linear-gradient(135deg, #1f3b2f, #0b8a45);
          color: #ffffff;
          box-shadow: 0 18px 38px rgba(31, 59, 47, 0.25);
        }

        .primary-btn:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 24px 48px rgba(31, 59, 47, 0.32);
        }

        .secondary-btn {
          background: #ffffff;
          border: 1px solid rgba(31, 59, 47, 0.14);
          color: #1f3b2f;
        }

        .secondary-btn:hover {
          color: #1f3b2f;
          background: #f7fbef;
          transform: translateY(-2px);
        }

        .quick-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .quick-points span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 13px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid rgba(31, 59, 47, 0.1);
          color: #4f665b;
          font-size: 12px;
          font-weight: 800;
        }

        .recipe-hero-image-wrap {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slideInRight 0.85s ease both;
        }

        .hero-product-card {
          width: min(420px, 100%);
          height: 430px;
          border-radius: 36px;
          background:
            radial-gradient(circle at top, rgba(216, 167, 8, 0.20), transparent 50%),
            #ffffff;
          border: 1px solid rgba(31, 59, 47, 0.12);
          box-shadow: 0 30px 80px rgba(31, 59, 47, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: floatProduct 4s ease-in-out infinite;
        }

        .hero-product-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .floating-label {
          position: absolute;
          min-height: 38px;
          padding: 0 15px;
          border-radius: 999px;
          background: rgba(255,255,255,0.95);
          border: 1px solid rgba(31, 59, 47, 0.12);
          color: #1f3b2f;
          font-size: 12px;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 16px 38px rgba(31, 59, 47, 0.12);
          animation: floatingLabel 3.8s ease-in-out infinite;
        }

        .label-one {
          top: 56px;
          right: 8px;
        }

        .label-two {
          bottom: 70px;
          left: 0;
          animation-delay: 1s;
        }

        .info-section,
        .recipes-section,
        .places-section,
        .benefits-section {
          margin-top: 70px;
        }

        .section-heading {
          max-width: 760px;
          margin: 0 auto 36px;
          text-align: center;
          animation: fadeUp 0.75s ease both;
        }

        .section-heading span {
          display: inline-flex;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(216, 167, 8, 0.14);
          color: #9a6b00;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 14px;
        }

        .section-heading h2 {
          margin: 0;
          font-family: "Playfair Display", serif;
          color: #1f3b2f;
          font-size: clamp(34px, 4vw, 54px);
          font-weight: 800;
          line-height: 1.1;
        }

        .section-heading p {
          margin: 15px auto 0;
          color: #4f665b;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 500;
        }

        .usage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .usage-card {
          padding: 26px;
          border-radius: 28px;
          background: #ffffff;
          border: 1px solid rgba(31, 59, 47, 0.12);
          box-shadow: 0 20px 55px rgba(31, 59, 47, 0.09);
          animation: cardReveal 0.8s ease both;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .usage-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 72px rgba(31, 59, 47, 0.15);
        }

        .step-no {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1f3b2f, #0b8a45);
          color: #ffffff;
          font-size: 13px;
          font-weight: 950;
          margin-bottom: 18px;
        }

        .usage-card h4 {
          margin: 0 0 8px;
          color: #1f3b2f;
          font-size: 19px;
          font-weight: 900;
        }

        .usage-card p {
          margin: 0;
          color: #4f665b;
          font-size: 14px;
          line-height: 1.65;
          font-weight: 500;
        }

        .recipe-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .premium-recipe-card {
          overflow: hidden;
          border-radius: 32px;
          background: #ffffff;
          border: 1px solid rgba(31, 59, 47, 0.12);
          box-shadow: 0 24px 60px rgba(31, 59, 47, 0.11);
          animation: cardReveal 0.85s ease both;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .premium-recipe-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 34px 85px rgba(31, 59, 47, 0.18);
        }

        .recipe-img-box {
          position: relative;
          height: 270px;
          overflow: hidden;
          background: #fbfff3;
        }

        .recipe-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .premium-recipe-card:hover .recipe-img-box img {
          transform: scale(1.08);
        }

        .recipe-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.02) 40%,
            rgba(31,59,47,0.45) 100%
          );
        }

        .recipe-tag {
          position: absolute;
          left: 16px;
          bottom: 16px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.94);
          color: #1f3b2f;
          font-size: 11px;
          font-weight: 900;
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }

        .recipe-card-body {
          padding: 22px;
        }

        .recipe-card-body h3 {
          margin: 0;
          color: #1f3b2f;
          font-size: 23px;
          font-weight: 950;
        }

        .recipe-card-body p {
          margin: 8px 0 16px;
          color: #4f665b;
          font-size: 14px;
          line-height: 1.6;
          font-weight: 500;
        }

        .recipe-card-body ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }

        .recipe-card-body li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #31483b;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 650;
        }

        .recipe-card-body li svg {
          color: #0b8a45;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .places-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .place-card {
          min-height: 112px;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid rgba(31, 59, 47, 0.12);
          box-shadow: 0 18px 45px rgba(31, 59, 47, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
          animation: cardReveal 0.8s ease both;
          transition: transform 0.3s ease;
        }

        .place-card:hover {
          transform: translateY(-7px);
        }

        .place-icon {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          background: rgba(31, 59, 47, 0.08);
          color: #1f3b2f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .place-card span {
          color: #1f3b2f;
          font-size: 12px;
          font-weight: 900;
        }

        .benefits-section {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 34px;
          padding: 38px;
          border-radius: 36px;
          background:
            linear-gradient(135deg, #1f3b2f, #0b8a45);
          color: #ffffff;
          box-shadow: 0 30px 90px rgba(31, 59, 47, 0.2);
          animation: fadeUp 0.8s ease both;
        }

        .benefit-left .premium-badge {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.2);
          color: #ffffff;
        }

        .benefit-left h2 {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 800;
          line-height: 1.1;
        }

        .benefit-left p {
          margin: 18px 0 0;
          color: rgba(255,255,255,0.82);
          font-size: 15px;
          line-height: 1.75;
        }

        .benefit-list {
          display: grid;
          gap: 12px;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.13);
          color: #ffffff;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 650;
          animation: cardReveal 0.75s ease both;
        }

        .benefit-item svg {
          color: #ffd84a;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .recipe-footer-box {
          margin-top: 70px;
          padding: 28px;
          border-radius: 32px;
          background: #ffffff;
          border: 1px solid rgba(31, 59, 47, 0.12);
          box-shadow: 0 20px 55px rgba(31, 59, 47, 0.09);
          text-align: center;
          animation: fadeUp 0.8s ease both;
        }

        .recipe-footer-box h3 {
          margin: 0;
          color: #1f3b2f;
          font-size: 18px;
          font-weight: 950;
          letter-spacing: 0.4px;
        }

        .recipe-footer-box p {
          margin: 8px 0 18px;
          color: #4f665b;
          font-size: 15px;
          font-weight: 800;
        }

        .footer-contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .footer-contact-grid span {
          padding: 11px 12px;
          border-radius: 999px;
          background: #f7fbef;
          color: #1f3b2f;
          font-size: 12px;
          font-weight: 850;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(34px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-34px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(34px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(34px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(18px, -16px);
          }
        }

        @keyframes floatProduct {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatingLabel {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 1100px) {
          .recipe-hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .recipe-hero-image-wrap {
            min-height: 380px;
          }

          .recipe-card-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .places-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .benefits-section {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .lemon-recipe-page {
            padding: 55px 14px 50px;
          }

          .recipe-hero {
            padding: 26px;
            border-radius: 30px;
          }

          .recipe-hero p {
            font-size: 14px;
          }

          .hero-product-card {
            height: 330px;
            border-radius: 28px;
          }

          .floating-label {
            position: static;
            margin: 8px;
          }

          .recipe-hero-image-wrap {
            min-height: auto;
            display: grid;
            gap: 8px;
          }

          .usage-grid,
          .recipe-card-grid,
          .places-grid {
            grid-template-columns: 1fr;
          }

          .recipe-img-box {
            height: 240px;
          }

          .benefits-section {
            padding: 26px;
            border-radius: 30px;
          }

          .footer-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .recipe-hero h1 {
            font-size: 36px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .hero-actions {
            display: grid;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}