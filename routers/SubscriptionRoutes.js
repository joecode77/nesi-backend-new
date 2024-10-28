const express = require('express');
const router = express.Router();
const subscriptionsController = require('../controller/subscriptionsController');
const verifySubscription = require('../middleware/verifySubscriptions');
const validateSubscription = require('../middleware/validateSubscription');

router.post('/subscribe', validateSubscription, subscriptionsController.addSubscription);
router.get('/check-subscription/:userID', subscriptionsController.checkSubscription);
router.get('/protected-content', verifySubscription, (req, res) => {
  res.send('This is protected content only for subscribed users.');
});

module.exports = router;
