import { useEffect, useRef } from "react";

export default function Reviews() {
  const rowRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  const reviews = [
    {
      name: "Daniel Foster",
      role: "Product Lead, SaaS",
      avatar: "https://i.pravatar.cc/80?img=11",
      heading: "Clear thinking, clean execution",
      text:
        "From early wireframes to final delivery, the work felt thoughtful and intentional. " +
        "Design decisions were backed by reasoning, not trends. " +
        "The end result was calm, usable, and production-ready.",
    },
    {
      name: "Maya Reynolds",
      role: "Founder, Consumer App",
      avatar: "https://i.pravatar.cc/80?img=32",
      heading: "Design that understands users",
      text:
        "The interfaces were easy to understand instantly. " +
        "Complex flows were simplified without losing depth. " +
        "Users adapted immediately after launch.",
    },
    {
      name: "Arjun Mehta",
      role: "Engineering Manager",
      avatar: "https://i.pravatar.cc/80?img=45",
      heading: "Engineers love this kind of design",
      text:
        "Specs were clear, systems were consistent, and handoff was frictionless. " +
        "Nothing felt vague or over-designed. " +
        "Development time dropped noticeably.",
    },
    {
      name: "Sofia Alvarez",
      role: "Growth & Marketing Lead",
      avatar: "https://i.pravatar.cc/80?img=25",
      heading: "Design that actually converts",
      text:
        "Pages weren’t just polished — they were outcome-driven. " +
        "Hierarchy, messaging, and CTAs were intentional. " +
        "Conversion metrics improved post-launch.",
    },
    {
      name: "Ethan Brooks",
      role: "Startup Advisor",
      avatar: "https://i.pravatar.cc/80?img=18",
      heading: "Mature product thinking",
      text:
        "The work showed a deep understanding of product trade-offs. " +
        "Decisions balanced speed and quality perfectly. " +
        "The result felt confident and scalable.",
    },
    {
      name: "Nina Patel",
      role: "Design Ops Manager",
      avatar: "https://i.pravatar.cc/80?img=39",
      heading: "Systems that scale effortlessly",
      text:
        "Components were reusable, documented, and consistent. " +
        "The design system was easy for teams to adopt. " +
        "Design debt reduced immediately.",
    },
    {
      name: "Lucas Meyer",
      role: "B2B Platform Owner",
      avatar: "https://i.pravatar.cc/80?img=52",
      heading: "Complex data made approachable",
      text:
        "Dashboards were dense but never overwhelming. " +
        "Information hierarchy was extremely well handled. " +
        "Stakeholders finally understood the data.",
    },
    {
      name: "Hannah Kim",
      role: "UX Researcher",
      avatar: "https://i.pravatar.cc/80?img=61",
      heading: "Research-driven and user-first",
      text:
        "User insights clearly shaped the final experience. " +
        "Feedback loops were fast and effective. " +
        "The product genuinely reflected user needs.",
    },
  ];

  /* -------- INFINITE LOOP -------- */
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let raf;
    const speed = 0.35;

    const animate = () => {
      if (!pausedRef.current) offsetRef.current -= speed;

      const reset = row.scrollWidth / 2;
      if (Math.abs(offsetRef.current) >= reset) offsetRef.current = 0;

      row.style.transform = `translateX(${offsetRef.current}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <header className="reviews-header">
          <h2>What people say</h2>
          <p>about me and my work</p>
        </header>

        <div
          ref={rowRef}
          className="reviews-row"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div className="review-unit" key={i}>
              <div className="name-box">
                <img src={r.avatar} alt={r.name} />
                <div>
                  <strong>{r.name}</strong>
                  <div className="role">{r.role}</div>
                </div>
              </div>

              <div className="review-box">
                <h4>{r.heading}</h4>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
}

/* ---------------- CSS ---------------- */

const css = `
.reviews-section {
  margin: 48px 0;
  padding: 0 16px;
  box-sizing: border-box;
}

.reviews-container {
  background: #F3F3F6;
  border-radius: 32px;
  padding: 72px 56px;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
  border: 6px solid #f2f2f5;
}

.reviews-header {
  text-align: center;
  margin-bottom: 64px;
}

.reviews-header h2 {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 6px;
}

.reviews-header p {
  font-size: 14px;
  color: #777;
}

/* MOVING ROW */
.reviews-row {
  display: flex;
  gap: 32px;
  width: max-content;
  will-change: transform;
}

/* CARD STRUCTURE */
.review-unit {
  width: clamp(280px, 28vw, 360px);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* TOP NAME CARD */
.name-box {
  background: #fff;
  border-radius: 14px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
}

.name-box img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.role {
  font-size: 12px;
  color: #777;
}

/* MAIN REVIEW CARD */
.review-box {
  background: #fff;
  border-radius: 22px;
  padding: 32px;
  min-height: 420px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.07);
}

.review-box h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.review-box p {
  font-size: 14.5px;
  color: #555;
  line-height: 1.7;
}

/* MOBILE */
@media (max-width: 600px) {
  .reviews-container {
    padding: 40px 20px 44px;
  }
}
`;
