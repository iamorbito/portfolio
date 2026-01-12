import { FiZap, FiLayers, FiSettings, FiGrid } from "react-icons/fi";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* HEADER */}
        <header className="services-header">
          <h2>Services</h2>
          <p>Do I look like a plumber? 😏</p>
        </header>

        {/* GRID */}
        <div className="services-grid">
          <ServiceCard
            icon={<FiLayers size={26} />}
            title="Design Systems & UI Foundations"
            desc="Scalable UI that stays consistent."
            img={img1}
          />

          <ServiceCard
            icon={<FiZap size={26} />}
            title="Consumer & B2B Product Interfaces"
            desc="Clear interfaces for real users."
            img={img2}
          />

          <ServiceCard
            icon={<FiGrid size={26} />}
            title="Analytical Dashboards & Data Interfaces"
            desc="Data made easy to read."
            img={img3}
          />

          <ServiceCard
            icon={<FiSettings size={26} />}
            title="Marketing & Product Surfaces"
            desc="Pages that convert and explain."
            img={img4}
          />
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function ServiceCard({ icon, title, desc, img }) {
  return (
    <div className="card">
      <div className="card-content">
        {icon}
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <img src={img} alt="" className="card-image" />
    </div>
  );
}

/* ---------------- CSS ---------------- */

const css = `
/* SECTION GAP FROM SCREEN */
.services-section {
  margin: 48px 0;
  padding: 0 16px;
  box-sizing: border-box;
}

/* CONTAINER */
.services-container {
  background: #F3F3F6;
  border-radius: 32px;
  padding: 72px 56px;
  max-width: 1400px;
  margin: 0 auto;
  border: 6px solid #f2f2f5;
}

/* HEADER */
.services-header {
  text-align: center;
  margin-bottom: 64px;
}

.services-header h2 {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 6px;
}

.services-header p {
  font-size: 14px;
  color: #666;
}

/* GRID */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

/* CARD */
.card {
  position: relative;
  background: #fff;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 8px 24px rgba(0,0,0,0.06);
  padding: 28px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  transition: box-shadow 0.25s ease;
}

/* TEXT */
.card-content {
  position: relative;
  z-index: 2;
}

.card h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 12px 0 8px;
}

.card p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

/* IMAGE */
.card-image {
  position: absolute;
  bottom: -48px;
  right: -48px;
  width: 70%;
  transform: rotate(-10deg) scale(1.35);
  transition: transform 0.35s ease;
  pointer-events: none;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.15);
}

/* HOVER */
.card:hover .card-image {
  transform: rotate(-28deg) scale(1.08) translateX(-14px) translateY(-18px);
}

.card:hover {
  box-shadow:
    0 2px 6px rgba(0,0,0,0.06),
    0 16px 36px rgba(0,0,0,0.08);
}

/* TABLET */
@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .services-container {
    padding: 40px 20px 44px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card {
    aspect-ratio: auto;
    min-height: 300px;
    padding: 22px;
  }
}
`;
