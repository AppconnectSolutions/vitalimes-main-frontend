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

/* 🔥 GRID FIXED 3 */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* CARD */
.use-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 200px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: 0.3s;
}

/* IMAGE */
.use-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}

/* 🔥 HOVER EFFECT */
.use-card:hover img {
  transform: scale(1.1);
}

.use-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
}

/* 🔥 GLOW */
.use-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg,#81c784,#ffc107);
  opacity: 0;
  transition: 0.3s;
}

.use-card:hover::after {
  opacity: 0.25;
}

/* TEXT */
.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 12px;
  background: rgba(0,0,0,0.7);
  color: white;
  text-align: center;
  font-weight: 600;
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
  { title: "Lemon Soda", img: "/assets/images/use1.png" },
  { title: "Lemon Mint", img: "/assets/images/use2.png" },
  { title: "Lemon Tea", img: "/assets/images/use3.png" },
  { title: "Biryani", img: "/assets/images/use4.png" },
  { title: "Chicken", img: "/assets/images/use5.png" },
  { title: "Desserts", img: "/assets/images/use6.png" },
];