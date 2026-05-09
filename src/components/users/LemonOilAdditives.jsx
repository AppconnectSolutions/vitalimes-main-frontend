import React from "react";

const additiveSections = [
  {
    title: "Lemon Oil Additive for Cosmetics",
    subtitle:
      "Lemon oil can be used as a premium citrus additive in selected cosmetic and personal care products.",
    badge: "Cosmetic Applications",
    items: [
      {
        title: "Face Wash & Creams",
        description: "Adds a fresh lemon-based aroma and premium natural appeal.",
        Icon: FaceWashIcon,
      },
      {
        title: "Soap & Body Wash",
        description: "Useful for refreshing citrus fragrance in bath care products.",
        Icon: SoapIcon,
      },
      {
        title: "Hair Oil & Shampoo",
        description:
          "Can be blended carefully for lemon freshness in hair care products.",
        Icon: HairCareIcon,
      },
      {
        title: "Lip Balm",
        description:
          "Can be used in mild quantity for light lemon flavour positioning.",
        Icon: LipBalmIcon,
      },
    ],
  },
  {
    title: "Lemon Oil Additive for Aromatherapy",
    subtitle:
      "Lemon oil can be positioned for aroma-based products where a fresh citrus note is required.",
    badge: "Aromatherapy Applications",
    items: [
      {
        title: "Aromatherapy",
        description: "Suitable for citrus-based aroma product development.",
        Icon: AromaIcon,
      },
      {
        title: "Diffuser Oil",
        description:
          "Can be used in diffuser blends for a refreshing lemon fragrance.",
        Icon: DiffuserIcon,
      },
      {
        title: "Massage Oil",
        description:
          "Can be mixed with suitable carrier oils for aroma-based massage products.",
        Icon: MassageIcon,
      },
      {
        title: "Stress Relief Products",
        description:
          "Useful in calming, refreshing and mood-focused aroma product ranges.",
        Icon: StressReliefIcon,
      },
    ],
  },
];

