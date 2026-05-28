import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import {
  ShoppingBag,
  Leaf,
  Eye,
  ArrowRight,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const productId = product.id || product._id || product.product_id;

  const MINIO_PUBLIC_URL =
  import.meta.env.VITE_MINIO_PUBLIC_URL || "https://minio.vitalimes.com";

const MINIO_BUCKET =
  import.meta.env.VITE_MINIO_BUCKET || "vitalimes-images";

const PLACEHOLDER_IMAGE = "/assets/images/placeholder.png";

const toImageUrl = (val) => {
  if (!val) return PLACEHOLDER_IMAGE;

  let key = String(val).trim();

  // If already full URL, force AppConnect old URL to Vitalimes URL
  if (key.startsWith("http")) {
    return key.replace(
      "https://minio.appconnect.cloud",
      "https://minio.vitalimes.com"
    );
  }

  // Remove leading slash
  key = key.replace(/^\/+/, "");

  // Remove bucket name if already present
  key = key.replace(new RegExp(`^${MINIO_BUCKET}/`), "");

  // Encode each path part
  key = key.split("/").map(encodeURIComponent).join("/");

  return `${MINIO_PUBLIC_URL}/${MINIO_BUCKET}/${key}`;
};

  const imageFront =
    toImageUrl(product.image_url) || "/assets/images/placeholder.png";
  const imageMiddle =
    toImageUrl(product.image_url2 || product.image_url) || imageFront;
  const imageBack =
    toImageUrl(product.image_url3 || product.image_url) || imageFront;

  const images = [imageFront, imageMiddle, imageBack].filter(Boolean);

  const [hoverImageIndex, setHoverImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered || images.length <= 1) {
      setHoverImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setHoverImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const currentImage =
    images[hoverImageIndex] || "/assets/images/placeholder.png";

  const price = Number(product.price);
  const salePrice =
    product.sale_price !== null && product.sale_price !== undefined
      ? Number(product.sale_price)
      : null;

  let offerPercent =
    product.offer_price !== null && product.offer_price !== undefined
      ? Number(product.offer_price)
      : null;

  if (
    (offerPercent === null || isNaN(offerPercent)) &&
    salePrice !== null &&
    !isNaN(price) &&
    price > 0 &&
    salePrice < price
  ) {
    offerPercent = Math.round(((price - salePrice) / price) * 100);
  }

  const hasDiscount =
    salePrice !== null &&
    !isNaN(salePrice) &&
    salePrice > 0 &&
    salePrice < price;

  const goToDetails = () => {
    if (productId) navigate(`/product/${productId}`);
    else navigate("/products");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart({
      id: productId,
      title: product.name || product.title,
      price: salePrice || price,
      img: currentImage,
      qty: 1,
      weight: product.weight || "",
      units: product.units || "",
    });

    goToDetails();
  };

  return (
    <>
      <Card
        className="vitalimes-premium-product-card"
        onClick={goToDetails}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="vitalimes-product-image-area">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.name || product.title}
              className={`vitalimes-product-img ${
                idx === hoverImageIndex ? "active" : ""
              }`}
              onError={(e) => {
                e.currentTarget.src = "/assets/images/placeholder.png";
              }}
            />
          ))}

          <div className="image-soft-overlay"></div>

          <span className="natural-chip">
            <Leaf size={12} />
            Natural
          </span>

          {hasDiscount && offerPercent !== null && !isNaN(offerPercent) && (
            <span className="discount-chip">{offerPercent}% OFF</span>
          )}

          <div className="quick-view-pill">
            <Eye size={14} />
            View Details
            <ArrowRight size={14} />
          </div>
        </div>

        <Card.Body className="vitalimes-product-body">
       <div className="product-rating-row">
  {Number(product.total_reviews) > 0 ? (
    <>
      <span className="product-rating-stars">
        {"★".repeat(Math.round(Number(product.average_rating || 0)))}
        {"☆".repeat(5 - Math.round(Number(product.average_rating || 0)))}
      </span>

      <span className="product-rating-text">
        {Number(product.average_rating || 0).toFixed(2)} (
        {product.total_reviews} Review
        {Number(product.total_reviews) !== 1 ? "s" : ""})
      </span>
    </>
  ) : (
    <span className="product-no-rating-text">No reviews yet</span>
  )}
