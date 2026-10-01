import { AccordionIcon } from "../../icons";
import Button from "../../ui/Button/Button";
import "./faqSection.css";

import { useState } from "react";

export default function FAQSection({ faqs, onContactClick }) {
  const [openItems, setOpenItems] = useState([]);

  function handleButtonClick(id) {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  function handleContactClick() {
    onContactClick?.();
  }

  return (
    <section className="faq-section">
      <div className="faq-section-header">
        <h2 className="faq-section-title">Frequently asked questions</h2>
        <p className="faq-section-subtitle">Choose any questions you need</p>
      </div>
      <div className="faq-section-content">
        <ul className="faq-section-faqs">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <li className="faq-section-accordion" key={faq.id}>
                <h3>
                  <button
                    className="faq-section-label ax-button"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => handleButtonClick(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <AccordionIcon
                      isOpen={isOpen}
                      className="faq-section-icon"
                    />
                  </button>
                </h3>

                <div
                  className={`faq-section-panel-wrapper ${isOpen ? "open" : ""}`}
                >
                  <p className="faq-section-panel">{faq.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="faq-section-support-card">
          <div className="faq-section-support-card-content">
            <h3 className="faq-section-support-card-title">
              Can’t find the answer you’re looking for?
            </h3>
            <p>
              Reach out to our
              <button
                type="button"
                className="link faq-section-support-card-link"
                onClick={(e) => {
                  handleContactClick();
                }}
              >
                {" "}
                customer support{" "}
              </button>
              team.
            </p>
          </div>
          <Button
            variant="primary"
            size="xl"
            className="faq-section-button"
            onClick={handleContactClick}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
