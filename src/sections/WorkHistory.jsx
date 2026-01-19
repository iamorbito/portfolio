import { useEffect, useRef, useState } from "react";
import myPic from "../assets/mypic.jpeg";
import mod from "../assets/mod.png";
import drum from "../assets/drumsynth.png";
import goasis from "../assets/greenoasis.png";
import vision from "../assets/vision.png";
import blud from "../assets/blud.png";

/* ---------- CONSTANTS ---------- */
const MID_SCALE = 0.88;
const SIDE_SCALE = MID_SCALE * 0.88;
const OUTER_SCALE = SIDE_SCALE * 0.864;
const SLOT = 380;
const AUTO_DELAY = 8000;
const TRANSITION_MS = 900;

/* ---------- CARD DATA (DUPLICATED FOR ILLUSION) ---------- */
const baseCards = [
  {
    title: "Blud",
    subtitle: "Donate Blood. Save Lives.",
    desc: "Connects donors and patients quickly through a simple, reliable platform.",
    type: "Individual",
    time: "2 Months",
    image: blud,
    link: "https://example.com/blud",
  },
  {
    title: "Vision",
    subtitle: "Fashion That Moves Fast",
    desc: "An online clothing store with curated trends and smooth checkout.",
    type: "Individual",
    time: "12 Hrs",
    image: vision,
    link: "https://www.behance.net/gallery/242258631/Vision-Clothing",
  },
  {
    title: "mod.music",
    subtitle: "Find Live Music",
    desc: "Discover nearby concerts, artists, and upcoming live music events.",
    type: "Individual",
    time: "12 Hrs",
    image: mod,
    link: "https://www.behance.net/gallery/230845673/modmusic-replica-with-better-NavBar",
  },
  {
    title: "Green Oasis",
    subtitle: "Fresh. Local. Honest.",
    desc: "Farm-fresh ingredients served directly from local growers to your table.",
    type: "Individual",
    time: "24 Hrs",
    image: goasis,
    link: "https://www.behance.net/gallery/201696149/Green-Oasis-Brand-Identity",
  },
  {
    title: "drumsynth",
    subtitle: "Mix Music Online",
    desc: "Create, mix, and play tracks like a DJ, straight from your browser.",
    type: "Individual",
    time: "12 Hrs",
    image: drum,
    link: "https://www.behance.net/gallery/230845919/drumsynth-landing-page",
  },
];

const cardsData = [...baseCards, ...baseCards, ...baseCards];

/* ---------- BUFFERED LIST ---------- */
const buffer = 2;
const bufferedCards = [
  ...cardsData.slice(-buffer),
  ...cardsData,
  ...cardsData.slice(0, buffer),
];

export default function WorkHistory() {
  const [index, setIndex] = useState(buffer);
  const [dragX, setDragX] = useState(0);

  const dragging = useRef(false);
  const startX = useRef(0);
  const autoRef = useRef(null);
  const snapping = useRef(false);

  useEffect(() => {
    autoRef.current = setInterval(() => move(1), AUTO_DELAY);
    return () => clearInterval(autoRef.current);
  }, []);

  useEffect(() => {
    if (snapping.current) return;

    if (index === bufferedCards.length - buffer) {
      snapping.current = true;
      setTimeout(() => {
        setIndex(buffer);
        snapping.current = false;
      }, TRANSITION_MS);
    }

    if (index === buffer - 1) {
      snapping.current = true;
      setTimeout(() => {
        setIndex(bufferedCards.length - buffer - 1);
        snapping.current = false;
      }, TRANSITION_MS);
    }
  }, [index]);

  const move = (dir) => {
    setIndex((i) => i + dir);
  };

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

    if (dragX < -SLOT / 4) move(1);
    if (dragX > SLOT / 4) move(-1);

    setDragX(0);
    autoRef.current = setInterval(() => move(1), AUTO_DELAY);
  };

  return (
    <section style={styles.section} id="work-history">
      <div style={styles.container}>
        <div style={styles.header}>
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
          {bufferedCards.map((card, i) => {
            const distance = i - index;
            if (Math.abs(distance) > 5) return null;

            let scale = MID_SCALE;
            if (Math.abs(distance) === 1) scale = SIDE_SCALE;
            if (Math.abs(distance) === 2) scale = OUTER_SCALE;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: `translateX(${
                    distance * SLOT + dragX
                  }px) translateX(-50%) scale(${scale})`,
                  transition:
                    dragging.current || snapping.current
                      ? "none"
                      : "transform 900ms cubic-bezier(0.16,1,0.3,1)",
                  zIndex: 10 - Math.abs(distance),
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

      {/* SHINY BUTTON CSS */}
      <style>{`
        .shiny-btn {
          position: relative;
          overflow: hidden;
        }
        .shiny-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 150%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(255,255,255,0.15) 40%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0.15) 60%,
            transparent 100%
          );
          transform: skewX(-20deg);
        }
        .shiny-btn:hover::before {
          animation: btn-shine 1.1s ease forwards;
        }
        @keyframes btn-shine {
          from { left: -150%; }
          to { left: 150%; }
        }
      `}</style>
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

      <img src={data.image} alt="" style={styles.image} draggable={false} />

      <button
        style={styles.cta}
        className="shiny-btn"
        onClick={() => (window.location.href = data.link)}
      >
        View Case Study
      </button>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  section: {
    padding: "16px 16px", // ↓ vertical space
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
  header: { textAlign: "center", marginBottom: 40 },
  heading: { fontSize: 48, margin: 0 },
  subheading: { marginTop: 8, fontSize: 16, color: "#777" },
  row: {
    position: "relative",
    height: 720,
    cursor: "grab",
    touchAction: "pan-y",
    userSelect: "none",
  },
  swipeHint: { marginTop: 8, textAlign: "center", fontSize: 12, opacity: 0.5 },
  card: {
    width: 420,
    height: 750,
    background: "#000",
    borderRadius: 24,
    position: "relative",
    color: "#fff",
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
