const { getPool, sql } = require('../config/dataConfig');

exports.addSubscription = async (req, res) => {
  const { userID, status } = req.body;
  const startDate = new Date(); // Assuming subscription starts immediately
  const endDate = new Date(startDate);
  endDate.setMonth(startDate.getMonth() + 3); // Set end date to three months from start

  try {
    const pool = await getPool();
    await pool.request()
              .input('UserID', sql.Int, userID)
              .input('StartDate', sql.DateTime, startDate)
              .input('EndDate', sql.DateTime, endDate)
              .input('Status', sql.VarChar, status)
              .execute('InsertSubscription');
    res.json({ message: 'Subscription added successfully!', startDate, endDate });
  } catch (error) {
    res.status(500).send({ message: 'Error adding subscription', error: error.message });
  }
};


exports.checkSubscription = async (req, res) => {
  const { userID } = req.params;
  try {
    const pool = await getPool();
    const result = await pool.input('UserID', sql.Int, userID)
                             .query('SELECT * FROM Subscriptions WHERE UserID = @UserID AND EndDate >= GETDATE() AND Status = \'active\'');
    if (result.recordset.length > 0) {
      res.json({ hasActiveSubscription: true });
    } else {
      res.json({ hasActiveSubscription: false });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error checking subscription', error: error.message });
  }
};
