const db = require("../models/index");

class AirportRepository {
  async createAirport({ name, cityId }) {
    try {
      const response = await db.Airport.create({
        name,
        cityId,
      });
      return response;
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }
  
  async getAirports(cityId, name) {
    try {
      const airports = await db.Airport.findAll({
        where: {
          cityId: cityId,
        },
      });
      return airports;
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
