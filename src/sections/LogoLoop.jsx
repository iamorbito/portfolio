/* LogoLoop.jsx */

const TOOLS = [
  "Figma",
  "Sketch",
  "Framer",
  "Penpot",
  "Miro",
  "Spline",
  "Lovable",
];

export default function LogoLoop() {
  return (
    <section style={styles.section}>
      <div style={styles.viewport}>
        <div style={styles.track}>
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span key={i} style={styles.item}>
              {tool}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infiniteLoop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  section: {
    width: "100vw",
    overflow: "hidden",
    padding: "32px 0",
    margin: "64px 0",
    position: "relative",
    left: "50%",
    marginLeft: "-50vw",
  },

  viewport: {
    width: "100%",
    overflow: "hidden",
    maskImage:
      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
  },

  track: {
    display: "flex",
    width: "max-content",
    animation: "infiniteLoop 16s linear infinite",
  },

  item: {
    paddingRight: "96px",
    fontSize: "28px",
    fontWeight: 700,
    color: "rgba(0,0,0,0.45)",
    whiteSpace: "nowrap",
    letterSpacing: "0.02em",
  },
};
