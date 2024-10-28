const { sql, getPool } = require('../config/dataConfig'); 

class RevenueBilledController {
  constructor() {
    this.poolPromise = getPool(); 
  }

  getPool = async () => {
    return this.poolPromise; 
  }

  getYearlyRevenueBilled = async (req, res) => {
    try {
      const pool = await this.getPool(); // Ensure the pool is initialized

      // Create a new request object using the pool
      const request = pool.request();

      // Execute the stored procedure
      const result = await request.execute('SP_YearlyRevenueBilled');

      // Send the result to the client
      res.json(result.recordset);
    } catch (error) {
      console.error('Error fetching Yearly Revenue Billed:', error);
      res.status(500).json({ error: 'An error occurred while fetching Yearly Revenue Billed', details: error.message });
    }
  }

  getDiscoRevenueBilled = async (req, res) => {
    try {
      const pool = await this.getPool(); // Reuse the same pool

      const request = pool.request();
      // Execute a different stored procedure or SQL query
      const result = await request.execute('SP_DiscoRevenueBilled');

      res.json(result.recordset);
    } catch (error) {
      console.error('Error fetching Disco Revenue Billed:', error);
      res.status(500).json({ error: 'An error occurred while fetching Disco Revenue Billed Table', details: error.message });
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

module.exports = new RevenueBilledController();
