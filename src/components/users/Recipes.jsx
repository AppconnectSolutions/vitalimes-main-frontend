// src/components/Recipes.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Recipes() {
  const base =
    typeof process !== "undefined" && process.env && process.env.PUBLIC_URL
      ? process.env.PUBLIC_URL
      : "";

  const navigate = useNavigate();

  const recipes = [
    {
      img: `/assets/images/recepies/lemon_rice.png`,
      title: "Lemon Powder",
      description: "Perfect for lemon rice, lemon juice and daily kitchen use.",
      path: "/recipes/lemon-rice",
      tag: "Kitchen Essential",
      badge: "Best Seller",
    },
    {
      img: `/assets/images/recepies/nannari_receipe.png`,
      title: "Nannari Juice Mixer",
      description: "Refreshing traditional drink mix for summer and daily use.",
      path: "/recipes/nannari-lemon",
      tag: "Refreshing Drink",
      badge: "Summer Special",
    },
    {
      img: `/assets/images/recepies/lemonpowder_receipes.png`,
      title: "Black Lemon & Black Lemon Powder",
      description: "Natural sour taste enhancer for biryani, soups and gravies.",
      path: "/recipes/black-lemon",
      tag: "Premium Taste",
      badge: "Food Flavor",
    },
    {
      img: `/assets/images/recepies/meat.png`,
      title: "Lemon Essential Oil",
      description: "Premium lemon aroma for selected food and personal care usage.",
      path: "/recipes/healthy-dish",
      tag: "Essential Oil",
      badge: "Premium",
    },
    {
      img: `/assets/images/recepies/category_lemon_seed_oil.png`,
      title: "Lemon Seed Oil",
      description: "Natural oil for food, skincare, hair care and wellness routines.",
      path: "/recipes/lemon-seed-oil",
      tag: "Natural Wellness",
      badge: "New",
    },

    // ✅ NEW CARD ADDED HERE
    {
      img: `/assets/images/recepies/instant.png`,
      title: "Instant Drink Lemon Juice Powder",
      description:
        "Prepare lemon soda, lemon tea and lemon sarbath with one refreshing instant drink mix.",
      path: "/recipes/lemon-juice-powder",
      tag: "Instant Drink Mix",
      badge: "New Recipe",
    },
  ];

  return (
    <section
      className="recipes-premium-section"
      onClick={(e) => e.stopPropagation()}
    >
      <Container className="recipes-container">
        <div className="recipes-heading">
          <span className="recipes-small-title">Explore Vitalimes Uses</span>

          <h3>
            Discover Our <span>Product Recipes</span>
          </h3>

          <p>
            Learn how Vitalimes products can be used in food, drinks, skincare,
            wellness routines, and everyday kitchen preparation.
          </p>
        </div>

        <Row className="justify-content-center g-4 recipes-row">
          {recipes.map((recipe, i) => (
            <Col key={i} className="d-flex justify-content-center recipe-col">
              <Card
                onClick={(e) => {
                  e.stopPropagation();

                  if (recipe.path) {
                    navigate(recipe.path);
                  }
                }}
                className="recipe-card"
                style={{
                  animationDelay: `${i * 0.12}s`,
                  cursor: recipe.path ? "pointer" : "default",
                }}
              >
                <div className="recipe-img-box">
                  <Card.Img src={`${base}${recipe.img}`} alt={recipe.title} />

                  <div className="recipe-overlay"></div>

                  <span className="recipe-badge">{recipe.badge}</span>

                  <div className="recipe-view-btn">
                    View Details
                    <span>→</span>
                  </div>
                </div>

                <Card.Body className="recipe-body">
                  <span className="recipe-tag">{recipe.tag}</span>

                  <Card.Title className="recipe-title">
                    {recipe.title}
                  </Card.Title>

                  <Card.Text className="recipe-description">
                    {recipe.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .recipes-premium-section {
          position: relative;
          overflow: hidden;
          padding: 80px 0 95px;
          background: #ffffff;
          font-family: 'Poppins', sans-serif;
        }

        .recipes-container {
          position: relative;
          z-index: 2;
        }

        .recipes-heading {
          max-width: 820px;
          margin: 0 auto 55px;
          text-align: center;
          animation: recipeHeadingUp 0.9s ease both;
        }

        .recipes-small-title {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          padding: 9px 20px;
          border-radius: 999px;
          background: #f1f8e7;
          border: 1px solid rgba(11, 125, 59, 0.15);
          color: #0b7d3b;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 10px 28px rgba(7, 86, 41, 0.08);
        }

        .recipes-heading h3 {
          margin: 0;
          color: #102f1e;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -1.2px;
        }

        .recipes-heading h3 span {
          color: #d8a708;
          position: relative;
          display: inline-block;
        }

        .recipes-heading h3 span::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 7px;
          height: 12px;
          background: rgba(255, 210, 48, 0.38);
          border-radius: 999px;
          z-index: -1;
        }

        .recipes-heading p {
          max-width: 720px;
          margin: 18px auto 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.75;
          font-weight: 500;
        }

        .recipes-row {
          align-items: stretch;
        }

   .recipe-col {
  flex: 0 0 33.333%;
  max-width: 33.333%;
}
    .recipe-card {
  width: 100%;
  max-width: 430px;
  min-height: 560px;
  border: 1px solid #e8efdf !important;
  border-radius: 34px !important;
  overflow: hidden;
  background: #ffffff !important;
  box-shadow: 0 26px 65px rgba(54, 72, 18, 0.12);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  opacity: 0;
  transform: translateY(45px);
  animation: recipeCardUp 0.85s ease forwards;
}

        .recipe-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.75),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.8s;
          z-index: 4;
          pointer-events: none;
        }

        .recipe-card:hover::before {
          left: 130%;
        }

        .recipe-card:hover {
          transform: translateY(-12px) scale(1.025);
          box-shadow: 0 32px 78px rgba(54, 72, 18, 0.18);
        }

        .recipe-img-box {
  position: relative;
  height: 360px;
  overflow: hidden;
  background: #fbfff3;
}

        .recipe-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.75s ease;
        }

        .recipe-card:hover .recipe-img-box img {
          transform: scale(1.13) rotate(1.2deg);
        }

        .recipe-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.48));
          z-index: 1;
        }

        .recipe-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          padding: 7px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.94);
          color: #0b7d3b;
          font-size: 12px;
          font-weight: 900;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .recipe-view-btn {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 12px 15px;
          border-radius: 18px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
          background: rgba(11, 125, 59, 0.90);
          transform: translateY(14px);
          opacity: 0;
          transition: all 0.35s ease;
        }

        .recipe-view-btn span {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.22);
        }

        .recipe-card:hover .recipe-view-btn {
          transform: translateY(0);
          opacity: 1;
        }

       .recipe-body {
  padding: 26px !important;
}

        .recipe-tag {
          display: inline-block;
          margin-bottom: 12px;
          padding: 6px 13px;
          border-radius: 999px;
          background: #eef8d8;
          color: #0b7d3b;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }

        .recipe-title {
          margin-bottom: 9px !important;
          color: #102f1e;
          font-size: 1.08rem !important;
          line-height: 1.35;
          font-weight: 900 !important;
        }

        .recipe-description {
          margin: 0 !important;
          color: #5e674f !important;
          font-size: 0.9rem !important;
          line-height: 1.6;
          font-weight: 500;
        }

        @keyframes recipeHeadingUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes recipeCardUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1400px) {
          .recipe-col {
            flex: 0 0 25%;
            max-width: 25%;
          }
        }

        @media (max-width: 1200px) {
          .recipe-col {
            flex: 0 0 33.33%;
            max-width: 33.33%;
          }

          .recipe-img-box {
            height: 300px;
          }
        }

        @media (max-width: 992px) {
          .recipe-col {
            flex: 0 0 50%;
            max-width: 50%;
          }

          .recipes-premium-section {
            padding: 70px 0 85px;
          }

          .recipe-img-box {
            height: 285px;
          }
        }

        @media (max-width: 576px) {
          .recipes-premium-section {
            padding: 55px 0 70px;
          }

          .recipes-container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .recipes-heading {
            margin-bottom: 34px;
          }

          .recipes-small-title {
            font-size: 11px;
            padding: 8px 15px;
          }

          .recipes-heading h3 {
            font-size: 31px;
            line-height: 1.15;
          }

          .recipes-heading p {
            font-size: 14px;
            line-height: 1.65;
          }

          .recipes-row {
            row-gap: 22px !important;
          }

          .recipe-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            width: 100% !important;
          }

          .recipe-card {
            max-width: 360px;
            width: 100%;
            border-radius: 26px !important;
            box-shadow: 0 18px 42px rgba(54, 72, 18, 0.12);
          }

          .recipe-img-box {
            height: 230px;
          }

          .recipe-badge {
            top: 13px;
            left: 13px;
            padding: 6px 12px;
            font-size: 11px;
          }

          .recipe-view-btn {
            left: 14px;
            right: 14px;
            bottom: 14px;
            opacity: 1;
            transform: translateY(0);
            padding: 10px 13px;
            font-size: 13px;
            border-radius: 16px;
          }

          .recipe-body {
            padding: 18px !important;
          }

          .recipe-tag {
            font-size: 10px;
            padding: 6px 12px;
            margin-bottom: 10px;
          }

         .recipe-title {
  margin-bottom: 12px !important;
  color: #102f1e;
  font-size: 1.35rem !important;
  line-height: 1.35;
  font-weight: 950 !important;
}


         .recipe-description {
  margin: 0 !important;
  color: #5e674f !important;
  font-size: 1rem !important;
  line-height: 1.7;
  font-weight: 500;
}
        }

        @media (max-width: 360px) {
          .recipes-container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .recipe-card {
            max-width: 100%;
          }

          .recipe-img-box {
            height: 210px;
          }

          .recipes-heading h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}