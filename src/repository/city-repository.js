const db = require("../models/index");

// const city = new City();
class CityRepository {
  // register a new city
  async createCity({ name }) {
    try {
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
      const city = await db.City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }

  //update the city values
  async updateCity(cityId, data) {
    try {
      // const city = await db.City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });

      const city = await db.City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }

  // delete the city
  async deleteCity(cityId) {
    try {
      const response = await db.City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in repository level");
      throw { error };
    }
  }
}

module.exports = CityRepository;
