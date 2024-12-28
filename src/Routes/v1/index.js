const express = require("express");
const router = express.Router();

const { FlightMiddleware } = require("../../middlewares/index");

const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const airportController = require("../../controllers/airport-controller");

router.post("/city", cityController.createCity);
router.delete("/city/:id", cityController.deleteCity);
router.get("/city/:id", cityController.getCity);
router.patch("/city/:id", cityController.updateCity);
router.get("/city", cityController.getAllCities);

router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,
  flightController.create
);
router.get("/flights", flightController.getAllFlights);

router.post("/airports", airportController.create);

module.exports = router;
