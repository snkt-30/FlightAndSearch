const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compare } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      // if(!compare(data.arrivalTime,data))

      if (!compare(data.arrivalTime, data.departureTime)) {
        throw {error: "Arrival Time should be greater than departure Time"} ;
      }
      const airplane = await this.airplaneRepository.getAirlane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      console.log(flight);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;

/**
 * {
 *   flightNumber,
 *   airplaneId,
 *   departureAirportId,
 *   arrivalAirportId,
 *
 *
 * }
 */
