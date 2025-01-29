import React from "react";
import styles from './ChoosingUs.module.css';

const ChoosingUs = () => {
    return (
        <div style={{ backgroundColor: '#e5f3ff' }}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Why Choose KilonzoCorp?</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Accuracy at Scale</p>
                            <p className={styles.logo_text}>We deliver precise and reliable solutions at scale, ensuring your projects succeed no matter their complexity.</p>
                        </div>
                    </div>

                    <div data-aos='fade' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Diverse Expertise</p>
                            <p className={styles.logo_text}>Our team brings expertise from various industries, providing tailored solutions for every business need.</p>
                        </div>
                    </div>

                    <div data-aos='fade-left' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Cutting-Edge Tools</p>
                            <p className={styles.logo_text}>We leverage the latest technologies to create innovative tools that drive business growth and operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoosingUs;
