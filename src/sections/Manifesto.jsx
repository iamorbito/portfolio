import { useEffect, useRef } from "react";

export default function Manifesto() {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const rafRef = useRef(null);

  const text = `
I believe good products are built through clarity, speed, and iteration.
I prefer shipping early, learning from real feedback, and improving in cycles.
Design is not decoration. It’s statistical decision-making.
`;

  useEffect(() => {
    const animate = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (viewportHeight - rect.top) / (rect.height + viewportHeight)
        )
      );

      const totalWords = wordsRef.current.length;
      const activeWords = Math.floor(progress * totalWords);

      wordsRef.current.forEach((word, i) => {
        if (!word) return;
        word.style.opacity = i <= activeWords ? "1" : "0.5";
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const words = text.split(" ");

  return (
    <section id="manifesto" style={styles.section}>
      <div ref={containerRef} style={styles.container}>
        <header style={styles.header}>
          <h2 style={styles.title}>Manifesto</h2>
          <p style={styles.subtitle}>This is why YOU choose ME</p>
        </header>

        <p style={styles.text}>
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => (wordsRef.current[i] = el)}
              style={styles.word}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  section: {
    margin: "48px 0",
    padding: "0 16px",
    overflowX: "hidden",
  },

  container: {
    background: "#000000",
    borderRadius: "32px",
    padding: "72px 56px",
    maxWidth: "1400px",
    margin: "0 auto",
    boxSizing: "border-box",
    border: "6px solid #2a2a2a", // added border
  },

  header: {
    textAlign: "center",
    marginBottom: "48px",
  },

  title: {
    fontSize: "clamp(28px, 6vw, 52px)",
    fontWeight: 500,
    letterSpacing: "-0.02em",
    color: "#fff",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.45)",
  },
  text: {
    maxWidth: "960px", // ← important
    margin: "0 auto",
    fontSize: "clamp(16px, 4vw, 28px)",
    lineHeight: 1.6,
    letterSpacing: "-0.01em",
    color: "#fff",
    overflowWrap: "break-word",
  },

  word: {
    opacity: 0.5,
    transition: "opacity 0.3s ease",
    willChange: "opacity",
    display: "inline",
  },
};
