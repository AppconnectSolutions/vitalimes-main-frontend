import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function ProductReviews({
  productId,
  API_URL,
  productTitle = "Product",
  productImage = "",
  onReviewSubmitted,
}) {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState("recent");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Review Popup
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewStep, setReviewStep] = useState(1);
  const [isStepChanging, setIsStepChanging] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

 const [formData, setFormData] = useState({
  customer_name: "",
  rating: 0,
  review_title: "",
  review_text: "",
});


const MINIO_PUBLIC_URL =
  import.meta.env.VITE_MINIO_PUBLIC_URL || "https://minio.vitalimes.com";

const MINIO_BUCKET =
  import.meta.env.VITE_MINIO_BUCKET || "vitalimes-images";

const PLACEHOLDER_IMAGE = "/assets/images/placeholder.png";

const toImageUrl = (value) => {
  if (!value) return PLACEHOLDER_IMAGE;

  let key = String(value).trim();

  // If full URL comes from old AppConnect domain, convert to Vitalimes domain
  if (key.startsWith("http")) {
    return key.replace(
      "https://minio.appconnect.cloud",
      "https://minio.vitalimes.com"
    );
  }

  key = key.replace(/^\/+/, "");
  key = key.replace(new RegExp(`^${MINIO_BUCKET}/`), "");
  key = key.split("/").map(encodeURIComponent).join("/");

  return `${MINIO_PUBLIC_URL}/${MINIO_BUCKET}/${key}`;
};

