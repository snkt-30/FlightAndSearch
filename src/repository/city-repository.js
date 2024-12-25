const db = require("../models/index");

// const city = new City();
class CityRepository {
  // register a new city
  async createCity({ name }) {
    try {

      console.log("object ",db)
      const city = await db.City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }

  // Get the city by cityId
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }

  //update the city values
  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }

  // delete the city
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }
}

module.exports = CityRepository;
