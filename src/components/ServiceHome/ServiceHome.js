import React from "react";
import styles from "./ServiceHome.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faImage, faMicrophone, faCube, faFont } from '@fortawesome/free-solid-svg-icons'; // Add faFont for Text icon

const ServiceHome = (props) => {
    return (
        <div 
            className={`${styles.box} user-select-none`} 
            onClick={() => window.location.href = `/individualService?id=${props.id}`} // Make the box clickable
        >
            {/* Render specific icons for each service */}
            <div className={styles.iconContainer}>
                {props.heading === "Image and Video Annotation" && (
                    <FontAwesomeIcon icon={faImage} size="3x" className={styles.icon} />
                )}
                {props.heading === "Text" && (
                    <FontAwesomeIcon icon={faFont} size="3x" className={styles.icon} /> // Use faFont for Text
                )}
                {props.heading === "Audio" && (
                    <FontAwesomeIcon icon={faMicrophone} size="3x" className={styles.icon} />
                )}
                {props.heading === "3D" && (
                    <FontAwesomeIcon icon={faCube} size="3x" className={styles.icon} />
                )}
            </div>

            <p className={styles.heading}>{props.heading}</p>
            <p className={styles.text}>{props.content}</p>
        </div>
    );
};

export default ServiceHome;
