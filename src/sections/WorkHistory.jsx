import { useEffect, useRef, useState } from "react";
import myPic from "../assets/mypic.jpeg";

/* ---------- SCALE LOGIC ---------- */
const MID_SCALE = 0.88;
const SIDE_SCALE = MID_SCALE * 0.88;
const OUTER_SCALE = SIDE_SCALE * 0.864;

const SLOT = 380;

/* ---------- CARD DATA ---------- */
const cardsData = [
  {
    title: "Blud",
    subtitle: "Blood Donation Website",
    desc: "With user-centered approach, the goal was to create an intuitive interface for effortless fund management within an MNC.",
    type: "Individual",
    time: "4 Months",
    image: myPic,
  },
  {
    title: "Stride",
    subtitle: "Campus Management System",
    desc: "Designed a scalable system for schools and colleges focusing on clarity, speed, and admin efficiency.",
    type: "Startup",
    time: "6 Months",
    image: myPic,
  },
  {
    title: "Locsy",
    subtitle: "Local Discovery App",
    desc: "A mobile-first product helping users explore nearby cafes, parks, and experiences through personalization.",
    type: "Product",
    time: "5 Months",
    image: myPic,
  },
  {
    title: "LegalLens",
    subtitle: "AI Legal Assistant",
    desc: "An AI-powered assistant for legal research, contracts, and case discovery in the Indian legal system.",
    type: "AI Tool",
    time: "4 Months",
    image: myPic,
  },
  {
    title: "Touch Grass",
    subtitle: "Wellbeing Mobile App",
    desc: "A mindful intervention app encouraging users to disconnect, reflect, and rebalance screen time.",
    type: "Mobile App",
    time: "3 Months",
    image: myPic,
  },
];

export default function WorkHistory() {
  const [cards, setCards] = useState(cardsData);
  const [dragX, setDragX] = useState(0);

  const dragging = useRef(false);
  const startX = useRef(0);
  const autoRef = useRef(null);
  const animating = useRef(false); // ✅ FIX

  /* ---------- AUTO LOOP ---------- */
  useEffect(() => {
    autoRef.current = setInterval(next, 8000);
    return () => clearInterval(autoRef.current);
  }, []);

  const next = () => {
    if (animating.current) return;
    animating.current = true;

    setCards((p) => {
      const c = [...p];
      c.push(c.shift());
      return c;
    });

    setTimeout(() => (animating.current = false), 300);
  };

  const prev = () => {
    if (animating.current) return;
    animating.current = true;

    setCards((p) => {
      const c = [...p];
      c.unshift(c.pop());
      return c;
    });

    setTimeout(() => (animating.current = false), 300);
  };

  /* ---------- DRAG ---------- */
  const onDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX || e.touches[0].clientX;
    clearInterval(autoRef.current);
  };

  const onMove = (e) => {
    if (!dragging.current) return;
    const x = e.clientX || e.touches[0].clientX;
    setDragX(x - startX.current);
  };

  const onUp = () => {
    if (!dragging.current) return;
    dragging.current = false;

    if (dragX < -SLOT / 4) next();
    else if (dragX > SLOT / 4) prev();

    setDragX(0);
    autoRef.current = setInterval(next, 8000);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container} className="wh-container">
        <div style={styles.header} className="wh-header">
          <h2 style={styles.heading}>Projects</h2>
          <p style={styles.subheading}>
            Selected work across product, systems, and experimentation
          </p>
        </div>

        <div
          style={styles.row}
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          onTouchStart={onDown}
          onTouchMove={onMove}
          onTouchEnd={onUp}
        >
          {cards.map((card, i) => {
            const distance = i - 2;

            let scale = MID_SCALE;
            if (i === 1 || i === 3) scale = SIDE_SCALE;
            if (i === 0 || i === 4) scale = OUTER_SCALE;

            const offset = distance * SLOT + dragX;

            const blur =
              Math.abs(distance) === 2
                ? "blur(1.5px) drop-shadow(0 0 20px rgba(0,0,0,0.35))"
                : "none";

            return (
              <div
                key={card.title}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: `translateX(${offset}px) translateX(-50%) scale(${scale})`,
                  transition: dragging.current
                    ? "none"
                    : "transform 2200ms cubic-bezier(0.16, 1, 0.3, 1)",
                  zIndex: 10 - Math.abs(distance),
                  filter: blur,
                }}
              >
                <Card data={card} />
              </div>
            );
          })}
        </div>

        <div style={styles.swipeHint}>
          &lt;&lt; Swipe Left and Right to see more &gt;&gt;
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
}

/* ---------- CARD ---------- */
function Card({ data }) {
  return (
    <div style={styles.card}>
      <h1 style={styles.title}>{data.title}</h1>
      <p style={styles.subtitle}>{data.subtitle}</p>
      <p style={styles.desc}>{data.desc}</p>

      <div style={styles.metaRow}>
        <div>
          <span style={styles.metaLabel}>Type</span>
          <span style={styles.metaValue}>{data.type}</span>
        </div>
        <div style={{ marginLeft: 60 }}>
          <span style={styles.metaLabel}>Time</span>
          <span style={styles.metaValue}>{data.time}</span>
        </div>
      </div>

      <img src={data.image} alt="" style={styles.image} />
      <button style={styles.cta}>View Case Study</button>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  section: {
    padding: "32px 16px",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    maxWidth: 1400,
    width: "100%",
    background: "#f4f4f5",
    borderRadius: 32,
    padding: 56,
    overflow: "hidden",
  },

  header: {
    textAlign: "center",
    marginBottom: 40,
  },

  heading: {
    fontSize: 48,
    margin: 0,
  },

  subheading: {
    marginTop: 8,
    fontSize: 16,
    color: "#777",
  },

  row: {
    position: "relative",
    height: 720,
    cursor: "grab",
    touchAction: "pan-y",
  },

  swipeHint: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
    opacity: 0.5,
    pointerEvents: "none",
  },

  card: {
    width: 420,
    height: 750,
    background: "#000",
    borderRadius: 24,
    position: "relative",
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
  },

  title: { position: "absolute", top: 60, left: 42, fontSize: 60 },
  subtitle: {
    position: "absolute",
    top: 138,
    left: 42,
    fontSize: 18,
    opacity: 0.8,
  },
  desc: {
    position: "absolute",
    top: 198,
    left: 42,
    right: 42,
    fontSize: 15,
    opacity: 0.5,
  },

  metaRow: { position: "absolute", top: 306, left: 42, display: "flex" },
  metaLabel: { display: "block", fontSize: 18, marginBottom: 12 },
  metaValue: { fontSize: 24 },

  image: {
    position: "absolute",
    top: 390,
    left: 42,
    width: 336,
    height: 224,
    borderRadius: 24,
    objectFit: "cover",
  },

  cta: {
    position: "absolute",
    bottom: 30,
    left: 42,
    width: 336,
    height: 60,
    borderRadius: 999,
    border: "0.6px solid #fff",
    background: "transparent",
    color: "#fff",
    fontSize: 21,
  },
};

const css = `
@media (max-width: 640px) {
  .wh-container {
    padding: 28px 18px 24px;
  }

  .wh-header {
    margin-bottom: 20px;
  }
}
`;
