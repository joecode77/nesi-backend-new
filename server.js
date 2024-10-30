const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dataRoutes = require("./routers/routers");
const { getPool, sql } = require("./config/dataConfig");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Connect to the database and configure API routes
getPool()
  .then(() => {
    app.use("/api/", dataRoutes);
    app.use("/api/subscriptions", subscriptionRoutes);

    // Error handling middleware should be last, after all other middleware and routes
    app.use((err, req, res, next) => {
      console.error(err);
      res.status(err.status || 500).json({
        error: {
          message: err.message || "Internal Server Error",
          details: err.details || "No additional details provided.",
        },
      });
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database. Server not started.");
    console.error(error);
    process.exit(1);
  });

// Graceful shutdown to close the SQL pool
process.on("SIGINT", async () => {
  try {
    await sql.close();
    console.log("SQL pool closed gracefully.");
    process.exit(0);
  } catch (error) {
    console.error("Error during SQL pool closure:", error.message);
    process.exit(1);
  }
});

process.on("SIGTERM", async () => {
  try {
    await sql.close();
    console.log("SQL pool closed gracefully.");
    process.exit(0);
  } catch (error) {
    console.error("Error during SQL pool closure:", error.message);
    process.exit(1);
  }
});
