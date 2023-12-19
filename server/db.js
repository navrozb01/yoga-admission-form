const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('yoga.db');

// Create User table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age INTEGER,
      batch TEXT,
      UNIQUE(name)
    )
  `);
});

module.exports = db;
