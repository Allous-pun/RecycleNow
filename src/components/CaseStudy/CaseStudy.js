import React from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';

// Import icons
import { FaImage, FaFont, FaHeadphones, FaCube } from 'react-icons/fa';

const CaseStudy = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <div data-aos='slide-left'>
                <p className={styles.study}>KILONZOCORP SERVICES</p>
            </div>

            {/* Services Container */}
            <div className='row mb-2'>
                {/* Image & Video Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaImage className={styles.icon} />
                            <p className={styles.imgTitle}>Image & Video Annotation</p>
                            <p className={styles.serviceDescription}>
                                From object detection to semantic segmentation, we provide detailed annotation for images and videos to improve your computer vision models.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Text Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaFont className={styles.icon} />
                            <p className={styles.imgTitle}>Text Annotation</p>
                            <p className={styles.serviceDescription}>
                                Improve your natural language processing (NLP) models with our comprehensive text annotation services, including sentiment analysis, entity recognition, and intent classification.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Audio Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaHeadphones className={styles.icon} />
                            <p className={styles.imgTitle}>Audio Annotation</p>
                            <p className={styles.serviceDescription}>
                                Transform raw audio data into valuable training sets with our transcription and speech annotation services, designed to enhance your voice recognition models.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* 3D Point Cloud Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaCube className={styles.icon} />
                            <p className={styles.imgTitle}>3D Point Cloud Annotation</p>
                            <p className={styles.serviceDescription}>
                                Perfect for autonomous vehicles, we label 3D point cloud data to ensure accurate depth perception and environmental understanding.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;
