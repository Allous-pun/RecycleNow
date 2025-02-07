import React from 'react';
import styles from './Bottom.module.css';

const Bottom = () => {
    return (
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                {/* Efficient Waste Management */}
                <div className={`row ${styles.aiSection} mb-5`}>
                    <div className="col-12 text-center">
                        <div className={styles.aiContainer}>
                            <h2 className={styles.aiHeading}>Sustainable Waste Solutions</h2>
                            <p className={styles.aiContent}>

                                RecycleNow revolutionizes waste management through education, efficient services, eco-friendly products, and business support for inventory and sales management. Join us in creating a cleaner, greener future.
                            </p>
                        </div>
                    </div>
                </div>

                {/* New Sections */}
                <div className="row mb-5">
                    {/* Public Education */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Public & Mass Education</h3>
                            <p className={styles.itemContent}>
                                Empower communities with knowledge on proper waste management, recycling practices, and environmental 
                                conservation through workshops, campaigns, and digital resources.
                            </p>

                        </div>
                    </div>

                    {/* Waste Segregation */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Waste Segregation</h3>
                            <p className={styles.itemContent}>
                                Efficiently sort waste into organic, recyclable, and hazardous categories to promote responsible disposal, 
                                enhance recycling efforts, and minimize environmental impact.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    {/* Waste Recycling */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Waste Recycling</h3>
                            <p className={styles.itemContent}>
                                Convert recyclable materials such as plastics, paper, and metals into reusable products, 
                                reducing waste pollution and promoting a circular economy.
                            </p>
                        </div>
                    </div>

                    {/* Waste Collection */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Waste Collection</h3>
                            <p className={styles.itemContent}>
                                Provide reliable and efficient waste collection services to ensure proper disposal, maintain clean environments, 
                                and support sustainable waste management practices.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    {/* Waste disposal */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Waste Disposal</h3>
                            <p className={styles.itemContent}>
                                Ensure safe and environmentally responsible waste disposal through proper treatment methods, landfill management, 
                                and adherence to sustainable waste management practices.
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