const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirlane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in respository level");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
