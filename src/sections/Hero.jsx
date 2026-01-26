import { useState, useEffect } from "react";
import Galaxy from "../components/Galaxy";

const NAV_ITEMS = [
  { label: "Projects", href: "#work-history" },
  { label: "Reviews", href: "#reviews" },
  { label: "Offer", href: "#offer" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#footer" },
  {
    label: "Contact",
    href: "https://www.linkedin.com/in/iamorbito/",
    external: true,
  },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* 🔒 LOCK BODY SCROLL — FIXED */
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      return;
    }

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(y || "0") * -1);
    };
  }, [menuOpen]);

  // handle navigation for mobile menu items
  const handleNavClick = (e, item) => {
    // external links: allow default behavior but close the menu
    if (item.external) {
      setMenuOpen(false);
      return;
    }

    // internal hash links: prevent default and handle smooth scroll after menu closes
    e.preventDefault();
    setMenuOpen(false);

    // small delay to allow body scroll lock to be released, then scroll to the target
    setTimeout(() => {
      try {
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.location.hash = item.href;
        }
      } catch (err) {
        // no-op
      }
    }, 50);
  };

  return (
    <section style={styles.section} id="home">
      <div style={styles.box} className="hero-box">
        {/* NAVBAR */}
        <div style={styles.navWrap}>
          <div style={styles.navbar}>
            <div style={styles.brand}>
              <span style={styles.logo}>✳︎</span>
              iamorbito
            </div>

            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              style={styles.hamburger}
            >
              ☰
            </button>
          </div>
        </div>

        {/* FULLSCREEN MENU */}
        <div
          className="mobile-menu"
          style={{
            ...styles.mobileMenu,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            visibility: menuOpen ? "visible" : "hidden",
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          <button onClick={() => setMenuOpen(false)} style={styles.closeBtn}>
            Close ✕
          </button>

          <ul style={styles.mobileList}>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.label} style={styles.mobileItem}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleNavClick(e, item)}
                  style={styles.mobileLink}
                >
                  {item.label}
                  <span style={styles.mobileIndex}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* SOCIALS */}
          <div style={styles.socials}>
            <span style={styles.socialTitle}>Socials</span>
            <div style={styles.socialLinks}>
              <a
                href="https://www.behance.net/iamorbito"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
              >
                Behance
              </a>
              <a
                href="https://x.com/iamorbito"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/iamorbito/"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* BACKGROUND */}
        <Galaxy
          density={1.2}
          glowIntensity={0.5}
          saturation={0.9}
          hueShift={140}
          twinkleIntensity={0.2}
          rotationSpeed={0.1}
          repulsionStrength={1}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={1}
        />

        {/* HERO CONTENT */}
        <div style={styles.overlay}>
          <div style={styles.content}>
            <div style={styles.badge}>
              <span style={styles.dot} />
              Available for work
            </div>

            <h1 style={styles.heading}>
              An experienced Product Designer
              <br />
              with a bias for shipping, quality
              <br />
              and no-bullshit.
            </h1>

            <div style={styles.actions}>
              <a
                href="https://calendly.com/orbitsnevermeet/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button style={styles.primaryBtn}>Let’s talk</button>
              </a>

              <a
                href="/resume.pdf"
                download="Yash Bhardwaj | Product Designer Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <button style={styles.secondaryBtn}>Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        @media (max-width: 600px) {
          .hero-box {
            margin: 0 !important;
            max-width: 100% !important;
            border-top-left-radius: 0 !important;
            border-top-right-radius: 0 !important;
            border-bottom-left-radius: 40px !important;
            border-bottom-right-radius: 40px !important;
          }

          section#home {
            margin: 0 !important;
          }
        }

        /* hide scrollbar for the mobile fullscreen menu but keep it scrollable */
        .mobile-menu {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }

        .mobile-menu::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  section: { margin: "20px 0" },

  box: {
    margin: "0 16px",
    maxWidth: "1400px",
    marginInline: "auto",
    minHeight: "100svh",
    borderRadius: "24px",
    overflow: "hidden",
    position: "relative",
    background: "#000",
  },

  navWrap: {
    position: "absolute",
    top: "32px",
    left: 0,
    right: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    padding: "0 16px",
  },

  navbar: {
    width: "100%",
    maxWidth: "1200px",
    height: "64px",
    padding: "0 24px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
  },

  brand: { display: "flex", alignItems: "center", gap: "8px" },
  logo: { fontSize: "18px" },

  hamburger: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
  },

  mobileMenu: {
    position: "fixed",
    inset: 0,
    background: "#fff",
    zIndex: 50,
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    transition: "opacity 0.35s ease, transform 0.35s ease",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  closeBtn: {
    alignSelf: "flex-end",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },

  mobileList: { listStyle: "none", padding: 0, marginTop: "64px" },

  mobileItem: { marginBottom: "24px" },

  mobileLink: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontSize: "48px",
    fontWeight: 600,
    textDecoration: "none",
    color: "#000",
  },

  mobileIndex: { fontSize: "18px", color: "#4f46e5" },

  socials: { marginTop: "auto" },

  socialTitle: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#4f46e5",
    marginBottom: "12px",
  },

  socialLinks: { display: "flex", gap: "32px", flexWrap: "wrap" },

  socialLink: {
    fontSize: "24px",
    fontWeight: 500,
    color: "#000",
    textDecoration: "none",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
  },

  content: {
    paddingLeft: "clamp(16px, 5vw, 64px)",
    color: "#fff",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 14px",
    background: "#fff",
    color: "#000",
    borderRadius: "999px",
    marginBottom: "20px",
  },

  dot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#22c55e",
    borderRadius: "50%",
    animation: "pulse 1.8s ease-out infinite",
  },

  heading: {
    fontSize: "clamp(28px, 6vw, 72px)",
    lineHeight: 1.05,
    fontWeight: 600,
    marginBottom: "32px",
  },

  actions: { display: "flex", gap: "16px", pointerEvents: "auto" },

  primaryBtn: {
    padding: "16px 26px",
    borderRadius: "999px",
    border: "none",
    background: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },

  secondaryBtn: {
    padding: "16px 26px",
    borderRadius: "999px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.4)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
};