const reviewProductImage = toImageUrl(productImage);

  useEffect(() => {
    if (productId) {
      loadReviews();
    }
  }, [productId]);

  /* ======================================================
     LOAD REVIEWS
  ====================================================== */
  const loadReviews = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${API_URL}/api/reviews/product/${productId}`
      );

      setReviews(data.reviews || []);
    } catch (error) {
      console.error("Review fetch failed:", error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  /* ======================================================
     OPEN REVIEW MODAL
  ====================================================== */
  const openReviewModal = () => {
    setShowReviewModal(true);
    setReviewStep(1);
    setHoverRating(0);
 setFormData({
  customer_name: "",
  rating: 0,
  review_title: "",
  review_text: "",
});
  };

  /* ======================================================
     CLOSE REVIEW MODAL
  ====================================================== */
  const closeReviewModal = () => {
    setShowReviewModal(false);
    setReviewStep(1);
    setHoverRating(0);
    setIsStepChanging(false);
    setFormData({
  customer_name: "",
  rating: 0,
  review_title: "",
  review_text: "",
});
  };

  /* ======================================================
     SELECT STAR AND MOVE TO STEP 2 SMOOTHLY
  ====================================================== */
  const handleRatingSelect = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));

    setIsStepChanging(true);

    setTimeout(() => {
      setReviewStep(2);
      setIsStepChanging(false);
    }, 260);
  };

  /* ======================================================
     BACK TO STEP 1
  ====================================================== */
  const handleBackToRating = () => {
    setIsStepChanging(true);

    setTimeout(() => {
      setReviewStep(1);
      setIsStepChanging(false);
    }, 220);
  };

  /* ======================================================
     SUBMIT REVIEW
  ====================================================== */
  const handleSubmitReview = async () => {
    if (!formData.rating) {
      alert("Please select a rating.");
      return;
    }

    if (!formData.customer_name.trim()) {
  alert("Please enter your name.");
  return;
}

    if (!formData.review_text.trim()) {
      alert("Please enter your review content.");
      return;
    }

    try {
      setSubmitting(true);

   const loggedInUser = JSON.parse(localStorage.getItem("user"));

const token = localStorage.getItem("vitalimes_token");

await axios.post(`${API_URL}/api/reviews`, {
  product_id: productId,
  customer_name: formData.customer_name.trim(),
  rating: Number(formData.rating),
  review_title: formData.review_title,
  review_text: formData.review_text,
});

     closeReviewModal();
await loadReviews();

if (typeof onReviewSubmitted === "function") {
  onReviewSubmitted();
}
    } catch (error) {
      console.error("Review submit failed:", error);
      alert("Unable to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ======================================================
     REVIEW CALCULATIONS
  ====================================================== */
  const totalReviews = reviews.length;

  const averageRating = useMemo(() => {
    if (totalReviews === 0) return 0;

    const total = reviews.reduce(
      (sum, review) => sum + Number(review.rating || 0),
      0
    );

    return total / totalReviews;
  }, [reviews, totalReviews]);

  const ratingCounts = useMemo(() => {
    return {
      5: reviews.filter((r) => Number(r.rating) === 5).length,
      4: reviews.filter((r) => Number(r.rating) === 4).length,
      3: reviews.filter((r) => Number(r.rating) === 3).length,
      2: reviews.filter((r) => Number(r.rating) === 2).length,
      1: reviews.filter((r) => Number(r.rating) === 1).length,
    };
  }, [reviews]);

  const getRatingPercentage = (rating) => {
    if (totalReviews === 0) return 0;
    return (ratingCounts[rating] / totalReviews) * 100;
  };

  /* ======================================================
     SORT REVIEWS
  ====================================================== */
  const sortedReviews = useMemo(() => {
    const copiedReviews = [...reviews];

    if (sortBy === "highest") {
      return copiedReviews.sort(
        (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
      );
    }

    if (sortBy === "lowest") {
      return copiedReviews.sort(
        (a, b) => Number(a.rating || 0) - Number(b.rating || 0)
      );
    }

    return copiedReviews.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }, [reviews, sortBy]);

  /* ======================================================
     HELPERS
  ====================================================== */
  const renderStars = (rating) => {
    const numericRating = Number(rating || 0);

    return (
      <div className="review-stars-small">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={
              star <= numericRating
                ? "review-small-star active"
                : "review-small-star"
            }
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "";

    return new Date(dateValue).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const firstLetter = (name) => {
    if (!name) return "A";
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <>
      <style>{styles}</style>

      <section className="reviews-main-section">
        {/* ======================================================
            CUSTOMER REVIEW SUMMARY
        ====================================================== */}
        <div className="reviews-summary-card">
          <h2 className="reviews-main-title">Customer Reviews</h2>

          <div className="reviews-summary-grid">
            {/* LEFT */}
            <div className="reviews-summary-left">
              <div className="reviews-average-row">
                {renderStars(Math.round(averageRating))}

                <span className="reviews-average-number">
                  {averageRating > 0 ? averageRating.toFixed(2) : "0.00"} out
                  of 5
                </span>
              </div>

              <p className="reviews-based-text">
                Based on {totalReviews} review{totalReviews !== 1 ? "s" : ""}
              </p>
            </div>

            {/* CENTER */}
            <div className="reviews-summary-center">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div className="reviews-rating-bar-row" key={rating}>
                  <div className="reviews-bar-stars">{renderStars(rating)}</div>

                  <div className="reviews-progress-track">
                    <div
                      className="reviews-progress-fill"
                      style={{ width: `${getRatingPercentage(rating)}%` }}
                    />
                  </div>

                  <span className="reviews-rating-count">
                    {ratingCounts[rating]}
                  </span>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="reviews-summary-right">
              <button
                type="button"
                className="reviews-write-btn"
                onClick={openReviewModal}
              >
                Write a review
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================
            SORT
        ====================================================== */}
        <div className="reviews-sort-wrapper">
          <select
            className="reviews-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>

        {/* ======================================================
            REVIEW CARDS
        ====================================================== */}
        {loading ? (
          <p className="reviews-loading">Loading reviews...</p>
        ) : sortedReviews.length === 0 ? (
          <div className="reviews-empty-box">
            <h4>No reviews yet</h4>
            <p>Be the first customer to review this product.</p>
          </div>
        ) : (
          <div className="reviews-card-grid">
            {sortedReviews.map((review) => (
              <article className="reviews-card" key={review.id || review._id}>
                <div className="reviews-card-top">
                  {renderStars(review.rating)}

                  <span className="reviews-date">
                    {formatDate(review.created_at)}
                  </span>
                </div>

                <div className="reviews-user-row">
                  <div className="reviews-avatar">
                    {firstLetter(review.customer_name)}
                  </div>

                  <div className="reviews-name-line">
                    <strong>{review.customer_name || "Anonymous"}</strong>

                    {Number(review.is_verified) === 1 && (
  <span className="reviews-verified">Verified</span>
)}
                  </div>
                </div>

                {review.review_title && (
                  <h4 className="reviews-review-title">
                    {review.review_title}
                  </h4>
                )}

                <p className="reviews-review-text">{review.review_text}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ======================================================
          WRITE REVIEW POPUP MODAL
      ====================================================== */}
      {showReviewModal && (
        <div className="review-modal-overlay" onClick={closeReviewModal}>
          <div
            className="review-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="review-modal-close"
              type="button"
              onClick={closeReviewModal}
            >
              ×
            </button>

            <div
              className={`review-modal-step ${
                isStepChanging ? "step-fade-out" : "step-fade-in"
              }`}
            >
              {/* ======================================================
                  STEP 1: RATE PRODUCT
              ====================================================== */}
              {reviewStep === 1 && (
                <div className="review-step-one">
                  <h2 className="review-popup-main-heading">
                    How would you rate this product?
                  </h2>

                  <p className="review-popup-subheading">
                    We would love it if you would share a bit about your
                    experience.
                  </p>

                  {reviewProductImage && (
  <img
    src={reviewProductImage}
    alt={productTitle}
    className="review-popup-product-image"
    onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = PLACEHOLDER_IMAGE;
    }}
  />
)}

                  <h3 className="review-popup-product-title">
                    {productTitle}
                  </h3>

                  <div className="review-large-star-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="review-large-star-btn"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => handleRatingSelect(star)}
                      >
                        <span
                          className={
                            star <= (hoverRating || formData.rating)
                              ? "review-large-star active"
                              : "review-large-star"
                          }
                        >
                          ★
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="review-rating-caption-row">
                    <span>Poor</span>
                    <span>Great</span>
                  </div>
                </div>
              )}

              {/* ======================================================
                  STEP 2: REVIEW CONTENT
              ====================================================== */}
              {reviewStep === 2 && (
                <div className="review-step-two">
                  <h3 className="review-step-two-product-title">
                    {productTitle}
                  </h3>

                  <div className="review-selected-star-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="review-large-star-btn"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            rating: star,
                          }))
                        }
                      >
                        <span
                          className={
                            star <= formData.rating
                              ? "review-large-star active"
                              : "review-large-star"
                          }
                        >
                          ★
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="review-rating-caption-row review-caption-step-two">
                    <span>Poor</span>
                    <span>Great</span>
                  </div>
                  <div className="review-form-field">
  <label>Your Name (Required)</label>
  <input
    type="text"
    value={formData.customer_name}
    onChange={(e) =>
      setFormData((prev) => ({
        ...prev,
        customer_name: e.target.value,
      }))
    }
    placeholder="Enter your name"
  />
</div>

                  <div className="review-form-field review-content-field">
                    <label>Review content (Required)</label>
                    <textarea
                      value={formData.review_text}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          review_text: e.target.value,
                        }))
                      }
                      placeholder="Start writing here..."
                    />
                  </div>

                  <div className="review-form-field">
                    <label>Review Title</label>
                    <input
                      type="text"
                      value={formData.review_title}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          review_title: e.target.value,
                        }))
                      }
                      placeholder="Give your review a title"
                    />
                  </div>

                  <p className="review-terms-text">
                    We’ll only contact you about your review if necessary. By
                    submitting your review, you agree to our terms and
                    conditions and privacy policy.
                  </p>

                  <div className="review-popup-footer">
                    <button
                      type="button"
                      className="review-back-btn"
                      onClick={handleBackToRating}
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      className="review-next-btn"
                      onClick={handleSubmitReview}
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Next"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = `
  /* ======================================================
     CUSTOMER REVIEW SECTION
  ====================================================== */
  .reviews-main-section {
    width: 100%;
    margin-top: 70px;
    margin-bottom: 50px;
  }

  .reviews-summary-card {
    width: 100%;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 14px;
    padding: 28px 34px 34px;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);
  }

  .reviews-main-title {
    text-align: center;
    margin: 0 0 30px;
    font-size: 32px;
    font-weight: 700;
    color: #2f2f2f;
    font-family: Georgia, "Times New Roman", serif;
  }

  .reviews-summary-grid {
    display: grid;
    grid-template-columns: 1fr 1.35fr 0.95fr;
    align-items: center;
    gap: 28px;
  }

  .reviews-summary-left {
    min-height: 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #ededed;
    padding-right: 28px;
  }

  .reviews-average-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .reviews-average-number {
    font-size: 15px;
    font-weight: 600;
    color: #333333;
  }

  .reviews-based-text {
    margin: 2px 0 0;
    font-size: 14px;
    color: #222222;
  }

  .review-stars-small {
    display: inline-flex;
    gap: 1px;
  }

  .review-small-star {
    font-size: 19px;
    line-height: 1;
    color: #dddddd;
  }

  .review-small-star.active {
    color: #ffc53d;
  }

  .reviews-summary-center {
    min-height: 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    border-right: 1px solid #ededed;
    padding-right: 28px;
  }

  .reviews-rating-bar-row {
    display: grid;
    grid-template-columns: 84px 1fr 42px;
    align-items: center;
    gap: 12px;
  }

  .reviews-bar-stars .review-small-star {
    font-size: 16px;
  }

  .reviews-progress-track {
    width: 100%;
    height: 12px;
    border-radius: 999px;
    background: #ededed;
    overflow: hidden;
  }

  .reviews-progress-fill {
    height: 100%;
    border-radius: 999px;
    background: #547e3b;
    transition: width 0.3s ease;
  }

  .reviews-rating-count {
    font-size: 13px;
    color: #666666;
  }

  .reviews-summary-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reviews-write-btn {
    width: 240px;
    height: 45px;
    border: none;
    border-radius: 999px;
    background: #000000;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .reviews-write-btn:hover {
    opacity: 0.86;
  }

  .reviews-sort-wrapper {
    width: 100%;
    margin-top: 22px;
  }

  .reviews-sort-select {
    width: 100%;
    height: 56px;
    padding: 0 18px;
    border: 1px solid #dddddd;
    border-radius: 12px;
    background: #ffffff;
    font-size: 18px;
    font-weight: 600;
    color: #222222;
    outline: none;
  }

  .reviews-loading {
    margin-top: 26px;
    font-size: 16px;
    color: #666666;
  }

  .reviews-empty-box {
    margin-top: 22px;
    padding: 32px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 14px;
  }

  .reviews-empty-box h4 {
    margin: 0 0 6px;
    font-size: 22px;
    font-weight: 700;
  }

  .reviews-empty-box p {
    margin: 0;
    color: #666666;
  }

  .reviews-card-grid {
    margin-top: 22px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    align-items: start;
  }

  .reviews-card {
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 13px;
    padding: 16px 16px 18px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  }

  .reviews-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 13px;
  }

  .reviews-date {
    font-size: 14px;
    color: #777777;
    white-space: nowrap;
  }

  .reviews-user-row {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 13px;
  }

  .reviews-avatar {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background: #f0f0f0;
    color: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 800;
  }

  .reviews-name-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
    font-size: 14px;
    color: #111111;
  }

  .reviews-verified {
    background: #111111;
    color: #ffffff;
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
  }

  .reviews-review-title {
    margin: 0 0 8px;
    color: #222222;
    font-size: 17px;
    font-weight: 600;
  }

  .reviews-review-text {
    margin: 0;
    color: #444444;
    font-size: 14px;
    line-height: 1.55;
    white-space: pre-wrap;
  }

  /* ======================================================
     REVIEW MODAL OVERLAY
  ====================================================== */
  .review-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.56);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .review-modal-card {
    position: relative;
    width: 100%;
    max-width: 520px;
    min-height: 515px;
    background: #ffffff;
    border-radius: 14px;
    padding: 34px 34px 30px;
    overflow: hidden;
    animation: reviewModalOpen 0.25s ease;
  }

  @keyframes reviewModalOpen {
    from {
      opacity: 0;
      transform: scale(0.96) translateY(10px);
    }

    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .review-modal-close {
    position: absolute;
    right: 17px;
    top: 14px;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    color: #222222;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
    z-index: 2;
  }

  .review-modal-step {
    width: 100%;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .step-fade-in {
    opacity: 1;
    transform: translateX(0);
  }

  .step-fade-out {
    opacity: 0;
    transform: translateX(-18px);
  }

  /* ======================================================
     STEP 1
  ====================================================== */
  .review-step-one {
    text-align: center;
  }

  .review-popup-main-heading {
    margin: 5px 0 5px;
    font-size: 23px;
    font-weight: 500;
    color: #333333;
  }

  .review-popup-subheading {
    margin: 0 0 14px;
    font-size: 14px;
    color: #333333;
  }

  .review-popup-product-image {
    width: 138px;
    height: 138px;
    border-radius: 8px;
    object-fit: cover;
    display: block;
    margin: 0 auto 8px;
    background: #f2f2f2;
  }

  .review-popup-product-title {
    margin: 0 0 10px;
    font-size: 16px;
    font-weight: 600;
    color: #222222;
  }

  .review-large-star-row,
  .review-selected-star-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    margin-top: 4px;
  }

  .review-large-star-btn {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }

  .review-large-star {
    font-size: 52px;
    line-height: 1;
    color: #d8d8d8;
    transition: color 0.15s ease, transform 0.15s ease;
  }

  .review-large-star.active {
    color: #000000;
  }

  .review-large-star-btn:hover .review-large-star {
    transform: scale(1.06);
  }

  .review-rating-caption-row {
    width: 254px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #222222;
  }

  /* ======================================================
     STEP 2
  ====================================================== */
  .review-step-two {
    width: 100%;
    padding-top: 0;
  }

  .review-step-two-product-title {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #222222;
    margin: 0 0 12px;
  }

  .review-selected-star-row {
    margin-top: 0;
  }

  .review-caption-step-two {
    margin-bottom: 44px;
  }

  .review-form-field {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 15px;
  }

  .review-form-field label {
    font-size: 12px;
    font-weight: 600;
    color: #111111;
  }

  .review-form-field textarea {
    width: 100%;
    height: 112px;
    resize: none;
    border: 1px solid #111111;
    outline: 2px solid #2069e0;
    outline-offset: 1px;
    padding: 13px;
    font-size: 13px;
    color: #111111;
    font-family: inherit;
  }

  .review-form-field input {
    width: 100%;
    height: 38px;
    border: 1px solid #cfcfcf;
    padding: 0 13px;
    font-size: 13px;
    color: #111111;
    font-family: inherit;
  }

  .review-terms-text {
    width: 100%;
    text-align: center;
    font-size: 10px;
    line-height: 1.5;
    color: #777777;
    margin: 8px 0 18px;
  }

  .review-popup-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .review-back-btn {
    border: none;
    background: transparent;
    color: #222222;
    font-size: 13px;
    cursor: pointer;
    padding: 0;
  }

  .review-next-btn {
    width: 94px;
    height: 39px;
    border: none;
    background: #000000;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }

  .review-next-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* ======================================================
     RESPONSIVE
  ====================================================== */
  @media (max-width: 1100px) {
    .reviews-summary-grid {
      grid-template-columns: 1fr;
      gap: 22px;
    }

    .reviews-summary-left,
    .reviews-summary-center {
      border-right: none;
      border-bottom: 1px solid #ededed;
      padding-right: 0;
      padding-bottom: 20px;
    }

    .reviews-card-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .reviews-main-section {
      margin-top: 45px;
    }

    .reviews-summary-card {
      padding: 22px 18px 26px;
    }

    .reviews-main-title {
      font-size: 27px;
      margin-bottom: 22px;
    }

    .reviews-rating-bar-row {
      grid-template-columns: 78px 1fr 34px;
      gap: 9px;
    }

    .reviews-write-btn {
      width: 100%;
    }

    .reviews-sort-select {
      height: 52px;
      font-size: 16px;
    }

    .reviews-card-grid {
      grid-template-columns: 1fr;
    }

    .review-modal-card {
      max-width: 100%;
      min-height: auto;
      padding: 30px 20px 24px;
    }

    .review-popup-main-heading {
      font-size: 20px;
    }

    .review-large-star {
      font-size: 43px;
    }

    .review-popup-product-image {
      width: 120px;
      height: 120px;
    }

    .review-caption-step-two {
      margin-bottom: 30px;
    }
  }
`;