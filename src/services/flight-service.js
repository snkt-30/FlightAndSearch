const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compare } = require("../utils/helper");
const { Op } = require("sequelize");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  #createFilter(data) {
    const filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    //  This will cause a problem because to handle this we have to do nested if else
    // just to avoid this will use this priceFilter[] method.
    //
    //     if (data.maxPrice && data.minPrice) {
    //       Object.assign(filter, {
    //         [Op.and]: [
    //           { price: { [Op.gte]: data.minPrice } },
    //           { price: { [Op.lte]: data.maxPrice } },
    //         ],
    //       });
    //     }
    let priceFilter = [];
    if (data.minPrice) {
      //       Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      //       Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    console.log(filter);

    return filter;
  }
  async createFlight(data) {
    try {
      // if(!compare(data.arrivalTime,data))

      if (!compare(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival Time should be greater than departure Time" };
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

  async getAllFlights(data) {
    try {
      const filterData = this.#createFilter(data);
      const flights = await this.flightRepository.getAllFlight({
        where: filterData,
      });
      return flights;
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
