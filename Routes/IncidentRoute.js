const express = require("express");
const router = express.Router();
const IncidentController = require('../Controllers/IncidentController');

router.get('/', IncidentController.getOfficial);
router.post('/', IncidentController.create);

module.exports = router;