const { sql, getPool } = require("../config/dataConfig");

class SystemCollapsesController {
  constructor() {
    this.poolPromise = getPool();
  }

  getPool = async () => {
    return this.poolPromise;
  };

  getSystemCollapses = async (req, res) => {
    try {
      const pool = await this.getPool(); // Ensure the pool is initialized

      // Create a new request object using the pool
      const request = pool.request();

      // Execute the stored procedure
      const result = await request.execute("Sp_systemcollapses");

      // Send the result to the client
      res.json(result.recordset);
    } catch (error) {
      console.error("Error fetching system collapses:", error);
      res
        .status(500)
        .json({
          error: "An error occurred while fetching system collapses",
          details: error.message,
        });
    }
  };

  getOtherMetric = async (req, res) => {
    try {
      const pool = await this.getPool(); // Reuse the same pool

      const request = pool.request();
      // Execute a different stored procedure or SQL query
      const result = await request.execute("Sp_otherMetric");

      res.json(result.recordset);
    } catch (error) {
      console.error("Error fetching other metric:", error);
      res
        .status(500)
        .json({
          error: "An error occurred while fetching other metric",
          details: error.message,
        });
    }
  };

  closePool = async () => {
    const pool = await this.getPool();
    if (pool) {
      await pool.close();
      this.poolPromise = null; // Reset the promise
    }
  };
}

module.exports = new SystemCollapsesController();
