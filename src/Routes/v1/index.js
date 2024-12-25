const express = require("express");
const router = express.Router();

const cityController = require("../../controllers/city-controller");

router.post("/city", cityController.createCity);
router.delete("/city/:id", cityController.deleteCity);
router.get('/city/:id',cityController.getCity);
router.patch('/city/:id')

module.exports = router;
