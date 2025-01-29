import React, { useState } from "react";
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
    const [formContent, setFormContent] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormContent(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrorMessage(''); // Clear error message when user starts typing
    }

    const handleSendEmail = () => {
        const { name, email, subject, message } = formContent;

        // Validation: Ensure all fields are filled
        if (!name || !email || !subject || !message) {
            setErrorMessage('Please fill in all the fields.');
            return;
        }

        // If validation passes, open the email client
        const mailtoLink = `mailto:info@kilonzocorp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }

    return (
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='fade-up' className={`${styles.heading} mx-auto`}>KilonzoCorp We'd Love to Hear From You</p>

                <div className="row">
                    <div className="col-md-4" data-aos='fade-right'>
                        <p className={styles.head}>Address</p>
                        <p className={styles.content}>Kilonzocorp building, near Kathaayoni Junior School in Kathaayoni Estate, off Machakos-Kitui Road, in Machakos Town.</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-up' data-aos-offset='100'>
                        <p className={styles.head}>Contact</p>
                        <p className={styles.content}>Mobile : +254 792 371 977</p> 
                        <p className={styles.content}>Email: info@kilonzocorp.com</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset='70'>
                        <p className={styles.head}>Hours</p>
                        <p className={styles.content}>Monday - Friday: 08:00 - 18:00</p>
                        <p className={styles.content}>Saturday: 09:00 - 15:00</p>
                    </div>
                </div>

                <p className={styles.email} data-aos='fade-up'>You can email us</p>

                <div className="row">
                    <div className="col-md-6" data-aos='fade-right' style={{ textAlign: 'left' }}>
                        <label className={styles.label}>Name</label><br />
                        <input name="name" value={formContent.name} onChange={handleChange} className={styles.input} type="text" />

                        <label className={styles.label}>Email</label><br />
                        <input name="email" value={formContent.email} onChange={handleChange} className={styles.input} type="email" />

                        <label className={styles.label}>Subject</label><br />
                        <input name="subject" value={formContent.subject} onChange={handleChange} className={styles.input} type="text" />
                    </div>

                    <div className="col-md-6" data-aos='fade-left' style={{ textAlign: 'left' }}>
                        <label className={styles.label}>Message</label><br />
                        <textarea name="message" value={formContent.message} onChange={handleChange} className={`${styles.input} ${styles.msg}`} type="text" />
                        
                        {/* Error Message Display */}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        
                        <div style={{ textAlign: 'right' }}>
                            <button onClick={handleSendEmail} className={`btn custom_btn ${styles.btn}`}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUsForm;
