import React from "react";
import styles from './Services.module.css';
import ServiceHome from "../ServiceHome/ServiceHome";
import data from './data';
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Services = () => {
    const navigate = useNavigate(); // Hook to navigate to another page

    // Handle the click on service container
    const handleServiceClick = (to) => {
        navigate(to); // Redirects to the 'to' path of the clicked service
    };

    return (
        <div className={`container ${styles.contain} overflow-hidden pb-2`}>
            {/* Updated Company Heading */}
            <p data-aos='slide-right' className={styles.heading}>KilonzoCorp Top Services</p>

            {/* Updated Subheading */}
            <div>
                <p data-aos='slide-left' className={`mx-auto ${styles.subHeading}`}>
                    Check Our Amazing Services
                </p>
            </div>

            {/* Rendering Service Cards */}
            <div className={`row ${styles.cont}`}>
                {data && data.map(x => (
                    <div key={x.id} className="col-lg-4 col-md-6">
                        <div 
                            className={styles.serviceContainer} 
                            onClick={() => handleServiceClick(x.to)} // Make the container clickable
                        >
                            <ServiceHome 
                                id={x.id} 
                                heading={x.heading} 
                                content={x.content} 
                                to={x.to} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
