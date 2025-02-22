const express = require('express');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Test DB Connection
db.query('SELECT 1')
    .then(() => console.log('✅ Database Connected'))
    .catch(err => console.error('❌ Database Connection Failed:', err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
