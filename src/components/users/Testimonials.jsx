import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FeedbackCarousel() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 2;

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // ✅ MinIO config
  const MINIO_PUBLIC_URL =
    import.meta.env.VITE_MINIO_PUBLIC_URL || "https://minio.appconnect.cloud";
  const MINIO_BUCKET =
    import.meta.env.VITE_MINIO_BUCKET || "vitalimes-images";

  // ✅ Convert DB filename → MinIO URL
  const toImageUrl = (filename) => {
    if (!filename) return "";

    let key = String(filename).trim();

    // ✅ If already MinIO URL → return as is
    if (key.includes("minio.appconnect.cloud")) {
      return key;
    }

    // ✅ If full URL (localhost etc) → return as is
    if (key.startsWith("http")) {
      return key;
    }

    // clean path
    key = key.replace(/^\/+/, "");
    key = key.replace(/(uploads\/)+/g, "uploads/");

    // build MinIO URL
    return `https://minio.appconnect.cloud/vitalimes-images/${key}`;
  };

  // ✅ Fetch feedbacks
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch(`${API_URL}/api/feedback`);
        const data = await res.json();
        if (data.success) setFeedbacks(data.feedbacks);
      } catch (err) {
        console.error("Failed to fetch feedbacks:", err);
      }
    };

    fetchFeedbacks();
  }, [API_URL]);

  // 👉 Next slide
  const next = () => {
    setIndex((prev) =>
      prev + itemsPerSlide >= feedbacks.length ? 0 : prev + itemsPerSlide
    );
  };

  // 👉 Previous slide
  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? feedbacks.length - itemsPerSlide : prev - itemsPerSlide
    );
  };

  // 👉 Auto slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [feedbacks]);

  const visibleItems = feedbacks.slice(index, index + itemsPerSlide);

  return (
    <section
      className="premium-feedback-carousel-section"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container">
        {/* Header */}
        <div className="feedback-carousel-header">
          <div>
            <span className="feedback-carousel-badge">Customer Reviews</span>

            <h2>From Our Customers</h2>

            <p>
              Real feedback from customers who experienced Vitalimes products.
              Their reviews help us improve quality, taste, service and trust.
            </p>
          </div>

          <div className="feedback-carousel-actions">
            <button
              onClick={prev}
              className="carousel-nav-btn"
              type="button"
              aria-label="Previous feedback"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="carousel-nav-btn"
              type="button"
              aria-label="Next feedback"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Feedback Cards */}
        <div className="row g-4">
          {visibleItems.map((item, i) => (
            <div className="col-12 col-lg-6" key={i}>
              <div
                className="premium-feedback-card"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Product Image */}
                <div className="feedback-product-panel">
                  <div className="feedback-product-inner">
                    <img
                      src={toImageUrl(item.product_image)}
                      onError={(e) => {
                        if (!e.target.dataset.fallback) {
                          e.target.dataset.fallback = "true";

                          let img = item.product_image;

                          if (!img) return;

                          // If already full URL → use directly
                          if (img.startsWith("http")) {
                            e.target.src = img;
                          } else {
                            // clean duplicate uploads
                            img = img.replace(/(uploads\/)+/g, "uploads/");

                            e.target.src = `${API_URL}/${img}`;
                          }
                        }
                      }}
                      alt={item.product_name || item.productName}
                      className="feedback-product-img"
                    />
                  </div>
                </div>

                {/* Feedback Content */}
                <div className="feedback-content-panel">
                  <div className="quote-icon-box">
                    <Quote size={22} />
                  </div>

                  <span className="product-review-label">Product Review</span>

                  <h5>{item.productName || item.product_name}</h5>

                  <p className="feedback-message">{item.message}</p>

                  <div className="feedback-footer">
                    <div>
                      <p className="customer-name">— {item.name}</p>
                      <p className="rating-text">
                        {"⭐".repeat(item.rating || 0)}
                        {"☆".repeat(5 - (item.rating || 0))}
                      </p>
                    </div>

                    <div className="rating-pill">
                      {item.rating || 0}/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .premium-feedback-carousel-section {
          background: #ffffff;
          padding: 90px 0;
          position: relative;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        .feedback-carousel-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 42px;
          animation: feedbackHeaderUp 0.85s ease both;
        }

        .feedback-carousel-badge {
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

        .feedback-carousel-header h2 {
          margin: 0;
          font-family: 'Playfair Display', serif;
          color: #102f1e;
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .feedback-carousel-header p {
          max-width: 680px;
          margin: 16px 0 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.75;
          font-weight: 500;
        }

        .feedback-carousel-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .carousel-nav-btn {
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

        .carousel-nav-btn:hover {
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(6, 63, 32, 0.24);
        }

        .premium-feedback-card {
          height: 100%;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 0;
          border-radius: 34px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e8efdf;
          box-shadow: 0 24px 65px rgba(54, 72, 18, 0.10);
          position: relative;
          animation: feedbackCardUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.35s ease;
        }

        .premium-feedback-card::before {
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
          z-index: 5;
        }

        .premium-feedback-card:hover::before {
          left: 130%;
        }

        .premium-feedback-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 34px 85px rgba(54, 72, 18, 0.16);
        }

        .feedback-product-panel {
          background:
            radial-gradient(circle at center, rgba(255, 210, 48, 0.16), transparent 45%),
            linear-gradient(135deg, #fbfff3, #ffffff);
          padding: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 330px;
          border-right: 1px solid #e8efdf;
        }

        .feedback-product-inner {
          width: 100%;
          height: 100%;
          min-height: 270px;
          border-radius: 28px;
          background: #ffffff;
          border: 1px solid #edf3e5;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.85);
        }

        .feedback-product-img {
          max-width: 100%;
          max-height: 260px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.12));
          transition: transform 0.4s ease;
        }

        .premium-feedback-card:hover .feedback-product-img {
          transform: scale(1.04) translateY(-4px);
        }

        .feedback-content-panel {
          padding: 34px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #ffffff;
        }

        .quote-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          background: linear-gradient(135deg, #fff5bd, #f2f9df);
          color: #d1a000;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 14px 28px rgba(7, 86, 41, 0.08);
        }

        .product-review-label {
          display: inline-flex;
          width: fit-content;
          padding: 6px 14px;
          margin-bottom: 14px;
          border-radius: 999px;
          background: #f1f8e7;
          color: #0b7d3b;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border: 1px solid rgba(11, 125, 59, 0.12);
        }

        .feedback-content-panel h5 {
          margin: 0 0 12px;
          color: #102f1e;
          font-size: 23px;
          line-height: 1.25;
          font-weight: 900;
        }

        .feedback-message {
          margin: 0 0 22px;
          color: #5e674f;
          font-size: 15.5px;
          line-height: 1.7;
          font-weight: 500;
        }

        .feedback-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 18px;
          padding-top: 18px;
          border-top: 1px solid #e8efdf;
        }

        .customer-name {
          margin: 0 0 6px;
          color: #102f1e;
          font-size: 15px;
          font-weight: 900;
        }

        .rating-text {
          margin: 0;
          font-size: 15px;
          letter-spacing: 1px;
        }

        .rating-pill {
          min-width: 58px;
          height: 38px;
          padding: 0 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 950;
          box-shadow: 0 12px 28px rgba(6, 63, 32, 0.20);
        }

        @keyframes feedbackHeaderUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes feedbackCardUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991px) {
          .premium-feedback-carousel-section {
            padding: 75px 0;
          }

          .feedback-carousel-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .premium-feedback-card {
            grid-template-columns: 1fr;
          }

          .feedback-product-panel {
            border-right: none;
            border-bottom: 1px solid #e8efdf;
          }
        }

        @media (max-width: 768px) {
          .premium-feedback-carousel-section {
            padding: 65px 0;
          }

          .feedback-carousel-header {
            margin-bottom: 34px;
          }

          .feedback-carousel-header h2 {
            font-size: 38px;
          }

          .feedback-carousel-actions {
            width: 100%;
            justify-content: flex-start;
          }

          .feedback-product-panel {
            min-height: 280px;
            padding: 20px;
          }

          .feedback-product-inner {
            min-height: 230px;
          }

          .feedback-content-panel {
            padding: 26px;
          }
        }

        @media (max-width: 480px) {
          .feedback-carousel-header h2 {
            font-size: 34px;
          }

          .feedback-carousel-header p {
            font-size: 14.5px;
          }

          .premium-feedback-card {
            border-radius: 28px;
          }

          .feedback-content-panel {
            padding: 24px 20px;
          }

          .feedback-content-panel h5 {
            font-size: 20px;
          }

          .feedback-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .carousel-nav-btn {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </section>
  );
}