import React from "react";
import styles from './ChoosingUs.module.css';

const ChoosingUs = () => {
    return (
        <div style={{ backgroundColor: '#e5f3ff' }}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Why Choose RecycleNow?</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Accuracy at Scale</p>
                            <p className={styles.logo_text}>We ensure precise waste segregation and disposal, handling large volumes efficiently to promote sustainability.</p>
                        </div>
                    </div>

                    <div data-aos='fade' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Diverse Expertise</p>
                            <p className={styles.logo_text}>Our team specializes in various waste management solutions, from recycling to composting, ensuring eco-friendly practices.</p>
                        </div>
                    </div>

                    <div data-aos='fade-left' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Cutting-Edge Tools</p>
                            <p className={styles.logo_text}>We utilize advanced technologies to enhance waste collection, sorting, and recycling for a cleaner environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoosingUs;
