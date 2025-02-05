import React from "react";
import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            {/* First paragraph about KilonzoCorp */}
            <div className={`row ${styles.contain}`}>
                <div className={`col-md-12`}>
                    <p data-aos='slide-right' className={styles.heading}>
                        About Recyclenow
                    </p>
                    <p data-aos='fade-up' className={styles.content}>
                        Recyclenow is dedicated to transforming waste management through comprehensive public education,efficient waste collection,segregation,and recycling services.We also offer eco-friendly 
                        products and support businesses in managing their stocks,sales and inventory.Our mission is to revolutionize
                        waste management operations for all stakeholders,fostering a cleaner and greener future for everyone
                        Join us in our commitment to sustainable practices and environmental stewardship.
                    </p>
                </div>
            </div>

            {/* Second paragraph about KilonzoCorp */}
            <div className={`row ${styles.contain}`}>
                <div className={`col-md-12`}>
                    <p data-aos='slide-left' className={styles.subHeading}>
                        Fueling Innovation in AI with Precision
                    </p>
                    <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
                        At KilonzoCorp, we are dedicated to transforming the future of AI by providing accurate and scalable data annotation services. Whether you're developing computer vision models, improving natural language processing systems, or training speech recognition tools, our team ensures that your data is ready to deliver impactful results. Partner with us to drive your AI initiatives forward with trusted, high-quality annotations.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Top;
