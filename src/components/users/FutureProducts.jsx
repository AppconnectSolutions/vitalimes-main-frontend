import React from "react";

const futureProducts = [
  {
    title: "Lemon Leaves",
    description:
      "Fresh lemon leaves planned for herbal, cooking, and wellness-based future products.",
    image:
      "/assets/images/lemon_leaves.jpg",
  },
  {
    title: "Lemon Slice",
    description:
      "Premium lemon slices planned for food, beverage, garnish, and dried fruit usage.",
    image:
      "/assets/images/lemon_slice.jpg",
  },
  {
    title: "Lemon Concentrate",
    description:
      "Natural lemon concentrate planned for juice, syrup, beverage, and food processing.",
    image:
       "/assets/images/lemonade.jpg",
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
      <section className="future-products-section">
        <div className="future-products-bg-circle circle-one"></div>
        <div className="future-products-bg-circle circle-two"></div>

        <div className="future-products-container">
          <div className="future-products-content">
            <div className="future-products-text">
              <span className="future-products-badge">
               
              </span>

              <h2>
                Future <span>Products</span>
              </h2>

              <p>
                We are planning to introduce more lemon-based natural products
                including lemon leaves, lemon slices, and lemon concentrate.
              </p>

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
                <h3>Upcoming</h3>
                <p>Natural lemon product range</p>
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
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
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
          padding: 80px 20px;
          background:
            radial-gradient(circle at top left, rgba(255, 229, 100, 0.35), transparent 32%),
            linear-gradient(135deg, #fffdf1 0%, #f7ffe8 45%, #ffffff 100%);
        }

        .future-products-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .future-products-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 30px;
          align-items: center;
          margin-bottom: 45px;
        }

        .future-products-text {
          animation: futureFadeLeft 0.9s ease both;
        }

        .future-products-badge {
          display: inline-block;
          margin-bottom: 14px;
          padding: 8px 16px;
          border-radius: 999px;
          background: #e9f8cf;
          color: #5d8f18;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          box-shadow: 0 8px 20px rgba(93, 143, 24, 0.12);
        }

        .future-products-text h2 {
          margin: 0 0 16px;
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.05;
          font-weight: 900;
          color: #17210f;
        }

        .future-products-text h2 span {
          color: #79a91d;
          position: relative;
        }

        .future-products-text h2 span::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 10px;
          background: rgba(255, 215, 64, 0.45);
          z-index: -1;
          border-radius: 20px;
        }

        .future-products-text p {
          max-width: 650px;
          margin: 0 0 26px;
          color: #59624f;
          font-size: 17px;
          line-height: 1.7;
        }

        .future-products-scroll-btn {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 14px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, #86b817, #567c0f);
          color: #ffffff;
          font-size: 15px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 14px 30px rgba(86, 124, 15, 0.28);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .future-products-scroll-btn span {
          display: inline-flex;
          width: 24px;
          height: 24px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.22);
          animation: futureBounce 1.5s infinite;
        }

        .future-products-scroll-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 38px rgba(86, 124, 15, 0.35);
        }

        .future-products-highlight {
          display: flex;
          justify-content: center;
          animation: futureFadeRight 0.9s ease both;
        }

        .highlight-card {
          width: min(100%, 330px);
          min-height: 210px;
          border-radius: 32px;
          padding: 30px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.45)),
            url("https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80");
          background-size: cover;
          background-position: center;
          box-shadow: 0 25px 60px rgba(69, 92, 21, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.65);
          position: relative;
          overflow: hidden;
        }

        .highlight-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,255,255,0.28));
        }

        .highlight-card h3,
        .highlight-card p {
          position: relative;
          z-index: 1;
        }

        .highlight-card h3 {
          margin: 0 0 8px;
          font-size: 34px;
          font-weight: 900;
          color: #234000;
        }

        .highlight-card p {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #4f642f;
        }

        .future-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .future-product-card {
          background: rgba(255, 255, 255, 0.86);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.75);
          box-shadow: 0 18px 45px rgba(56, 72, 25, 0.12);
          transform: translateY(30px);
          opacity: 0;
          animation: futureCardUp 0.9s ease forwards;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .future-product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 70px rgba(56, 72, 25, 0.2);
        }

        .future-product-image-box {
          position: relative;
          height: 260px;
          overflow: hidden;
        }

        .future-product-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
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
            rgba(0, 0, 0, 0.18),
            rgba(0, 0, 0, 0.02)
          );
        }

        .future-product-overlay span {
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.92);
          color: #5d8f18;
          font-size: 13px;
          font-weight: 900;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .future-product-info {
          padding: 24px;
        }

        .future-product-info h3 {
          margin: 0 0 10px;
          font-size: 23px;
          font-weight: 900;
          color: #1e2d12;
        }

        .future-product-info p {
          margin: 0;
          color: #626b58;
          font-size: 15px;
          line-height: 1.65;
        }

        .future-products-bg-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(4px);
          opacity: 0.35;
          animation: futureFloat 5s ease-in-out infinite;
        }

        .circle-one {
          width: 220px;
          height: 220px;
          background: #f7d94c;
          top: -60px;
          right: 10%;
        }

        .circle-two {
          width: 150px;
          height: 150px;
          background: #9acb37;
          bottom: 40px;
          left: 4%;
          animation-delay: 1s;
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

        @keyframes futureFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(20px) scale(1.05);
          }
        }

        @media (max-width: 900px) {
          .future-products-content {
            grid-template-columns: 1fr;
          }

          .future-products-highlight {
            justify-content: flex-start;
          }

          .future-products-grid {
            grid-template-columns: 1fr;
          }

          .future-products-section {
            padding: 60px 16px;
          }

          .future-product-image-box {
            height: 230px;
          }
        }

        @media (max-width: 480px) {
          .future-products-scroll-btn {
            width: 100%;
            justify-content: center;
          }

          .highlight-card {
            min-height: 180px;
          }

          .future-product-info {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}