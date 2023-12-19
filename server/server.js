const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database('../yoga.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

// Create users table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    batch TEXT,
    date_of_joining DATE,
    monthly_fee_paid BOOLEAN
  )
`);

app.use(express.json());

// Endpoint to register a user
app.post('/register', (req, res) => {
  const { name, age, batch } = req.body;
  const dateOfJoining = new Date().toISOString().split('T')[0]; // Get the current date

  // Set monthly_fee_paid to true since the user is registering
  const monthlyFeePaid = true;

  const stmt = db.prepare(`
  INSERT INTO users (name, age, batch, date_of_joining, monthly_fee_paid)
  VALUES (?, ?, ?, ?, ?)
`);

stmt.run(name, age, batch, dateOfJoining, monthlyFeePaid, (err) => {
  if (err) {
    console.error('Error inserting user into the database:', err.message);
    res.status(500).json({ success: false, message: 'Error registering user' });
  } else {
    res.json({ success: true, message: 'User registered successfully' });
  }
});

stmt.finalize();
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  // Close the database connection when the server is terminated
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
      process.exit(0);
    }
  });
});
