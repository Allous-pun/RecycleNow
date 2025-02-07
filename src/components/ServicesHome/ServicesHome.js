import React from "react";
import styles from "./ServicesHome.module.css";
import data from "./data";

const ServicesHome = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden pb-4`}>
            {/* Heading Section */}
            <p data-aos="slide-right" className={styles.heading}>
                Frequently Asked Questions
            </p>
            <div>
                <p
                    data-aos="slide-left"
                    className={`mx-auto ${styles.subHeading}`}
                >
                    Your questions about our services, answered.
                </p>
            </div>

            {/* Accordion Section */}
            <div className="accordion" id="faqAccordion">
                {data.map((item, index) => (
                    <div key={item.id} className="accordion-item">
                        {/* Accordion Header */}
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse${index}`}
                            >
                                {item.heading}
                            </button>
                        </h2>

                        {/* Accordion Content */}
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">{item.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesHome;
