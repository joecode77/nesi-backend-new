const { sql, getPool } = require('../config/dataConfig'); 

class EnergyRecievedController {
  constructor() {
    this.poolPromise = getPool(); 
  }

  getPool = async () => {
    return this.poolPromise; 
  }

  getYearlyEnergyRecieved = async (req, res) => {
    try {
      const pool = await this.getPool(); // Ensure the pool is initialized

      // Create a new request object using the pool
      const request = pool.request();

      // Execute the stored procedure
      const result = await request.execute('SP_YearlyEnergyReceived');

      // Send the result to the client
      res.json(result.recordset);
    } catch (error) {
      console.error('Error fetching Yearly Energy Recieved:', error);
      res.status(500).json({ error: 'An error occurred while fetching Yearly Energy Recieved', details: error.message });
    }
  }

  getDiscoEnergyRecieved = async (req, res) => {
    try {
      const pool = await this.getPool(); // Reuse the same pool

      const request = pool.request();
      // Execute a different stored procedure or SQL query
      const result = await request.execute('SP_DiscoEnergyRecieved');

      res.json(result.recordset);
    } catch (error) {
      console.error('Error fetching Disco Energy Recieved:', error);
      res.status(500).json({ error: 'An error occurred while fetching Disco Energy Recieved Table', details: error.message });
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

module.exports = new EnergyRecievedController();
