// validateSubscription.js
const Joi = require('joi');

const validateSubscription = (req, res, next) => {
    const schema = Joi.object({
        userID: Joi.number().required(),
        status: Joi.string().valid('active', 'expired', 'pending').required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Validation error', details: error.details.map(x => x.message) });
    }
    next();
};

module.exports = validateSubscription;
