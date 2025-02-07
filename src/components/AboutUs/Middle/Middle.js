import React from "react";
import styles from './Middle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faCog, faHandshake, faBrain } from '@fortawesome/free-solid-svg-icons'; // Updated icons for KilonzoCorp services
=======
import { faRecycle, faTrashAlt, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Updated icons for RecycleNow services
>>>>>>> main

const Middle = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                {/* Main heading for the section */}
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>
<<<<<<< HEAD
                    Discover Advanced AI Annotation Solutions with KilonzoCorp
                </p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    At KilonzoCorp, we specialize in providing high-quality data annotation services for businesses across various industries. Our expert team supports AI and machine learning projects with precise and reliable annotations that drive innovation in areas like autonomous vehicles, healthcare, and agriculture. Whether you require image, text, audio, or video annotation, we have the tools and expertise to help you succeed.
=======
                    Leading the Way in Sustainable Waste Management with RecycleNow
                </p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    At RecycleNow, we are dedicated to revolutionizing waste management through innovative and eco-friendly solutions. Our services focus on waste segregation, recycling, and responsible collection & disposal to minimize environmental impact. Join us in creating a cleaner and more sustainable future.
>>>>>>> main
                </p>

                <div className="row">
                    {/* First service block */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
<<<<<<< HEAD
                            <FontAwesomeIcon icon={faCog} size="4x" className={styles.icon} /> {/* Image Annotation */}
                            <p className={styles.head}>Image & Video Annotation</p>
                            <p className={styles.content}>
                                Enhance your AI and machine learning models with our precise image and video annotation services, from object detection to scene labeling. We ensure accuracy to train better computer vision models for industries such as autonomous vehicles and e-commerce.
=======
                            <FontAwesomeIcon icon={faRecycle} size="4x" className={styles.icon} /> {/* Waste Recycling */}
                            <p className={styles.head}>Waste Recycling</p>
                            <p className={styles.content}>
                                We transform waste into reusable materials, promoting a circular economy. Our recycling processes ensure minimal waste pollution while maximizing sustainability efforts.
>>>>>>> main
                            </p>
                        </div>
                    </div>

                    {/* Second service block */}
                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
<<<<<<< HEAD
                            <FontAwesomeIcon icon={faHandshake} size="4x" className={styles.icon} /> {/* Text Annotation */}
                            <p className={styles.head}>Text Annotation</p>
                            <p className={styles.content}>
                                Improve the efficiency of your NLP models with our high-quality text annotation services, including sentiment analysis, entity recognition, and keyword extraction. Perfect for chatbots, sentiment analysis tools, and virtual assistants.
=======
                            <FontAwesomeIcon icon={faTrashAlt} size="4x" className={styles.icon} /> {/* Waste Collection & Disposal */}
                            <p className={styles.head}>Waste Collection & Disposal</p>
                            <p className={styles.content}>
                                Our efficient waste collection and disposal services ensure that waste is handled responsibly, reducing landfill overflow and promoting environmental health.
>>>>>>> main
                            </p>
                        </div>
                    </div>

                    {/* Third service block */}
                    <div data-aos='fade-left' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
<<<<<<< HEAD
                            <FontAwesomeIcon icon={faBrain} size="4x" className={styles.icon} /> {/* Audio Annotation */}
                            <p className={styles.head}>Audio & Speech Annotation</p>
                            <p className={styles.content}>
                                Transform raw audio data into structured, annotated datasets for training speech recognition models. Our services include transcription, emotion recognition, and speech-to-text conversions, ideal for voice assistants and call center automation.
=======
                            <FontAwesomeIcon icon={faLeaf} size="4x" className={styles.icon} /> {/* Waste Segregation */}
                            <p className={styles.head}>Waste Segregation</p>
                            <p className={styles.content}>
                                We promote proper waste segregation by categorizing waste into biodegradable, recyclable, and non-recyclable materials, making recycling more effective and sustainable.
>>>>>>> main
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Middle;
