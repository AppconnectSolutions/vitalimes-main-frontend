// src/components/FeedbackForm.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

export default function FeedbackForm() {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productId: "",
    category: "",
    rating: 0,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/products?status=Active`
        );
        const data = await res.json();

        if (data.success) setProducts(data.products);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleRating = (rate) => {
    setFormData({ ...formData, rating: rate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.productId ||
      !formData.message ||
      !formData.rating
    ) {
      setStatus({
        type: "error",
        msg: "Please fill all required fields & select a rating",
      });
      return;
    }

    try {
      setLoading(true);
      setStatus({ type: "", msg: "" });

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send feedback");
      }

      setStatus({ type: "success", msg: "Thank you for your feedback!" });

      setFormData({
        name: "",
        email: "",
        productId: "",
        category: "",
        rating: 0,
        message: "",
      });
    } catch (err) {
      console.error(err);

      setStatus({
        type: "error",
        msg: err.message || "Failed to send feedback",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="feedback-premium-section"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container">
        <div className="feedback-heading">
          <span className="feedback-badge">Customer Voice</span>

          <h2>
            Product <span>Feedback</span>
          </h2>

          <p>
            Share your experience with Vitalimes products. Your feedback helps
            us improve quality, service, delivery, and customer satisfaction.
          </p>
        </div>

        <div className="row justify-content-center align-items-stretch g-4">
          <div className="col-lg-5">
            <div className="feedback-info-card">
              <span className="info-label">Why Feedback Matters</span>

              <h3>Help Us Serve You Better</h3>

              <p>
                Every review helps us understand your product experience and
                improve our lemon-based product range.
              </p>

              <div className="feedback-info-list">
                <div>
                  <span>01</span>
                  <div>
                    <h4>Product Quality</h4>
                    <p>Tell us about taste, freshness and quality.</p>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <h4>Delivery Experience</h4>
                    <p>Share your packing and delivery feedback.</p>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <h4>Service Support</h4>
                    <p>Help us improve customer support and response.</p>
                  </div>
                </div>
              </div>

              <div className="feedback-trust-box">
                <strong>Thank you!</strong>
                <p>We appreciate every feedback and suggestion.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="feedback-form-card">
              <div className="form-card-top">
                <div>
                  <span className="form-mini-title">Write a Review</span>
                  <h3>Share Your Feedback</h3>
                </div>

                <div className="form-icon-badge">★</div>
              </div>

              {status.msg && (
                <div
                  className={`feedback-alert ${
                    status.type === "success"
                      ? "feedback-alert-success"
                      : "feedback-alert-error"
                  }`}
                >
                  {status.msg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-floating-group">
                  <input
                    type="text"
                    name="name"
                    className="premium-input"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label>Your Name*</label>
                </div>

                <div className="form-floating-group">
                  <input
                    type="email"
                    name="email"
                    className="premium-input"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label>Your Email*</label>
                </div>

                <div className="form-grid-two">
                  <div className="form-floating-group">
                    <select
                      className="premium-input premium-select"
                      name="productId"
                      value={formData.productId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Product*</option>

                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                    <label>Product*</label>
                  </div>

                  <div className="form-floating-group">
                    <select
                      className="premium-input premium-select"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Feedback Category</option>
                      <option value="quality">Quality</option>
                      <option value="delivery">Delivery</option>
                      <option value="service">Service</option>
                    </select>
                    <label>Category</label>
                  </div>
                </div>

                <div className="rating-box">
                  <div>
                    <label className="rating-label">Rating*</label>
                    <p>Tap a star to rate your product experience.</p>
                  </div>

                  <div className="star-wrapper">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${
                          star <= formData.rating ? "active" : ""
                        }`}
                        onClick={() => handleRating(star)}
                        aria-label={`Rate ${star} star`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-floating-group">
                  <select
                    className="premium-input premium-select"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your feedback*</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Satisfactory">Satisfactory</option>
                    <option value="Needs Improvement">
                      Needs Improvement
                    </option>
                    <option value="Poor">Poor</option>
                    <option value="The product is excellent!">
                      The product is excellent!
                    </option>
                    <option value="Product quality is good and delivery was fast.">
                      Product quality is good and delivery was fast.
                    </option>
                    <option value="Product is good but delivery took a bit longer.">
                      Product is good but delivery took a bit longer.
                    </option>
                    <option value="Service is very helpful, happy with the support.">
                      Service is very helpful, happy with the support.
                    </option>
                    <option value="The product is okay, could improve packaging.">
                      The product is okay, could improve packaging.
                    </option>
                    <option value="Delivery was slightly delayed but overall satisfied.">
                      Delivery was slightly delayed but overall satisfied.
                    </option>
                  </select>
                  <label>Your Feedback*</label>
                </div>

                <button
                  type="submit"
                  className="premium-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="btn-loader"></span>
                      Sending...
                    </>
                  ) : (
                    "Submit Feedback"
                  )}
                </button>
              </form>

              <div className="feedback-note">
                <small>
                  We appreciate every feedback & improve based on your
                  suggestions.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .feedback-premium-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0;
          background: #ffffff;
          font-family: 'Poppins', sans-serif;
        }

        .feedback-heading {
          max-width: 780px;
          margin: 0 auto 55px;
          text-align: center;
          position: relative;
          z-index: 2;
          animation: feedbackFadeUp 0.85s ease both;
        }

        .feedback-badge {
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

        .feedback-heading h2 {
          margin: 0;
          font-family: 'Playfair Display', serif;
          color: #102f1e;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .feedback-heading h2 span {
          color: #d8a708;
          display: inline-block;
        }

        .feedback-heading p {
          max-width: 720px;
          margin: 18px auto 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.75;
          font-weight: 500;
        }

        .feedback-info-card,
        .feedback-form-card {
          height: 100%;
          position: relative;
          z-index: 2;
          overflow: hidden;
          border-radius: 34px;
          background: #ffffff;
          border: 1px solid #e8efdf;
          box-shadow: 0 24px 65px rgba(54, 72, 18, 0.10);
        }

        .feedback-info-card {
          padding: 38px;
          background: linear-gradient(135deg, #ffffff 0%, #fbfff3 100%);
        }

        .feedback-form-card {
          padding: 38px;
        }

        .feedback-info-card::before,
        .feedback-form-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.85),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.85s;
          pointer-events: none;
        }

        .feedback-info-card:hover::before,
        .feedback-form-card:hover::before {
          left: 130%;
        }

        .info-label,
        .form-mini-title {
          display: inline-flex;
          padding: 7px 16px;
          margin-bottom: 18px;
          border-radius: 999px;
          background: #f1f8e7;
          color: #5a6d4d;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border: 1px solid rgba(217, 178, 34, 0.18);
        }

        .feedback-info-card h3,
        .form-card-top h3 {
          margin: 0 0 14px;
          font-family: 'Playfair Display', serif;
          color: #102f1e;
          font-size: 34px;
          line-height: 1.12;
          font-weight: 800;
        }

        .feedback-info-card > p {
          margin: 0 0 28px;
          color: #5e674f;
          font-size: 15.5px;
          line-height: 1.75;
          font-weight: 500;
        }

        .feedback-info-list {
          display: grid;
          gap: 18px;
          margin-bottom: 28px;
        }

        .feedback-info-list > div {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          padding: 18px;
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid #e8efdf;
          transition: all 0.3s ease;
        }

        .feedback-info-list > div:hover {
          transform: translateX(6px);
          background: #fbfff3;
        }

        .feedback-info-list span {
          width: 42px;
          height: 42px;
          border-radius: 16px;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          flex-shrink: 0;
          box-shadow: 0 14px 28px rgba(6, 63, 32, 0.18);
        }

        .feedback-info-list h4 {
          margin: 0 0 5px;
          color: #102f1e;
          font-size: 16px;
          font-weight: 900;
        }

        .feedback-info-list p {
          margin: 0;
          color: #5e674f;
          font-size: 14px;
          line-height: 1.55;
        }

        .feedback-trust-box {
          padding: 22px;
          border-radius: 24px;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: white;
          box-shadow: 0 20px 45px rgba(6, 63, 32, 0.20);
        }

        .feedback-trust-box strong {
          display: block;
          margin-bottom: 6px;
          font-size: 20px;
          font-weight: 900;
        }

        .feedback-trust-box p {
          margin: 0;
          color: rgba(255,255,255,0.84);
          line-height: 1.6;
          font-weight: 600;
        }

        .form-card-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 26px;
        }

        .form-card-top h3 {
          margin-bottom: 0;
        }

        .form-icon-badge {
          width: 62px;
          height: 62px;
          border-radius: 22px;
          background: linear-gradient(135deg, #fff5bd, #f2f9df);
          color: #d1a000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: 0 16px 32px rgba(7, 86, 41, 0.08);
          flex-shrink: 0;
        }

        .feedback-alert {
          padding: 14px 18px;
          border-radius: 18px;
          margin-bottom: 22px;
          text-align: center;
          font-size: 14.5px;
          font-weight: 800;
          border: 1px solid transparent;
        }

        .feedback-alert-success {
          background: #dcfce7;
          color: #166534;
          border-color: rgba(22, 101, 52, 0.16);
        }

        .feedback-alert-error {
          background: #fee2e2;
          color: #991b1b;
          border-color: rgba(153, 27, 27, 0.16);
        }

        .form-grid-two {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .form-floating-group {
          position: relative;
          margin-bottom: 18px;
        }

        .premium-input {
          width: 100%;
          min-height: 60px;
          border: 1px solid #dfe9d2;
          outline: none;
          border-radius: 20px;
          background: #ffffff;
          color: #102f1e;
          font-size: 15px;
          font-weight: 650;
          padding: 23px 18px 9px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 22px rgba(54, 72, 18, 0.04);
        }

        .premium-input::placeholder {
          color: transparent;
        }

        .premium-input:focus {
          border-color: rgba(11, 125, 59, 0.55);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(11, 125, 59, 0.08);
        }

        .premium-select {
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          padding-right: 46px;
          background-color: #ffffff;
          background-image:
            linear-gradient(45deg, transparent 50%, #0b7d3b 50%),
            linear-gradient(135deg, #0b7d3b 50%, transparent 50%);
          background-position:
            calc(100% - 24px) 30px,
            calc(100% - 18px) 30px;
          background-size: 6px 6px, 6px 6px;
          background-repeat: no-repeat;
        }

        .premium-select option {
          color: #102f1e;
          background: #ffffff;
          font-weight: 600;
        }

        .form-floating-group label {
          position: absolute;
          top: 8px;
          left: 18px;
          color: #78906d;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          pointer-events: none;
        }

        .rating-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin: 6px 0 20px;
          padding: 20px;
          border-radius: 24px;
          background: #fbfff3;
          border: 1px solid #e8efdf;
        }

        .rating-label {
          margin: 0;
          color: #102f1e;
          font-size: 15px;
          font-weight: 900;
        }

        .rating-box p {
          margin: 4px 0 0;
          color: #5e674f;
          font-size: 13.5px;
          line-height: 1.5;
          font-weight: 500;
        }

        .star-wrapper {
          display: flex;
          align-items: center;
          gap: 5px;
          flex-shrink: 0;
        }

        .star-btn {
          border: none;
          outline: none;
          cursor: pointer;
          background: transparent;
          color: #d7d9cf;
          font-size: 2rem;
          line-height: 1;
          padding: 0;
          transition: transform 0.2s ease, color 0.2s ease, text-shadow 0.2s ease;
        }

        .star-btn:hover,
        .star-btn.active {
          color: #ffc107;
          transform: translateY(-2px) scale(1.1);
          text-shadow: 0 8px 18px rgba(255, 193, 7, 0.28);
        }

        .premium-submit-btn {
          width: 100%;
          min-height: 58px;
          border: none;
          outline: none;
          cursor: pointer;
          border-radius: 999px;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: white;
          font-size: 15px;
          font-weight: 950;
          letter-spacing: 0.2px;
          box-shadow: 0 18px 42px rgba(6, 63, 32, 0.24);
          transition: all 0.35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .premium-submit-btn:hover:not(:disabled) {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 24px 55px rgba(6, 63, 32, 0.32);
        }

        .premium-submit-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .btn-loader {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.35);
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        .feedback-note {
          margin-top: 20px;
          text-align: center;
          color: #6d7663;
          font-weight: 600;
        }

        @keyframes feedbackFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 991px) {
          .feedback-premium-section {
            padding: 75px 0;
          }

          .feedback-info-card,
          .feedback-form-card {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .feedback-premium-section {
            padding: 65px 0;
          }

          .feedback-heading {
            margin-bottom: 38px;
          }

          .feedback-heading h2 {
            font-size: 38px;
          }

          .form-grid-two {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .rating-box {
            align-items: flex-start;
            flex-direction: column;
          }

          .star-btn {
            font-size: 1.9rem;
          }

          .form-card-top {
            align-items: center;
          }

          .form-icon-badge {
            width: 54px;
            height: 54px;
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .feedback-info-card,
          .feedback-form-card {
            padding: 24px 18px;
            border-radius: 28px;
          }

          .feedback-info-card h3,
          .form-card-top h3 {
            font-size: 28px;
          }

          .premium-input {
            min-height: 56px;
            border-radius: 18px;
          }

          .premium-select {
            background-position:
              calc(100% - 24px) 28px,
              calc(100% - 18px) 28px;
          }

          .rating-box {
            padding: 16px;
          }

          .star-wrapper {
            gap: 2px;
          }

          .star-btn {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}