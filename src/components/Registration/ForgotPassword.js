import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ForgotPassword.module.css';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';  // Firebase function
import Modal from 'react-modal';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRequestingResetLink, setIsRequestingResetLink] = useState(true);  // Track the type of request (link vs reset)

  const auth = getAuth();  // Firebase Authentication instance

  const handleSubmitRequestLink = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);  // Send reset email
      setIsSuccessModalOpen(true);  // Show success message
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorModalOpen(true);  // Show error message
    }
  };

  const handleSubmitResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setIsErrorModalOpen(true);
      return;
    }

    try {
      // You would need to handle password reset here, like calling a backend API or directly using Firebase
      // If using Firebase: call a function like updatePassword(user, newPassword)
      setIsSuccessModalOpen(true);
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred');
      setIsErrorModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    setIsErrorModalOpen(false);
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <h2 className={styles.title}>{isRequestingResetLink ? 'Request Password Reset Link' : 'Reset Password'}</h2>
      <p className={styles.description}>
        {isRequestingResetLink
          ? 'Enter your email to receive a password reset link.'
          : 'Enter your new password below to reset your password.'}
      </p>

      <form
        onSubmit={isRequestingResetLink ? handleSubmitRequestLink : handleSubmitResetPassword}
        className={styles.form}
      >
        {isRequestingResetLink ? (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
        ) : (
          <>
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className={styles.inputField}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.inputField}
            />
          </>
        )}

        <button type="submit" className={styles.submitButton}>
          {isRequestingResetLink ? 'Send Reset Link' : 'Reset Password'}
        </button>
      </form>

      <p className={styles.backLink}>
        Remembered your password? <NavLink to="/login" className={styles.link}>Log in</NavLink>
      </p>

      <p
        className={styles.toggleFormLink}
        onClick={() => setIsRequestingResetLink(!isRequestingResetLink)}
      >
        {isRequestingResetLink
          ? 'Already have a reset link? Reset your password instead.'
          : 'Want to request a reset link?'}
      </p>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeModal}
        contentLabel="Success"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent}>
          <FaCheckCircle className={styles.successIcon} />
          <h2>{isRequestingResetLink ? 'Password Reset Link Sent' : 'Password Successfully Reset'}</h2>
          <p>{isRequestingResetLink ? 'Please check your email to reset your password.' : 'You can now log in with your new password.'}</p>
          <button onClick={closeModal} className={styles.modalButton}>Close</button>
        </div>
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={closeModal}
        contentLabel="Error"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent}>
          <FaExclamationCircle className={styles.errorIcon} />
          <h2>Error</h2>
          <p>{errorMessage}</p>
          <button onClick={closeModal} className={styles.modalButton}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
