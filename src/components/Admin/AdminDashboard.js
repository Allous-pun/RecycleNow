import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';  // Importing the charts
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import './AdminDashboard.css';  // Updated style for Admin Dashboard

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [userLogs, setUserLogs] = useState([]);

  const [newUser, setNewUser] = useState({ name: '', email: '', isVerified: false });
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '' });

  // Simulate data fetching for the frontend
  useEffect(() => {
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com', isVerified: false },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', isVerified: false },
      { id: 3, name: 'Sam Wilson', email: 'sam@example.com', isVerified: true },
    ]);
    setPayments([
      { id: 1, userName: 'John Doe', amount: '$100', date: '2024-11-20' },
      { id: 2, userName: 'Jane Smith', amount: '$150', date: '2024-11-21' },
    ]);
    setActiveUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 3, name: 'Sam Wilson', email: 'sam@example.com' },
    ]);
    setAdmins([
      { id: 1, name: 'Admin One', email: 'admin1@example.com' },
      { id: 2, name: 'Admin Two', email: 'admin2@example.com' },
    ]);
    setUserLogs([
      { id: 1, activity: 'Logged in', user: 'John Doe', timestamp: new Date().toLocaleTimeString() },
      { id: 2, activity: 'Made payment', user: 'Jane Smith', timestamp: new Date().toLocaleTimeString() },
    ]);
  }, []);

  const handleAddUser = () => {
    const newId = users.length + 1;
    setUsers([...users, { ...newUser, id: newId }]);
    setNewUser({ name: '', email: '', isVerified: false });
  };

  const handleAddAdmin = () => {
    const newId = admins.length + 1;
    setAdmins([...admins, { ...newAdmin, id: newId }]);
    setNewAdmin({ name: '', email: '' });
  };

  const handleVerifyUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isVerified: true } : user
      )
    );
    setUserLogs((prevLogs) => [
      ...prevLogs,
      { id: prevLogs.length + 1, activity: `Verified user ${userId}`, user: userId, timestamp: new Date().toLocaleTimeString() }
    ]);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setUserLogs((prevLogs) => [
      ...prevLogs,
      { id: prevLogs.length + 1, activity: `Deleted user ${userId}`, user: userId, timestamp: new Date().toLocaleTimeString() }
    ]);
  };

  // Chart data for User Logins (Bar Chart)
  const loginData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'User Logins',
        data: [12, 19, 3, 5, 2], // Example data for logins
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart data for Transactions (Line Chart)
  const transactionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Transactions',
        data: [50, 150, 200, 250, 300], // Example data for transactions
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="dashboard-container">
        {/* First Row - User Verification and Active Users */}
        <div className="dashboard-row">
          {/* Add Users */}
          <div className="dashboard-section">
            <h3 className="section-title">Add User</h3>
            <div className="section-content">
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="input-field"
              />
              <button onClick={handleAddUser} className="btn btn-add">Add User</button>
            </div>
          </div>

          {/* Active Users */}
          <div className="dashboard-section">
            <h3 className="section-title">Active Users</h3>
            <div className="section-content">
              <ul>
                {activeUsers.map((user) => (
                  <li key={user.id} className="user-item">
                    {user.name} - {user.email}
                    <button onClick={() => handleVerifyUser(user.id)} className="btn btn-verify">Verify</button>
                    <button onClick={() => handleDeleteUser(user.id)} className="btn btn-delete">Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Second Row - Payments and Admin Management */}
        <div className="dashboard-row">
          {/* Payments */}
          <div className="dashboard-section">
            <h3 className="section-title">Payments</h3>
            <div className="section-content">
              <ul>
                {payments.map((payment) => (
                  <li key={payment.id} className="payment-item">
                    {payment.userName} - {payment.amount} - {payment.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Admin Management */}
          <div className="dashboard-section">
            <h3 className="section-title">Add Admin</h3>
            <div className="section-content">
              <input
                type="text"
                placeholder="Name"
                value={newAdmin.name}
                onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email"
                value={newAdmin.email}
                onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                className="input-field"
              />
              <button onClick={handleAddAdmin} className="btn btn-add-admin">Add Admin</button>
            </div>
          </div>
        </div>

        {/* Third Row - Logs and User/Transaction Graphs */}
        <div className="dashboard-row">
          {/* User Logs */}
          <div className="dashboard-section">
            <h3 className="section-title">User Logs</h3>
            <div className="section-content">
              <ul>
                {userLogs.map((log) => (
                  <li key={log.id} className="log-item">
                    {log.activity} - {log.timestamp}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Graphs */}
          <div className="dashboard-section">
            <h3 className="section-title">User Logins (Bar Chart)</h3>
            <Bar data={loginData} />

            <h3 className="section-title">Transactions (Line Chart)</h3>
            <Line data={transactionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
