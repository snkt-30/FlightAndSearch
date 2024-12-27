const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    console.log(req.body);
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "Successfully created a flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(201).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to create a flight",
    });
  }
};

const getAllFlights = async (req, res) => {
  try {
        console.log("controller : ", req.query);
    const flights = await flightService.getAllFlights(req.query);
    return res.status(201).json({
      data: flights,
      success: true,
      err: {},
      message: "Successfully fetched the flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(201).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to create a flight",
    });
  }
};
module.exports = {
  create,
  getAllFlights,
};
