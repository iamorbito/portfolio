export default function FAQ() {
  const faqs = [
    {
      tag: "Offer",
      question: "Who do you typically work with?",
      answer:
        "I've worked with startups, professors and NGO. My experience spans product design, dashboards, internal tools, and large-scale platforms.",
      color: "#2563EB",
    },
    {
      tag: "Collaboration",
      question: "What are your typical design turnaround times?",
      answer:
        "Initial concepts usually land within the first week. Timelines depend on scope, but I always bias toward fast validation and momentum.",
      color: "#7C3AED",
    },
    {
      tag: "Tools",
      question: "What tools do you use?",
      answer:
        "Figma for design, Notion and Linear for planning, and React-based stacks for implementation-aware design decisions.",
      color: "#7C3AED",
    },
    {
      tag: "Payments",
      question: "Can projects be paused or stopped?",
      answer:
        "Yes. You can pause or stop anytime. Work resumes later based on availability.",
      color: "#16A34A",
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <header className="faq-header">
          <h2>FAQs</h2>
          <p>I thought you already know that</p>
        </header>

        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-card">
              <span className="faq-tag" style={{ backgroundColor: faq.color }}>
                {faq.tag}
              </span>

              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
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
/* SECTION */
.faq-section {
  margin: 48px 0;
  padding: 0 12px; /* 👈 minimal mobile gap */
  box-sizing: border-box;
}

/* CONTAINER */
.faq-container {
  background: #F3F3F6;
  border-radius: 32px;
  padding: 72px 56px;
  max-width: 1400px;
  margin: 0 auto;
  border: 6px solid #f2f2f5;
}

/* HEADER */
.faq-header {
  text-align: center;
  margin-bottom: 64px;
}

.faq-header h2 {
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 8px;
}

.faq-header p {
  font-size: 14px;
  color: rgba(0,0,0,0.55);
}

/* GRID */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}

/* CARD */
.faq-card {
  background: #fff;
  border-radius: 24px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  border: 1px solid rgba(0,0,0,0.08);
  box-shadow:
    0 4px 10px rgba(0,0,0,0.06),
    0 20px 40px rgba(0,0,0,0.08);

  width: 100%;
  box-sizing: border-box;
}

/* TAG */
.faq-tag {
  width: fit-content;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}

/* TEXT */
.faq-card h3 {
  font-size: 26px;
  font-weight: 600;
  margin: 0;
}

.faq-card p {
  font-size: 15.5px;
  line-height: 1.7;
  color: rgba(0,0,0,0.6);
  margin: 0;
}

/* MOBILE */
@media (max-width: 768px) {
  .faq-container {
    padding: 40px 16px 44px; /* 👈 KEY FIX */
  }

  .faq-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .faq-card {
    padding: 28px;
  }
}
`;