</div>
          <div className="product-mini-row">
            <span className="brand-chip">
              <Sparkles size={11} />
              Vitalimes
            </span>

            
          </div>

          <Card.Title className="vitalimes-product-title">
            {product.name || product.title}
          </Card.Title>

          <div className="price-marketing-row">
            <div className="price-left">
              {hasDiscount ? (
                <>
                  <span className="sale-price">₹{salePrice.toFixed(2)}</span>
                  <span className="old-price">₹{price.toFixed(2)}</span>
                </>
              ) : (
                <span className="sale-price">₹{price.toFixed(2)}</span>
              )}
            </div>

            {hasDiscount && offerPercent !== null && !isNaN(offerPercent) && (
              <span className="save-label">Save {offerPercent}%</span>
            )}
          </div>

          <div className="product-benefit-row">
            <span>Pure</span>
            <span>Fresh</span>
            <span>Trusted</span>
          </div>

          <Button className="premium-cart-button" onClick={handleAddToCart}>
            <ShoppingBag size={15} />
            Add to Cart
          </Button>
        </Card.Body>
      </Card>

      <style>{`
        .vitalimes-premium-product-card {
          width: 100%;
          height: 100%;
          border: 1px solid rgba(31, 59, 47, 0.12) !important;
          border-radius: 28px !important;
          overflow: hidden;
          background: #ffffff !important;
          cursor: pointer;
          box-shadow: 0 20px 55px rgba(31, 59, 47, 0.10);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
        }

        .vitalimes-premium-product-card:hover {
          transform: translateY(-6px);
          border-color: rgba(31, 59, 47, 0.22) !important;
          box-shadow: 0 28px 70px rgba(31, 59, 47, 0.16);
        }

        .vitalimes-product-image-area {
          width: 100%;
          height: 330px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at center, rgba(216, 167, 8, 0.10), transparent 52%),
            #fbfff3;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
        }

        .vitalimes-product-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          position: absolute;
          inset: 0;
          padding: 18px;
          opacity: 0;
          transform: none;
          transition: opacity 0.4s ease;
        }

        .vitalimes-product-img.active {
          opacity: 1;
          z-index: 1;
        }

        .image-soft-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.00) 45%,
            rgba(31, 59, 47, 0.18) 100%
          );
          pointer-events: none;
        }

        .natural-chip,
        .discount-chip {
          position: absolute;
          top: 15px;
          z-index: 4;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 900;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.10);
        }

        .natural-chip {
          left: 15px;
          background: rgba(255, 255, 255, 0.95);
          color: #1f3b2f;
        }

        .discount-chip {
          right: 15px;
          background: #d73343;
          color: #ffffff;
        }

        .quick-view-pill {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          z-index: 4;
          min-height: 42px;
          padding: 0 14px;
          border-radius: 18px;
          background: rgba(31, 59, 47, 0.94);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          font-size: 13px;
          font-weight: 900;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.28s ease;
        }

        .vitalimes-premium-product-card:hover .quick-view-pill {
          opacity: 1;
          transform: translateY(0);
        }

        .vitalimes-product-body {
          padding: 18px 18px 20px !important;
          text-align: left;
        }

        .product-mini-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 11px;
        }

        .brand-chip,
        .quality-chip {
          min-height: 26px;
          padding: 0 10px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.45px;
          white-space: nowrap;
        }

        .brand-chip {
          background: rgba(31, 59, 47, 0.08);
          color: #1f3b2f;
        }

        .quality-chip {
          background: rgba(216, 167, 8, 0.16);
          color: #9a6b00;
        }

        .vitalimes-product-title {
          margin: 0 0 12px !important;
          min-height: 48px;
          color: #1f3b2f !important;
          font-size: 17px !important;
          line-height: 1.35;
          font-weight: 900 !important;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: left;
        }

        .price-marketing-row {
          min-height: 34px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .price-left {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
        }

        .sale-price {
          color: #0b8a45;
          font-size: 22px;
          line-height: 1;
          font-weight: 950;
        }

        .old-price {
          color: #8c9b91;
          font-size: 13px;
          font-weight: 700;
          text-decoration: line-through;
        }

        .save-label {
          padding: 5px 9px;
          border-radius: 999px;
          background: #fff2c2;
          color: #9a6b00;
          font-size: 10px;
          font-weight: 950;
          white-space: nowrap;
        }

        .product-benefit-row {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
          margin-bottom: 15px;
        }

        .product-benefit-row span {
          padding: 5px 9px;
          border-radius: 999px;
          background: #f5f9ef;
          color: #4f665b;
          border: 1px solid rgba(31, 59, 47, 0.08);
          font-size: 10px;
          font-weight: 850;
        }

        .premium-cart-button {
          width: 100%;
          min-height: 44px;
          border: none !important;
          border-radius: 999px !important;
          background: linear-gradient(135deg, #1f3b2f, #0b8a45) !important;
          color: #ffffff !important;
          font-size: 13px !important;
          font-weight: 900 !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 16px 34px rgba(31, 59, 47, 0.22);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .premium-cart-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 44px rgba(31, 59, 47, 0.30);
        }

        @media (max-width: 992px) {
          .vitalimes-product-image-area {
            height: 300px;
          }
        }

        @media (max-width: 576px) {
          .vitalimes-premium-product-card {
            border-radius: 24px !important;
          }

          .vitalimes-product-image-area {
            height: 250px;
            padding: 14px;
          }

          .vitalimes-product-img {
            padding: 14px;
          }

          .quick-view-pill {
            opacity: 1;
            transform: translateY(0);
          }

          .vitalimes-product-body {
            padding: 16px !important;
          }

          .vitalimes-product-title {
            min-height: auto;
            font-size: 16px !important;
          }

          .product-mini-row {
            flex-wrap: wrap;
          }
        }

        .product-rating-row {
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 22px;
  margin-bottom: 10px;
}

.product-rating-stars {
  color: #ffad32;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 1px;
  white-space: nowrap;
}

.product-rating-text {
  color: #333333;
  font-size: 13px;
  font-weight: 700;
}

.product-no-rating-text {
  color: #777777;
  font-size: 13px;
  font-weight: 700;
}
      `}</style>
    </>
  );
}