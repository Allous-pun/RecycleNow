import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
// eslint-disable-next-line
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

import Modal from 'react-modal';
import axios from 'axios';

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState('');
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const roleEndpoints = {
    administrator: 'http://127.0.0.1:8000/api/admin/register/',
    user: 'http://127.0.0.1:8000/api/user/register/',
    collector: 'http://127.0.0.1:8000/api/collector/register/',
    recycler: 'http://127.0.0.1:8000/api/recycler/register/',
    local_authority: 'http://127.0.0.1:8000/api/local_authority/register/',
  };

  const dashboardPaths = {
    administrator: '/admin/dashboard',
    user: '/user/dashboard',
    collector: '/collector/dashboard',
    recycler: '/recycler/dashboard',
    local_authority: '/local-authority/dashboard',
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return (
      selectedRole &&
      formData.email &&
      formData.password === formData.confirmPassword &&
      formData.password.length >= 6
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setError("Please fill out all fields correctly.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(roleEndpoints[selectedRole], formData);
      if (response.status === 201) {
        setIsSuccessModalOpen(true);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setIsErrorModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    setIsErrorModalOpen(false);
  };

  const handleSuccessRedirect = () => {
    // Navigate to the appropriate dashboard based on the role
    navigate(dashboardPaths[selectedRole]);
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupTitle}>Sign Up</h2>

      <p className={styles.loginLink}>
        Already have an account? <NavLink to="/login" className={styles.link}>Log in</NavLink>
      </p>

      {error && <p className={styles.errorText}>{error}</p>}

      <div className={styles.roleSelection}>
        <label>Select Your Role:</label>
        <select value={selectedRole} onChange={handleRoleChange} className={styles.dropdown}>
          <option value="">-- Select Role --</option>
          <option value="administrator">Administrator</option>
          <option value="user">User</option>
          <option value="collector">Collector</option>
          <option value="recycler">Recycler</option>
          <option value="local_authority">Local Authority</option>
        </select>
      </div>

      {selectedRole && (
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
            <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon}>
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
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={styles.eyeIcon}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button type="submit" className={styles.signupButton} disabled={!isFormValid() || loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      )}

      <Modal isOpen={isSuccessModalOpen} onRequestClose={closeModal} contentLabel="Registration Successful" className={styles.modal} overlayClassName={styles.overlay}>
        <h2>Registration Successful</h2>
        <p>Your account has been successfully created!</p>
        <button onClick={handleSuccessRedirect} className={styles.modalButton}>Go to Dashboard</button>
      </Modal>

      <Modal isOpen={isErrorModalOpen} onRequestClose={closeModal} contentLabel="Registration Error" className={styles.modal} overlayClassName={styles.overlay}>
        <h2>Registration Error</h2>
        <p>{errorMessage}</p>
        <button onClick={closeModal} className={styles.modalButton}>Close</button>
      </Modal>
    </div>
  );
};

export default SignUp;
