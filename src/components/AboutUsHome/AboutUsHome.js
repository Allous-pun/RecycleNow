import React from "react";
import styles from './AboutUsHome.module.css';

const AboutUsHome = () => {
  return (
    <div className={`container ${styles.contain}`}>
      <div className="row">
        {/* Autonomous Vehicles Box */}
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Autonomous Vehicles</h3>
            <p>Precise labeling of objects, pedestrians, and road signs for improved AI navigation.</p>
          </div>
        </div>

        {/* Healthcare Box */}
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Healthcare</h3>
            <p>Annotating medical images for diagnostic tools and healthcare innovations.</p>
          </div>
        </div>

        {/* Agriculture Box */}
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Agriculture</h3>
            <p>Helping AI models detect crop health, growth patterns, and pest management through image data.</p>
          </div>
        </div>

        {/* E-commerce & Retail Box */}
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>E-commerce & Retail</h3>
            <p>Annotating products for enhanced search capabilities and personalized shopping experiences.</p>
          </div>
        </div>
      </div>

      {/* Partner with Us Section */}
      <div className="row">
        <div className="col-md-12">
          <div className={styles.partnerBox}>
            <h3>Partner with Us</h3>
            <p>Partner with us to power your AI innovations. Whether you're developing the next breakthrough in self-driving technology or creating more intuitive healthcare systems, we provide the data foundation that brings your vision to life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
