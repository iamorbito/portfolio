export default function Offer() {
  return (
    <section id="offer" style={styles.section}>
      <div style={styles.container} className="offer-container">
        {/* HEADER */}
        <header style={styles.header}>
          <h2 style={styles.title}>Offer</h2>
          <p style={styles.subtitle}>Enough to run a family of 4 😭🙏🏻</p>
        </header>

        {/* CARDS */}
        <div style={styles.cards}>
          {/* PROJECT */}
          <div style={{ ...styles.card, ...styles.lightCard }}>
            <div style={styles.badge}>
              <span style={styles.dot} />
              Available
            </div>

            <h3 style={styles.cardTitle}>Project</h3>
            <p style={styles.cardDesc}>
              I design clean, usable product interfaces for real users.
            </p>

            <div style={styles.price}>₹1,50,000</div>
            <div style={styles.priceMeta}>starting per project</div>

            <ul style={styles.list}>
              <li style={styles.listItem}>Freelance Consultant role</li>
              <li style={styles.listItem}>Flexible commitment</li>
              <li style={styles.listItem}>Remote</li>
              <li style={styles.listItem}>Europe/USA/Canada/SEA/Middle East</li>
              <li style={styles.listItem}>2–3 revision rounds included</li>
            </ul>

            <a
              href="https://calendly.com/orbitsnevermeet/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", marginTop: "40px" }}
            >
              <button style={styles.darkButton}>Let’s talk →</button>
            </a>
          </div>

          {/* FULL TIME */}
          <div style={{ ...styles.card, ...styles.darkCard }}>
            <div style={{ ...styles.badge, ...styles.badgeDark }}>
              <span style={styles.dot} />
              Available
            </div>

            <h3 style={{ ...styles.cardTitle, color: "#fff" }}>Full-time</h3>
            <p style={styles.cardDescDark}>
              I join your team as a product designer.
            </p>

            <div style={{ ...styles.price, color: "#fff" }}>₹10,00,000</div>
            <div style={styles.priceMetaDark}>CTC per year</div>

            <ul style={styles.listDark}>
              <li style={styles.listItemDark}>
                Product / UI / UX Designer role
              </li>
              <li style={styles.listItemDark}>
                Early-stage or growth startups
              </li>
              <li style={styles.listItemDark}>Remote or hybrid</li>
              <li style={styles.listItemDark}>
                Europe/USA/Canada/SEA/Middle East
              </li>
              <li style={styles.listItemDark}>Long-term growth focused</li>
            </ul>

            <a
              href="https://calendly.com/orbitsnevermeet/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", marginTop: "40px" }}
            >
              <button style={styles.lightButton}>Let’s talk →</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  section: {
    margin: "40px 0",
    padding: "0 16px",
  },

  container: {
    background: "#FFFFFF",
    borderRadius: "32px",
    padding: "80px 64px",
    maxWidth: "1400px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  },

  header: {
    textAlign: "center",
    marginBottom: "88px",
  },

  title: {
    fontSize: "44px",
    fontWeight: 500,
    letterSpacing: "-0.02em",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "14px",
    color: "rgba(0,0,0,0.5)",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "64px",
    alignItems: "stretch",
    justifyContent: "center",
    justifyItems: "center",
  },

  card: {
    borderRadius: "28px",
    padding: "48px",
    display: "flex",
    flexDirection: "column",
    minHeight: "640px",
    width: "100%",
    maxWidth: "680px",
    boxSizing: "border-box",
  },

  lightCard: {
    background: "#F4F4F6",
    border: "1px solid rgba(0,0,0,0.08)",
  },

  darkCard: {
    background: "#000",
    border: "1px solid rgba(255,255,255,0.14)",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(0,0,0,0.25)",
    fontSize: "12px",
    marginBottom: "32px",
    width: "fit-content",
  },

  badgeDark: {
    border: "1px solid rgba(255,255,255,0.4)",
    color: "#fff",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#22C55E",
  },

  cardTitle: {
    fontSize: "30px",
    fontWeight: 500,
    letterSpacing: "-0.015em",
    marginBottom: "12px",
  },

  cardDesc: {
    fontSize: "15px",
    color: "rgba(0,0,0,0.5)",
    marginBottom: "40px",
    lineHeight: 1.6,
  },

  cardDescDark: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.5)",
    marginBottom: "40px",
    lineHeight: 1.6,
  },

  price: {
    fontSize: "48px",
    fontWeight: 500,
    letterSpacing: "-0.02em",
  },

  priceMeta: {
    fontSize: "13px",
    color: "rgba(0,0,0,0.5)",
    marginBottom: "36px",
  },

  priceMetaDark: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.5)",
    marginBottom: "36px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginBottom: "auto",
  },

  listItem: {
    padding: "16px 0",
    fontSize: "15px",
    color: "rgba(0,0,0,0.5)",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
  },

  listDark: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginBottom: "auto",
  },

  listItemDark: {
    padding: "16px 0",
    fontSize: "15px",
    color: "rgba(255,255,255,0.5)",
    borderBottom: "1px solid rgba(255,255,255,0.14)",
  },

  darkButton: {
    padding: "14px 26px",
    borderRadius: "999px",
    border: "none",
    background: "#000",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },

  lightButton: {
    padding: "14px 26px",
    borderRadius: "999px",
    border: "none",
    background: "#fff",
    color: "#000",
    fontSize: "14px",
    cursor: "pointer",
  },
};

/* -------- RESPONSIVE PADDING (PERMANENT FIX) -------- */

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width: 1024px) {
      .offer-container {
        padding: 64px 40px !important;
      }
    }
    @media (max-width: 640px) {
      .offer-container {
        padding: 48px 20px !important;
        border-radius: 24px;
      }
    }
  `;
  document.head.appendChild(style);
}
