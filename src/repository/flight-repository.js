const { Flights } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      const flights = await Flights.findAll(filter);
      return flights;
    } catch (error) {
      console.log("Somethign went wrong in the repository level");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
