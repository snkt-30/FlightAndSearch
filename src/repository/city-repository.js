const { City } = require("../models/index");

class CityRepository {

  // register a new city 
  async createCity({ name }) {
    try {
      // const city = await City.createCity({name});
      const city = await City.createCity({
        name: name,
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
