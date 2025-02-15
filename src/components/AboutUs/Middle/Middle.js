import React from "react";
import styles from './Middle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faTrashAlt, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Updated icons for RecycleNow services

const Middle = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                {/* Main heading for the section */}
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>
                    Leading the Way in Sustainable Waste Management with RecycleNow
                </p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    At RecycleNow, we are dedicated to revolutionizing waste management through innovative and eco-friendly solutions. Our services focus on waste segregation, recycling, and responsible collection & disposal to minimize environmental impact. Join us in creating a cleaner and more sustainable future.
                </p>

                <div className="row">
                    {/* First service block */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faRecycle} size="4x" className={styles.icon} /> {/* Waste Recycling */}
                            <p className={styles.head}>Waste Recycling</p>
                            <p className={styles.content}>
                                We transform waste into reusable materials, promoting a circular economy. Our recycling processes ensure minimal waste pollution while maximizing sustainability efforts.
                            </p>
                        </div>
                    </div>

                    {/* Second service block */}
                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faTrashAlt} size="4x" className={styles.icon} /> {/* Waste Collection & Disposal */}
                            <p className={styles.head}>Waste Collection & Disposal</p>
                            <p className={styles.content}>
                                Our efficient waste collection and disposal services ensure that waste is handled responsibly, reducing landfill overflow and promoting environmental health.
                            </p>
                        </div>
                    </div>

                    {/* Third service block */}
                    <div data-aos='fade-left' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faLeaf} size="4x" className={styles.icon} /> {/* Waste Segregation */}
                            <p className={styles.head}>Waste Segregation</p>
                            <p className={styles.content}>
                                We promote proper waste segregation by categorizing waste into biodegradable, recyclable, and non-recyclable materials, making recycling more effective and sustainable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Middle;