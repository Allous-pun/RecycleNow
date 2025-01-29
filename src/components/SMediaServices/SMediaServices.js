import React from "react";
import styles from './SMediaServices.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faCogs } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../assets/home/r1.jpeg';
import img2 from '../../assets/home/02.jpeg';
import img3 from '../../assets/home/melody.jpg';

const SMediaServices = () => {
    return (
        <>
            <div>
                {/* Top Section */}
                <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
                    <div className="col-md-6 px-0">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>
                                <FontAwesomeIcon icon={faCode} style={{ color: '#ff4c0a', marginRight: '10px' }} />
                                Custom <span style={{ color: '#ff4c0a' }}>Software</span>
                            </p>
                            <p className={styles.headTop}>Development Services</p>
                            <p className={styles.identityTop}>
                                <FontAwesomeIcon icon={faLightbulb} style={{ marginRight: '10px' }} />
                                Crafting Innovative Solutions
                            </p>
                            <p className={styles.content}>
                                In today's fast-paced digital world, having custom software tailored to your business needs can make all the difference. Our custom software development services focus on delivering high-quality, scalable solutions that help tech companies stay ahead in their respective industries. From enterprise-level applications to SaaS solutions, we ensure your software is reliable, secure, and future-proof.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <img src={img1} alt="Custom Software Development" className={styles.img1} />
                    </div>
                </div>

                {/* Middle Section */}
                <div className="container">
                    <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                        <div className={`col-md-6 ${styles.middleContain}`}>
                            <p className={styles.heading}>
                                <FontAwesomeIcon icon={faCogs} style={{ marginRight: '10px' }} />
                                Elevate Your Tech Infrastructure
                            </p>
                            <p className={styles.text}>
                                By leveraging our software solutions, tech companies can streamline operations, optimize performance, and enhance productivity. Our team of expert developers works closely with you to design and implement solutions that integrate seamlessly with your existing infrastructure while providing the scalability needed to grow and evolve your business.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={img2} alt="Elevate Tech Infrastructure" className={styles.img2} />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="container">
                    <div className={`row ${styles.contain}`}>
                        <div className="col-md-6">
                            <img src={img3} alt="Tailored Software Solutions" className={styles.img2} />
                        </div>
                        <div className={`col-md-6 ${styles.bottomContain}`}>
                            <p className={styles.heading1}>
                                <FontAwesomeIcon icon={faCode} style={{ marginRight: '10px' }} />
                                Tailored Solutions for Your Business
                            </p>
                            <p className={styles.text1}>
                                Our custom development services are designed to meet the unique needs of your tech company. From concept to deployment, we work closely with you to ensure that every aspect of your software aligns with your goals, enhances your digital transformation efforts, and supports your business strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SMediaServices;
