import React, { useEffect } from "react";
import styles from './IndividualService.module.css';
import { useLocation, useNavigate } from "react-router-dom";
import data from './data';

const IndividualService = () => {
    const { search } = useLocation();
    const navigate = useNavigate();
    const id = parseInt(new URLSearchParams(search).get('id'), 10);
    const service = data.find(x => x.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Redirect or show an error if the service is not found
    if (!service) {
        navigate('/not-found');
        return <div className="container">Service not found.</div>;
    }

    return (
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                {/* Main Service Header */}
                <p data-aos='slide-right' className={styles.heading}>{service.heading}</p>
                <p data-aos='slide-left' className={styles.heading_content}>{service.content}</p>
            
                {/* Service Content Sections */}
                <div className="row">
                    {/* Each service section container */}
                    {service.contents.map((x, idx) => (
                        <div key={idx} className="col-md-6" style={{ marginTop: '50px' }}>
                            <div data-aos={idx % 2 === 0 ? 'slide-right' : 'slide-left'} data-aos-offset="150" className={styles.serviceContainer}>
                                {/* Heading for sub-service */}
                                <p className={`${styles.heading} ${styles.subHead}`}>{x.heading}</p>
                                {/* Description for sub-service */}
                                <p className={`${styles.heading_content} ${styles.justify}`}>{x.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button to Get More Services */}
                <div className="text-center">
                    <button 
                        className={styles.serviceButton}
                        onClick={() => navigate('/pricing')} 
                    >
                        Purchase This Service
                    </button>
                </div>
            </div>
        </>
    );
}

export default IndividualService;
