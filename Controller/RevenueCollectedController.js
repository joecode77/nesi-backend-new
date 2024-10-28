const { sql, getPool } = require('../config/dataConfig'); 

class RevenueCollectedController {
  constructor() {
    this.poolPromise = getPool(); 
  }

  getPool = async () => {
    return this.poolPromise; 
  }

  getYearlyRevenueCollected = async (req, res) => {
    try {
      const pool = await this.getPool(); // Ensure the pool is initialized

      // Create a new request object using the pool
      const request = pool.request();

      // Execute the stored procedure
      const result = await request.execute('SP_YearlyRevenueCollected');

      // Send the result to the client
      res.json(result.recordset);
    } catch (error) {
      console.error('Error fetching Yearly Revenue Collected:', error);
      res.status(500).json({ error: 'An error occurred while fetching Yearly Revenue Collected', details: error.message });
    }
  }

  getDiscoRevenueCollected = async (req, res) => {
    try {
      const pool = await this.getPool(); // Reuse the same pool

      const request = pool.request();
      // Execute a different stored procedure or SQL query
      const result = await request.execute('SP_DiscoRevenueCollected');

      res.json(result.recordset);
    } catch (error) {
      console.error('Error fetching Disco Revenue Collected:', error);
      res.status(500).json({ error: 'An error occurred while fetching Disco Revenue Collected Table', details: error.message });
    }
  }

  closePool = async () => {
    const pool = await this.getPool();
    if (pool) {
      await pool.close();
      this.poolPromise = null; // Reset the promise
    }
  }
}

module.exports = new RevenueCollectedController();
