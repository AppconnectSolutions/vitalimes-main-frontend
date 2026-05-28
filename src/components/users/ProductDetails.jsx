import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "./CartContext.jsx";
import { Container, Row, Col } from "react-bootstrap";
import RelatedProducts from "./RelatedProducts.jsx";
import ProductReviews from "./ProductReviews.jsx";

export default function ProductDetails() {
  const { cart, addToCart, openCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const MINIO_PUBLIC_URL =
  import.meta.env.VITE_MINIO_PUBLIC_URL || "https://minio.vitalimes.com";

const MINIO_BUCKET =
  import.meta.env.VITE_MINIO_BUCKET || "vitalimes-images";

const PLACEHOLDER_IMAGE = "/assets/images/placeholder.png";

// Convert DB filename -> full MinIO URL
const toImageUrl = (filename) => {
  if (!filename) return PLACEHOLDER_IMAGE;

  let key = String(filename).trim();

  // If already full URL, change old AppConnect domain to Vitalimes domain
  if (key.startsWith("http")) {
    return key.replace(
      "https://minio.appconnect.cloud",
      "https://minio.vitalimes.com"
    );
  }

  // Remove leading slash
  key = key.replace(/^\/+/, "");

  // Remove bucket prefix if already exists
  key = key.replace(new RegExp(`^${MINIO_BUCKET}/`), "");

  // Encode safely
  key = key.split("/").map(encodeURIComponent).join("/");

  return `${MINIO_PUBLIC_URL}/${MINIO_BUCKET}/${key}`;
};

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [related, setRelated] = useState([]);
  const [reviewSummary, setReviewSummary] = useState({
  average_rating: 0,
  total_reviews: 0,
});

const reviewSectionRef = useRef(null);

useEffect(() => {
  loadProduct();
  loadRelated();
  loadReviewSummary();
  setActiveImg(0);
  setQty(1);
}, [id]);

  /* ================= LOAD PRODUCT ================= */
  const loadProduct = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/products/${id}`);
      const p = data.product;
      if (!p) return;

      const images = [
        toImageUrl(p.image1),
        toImageUrl(p.image2),
        toImageUrl(p.image3),
        toImageUrl(p.image4),
        toImageUrl(p.image5),
        toImageUrl(p.image6),
      ].filter(Boolean);

      setProduct({ ...p, images });
      if (p.variants?.length > 0) {
        setSelectedVariant(p.variants[0]);
      } else {
        setSelectedVariant(null);
      }
    } catch (e) {
      console.error("Product fetch error", e);
      setProduct(null);
    }
  };

  /* ================= LOAD RELATED PRODUCTS ================= */
  const loadRelated = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/products?status=Active`);
      setRelated(data.products || []);
    } catch (e) {
      console.warn("Related fetch failed", e);
      setRelated([]);
    }
  };

  /* ================= LOAD REVIEW SUMMARY ================= */
const loadReviewSummary = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/api/reviews/summary/${id}`
    );

    setReviewSummary({
      average_rating: Number(data.summary?.average_rating || 0),
      total_reviews: Number(data.summary?.total_reviews || 0),
    });
  } catch (error) {
    console.error("Review summary fetch failed:", error);

    setReviewSummary({
      average_rating: 0,
      total_reviews: 0,
    });
  }
};

  if (!product) return <h3 className="text-center my-5">Loading Product...</h3>;

  /* ================= ADD TO CART ================= */
  const handleAddToCart = () => {
    if (!selectedVariant) return;

    const productId = product.id || product._id || product.product_id;
    const existingItem = cart.find(
      (item) => item.id === productId && item.weight === selectedVariant.weight
    );

    if (!existingItem) {
      addToCart(
        {
          id: productId,
          title: product.title,
          weight: selectedVariant.weight,
          price: selectedVariant.sale_price || selectedVariant.price,
          img: product.images?.[0] || "",
        },
        qty
      );
    }

    if (typeof openCart === "function") openCart();
  };

  const setQtyForItem = (productId, weight, newQty) => {
    const item = cart.find((i) => i.id === productId && i.weight === weight);
    if (item) {
      addToCart({ ...item }, newQty - item.qty, { openCart: false });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  const handleImgError = (e) => {
    e.currentTarget.src =
      "https://via.placeholder.com/600x400?text=No+Image";
  };


  /* ================= DYNAMIC PRODUCT RATING STARS ================= */
const renderProductRatingStars = (rating) => {
  const roundedRating = Math.round(Number(rating || 0));

  return (
    <span style={{ display: "inline-flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            color: star <= roundedRating ? "#ffc107" : "#d4d4d4",
            fontSize: "22px",
            lineHeight: "1",
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
};


/* ================= SCROLL TO CUSTOMER REVIEW SECTION ================= */
const scrollToReviews = () => {
  reviewSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  const productIdMain = product.id || product._id || product.product_id;
  const productInCart = cart.some(
    (item) => item.id === productIdMain && item.weight === selectedVariant?.weight
  );

  return (
    <Container className="py-5">
      <Row>
        {/* LEFT: Large image + thumbnails */}
        <Col md={6}>
          <div
            style={{
              width: "100%",
              height: "550px",
              overflow: "hidden",
              borderRadius: "12px",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={product.images[activeImg]}
              alt={product.title}
              onError={handleImgError}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Thumbnails */}
          <div className="d-flex gap-2 mt-3 flex-wrap">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} ${i + 1}`}
                onClick={() => setActiveImg(i)}
                onError={handleImgError}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  cursor: "pointer",
                  border: activeImg === i ? "3px solid #5C3A1E" : "1px solid #bbb",
                }}
              />
            ))}
          </div>
        </Col>

        {/* RIGHT: Product details */}
        <Col md={6}>
          <h2 className="fw-bold">{product.title}</h2>
            {/* DYNAMIC PRODUCT RATING */}
