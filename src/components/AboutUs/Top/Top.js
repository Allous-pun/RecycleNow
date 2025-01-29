import React from "react";
import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            {/* First paragraph about KilonzoCorp */}
            <div className={`row ${styles.contain}`}>
                <div className={`col-md-12`}>
                    <p data-aos='slide-right' className={styles.heading}>
                        About KilonzoCorp
                    </p>
                    <p data-aos='fade-up' className={styles.content}>
                        KilonzoCorp is a leading provider of cutting-edge data annotation services, specializing in empowering AI and machine learning models across various industries. We focus on delivering high-quality, precise annotations for images, videos, text, and audio to fuel innovation in sectors like autonomous vehicles, healthcare, and agriculture. With our expert team and advanced tools, we support businesses in building smarter, more reliable AI solutions.
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
