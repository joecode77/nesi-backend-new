const { sql, getPool } = require('../config/dataConfig');

class HourlyEnergyGeneratedController {
  constructor() {
    this.poolPromise = getPool();
  }

  getPool = async () => {
    return this.poolPromise;
  }

  getHourlyEnergyGenerated = async (req, res) => {
    try {
      const pool = await this.getPool();
      const request = pool.request();
  
      const startDate = req.query.startDate || '2018-01-01';
      const endDate = req.query.endDate || new Date().toISOString().split('T')[0];
      const genco = req.query.genco || null;
  
      request.input('StartDate', sql.Date, startDate);
      request.input('EndDate', sql.Date, endDate);
      request.input('Genco', sql.NVarChar(100), genco);
  
      const result = await request.execute('SP_HourlyEnergyGenerated');
      const data = result.recordset;
  
      res.json({ data });
    } catch (error) {
      console.error('Error fetching Hourly Energy Generated:', error);
      res.status(500).json({ error: 'An error occurred', details: error.message });
    }
  };
  

  closePool = async () => {
    const pool = await this.getPool();
    if (pool) {
      await pool.close();
      this.poolPromise = null; // Reset the promise
    }
  }
}

module.exports = new HourlyEnergyGeneratedController();