<div
  onClick={scrollToReviews}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
    marginBottom: "12px",
    cursor: "pointer",
    width: "fit-content",
  }}
  title="View customer reviews"
>
  {renderProductRatingStars(reviewSummary.average_rating)}

  <span
    style={{
      fontSize: "16px",
      fontWeight: "600",
      color: "#333",
    }}
  >
    {reviewSummary.total_reviews > 0
      ? `${reviewSummary.average_rating.toFixed(2)} (${reviewSummary.total_reviews} review${
          reviewSummary.total_reviews !== 1 ? "s" : ""
        })`
      : "No reviews yet"}
  </span>
</div>
          {selectedVariant ? (
            <div className="my-3">
              <h3 className="fw-bold">
                ₹{selectedVariant.sale_price || selectedVariant.price}
              </h3>
              {selectedVariant.sale_price && (
                <p className="text-muted text-decoration-line-through">
                  ₹{selectedVariant.price}
                </p>
              )}
            </div>
          ) : (
            <div className="my-3">
              <h3 className="fw-bold">₹{product.price || "—"}</h3>
            </div>
          )}

          {/* Variants */}
          <h5 className="fw-bold mt-4">Available Sizes</h5>
          <div className="d-flex flex-wrap gap-2">
            {product.variants?.map((v) => (
              <button
                key={v.id || v._id || `${v.weight}-${v.price}`}
                onClick={() => setSelectedVariant(v)}
                className="btn"
                style={{
                  border:
                    selectedVariant?.id === v.id ||
                    selectedVariant?.weight === v.weight
                      ? "2px solid #5C3A1E"
                      : "1px solid gray",
                  borderRadius: "10px",
                  padding: "10px 16px",
                  background:
                    selectedVariant?.id === v.id ||
                    selectedVariant?.weight === v.weight
                      ? "#5C3A1E"
                      : "white",
                  color:
                    selectedVariant?.id === v.id ||
                    selectedVariant?.weight === v.weight
                      ? "white"
                      : "black",
                }}
                type="button"
              >
                {v.weight} — ₹{v.sale_price || v.price}
              </button>
            )) || <p className="text-muted">No variants available</p>}
          </div>

          {/* Quantity */}
          <h5 className="fw-bold mt-4">Quantity</h5>
          <div className="d-flex align-items-center gap-3 mb-3">
            <button
              className="btn btn-dark"
              onClick={() => {
                if (qty > 1) {
                  const newQty = qty - 1;
                  setQty(newQty);
                  setQtyForItem(productIdMain, selectedVariant.weight, newQty);
                }
              }}
              type="button"
              style={{ width: "40px", height: "40px", fontSize: "1.2rem" }}
            >
              -
            </button>

            <span className="fs-4">{qty}</span>

            <button
              className="btn btn-dark"
              onClick={() => {
                const newQty = qty + 1;
                setQty(newQty);
                setQtyForItem(productIdMain, selectedVariant.weight, newQty);
              }}
              type="button"
              style={{ width: "40px", height: "40px", fontSize: "1.2rem" }}
            >
              +
            </button>

            {/* Total Amount Card */}
            <div
              className="ms-3 p-3 rounded shadow-sm"
              style={{
                background: "#fff8e1",
                borderLeft: "5px solid #ffc107",
                minWidth: "160px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "0.85rem", fontWeight: "500", color: "#555" }}>
                Total Amount
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#e65100",
                  marginTop: "4px",
                }}
              >
                ₹{((selectedVariant.sale_price || selectedVariant.price) * qty).toFixed(2)}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3 mt-4 align-items-center">
            <div style={{ position: "relative", flex: 1 }}>
              <button
                className="btn btn-dark w-100 py-3"
                onClick={handleAddToCart}
                type="button"
              >
                Add to Cart
              </button>
            </div>

            <button
              className="btn btn-warning flex-fill py-3"
              onClick={handleBuyNow}
              type="button"
            >
              Buy Now
            </button>
          </div>

          <p className="mt-4" style={{ whiteSpace: "pre-wrap" }}>
            {product.description}
          </p>
        </Col>
      </Row>

      {/* =======================================================
          RELATED PRODUCTS SECTION
      ======================================================= */}
     <RelatedProducts
  related={related}
  currentProductId={productIdMain}
  toImageUrl={toImageUrl}
  handleImgError={handleImgError}
  API_URL={API_URL}
/>

<div ref={reviewSectionRef}>
  <ProductReviews
    productId={productIdMain}
    API_URL={API_URL}
    productTitle={product.title}
    productImage={product.images?.[0] || ""}
    onReviewSubmitted={loadReviewSummary}
  />
</div>
    </Container>
  );
}
