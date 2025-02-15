
import React from "react";
import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            {/* First paragraph about RecycleNow */}
            <div className={`row ${styles.contain}`}>
                <div className={`col-md-12`}>
                    <p data-aos='slide-right' className={styles.heading}>
                        About RecycleNow
                    </p>
                    <p data-aos='fade-up' className={styles.content}>

                       RecycleNow is dedicated to transforming waste management through comprehensive public education, efficient waste collection, segregation, 
                       and recycling services. We also offer eco-friendly products and support businesses in managing their stocks, sales, and inventory. 
                       Our mission is to revolutionize waste management operations for all stakeholders, fostering a cleaner and greener future for everyone. 
                       Join us in our commitment to sustainable practices and environmental stewardship.
                    </p>
                </div>
            </div>

            {/* Second paragraph about RecycleNow */}
            <div className={`row ${styles.contain}`}>
                <div className={`col-md-12`}>
                    <p data-aos='slide-left' className={styles.subHeading}>
                        Revolutionizing Waste Management for a Greener Future
                    </p>
                    <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
                        At RecycleNow, we are committed to sustainable waste management through innovative solutions. 
                        Our services include efficient waste segregation, eco-friendly recycling, and responsible waste collection & disposal. 
                        By integrating smart waste management practices, we aim to reduce environmental impact and promote a cleaner, healthier planet. 
                        Join us in making a difference—one step at a time.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Top;
