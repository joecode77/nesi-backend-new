// db.js
const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10) || 1433,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === "true",
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000, // 30 seconds before idle connection closes
  },
};

let pool; // Connection pool instance
let reconnectAttempts = 0;
const maxReconnectAttempts = 5; // Max retries before failing
const reconnectDelay = 5000; // Delay between retries in milliseconds

// Function to establish a connection pool with reconnection logic
const connectWithRetry = async () => {
  try {
    pool = await sql.connect(config);
    console.log("Connected to SQL Server");
    reconnectAttempts = 0; // Reset attempt counter on successful connection
    return pool;
  } catch (error) {
    console.error("Database connection failed:", error.message);

    if (reconnectAttempts < maxReconnectAttempts) {
      reconnectAttempts++;
      console.log(
        `Retrying connection (${reconnectAttempts}/${maxReconnectAttempts}) in ${
          reconnectDelay / 1000
        } seconds...`
      );

      // Wait for the delay and retry connection
      setTimeout(connectWithRetry, reconnectDelay);
    } else {
      console.error(
        "Max reconnection attempts reached. Please check your database connection."
      );
      throw error; // Throw error after max attempts reached
    }
  }
};

// Function to return the pool, handling reconnection if necessary
const getPool = async () => {
  if (pool) {
    return pool;
  }
  return connectWithRetry(); // Attempt to connect with retry logic
};

// Global error handler for SQL Server connection errors
sql.on("error", (err) => {
  console.error("SQL error", err);
  // In case of a SQL error, you can re-attempt connection here if needed
  connectWithRetry();
});

module.exports = {
  sql,
  getPool,
};
