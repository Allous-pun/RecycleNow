import React from "react";
import styles from './AboutUsHome.module.css';
import { useNavigate } from "react-router-dom";

const AboutUsHome = () => {
  const navigate = useNavigate();

  return (
    <div className={`container ${styles.contain}`}>
      <div className="row">
        {/* Waste Collection & Disposal Box */}
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Waste Collection & Disposal</h3>
            <p>RecycleNow offers efficient waste collection and disposal through safe handling, waste segregation, recycling, composting, and energy generation, ensuring environmental protection and a cleaner community.</p>
          </div>
        </div>

        {/* Waste Segregation Box */}
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Waste Segregation</h3>
            <p>RecycleNow specializes in waste segregation by sorting waste into organic, recyclable, and hazardous categories, promoting efficient recycling, resource conservation, and safe disposal for a sustainable environment.</p>
          </div>
        </div>

        {/* Waste Recycling Box */}
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Waste Recycling</h3>
            <p>We provide sustainable waste recycling services, turning waste materials into reusable resources through innovative methods. Our goal is to reduce waste and promote environmental conservation by transforming discarded materials into valuable products.</p>
          </div>
        </div>

        {/* Mass Education Box */}
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Mass Education</h3>
            <p>We promote mass education on waste management and environmental sustainability through awareness programs and educational campaigns.</p>
          </div>
        </div>
      </div>

      {/* Partner with Us Section */}
      <div className="row">
        <div className="col-md-12">
          <div className={styles.partnerBox}>
            <h3>Partner with Us</h3>
            <p>Partner with RecycleNow to revolutionize waste management. Whether you're working on sustainable recycling solutions or 
              innovative waste disposal methods, we provide the expertise and infrastructure to support a cleaner, greener future.</p>
          </div>
        </div>
      </div>

      {/* Meet Our Team Button */}
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <button className={styles.teamButton} onClick={() => navigate('/team')}>
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
