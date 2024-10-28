// verifySubscription.js
const { getPool, sql } = require('../config/dataconfig');

const verifySubscription = async (req, res, next) => {
  const userID = req.user.id; // Ensure userID is fetched correctly
  try {
    const pool = await getPool();
    const result = await pool.input('UserID', sql.Int, userID)
                             .query('SELECT * FROM Subscriptions WHERE UserID = @UserID AND EndDate >= GETDATE() AND Status = \'active\'');
    if (result.recordset.length > 0) {
      next();
    } else {
      res.status(403).json({ message: 'No active subscription found. Please subscribe to access this feature.' });
    }
  } catch (error) {
    error.status = 500; // You can customize the status code
    next(error); // Pass the error to the centralized error handler
  }
};

module.exports = verifySubscription;
