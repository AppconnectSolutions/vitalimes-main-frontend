import React from "react";

const futureProducts = [
  {
    title: "Lemon Leaves",
    description:
      "Fresh lemon leaves planned for herbal, cooking, and wellness-based future products.",
    image: "/assets/images/lemon_leaves.jpg",
  },
  {
    title: "Lemon Slice",
    description:
      "Premium lemon slices planned for food, beverage, garnish, and dried fruit usage.",
    image: "/assets/images/lemon_slice.jpg",
  },
  {
    title: "Lemon Concentrate",
    description:
      "Natural lemon concentrate planned for juice, syrup, beverage, and food processing.",
    image: "/assets/images/lemonade.jpg",
  },
];

export default function FutureProducts() {
  const scrollToProducts = () => {
    const section = document.getElementById("future-products-cards");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <section
        className="future-products-section"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="future-products-container">
          <div className="future-products-content">
            <div className="future-products-text">
              <span className="future-products-badge">
                Upcoming Product Range
              </span>

              <h2>
                Future <span>Products</span>
              </h2>

              <p>
                We are planning to introduce more lemon-based natural products
                including lemon leaves, lemon slices, and lemon concentrate for
                food, beverage, wellness, and processing applications.
              </p>

              <div className="future-products-points">
                <div>
                  <span>✓</span>
                  Natural lemon-based expansion
                </div>
                <div>
                  <span>✓</span>
                  Food and beverage focused
                </div>
                <div>
                  <span>✓</span>
                  Planned as per client requirement
                </div>
              </div>

              <button
                type="button"
                className="future-products-scroll-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToProducts();
                }}
              >
                View Future Products
                <span>↓</span>
              </button>
            </div>

            <div className="future-products-highlight">
              <div className="highlight-card">
                <span className="highlight-label">Coming Soon</span>
                <h3>Natural Lemon Product Range</h3>
                <p>
                  Expanding Vitalimes with premium lemon leaves, lemon slices,
                  and lemon concentrate based on upcoming business needs.
                </p>
              </div>
            </div>
          </div>

          <div
            id="future-products-cards"
            className="future-products-grid"
            onClick={(e) => e.stopPropagation()}
          >
            {futureProducts.map((product, index) => (
              <div
                className="future-product-card"
                key={product.title}
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <div className="future-product-image-box">
                  <img src={product.image} alt={product.title} />

                  <div className="future-product-overlay">
                    <span>Coming Soon</span>
                  </div>
                </div>

                <div className="future-product-info">
                  <span className="product-category">
                    Future Product {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <div className="future-card-footer">
                    <span>Planned Product</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .future-products-section {
          position: relative;
          overflow: hidden;
          padding: 90px 20px;
          background: #ffffff;
          font-family: 'Poppins', sans-serif;
        }

        .future-products-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .future-products-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 34px;
          align-items: center;
          margin-bottom: 52px;
        }

        .future-products-text {
          animation: futureFadeLeft 0.9s ease both;
        }

        .future-products-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          padding: 9px 20px;
          border-radius: 999px;
          background: #f1f8e7;
          border: 1px solid rgba(11, 125, 59, 0.15);
          color: #0b7d3b;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 10px 28px rgba(7, 86, 41, 0.08);
        }

        .future-products-text h2 {
          margin: 0 0 18px;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.05;
          font-weight: 950;
          letter-spacing: -1.2px;
          color: #102f1e;
        }

        .future-products-text h2 span {
          color: #d8a708;
          position: relative;
          display: inline-block;
        }

        .future-products-text h2 span::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 6px;
          height: 12px;
          background: rgba(255, 210, 48, 0.35);
          border-radius: 999px;
          z-index: -1;
        }

        .future-products-text p {
          max-width: 680px;
          margin: 0 0 24px;
          color: #5e674f;
          font-size: 16.5px;
          line-height: 1.75;
          font-weight: 500;
        }

        .future-products-points {
          display: grid;
          gap: 12px;
          margin-bottom: 28px;
        }

        .future-products-points div {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #425137;
          font-size: 15px;
          font-weight: 700;
        }

        .future-products-points span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: #ffffff;
          font-size: 13px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .future-products-scroll-btn {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 15px 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: #ffffff;
          font-size: 15px;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          box-shadow: 0 18px 42px rgba(6, 63, 32, 0.24);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .future-products-scroll-btn span {
          display: inline-flex;
          width: 26px;
          height: 26px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.22);
          animation: futureBounce 1.5s infinite;
        }

        .future-products-scroll-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 55px rgba(6, 63, 32, 0.32);
        }

        .future-products-highlight {
          display: flex;
          justify-content: center;
          animation: futureFadeRight 0.9s ease both;
        }

        .highlight-card {
          width: min(100%, 360px);
          min-height: 245px;
          border-radius: 34px;
          padding: 34px;
          background: linear-gradient(135deg, #ffffff 0%, #fbfff3 100%);
          border: 1px solid #e8efdf;
          box-shadow: 0 24px 65px rgba(54, 72, 18, 0.10);
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        .highlight-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.78),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.85s;
          pointer-events: none;
        }

        .highlight-card:hover::before {
          left: 130%;
        }

        .highlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 34px 85px rgba(54, 72, 18, 0.16);
        }

        .highlight-label {
          display: inline-flex;
          padding: 7px 16px;
          margin-bottom: 18px;
          border-radius: 999px;
          background: #f1f8e7;
          color: #0b7d3b;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 1px solid rgba(11, 125, 59, 0.12);
        }

        .highlight-card h3 {
          margin: 0 0 12px;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 950;
          color: #102f1e;
        }

        .highlight-card p {
          margin: 0;
          color: #5e674f;
          font-size: 15.5px;
          line-height: 1.7;
          font-weight: 500;
        }

        .future-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .future-product-card {
          background: #ffffff;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid #e8efdf;
          box-shadow: 0 22px 55px rgba(54, 72, 18, 0.10);
          transform: translateY(35px);
          opacity: 0;
          animation: futureCardUp 0.9s ease forwards;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
        }

        .future-product-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.72),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.85s;
          pointer-events: none;
          z-index: 4;
        }

        .future-product-card:hover::before {
          left: 130%;
        }

        .future-product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 32px 78px rgba(54, 72, 18, 0.18);
        }

        .future-product-image-box {
          position: relative;
          height: 265px;
          overflow: hidden;
        }

        .future-product-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.65s ease;
        }

        .future-product-card:hover img {
          transform: scale(1.12) rotate(1deg);
        }

        .future-product-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 18px;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.16),
            rgba(0, 0, 0, 0.03)
          );
          z-index: 2;
        }

        .future-product-overlay span {
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.94);
          color: #0b7d3b;
          font-size: 12px;
          font-weight: 900;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .future-product-info {
          padding: 26px;
        }

        .product-category {
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

        .future-product-info h3 {
          margin: 0 0 10px;
          font-size: 24px;
          line-height: 1.25;
          font-weight: 950;
          color: #102f1e;
        }

        .future-product-info p {
          margin: 0 0 20px;
          color: #5e674f;
          font-size: 15px;
          line-height: 1.65;
          font-weight: 500;
        }

        .future-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #e8efdf;
          color: #0b7d3b;
          font-size: 13px;
          font-weight: 900;
        }

        .future-card-footer span:last-child {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f1f8e7;
          color: #0b7d3b;
        }

        @keyframes futureFadeLeft {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes futureFadeRight {
          from {
            opacity: 0;
            transform: translateX(35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes futureCardUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes futureBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }

        @media (max-width: 1024px) {
          .future-products-content {
            grid-template-columns: 1fr;
          }

          .future-products-highlight {
            justify-content: flex-start;
          }

          .future-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .future-products-section {
            padding: 70px 16px;
          }

          .future-products-grid {
            grid-template-columns: 1fr;
          }

          .future-product-image-box {
            height: 245px;
          }

          .future-products-text h2 {
            font-size: 38px;
          }

          .highlight-card {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .future-products-section {
            padding: 60px 14px;
          }

          .future-products-scroll-btn {
            width: 100%;
            justify-content: center;
          }

          .highlight-card {
            min-height: auto;
            padding: 28px 22px;
          }

          .highlight-card h3 {
            font-size: 26px;
          }

          .future-product-info {
            padding: 22px;
          }

          .future-product-info h3 {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}