export default function LemonOilAdditives() {
  return (
    <section
      className="lemon-oil-additives-section"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="lemon-oil-additives-container">
        <div className="additives-heading">
          <span>Lemon Oil Applications</span>

          <h2>
            Premium Additive Use for <b>Cosmetics & Aromatherapy</b>
          </h2>

          <p>
            Lemon oil can be used as a value-added ingredient in selected
            cosmetic, personal care, diffuser, massage, and aroma-based product
            applications.
          </p>
        </div>

        <div className="additives-main-grid">
          {additiveSections.map((section, index) => (
            <div
              className="additive-box"
              key={section.title}
              style={{ animationDelay: `${index * 0.18}s` }}
            >
              <span className="additive-badge">{section.badge}</span>

              <h3>{section.title}</h3>

              <p className="additive-subtitle">{section.subtitle}</p>

              <div className="additive-items-grid">
                {section.items.map((item) => (
                  <div className="additive-item" key={item.title}>
                    <div className="additive-icon">
                      <item.Icon />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="additive-note">
                <span>Note:</span> Use in suitable quantity based on formulation
                requirement and product safety standards.
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .lemon-oil-additives-section {
          position: relative;
          overflow: hidden;
          padding: 90px 20px;
          background: #ffffff;
          font-family: 'Poppins', sans-serif;
        }

        .lemon-oil-additives-container {
          max-width: 1220px;
          margin: 0 auto;
        }

        .additives-heading {
          max-width: 820px;
          margin: 0 auto 56px;
          text-align: center;
          animation: additiveFadeUp 0.85s ease both;
        }

        .additives-heading span {
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

        .additives-heading h2 {
          margin: 0;
          font-family: 'Playfair Display', serif;
          color: #102f1e;
          font-size: clamp(36px, 5vw, 62px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .additives-heading h2 b {
          color: #d8a708;
          font-weight: 800;
        }

        .additives-heading p {
          max-width: 760px;
          margin: 18px auto 0;
          color: #5e674f;
          font-size: 16px;
          line-height: 1.75;
          font-weight: 500;
        }

        .additives-main-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .additive-box {
          position: relative;
          overflow: hidden;
          padding: 36px;
          border-radius: 36px;
          background: linear-gradient(135deg, #ffffff 0%, #fbfff3 100%);
          border: 1px solid #e8efdf;
          box-shadow: 0 24px 65px rgba(54, 72, 18, 0.10);
          opacity: 0;
          transform: translateY(40px);
          animation: additiveCardUp 0.85s ease forwards;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .additive-box::before {
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

        .additive-box:hover::before {
          left: 130%;
        }

        .additive-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 34px 85px rgba(54, 72, 18, 0.16);
        }

        .additive-badge {
          display: inline-flex;
          padding: 7px 16px;
          margin-bottom: 20px;
          border-radius: 999px;
          background: #f1f8e7;
          color: #0b7d3b;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 1px solid rgba(11, 125, 59, 0.12);
        }

        .additive-box h3 {
          margin: 0 0 12px;
          font-family: 'Playfair Display', serif;
          color: #102f1e;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.1;
          font-weight: 800;
        }

        .additive-subtitle {
          margin: 0 0 26px;
          color: #5e674f;
          font-size: 15.5px;
          line-height: 1.7;
          font-weight: 500;
        }

        .additive-items-grid {
          display: grid;
          gap: 16px;
        }

        .additive-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          padding: 18px;
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid #e8efdf;
          transition: all 0.3s ease;
        }

        .additive-item:hover {
          transform: translateX(6px);
          background: #fbfff3;
        }

        .additive-icon {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #fffaf0, #ffffff);
          border: 1px solid rgba(217, 178, 34, 0.32);
          color: #0b7d3b;
          flex-shrink: 0;
          box-shadow:
            0 14px 28px rgba(7, 86, 41, 0.08),
            inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .additive-icon svg {
          width: 27px;
          height: 27px;
          stroke: currentColor;
          stroke-width: 1.8;
          fill: none;
        }

        .additive-item h4 {
          margin: 0 0 5px;
          color: #102f1e;
          font-size: 16px;
          font-weight: 900;
        }

        .additive-item p {
          margin: 0;
          color: #5e674f;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 500;
        }

        .additive-note {
          margin-top: 24px;
          padding: 16px 18px;
          border-radius: 20px;
          background: linear-gradient(135deg, #0b7d3b, #063f20);
          color: rgba(255,255,255,0.88);
          font-size: 13.5px;
          line-height: 1.55;
          font-weight: 600;
          box-shadow: 0 18px 38px rgba(6, 63, 32, 0.18);
        }

        .additive-note span {
          color: #ffd75b;
          font-weight: 950;
        }

        @keyframes additiveFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes additiveCardUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .additives-main-grid {
            grid-template-columns: 1fr;
          }

          .lemon-oil-additives-section {
            padding: 75px 16px;
          }
        }

        @media (max-width: 576px) {
          .lemon-oil-additives-section {
            padding: 60px 14px;
          }

          .additives-heading {
            margin-bottom: 38px;
          }

          .additives-heading h2 {
            font-size: 36px;
          }

          .additives-heading p {
            font-size: 14.5px;
          }

          .additive-box {
            padding: 26px 18px;
            border-radius: 28px;
          }

          .additive-box h3 {
            font-size: 28px;
          }

          .additive-item {
            padding: 16px;
          }

          .additive-icon {
            width: 46px;
            height: 46px;
            border-radius: 16px;
          }

          .additive-icon svg {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </section>
  );
}

/* PREMIUM INLINE SVG ICONS */

function FaceWashIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 3h8l1 5H7l1-5Z" />
      <path d="M7 8h10v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8Z" />
      <path d="M10 12h4" />
      <path d="M10 16h4" />
    </svg>
  );
}

function SoapIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7 10h10a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8Z" />
      <path d="M9 14h6" />
      <path d="M17 5h.01" />
      <path d="M12 3h.01" />
      <path d="M19 8h.01" />
    </svg>
  );
}

function HairCareIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 20c0-6 2.5-8 2.5-14" />
      <path d="M12 20c0-5 2-7 2-13" />
      <path d="M16 20c0-4 1.8-6 1.8-10" />
      <path d="M6 7c3-3 9-3 12 0" />
      <path d="M18 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </svg>
  );
}

function LipBalmIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M9 4h6v4H9V4Z" />
      <path d="M8 8h8v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8Z" />
      <path d="M10 12h4" />
      <path d="M10 16h4" />
    </svg>
  );
}

function AromaIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 19c-3-2-3-5 0-8 2-2 1-4 0-6" />
      <path d="M13 19c-3-2-3-5 0-8 2-2 1-4 0-6" />
      <path d="M18 19c-3-2-3-5 0-8 2-2 1-4 0-6" />
    </svg>
  );
}

function DiffuserIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 12h8l2 8H6l2-8Z" />
      <path d="M9 12V9a3 3 0 0 1 6 0v3" />
      <path d="M8 20h8" />
      <path d="M9 5c-1-1-1-2 0-3" />
      <path d="M15 5c1-1 1-2 0-3" />
    </svg>
  );
}

function MassageIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 14h4.5l2 2H15c1.2 0 2 .8 2 2H9" />
      <path d="M4 18h11.5c2.8 0 4.4-1.5 5.5-3.5" />
      <path d="M4 12v8" />
      <path d="M12 3s3 3.2 3 5.4A3 3 0 0 1 9 8.4C9 6.2 12 3 12 3Z" />
    </svg>
  );
}

function StressReliefIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3l1.8 5.1L19 10l-5.2 1.9L12 17l-1.8-5.1L5 10l5.2-1.9L12 3Z" />
      <path d="M19 14l.9 2.4L22 17l-2.1.6L19 20l-.9-2.4L16 17l2.1-.6L19 14Z" />
      <path d="M5 4l.7 1.8L7.5 6.5l-1.8.7L5 9l-.7-1.8-1.8-.7 1.8-.7L5 4Z" />
    </svg>
  );
}