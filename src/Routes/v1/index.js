const express = require("express");
const router = express.Router();

const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");

router.post("/city", cityController.createCity);
router.delete("/city/:id", cityController.deleteCity);
router.get("/city/:id", cityController.getCity);
router.patch("/city/:id", cityController.updateCity);
router.get("/city", cityController.getAllCities);

router.post("/flights", flightController.create);
router.get("/flights", flightController.getAllFlights);

module.exports = router;
