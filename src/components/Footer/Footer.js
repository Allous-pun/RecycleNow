import React, { useState } from "react";
import styles from './Footer.module.css';
import { FiChevronDown } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';

const servicesData = [
    { 
        name: 'Refund Policy', 
        pdfUrl: 'https://drive.google.com/file/d/1toxONjcUFOyNTN-SDSR-P677CXBmiKIk/view?usp=sharing' 
    },
    { 
        name: 'Terms and Condition', 
        pdfUrl: 'https://drive.google.com/file/d/1v70c5INqmEDTxCVw_Y0Jm1hbsCQAbkDY/view?usp=sharing' 
    },
];

const Footer = () => {
    const [openService, setOpenService] = useState(null);

    const toggleService = (index) => {
        if (openService === index) {
            setOpenService(null);
        } else {
            setOpenService(index);
        }
    };

    return (
        <>
            {/* Newsletter Section */}
            <div className={styles.newsletterContainer}>
                <div className={styles.newsletterContent}>
                    <p className={styles.newsletterText}>
                        Subscribe to our newsletter to get <br />
                        our updates and recommendations.
                    </p>
                    <div className={styles.newsletterInputContainer}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.newsletterInput}
                        />
                        <button
                            className={styles.subscribeButton}
                            onClick={() => (window.location.href = "mailto:info@kilonzocorp.com")}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div style={{ backgroundColor: '#818589', paddingTop: '89px', paddingBottom: '90px' }}>
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>Recyclenow</p>
                            <p className={styles.text}> Recyclenow Ltd is located in the Recyclenow building, near , off Mombasa Road, in Nairobi city. </p>
                        </div>

                        {/* Column 2 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Useful Links</p>
                            {servicesData.map((service, index) => (
                                <div key={index}>
                                    <div className={styles.text} onClick={() => toggleService(index)}>
                                        {service.name}
                                        <FiChevronDown style={{ marginLeft: '8px', cursor: 'pointer' }} />
                                    </div>
                                    {openService === index && (
                                        <div
                                            className={styles.text}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {/* Link to the PDF */}
                                            <a href={service.pdfUrl} target="_blank" rel="noopener noreferrer">
                                                View {service.name}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Our Services</p>
                            <p className={styles.text}>Waste collection & Disposal</p>
                            <p className={styles.text}>Segregation and recycling </p>
                            <p className={styles.text}>Echo Friendly product sales</p>
                            <p className={styles.text}>Public Educational</p>
                        </div>

                        {/* Column 4 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Follow Our Socials</p>
                            <p className={styles.text}>
                                <FaFacebook className={styles.icon} /> Facebook: @Recyclenow
                            </p>
                            <p className={styles.text}>
                                <FaTiktok className={styles.icon} /> TikTok: @Recyclenow
                            </p>
                            <p className={styles.text}>
                                <FaInstagram className={styles.icon} /> Instagram: @Recyclenow
                            </p>
                            <p className={styles.text}>
                                <FaTwitter className={styles.icon} /> Twitter: @Recyclenow
                            </p>
                            {/* New Contact Information Section */}
                            <p className={styles.head}>Contact Us</p>
                            <p className={styles.text}>
                                PO Box 2288-90100 Nairobi
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Embedded Map Section */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.394398688508!2d37.275028174966195!3d-1.5307949984548723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMzEnNTAuOSJTIDM3wrAxNiczOS40IkU!5e0!3m2!1sen!2ske!4v1735552202036!5m2!1sen!2ske" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    title="Location Map of KilonzoCorp"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Copyright Section */}
            <div style={{ backgroundColor: '#017E84', borderTop: 'solid 1px #707070' }}>
                <p className={styles.bottom}>Copyright © 2025 Recyclenow. All rights reserved</p>
            </div>
        </>
    );
};

export default Footer;
