import React from 'react';
import styles from './Bottom.module.css';

const Bottom = () => {
    return (
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                {/* AI-powered business solutions section */}
                <div className={`row ${styles.aiSection} mb-5`}>
                    <div className="col-12 text-center">
                        <div className={styles.aiContainer}>
                            <h2 className={styles.aiHeading}>AI-Powered Business Solutions</h2>
                            <p className={styles.aiContent}>
                                At KilonzoCorp, we harness the power of Artificial Intelligence to revolutionize business operations. From predictive analytics to intelligent automation, our AI-driven solutions empower organizations to make data-driven decisions and stay ahead in the competitive market.
                            </p>
                        </div>
                    </div>
                </div>

                {/* New Sections */}
                <div className="row mb-5">
                    {/* 3D Visualization and Modeling */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>3D Visualization and Modeling</h3>
                            <p className={styles.itemContent}>
                                Leverage cutting-edge 3D modeling techniques to bring ideas to life, enabling accurate visual representation and immersive experiences.
                            </p>
                        </div>
                    </div>

                    {/* Image and Text Processing Technologies */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Image and Text Processing Technologies</h3>
                            <p className={styles.itemContent}>
                                Harness advanced image and text processing to enhance business workflows, automate data extraction, and improve efficiency.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    {/* Supply Chain and Logistics Optimization */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Supply Chain and Logistics Optimization</h3>
                            <p className={styles.itemContent}>
                                Optimize supply chain operations, streamline logistics, and reduce operational costs through AI and machine learning solutions.
                            </p>
                        </div>
                    </div>

                    {/* Customized Technology Integration */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Customized Technology Integration</h3>
                            <p className={styles.itemContent}>
                                Tailor technology solutions to fit unique business needs, ensuring seamless integration and improved operational performance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    {/* Client-Centric Innovations */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Client-Centric Innovations</h3>
                            <p className={styles.itemContent}>
                                Focus on creating innovative, client-centered solutions that provide measurable value and enhance customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Headings and Icons Section */}
                {/* 
                <div className="row mb-5">
                    {fakeData.map((x) => (
                        <div key={x.id} className="col-md-6 d-flex justify-content-center">
                            <div className={styles.itemContainer}>
                                <div className={styles.iconContainer}>
                                    <i className={`fas ${x.icon} ${styles.icon}`}></i>
                                </div>
                                <p className={styles.head}>{x.heading}</p>
                            </div>
                        </div>
                    ))}
                </div>
                */}

                {/* Content Section */}
                {/* 
                <div className="row mb-5">
                    {fakeData.map((x) => (
                        <div key={x.id} className="col-md-6 d-flex justify-content-center">
                            <div className={styles.contentContainer}>
                                <p className={styles.content}>{x.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                */}
            </div>
        </>
    );
};

export default Bottom;
