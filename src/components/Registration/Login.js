import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import styles from './Login.module.css'; 
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); 
  const [showSuccessDialog, setShowSuccessDialog] = useState(false); 
  const [showErrorDialog, setShowErrorDialog] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Placeholder authentication (you can integrate your own backend here)
    if (formData.email === "test@example.com" && formData.password === "password123") {
      console.log("User logged in successfully");
      localStorage.setItem('authToken', 'dummy-token'); // Example token storage
      setShowSuccessDialog(true);
    } else {
      setError("Invalid email or password.");
      setShowErrorDialog(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    navigate('/'); // Redirect to home after closing dialog
  };

  const handleCloseErrorDialog = () => {
    setShowErrorDialog(false);
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Log In</h2>

      <p className={styles.signupLink}>
        Don't have an account? <NavLink to="/signup" className={styles.link}>Sign up</NavLink>
      </p>

      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className={styles.loginButton}>Log In</button>
        <NavLink to="/forgot-password" className={styles.forgotPasswordLink}>
          Forgot your password?
        </NavLink>
      </form>

      <div className={styles.orDivider}>OR</div>

      <button className={styles.googleLogin}>
        <FaGoogle className={styles.googleIcon} />
        Log In with Google
      </button>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialogContent}>
            <h3>Login Successful</h3>
            <p>Welcome back! You've logged in successfully.</p>
            <button onClick={handleCloseSuccessDialog} className={styles.closeDialogButton}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Error Dialog */}
      {showErrorDialog && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialogContent}>
            <h3>Login Failed</h3>
            <p>{error}</p>
            <button onClick={handleCloseErrorDialog} className={`${styles.closeDialogButton} ${styles.errorButton}`}>
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
