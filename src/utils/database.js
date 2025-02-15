// src/utils/database.js

import SQLite from 'react-native-sqlite-storage';

// Open the SQLite database (or create it if it doesn't exist)
const db = SQLite.openDatabase({name: 'attendance.db', location: 'default'});

// Function to create the table for attendance
const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS attendance (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT, timestamp INTEGER);',
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table: ', error);
      },
    );
  });
};

// Function to insert attendance data
const insertAttendance = userId => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO attendance (userId, timestamp) VALUES (?, ?)',
      [userId, Date.now()],
      (tx, results) => {
        console.log('Attendance inserted:', results);
      },
      error => {
        console.log('Error inserting attendance:', error);
      },
    );
  });
};

// Function to get all attendance records
const getAttendanceRecords = callback => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM attendance',
      [],
      (tx, results) => {
        let records = [];
        for (let i = 0; i < results.rows.length; i++) {
          records.push(results.rows.item(i));
        }
        callback(records);
      },
      error => {
        console.log('Error fetching attendance records:', error);
      },
    );
  });
};

// Initialize database and create the table on app start
const initDatabase = () => {
  createTable();
};

export {db, getAttendanceRecords, initDatabase, insertAttendance};
