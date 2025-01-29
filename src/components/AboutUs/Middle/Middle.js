import React from "react";
import styles from './Middle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHandshake, faBrain } from '@fortawesome/free-solid-svg-icons'; // Updated icons for KilonzoCorp services

const Middle = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                {/* Main heading for the section */}
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>
                    Discover Advanced AI Annotation Solutions with KilonzoCorp
                </p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    At KilonzoCorp, we specialize in providing high-quality data annotation services for businesses across various industries. Our expert team supports AI and machine learning projects with precise and reliable annotations that drive innovation in areas like autonomous vehicles, healthcare, and agriculture. Whether you require image, text, audio, or video annotation, we have the tools and expertise to help you succeed.
                </p>

                <div className="row">
                    {/* First service block */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faCog} size="4x" className={styles.icon} /> {/* Image Annotation */}
                            <p className={styles.head}>Image & Video Annotation</p>
                            <p className={styles.content}>
                                Enhance your AI and machine learning models with our precise image and video annotation services, from object detection to scene labeling. We ensure accuracy to train better computer vision models for industries such as autonomous vehicles and e-commerce.
                            </p>
                        </div>
                    </div>

                    {/* Second service block */}
                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faHandshake} size="4x" className={styles.icon} /> {/* Text Annotation */}
                            <p className={styles.head}>Text Annotation</p>
                            <p className={styles.content}>
                                Improve the efficiency of your NLP models with our high-quality text annotation services, including sentiment analysis, entity recognition, and keyword extraction. Perfect for chatbots, sentiment analysis tools, and virtual assistants.
                            </p>
                        </div>
                    </div>

                    {/* Third service block */}
                    <div data-aos='fade-left' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faBrain} size="4x" className={styles.icon} /> {/* Audio Annotation */}
                            <p className={styles.head}>Audio & Speech Annotation</p>
                            <p className={styles.content}>
                                Transform raw audio data into structured, annotated datasets for training speech recognition models. Our services include transcription, emotion recognition, and speech-to-text conversions, ideal for voice assistants and call center automation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Middle;
