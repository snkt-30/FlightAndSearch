const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(401).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      error: "Missing mandatory properties for creating flight",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};
