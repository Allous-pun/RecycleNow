import React from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';

// Import icons
import { FaTrashAlt, FaRecycle, FaSeedling, FaChalkboardTeacher } from 'react-icons/fa';

const CaseStudy = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <div data-aos='slide-left'>
                <p className={styles.study}>RecycleNow SERVICES</p>
            </div>

            {/* Services Container */}
            <div className='row mb-2'>
                {/* Waste Collection & Disposal */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaTrashAlt className={styles.icon} />
                            <p className={styles.imgTitle}>Waste Collection & Disposal</p>
                            <p className={styles.serviceDescription}>
                                RecycleNow offers efficient waste collection and disposal 
                                through safe handling, waste segregation, recycling, composting, and energy generation, ensuring environmental protection and a cleaner community.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Waste Segregation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaSeedling className={styles.icon} />
                            <p className={styles.imgTitle}>Waste Segregation</p>
                            <p className={styles.serviceDescription}>
                                RecycleNow specializes in waste segregation by 
                                sorting waste into organic, recyclable, and hazardous categories, promoting efficient recycling, resource conservation, and safe disposal for a sustainable environment.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* waste recycling */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaRecycle className={styles.icon} />
                            <p className={styles.imgTitle}>Waste Recycling</p>
                            <p className={styles.serviceDescription}>
                                We provide sustainable waste recycling services, turning waste materials into reusable resources through innovative methods. 
                                Our goal is to reduce waste and promote environmental conservation by transforming discarded materials into valuable products.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Mass Education */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaChalkboardTeacher className={styles.icon} />
                            <p className={styles.imgTitle}>Mass Education</p>
                            <p className={styles.serviceDescription}>
                                We promote mass education on waste management and environmental sustainability through awareness programs and educational campaigns.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;