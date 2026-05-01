import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function LemonRecipeCombined() {

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">

      {/* 🔥 SCROLL BAR */}
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      {/* 🔥 LEMON JUICE */}
      <div className="juice-wrapper">

        <motion.img
          src="/assets/images/lemon_juice.png"
          className="juice-img"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          className="juice-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2>🧃 Lemon Juice Preparation</h2>

          <ul>
            <li>✔ Mix 6g lemon powder with 1 liter water</li>
            <li>✔ Add 130g sugar and stir well</li>
            <li>✔ Enough for 5 people</li>
            <li>✔ Prepare lemon soda, mint, tea etc.</li>
            <li>✔ Serve chilled</li>
          </ul>
        </motion.div>
      </div>

      {/* 🔥 LEMON RICE (UPDATED WITH RIGHT IMAGE) */}
      <div className="juice-wrapper reverse">

        <motion.div
          className="juice-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2>🍚 Lemon Rice Preparation</h2>

          <ul>
            <li>✔ Mix lemon powder with water</li>
            <li>✔ Prepare tempering with oil & spices</li>
            <li>✔ Add lemon mixture</li>
            <li>✔ Mix with cooked rice</li>
            <li>✔ Serve hot</li>
          </ul>
        </motion.div>

        <motion.img
          src="/assets/images/lemon_banner.png"
          className="juice-img"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
      </div>

      {/* 🔥 ADDITIONAL USES */}
      <div className="section">

        <h2 className="title">✨ Additional Uses</h2>

        <div className="grid">
          {uses.map((item, i) => (
            <motion.div
              key={i}
              className="use-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <img src={item.img} alt="" />
              <div className="overlay">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 CSS */}
      <style>{`

.page {
  background: #f6f8f3;
  font-family: 'Poppins', sans-serif;
}

/* SCROLL BAR */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(to right, #4caf50, #ffc107);
  transform-origin: left;
  z-index: 999;
}

/* COMMON LAYOUT */
.juice-wrapper {
  max-width: 1200px;
  margin: 80px auto;
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 20px;
}

.reverse {
  flex-direction: row-reverse;
}

/* IMAGE */
.juice-img {
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  transition: 0.4s;
}

.juice-img:hover {
  transform: scale(1.05);
}

/* CARD */
.juice-card {
  flex: 1;
  background: #fff;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.juice-card:hover {
  transform: translateY(-10px);
}

.juice-card h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.juice-card ul {
  line-height: 2;
}

/* 🔥 SECTION SPACING (VERY IMPORTANT) */
.section {
  max-width: 1200px;
  margin: 120px auto 140px; /* 🔥 space before footer */
  padding: 20px;
}

/* TITLE */
.title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 60px;
}

/* 🔥 GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

/* 🔥 BIG PREMIUM CARD */
.use-card {
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  height: 280px; /* 🔥 increased height */
  box-shadow: 0 15px 40px rgba(0,0,0,0.12);
  transition: all 0.4s ease;
  cursor: pointer;
}

/* IMAGE */
.use-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease;
}

/* 🔥 IMAGE ZOOM */
.use-card:hover img {
  transform: scale(1.12);
}

/* 🔥 LIFT EFFECT */
.use-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 70px rgba(0,0,0,0.25);
}

/* 🔥 PREMIUM BORDER GLOW */
.use-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 25px;
  padding: 2px;
  background: linear-gradient(120deg,#4caf50,#ffc107);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  opacity: 0;
  transition: 0.3s;
}

.use-card:hover::before {
  opacity: 1;
}

/* 🔥 DARK OVERLAY */
.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 18px;
  background: linear-gradient(
    transparent,
    rgba(0,0,0,0.85)
  );
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
}

/* MOBILE */
@media(max-width:900px){
  .grid {
    grid-template-columns: repeat(2,1fr);
  }
}

@media(max-width:768px){
  .juice-wrapper {
    flex-direction: column;
  }

  .juice-img {
    width: 100%;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}

      `}</style>
    </div>
  );
}

/* DATA */
const uses = [
  { title: "Lemon Soda", img: "/assets/images/lemon_soda.png" },
  { title: "Lemon Mint", img: "/assets/images/lemon_mint.png" },
  { title: "Lemon Tea", img: "/assets/images/lemontea.jpeg" },
  { title: "Biryani", img: "/assets/images/biriyani.jpeg" },
  { title: "Chicken", img: "/assets/images/chicken.jpeg" },
  { title: "Desserts", img: "/assets/images/dessert.jpeg" },
];