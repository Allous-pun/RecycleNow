import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'; 
import Modal from 'react-modal'; 
import { signUpWithEmailAndPassword, sendVerificationEmail } from '../../firebase';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); 
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [loading, setLoading] = useState(false);  // State for loading
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Check if the form is valid before enabling submit button
  const isFormValid = () => {
    return (
      formData.email &&
      emailRegex.test(formData.email) &&
      formData.password === formData.confirmPassword &&
      formData.password.length >= 6  // You can add more password validation
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("Please fill out all fields correctly.");
      return;
    }

    setLoading(true); // Start loading indicator

    try {
      // Create user using Firebase Authentication
      const user = await signUpWithEmailAndPassword(formData.email, formData.password);

      // Send email verification after user creation
      await sendVerificationEmail(user);

      setIsSuccessModalOpen(true); // Show success modal
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorModalOpen(true); // Show error modal
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    setIsErrorModalOpen(false);
  };

  const handleSuccessContinue = () => {
    setIsSuccessModalOpen(false);
    navigate('/login'); // Navigate to login page after success
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupTitle}>Sign Up</h2>

      <p className={styles.loginLink}>
        Already have an account? <NavLink to="/login" className={styles.link}>Log in</NavLink>
      </p>

      {error && <p className={styles.errorText}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.eyeIcon}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className={styles.passwordWrapper}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={styles.eyeIcon}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className={styles.signupButton}
          disabled={!isFormValid() || loading}  // Disable button if form is invalid or loading
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <div className={styles.orDivider}>OR</div>

      <button className={styles.googleSignup}>
        <FaGoogle className={styles.googleIcon} />
        Sign Up with Google
      </button>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Successful"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Registration Successful</h2>
        <p>Your account has been successfully created!</p>
        <button onClick={handleSuccessContinue} className={styles.modalButton}>Continue to Login</button>
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Error"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Registration Error</h2>
        <p>{errorMessage}</p>
        <button onClick={closeModal} className={styles.modalButton}>Close</button>
      </Modal>
    </div>
  );
};

export default SignUp;
