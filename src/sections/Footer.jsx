import { useEffect, useState } from "react";

// PNG ICONS
import linkedin from "../assets/linkedin.png";
import xIcon from "../assets/x.png";
import dribbble from "../assets/dribbble.png";
import instagram from "../assets/instagram.png";
import discord from "../assets/discord.png";
import behance from "../assets/behance.png";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="footer" style={styles.section}>
      <div
        style={{
          ...styles.container,
          padding: isMobile ? "72px 0" : "120px 0",
        }}
      >
        <div style={styles.inner}>
          {/* TEXT */}
          <div
            style={{
              ...styles.textBlock,
              paddingLeft: isMobile ? "24px" : "72px",
              paddingRight: isMobile ? "24px" : "0",
            }}
          >
            <h2
              style={{
                ...styles.heading,
                fontSize: isMobile
                  ? "clamp(28px, 8vw, 42px)"
                  : styles.heading.fontSize,
                whiteSpace: isMobile ? "normal" : "nowrap",
              }}
            >
              <span className="shiny-text">Let’s Build Something</span>
              <span style={styles.bolt}>⚡</span>
            </h2>

            <p
              style={{
                ...styles.subline,
                fontSize: isMobile
                  ? "clamp(13px, 4vw, 15px)"
                  : "clamp(18px, 2vw, 24px)",
                marginTop: isMobile ? "16px" : "40px",
                maxWidth: isMobile ? "100%" : "720px",
              }}
            >
              Currently open to full-time opportunities and freelance
              engagements.
            </p>
          </div>

          {/* DIVIDER */}
          <div
            style={{
              ...styles.divider,
              margin: isMobile ? "36px 24px" : "54px 72px",
            }}
          />

          {/* BOTTOM */}
          <div
            style={{
              ...styles.bottomRow,
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? "24px" : "0",
              paddingLeft: isMobile ? "24px" : "72px",
              paddingRight: isMobile ? "24px" : "72px",
              marginBottom: isMobile ? "32px" : "60px",
            }}
          >
            <p
              style={{
                ...styles.email,
                fontSize: isMobile
                  ? "clamp(15px, 4vw, 18px)"
                  : "clamp(20px, 2vw, 28px)",
                wordBreak: isMobile ? "break-word" : "break-all",
              }}
            >
              orbitsnevermeet@gmail.com
            </p>

            <div
              style={{
                ...styles.socials,
                flexWrap: isMobile ? "nowrap" : "wrap",
                overflowX: isMobile ? "auto" : "visible",
              }}
            >
              {[linkedin, xIcon, dribbble, instagram, discord, behance].map(
                (icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt="social icon"
                    style={styles.iconImg}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SHINY TEXT CSS */}
      <style>{`
        .shiny-text {
          position: relative;
          display: inline-block;
          background: linear-gradient(
            110deg,
            #ffffff 0%,
            #ffffff 35%,
            #9ca3af 45%,
            #ffffff 55%,
            #ffffff 100%
          );
          background-size: 250% 100%;
          background-position: 0% 0%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3.5s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: -250% 0%;
          }
        }
      `}</style>
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
    background: "#000",
    borderRadius: "32px",
    width: "100%",
    boxSizing: "border-box",
    border: "6px solid #2a2a2a",
    fontFamily: "Montserrat, sans-serif",
  },

  inner: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  textBlock: {
    maxWidth: "1100px",
  },

  heading: {
    fontWeight: 600,
    lineHeight: 1.1,
    margin: 0,
    color: "#fff",
    fontSize: "clamp(42px, 6vw, 80px)",
    display: "inline-flex",
    alignItems: "baseline",
    gap: "0.25em",
    whiteSpace: "nowrap",
  },

  bolt: {
    fontSize: "0.8em",
    lineHeight: 1,
  },

  subline: {
    fontWeight: 500,
    color: "rgba(255,255,255,0.35)",
    maxWidth: "720px",
  },

  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.2)",
  },

  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
  },

  email: {
    fontWeight: 600,
    color: "#fff",
    margin: 0,
  },

  socials: {
    display: "flex",
    gap: "20px",
  },

  iconImg: {
    width: "28px",
    height: "28px",
    objectFit: "contain",
    cursor: "pointer",
    opacity: 0.9,
    flexShrink: 0,
  },
};
