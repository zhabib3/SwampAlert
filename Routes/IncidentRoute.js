const express = require("express");
const router = express.Router();
const IncidentController = require('../Controllers/IncidentController');

router.get('/', IncidentController.getOfficial);
router.post('/', IncidentController.create);
router.get('/getcrowd', IncidentController.getCrowdData);

module.exports = router;