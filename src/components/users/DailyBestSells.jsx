import React, { useRef, useEffect } from "react";

export default function DailyBestSells() {
  const base =
    typeof process !== "undefined" && process.env && process.env.PUBLIC_URL
      ? process.env.PUBLIC_URL
      : "";

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    const slider = sliderRef.current;
    const card = slider.querySelector(".product-overlay-card, .banner-card");
    const width = card.offsetWidth + 16;

    slider.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    const card = slider.querySelector(".product-overlay-card, .banner-card");
    const width = card.offsetWidth + 16;

    slider.scrollBy({
      left: width,
      behavior: "smooth",
    });

    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 5) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      img: `${base}/assets/images/category_essential_oil.png`,
      title: "Lemon Essential Oil",
      description: [
        "Fresh citrus aroma",
        "Steam aroma use",
        "Cosmetic blending",
        "Selected food flavouring",
        "Premium lemon essence",
      ],
      rating: 4.5,
    },
    {
      img: `${base}/assets/images/category_lemon_powder.png`,
      title: "Lemon Powder Drink",
      description: [
        "Refreshing drink",
        "Easy to prepare",
        "Tangy lemon taste",
        "Daily kitchen use",
        "Summer special",
      ],
      rating: 4.5,
    },
    {
      img: "https://minio.vitalimes.com/vitalimes-images/uploads/Black_lemon_dry.png",
      title: "Black Lemon",
      description: [
        "Natural sour taste",
        "Food flavour enhancer",
        "Traditional recipes",
        "Biryani and soups",
        "Premium aroma",
      ],
      rating: 4.5,
    },
    {
      img: `${base}/assets/new/Lemon_seed_powder.png`,
      title: "Lemon Seed Powder",
      description: [
        "Natural seed powder",
        "Food application",
        "Skincare blending",
        "Clean product appeal",
        "Premium ingredient",
      ],
      rating: 4.5,
    },
    {
      img: `${base}/assets/images/blacklemonpowder.jpeg`,
      title: "Black Lemon Powder",
      description: [
        "Tangy flavour",
        "Easy to use",
        "Chutney and gravy",
        "Biryani enhancer",
        "Natural ingredient",
      ],
      rating: 4.5,
    },
    {
      img: `${base}/assets/images/category_lemon_seed_oil.png`,
      title: "Lemon Seed Oil",
      description: [
        "Food finishing oil",
        "Skin nourishment",
        "Hair care use",
        "Natural oil appeal",
        "Premium wellness",
      ],
      rating: 4.5,
    },
  ];

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const stars = [];

    for (let i = 0; i < full; i++)
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);

    if (half)
      stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);

    while (stars.length < 5)
      stars.push(
        <i
          key={"e" + stars.length}
          className="bi bi-star text-warning opacity-50"
        ></i>
      );

    return stars;
  };

  return (
    <section
      className="daily-best-premium-section"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container">
        {/* HEADER */}
        <div className="daily-header">
          <div>
            <span className="daily-badge">Customer Favorites</span>

            <h3>
              Daily Best <span>Seller</span>
            </h3>

            <p>
              Explore Vitalimes premium lemon-based products crafted for food,
              drinks, skincare, hair care and everyday wellness use.
            </p>
          </div>

          <div className="daily-controls">
            <button
              className="slider-btn"
              onClick={scrollLeft}
              type="button"
              aria-label="Previous products"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <button
              className="slider-btn"
              onClick={scrollRight}
              type="button"
              aria-label="Next products"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="slider" ref={sliderRef}>
          {/* BANNER */}
          <div
            className="banner-card"
            style={{
              backgroundImage: `url(${base}/assets/images/Blacklemon_powder_2.png)`,
            }}
          >
            <div className="premium-tag">Featured Product</div>

            <div className="overlay-content">
              <h4>100% Pure Black Lemon Powder</h4>
              <p>Natural sour taste enhancer for premium food recipes.</p>

              <a
                href="/products"
                className="premium-shop-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Shop Now
                <span>→</span>
              </a>
            </div>
          </div>

          {/* PRODUCT CARDS */}
          {products.map((p, idx) => (
            <div
              key={idx}
              className="product-overlay-card"
              style={{
                backgroundImage: `url(${p.img})`,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="premium-tag">Best Seller</div>

              <div className="overlay-content">
                <h5>{p.title}</h5>

                <ul>
                  {p.description.map((d, i) => (
                    <li key={i}>✓ {d}</li>
                  ))}
                </ul>

                <div className="rating">
                  <div>{renderStars(p.rating)}</div>
                  <span>{p.rating}</span>
                </div>

                <a
                  href="/products"
                  className="premium-cart-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  Add to Cart
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .daily-best-premium-section {
          position: relative;
          overflow: hidden;
          padding: 85px 0 95px;
          background: #ffffff;
          font-family: 'Poppins', sans-serif;
        }

        .daily-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 38px;
          animation: dailyHeaderUp 0.85s ease both;
        }

        .daily-badge {
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

        .daily-header h3 {
          margin: 0;
          font-family: 'Playfair Display', serif;
          color: #102f1e;
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .daily-header h3 span {
          color: #d8a708;
        }

        .daily-header p {
          max-width: 680px;
          margin: 16px 0 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.75;
          font-weight: 500;
        }

        .daily-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .slider-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid #dfe9d2;
          background: #ffffff;
          color: #0b7d3b;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 28px rgba(54, 72, 18, 0.08);
          transition: all 0.3s ease;
        }

        .slider-btn:hover {
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(6, 63, 32, 0.24);
        }

        .slider {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 8px 6px 20px;
        }

        .slider::-webkit-scrollbar {
          display: none;
        }

        .banner-card,
        .product-overlay-card {
          position: relative;
          overflow: hidden;
          scroll-snap-align: start;
          border-radius: 34px;
          background-size: cover;
          background-position: center;
          border: 1px solid #e8efdf;
          box-shadow: 0 24px 65px rgba(54, 72, 18, 0.12);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          opacity: 0;
          transform: translateY(40px);
          animation: dailyCardUp 0.85s ease forwards;
        }

        .banner-card {
          flex: 0 0 430px;
          height: 430px;
        }

        .product-overlay-card {
          flex: 0 0 350px;
          height: 430px;
        }

        .banner-card::before,
        .product-overlay-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.76)),
            radial-gradient(circle at top right, rgba(255, 213, 46, 0.28), transparent 38%);
          z-index: 1;
        }

        .banner-card::after,
        .product-overlay-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.42),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.85s;
          pointer-events: none;
          z-index: 4;
        }

        .banner-card:hover::after,
        .product-overlay-card:hover::after {
          left: 130%;
        }

        .banner-card:hover,
        .product-overlay-card:hover {
          transform: translateY(-10px) scale(1.025);
          box-shadow: 0 34px 85px rgba(54, 72, 18, 0.20);
        }

        .premium-tag {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 2;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.94);
          color: #0b7d3b;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.4px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.14);
        }

        .overlay-content {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          color: white;
          z-index: 2;
        }

        .overlay-content h4,
        .overlay-content h5 {
          margin: 0 0 10px;
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          line-height: 1.15;
          text-shadow: 0 4px 14px rgba(0,0,0,0.35);
        }

        .overlay-content h4 {
          font-size: 30px;
        }

        .overlay-content h5 {
          font-size: 25px;
        }

        .overlay-content p {
          margin: 0 0 18px;
          color: rgba(255,255,255,0.86);
          font-size: 15px;
          line-height: 1.6;
          font-weight: 500;
        }

        .overlay-content ul {
          list-style: none;
          padding: 0;
          margin: 10px 0 16px;
          display: grid;
          gap: 6px;
        }

        .overlay-content li {
          color: rgba(255,255,255,0.88);
          font-size: 14px;
          line-height: 1.45;
          font-weight: 600;
        }

        .rating {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 14px;
          padding: 10px 12px;
          border-radius: 16px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(10px);
        }

        .rating span {
          color: #ffffff;
          font-size: 13px;
          font-weight: 900;
        }

        .premium-shop-btn,
        .premium-cart-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          box-shadow: 0 14px 34px rgba(6, 63, 32, 0.30);
          transition: all 0.3s ease;
        }

        .premium-shop-btn {
          padding: 12px 18px;
        }

        .premium-cart-btn {
          width: 100%;
          padding: 12px 16px;
        }

        .premium-shop-btn span,
        .premium-cart-btn span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.22);
        }

        .premium-shop-btn:hover,
        .premium-cart-btn:hover {
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 18px 42px rgba(6, 63, 32, 0.38);
        }

        @keyframes dailyHeaderUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dailyCardUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .daily-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .daily-controls {
            align-self: flex-start;
          }

          .daily-best-premium-section {
            padding: 75px 0 85px;
          }

          .banner-card {
            flex: 0 0 390px;
            height: 410px;
          }

          .product-overlay-card {
            flex: 0 0 330px;
            height: 410px;
          }
        }

        @media (max-width: 768px) {
          .daily-best-premium-section {
            padding: 65px 0 75px;
          }

          .daily-header h3 {
            font-size: 38px;
          }

          .daily-header p {
            font-size: 14.5px;
          }

          .slider {
            gap: 16px;
            padding: 6px 10px 18px;
          }

          .banner-card,
          .product-overlay-card {
            flex: 0 0 88%;
            height: 430px;
          }

          .overlay-content h4 {
            font-size: 26px;
          }

          .overlay-content h5 {
            font-size: 23px;
          }
        }

        @media (max-width: 480px) {
          .daily-header h3 {
            font-size: 34px;
          }

          .banner-card,
          .product-overlay-card {
            flex: 0 0 92%;
            height: 400px;
            border-radius: 28px;
          }

          .overlay-content {
            left: 20px;
            right: 20px;
            bottom: 20px;
          }

          .overlay-content h4 {
            font-size: 24px;
          }

          .overlay-content h5 {
            font-size: 21px;
          }

          .overlay-content li {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}