import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RelatedProducts({
  related = [],
  currentProductId,
  toImageUrl,
  handleImgError,
  API_URL,
}) {
  const navigate = useNavigate();

  const [reviewSummaries, setReviewSummaries] = useState({});

  const filteredProducts = related
    .filter((p) => {
      const relatedProductId = p.id || p._id || p.product_id;
      return String(relatedProductId) !== String(currentProductId);
    })
    .slice(0, 10);

  useEffect(() => {
    const loadRelatedReviewSummaries = async () => {
      try {
        const productIds = filteredProducts.map(
          (p) => p.id || p._id || p.product_id
        );

        if (productIds.length === 0) return;

        const { data } = await axios.post(
          `${API_URL}/api/reviews/summary/bulk`,
          {
            product_ids: productIds,
          }
        );

        setReviewSummaries(data.summaries || {});
      } catch (error) {
        console.error("Related product review summary failed:", error);
        setReviewSummaries({});
      }
    };

    loadRelatedReviewSummaries();
  }, [related, currentProductId, API_URL]);

  if (filteredProducts.length === 0) {
    return (
      <>
        <style>{styles}</style>

        <section className="related-products-section">
          <h2 className="related-section-title">Explore our products</h2>
          <p className="related-empty-text">No related products found.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>

      <section className="related-products-section">
        <h2 className="related-section-title">Explore our products</h2>

        <div className="related-products-scroll">
          {filteredProducts.map((p, index) => {
            const productId = p.id || p._id || p.product_id;
            const firstVariant = p.variants?.[0];

            const image =
              toImageUrl(p.image1) ||
              "https://via.placeholder.com/500x500?text=No+Image";

            const salePrice =
              firstVariant?.sale_price ||
              firstVariant?.price ||
              p.sale_price ||
              p.price ||
              "—";

            const originalPrice =
              firstVariant?.sale_price && firstVariant?.price
                ? firstVariant.price
                : null;

            const savings =
              originalPrice && salePrice
                ? Number(originalPrice) - Number(salePrice)
                : 0;

            const shortDescription =
              p.short_description ||
              p.tagline ||
              p.description ||
              "Premium natural product";

            const ratingSummary = reviewSummaries[productId] || {
              average_rating: 0,
              total_reviews: 0,
            };

            return (
              <article
                className="related-product-card"
                key={productId}
                onClick={() => navigate(`/product/${productId}`)}
              >
                <div className="related-product-image-box">
                  {index === 0 && (
                    <span className="related-product-badge">
                      Viral Product ✨
                    </span>
                  )}

                  <img
                    src={image}
                    alt={p.title}
                    className="related-product-image"
                    onError={handleImgError}
                  />
                </div>

                <div className="related-product-info">
                  <div className="related-rating-row">
                    <span className="related-star">★</span>

                    {ratingSummary.total_reviews > 0 ? (
                      <span className="related-rating-text">
                        {Number(ratingSummary.average_rating).toFixed(2)} (
                        {ratingSummary.total_reviews} Review
                        {ratingSummary.total_reviews !== 1 ? "s" : ""})
                      </span>
                    ) : (
                      <span className="related-rating-text">
                        No reviews yet
                      </span>
                    )}
                  </div>

                  <h3 className="related-product-title">{p.title}</h3>

                  <p className="related-product-description">
                    {shortDescription}
                  </p>

                  <div className="related-price-row">
                    <span className="related-sale-price">₹{salePrice}</span>

                    {originalPrice && (
                      <span className="related-original-price">
                        ₹{originalPrice}
                      </span>
                    )}
                  </div>

                  {savings > 0 && (
                    <p className="related-save-text">
                      You&apos;ll save ₹{savings}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

const styles = `
  .related-products-section {
    width: 100%;
    margin-top: 70px;
    padding-bottom: 10px;
  }

  .related-section-title {
    font-size: 28px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 28px;
    font-family: inherit;
  }

  .related-empty-text {
    font-size: 16px;
    color: #666666;
    margin: 0;
  }

  .related-products-scroll {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    padding-bottom: 14px;
    scrollbar-width: thin;
  }

  .related-products-scroll::-webkit-scrollbar {
    height: 6px;
  }

  .related-products-scroll::-webkit-scrollbar-thumb {
    background: #c7baa3;
    border-radius: 20px;
  }

  .related-product-card {
    min-width: 330px;
    max-width: 330px;
    flex: 0 0 330px;
    cursor: pointer;
    transition: transform 0.25s ease;
    text-align: center;
  }

  .related-product-card:hover {
    transform: translateY(-4px);
  }

  .related-product-image-box {
    position: relative;
    width: 100%;
    height: 410px;
    background: #f4f4f4;
    border-radius: 9px;
    overflow: hidden;
  }

  .related-product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .related-product-badge {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #ed1c24;
    color: #ffffff;
    padding: 7px 14px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 0 0 7px 0;
    line-height: 1.2;
  }

  .related-product-info {
    padding-top: 10px;
  }

  .related-rating-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    min-height: 24px;
    margin-bottom: 5px;
  }

  .related-star {
    color: #ffad32;
    font-size: 20px;
    line-height: 1;
  }

  .related-rating-text {
    color: #333333;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  }

  .related-product-title {
    font-size: 21px;
    line-height: 1.25;
    font-weight: 700;
    color: #111111;
    margin: 3px 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .related-product-description {
    font-size: 14px;
    line-height: 1.3;
    color: #111111;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .related-price-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    min-height: 28px;
  }

  .related-sale-price {
    color: #111111;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.2;
  }

  .related-original-price {
    color: #333333;
    font-size: 14px;
    font-weight: 500;
    text-decoration: line-through;
  }

  .related-save-text {
    color: #478635;
    font-size: 14px;
    font-weight: 500;
    margin: 3px 0 0;
  }

  @media (max-width: 991px) {
    .related-products-section {
      margin-top: 55px;
    }

    .related-section-title {
      font-size: 25px;
      margin-bottom: 22px;
    }

    .related-product-card {
      min-width: 285px;
      max-width: 285px;
      flex: 0 0 285px;
    }

    .related-product-image-box {
      height: 350px;
    }

    .related-product-title {
      font-size: 19px;
    }

    .related-sale-price {
      font-size: 19px;
    }
  }

  @media (max-width: 575px) {
    .related-products-section {
      margin-top: 45px;
    }

    .related-section-title {
      font-size: 23px;
      margin-bottom: 18px;
    }

    .related-products-scroll {
      gap: 14px;
    }

    .related-product-card {
      min-width: 240px;
      max-width: 240px;
      flex: 0 0 240px;
    }

    .related-product-image-box {
      height: 290px;
    }

    .related-product-badge {
      padding: 6px 11px;
      font-size: 12px;
    }

    .related-star {
      font-size: 18px;
    }

    .related-rating-text {
      font-size: 13px;
    }

    .related-product-title {
      font-size: 18px;
    }

    .related-product-description {
      font-size: 13px;
    }

    .related-sale-price {
      font-size: 18px;
    }

    .related-original-price,
    .related-save-text {
      font-size: 13px;
    }
  }
`;