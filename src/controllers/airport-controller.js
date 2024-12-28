const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    // console.log(res);
    return res.status(201).json({
      success: true,
      data: response,
      message: "Successfully create a data",
      error: {},
    });
  } catch (error) {
    console.log("Somethign wrong in the controller layer ", error);

    return res.status(201).json({
      success: false,
      data: {},
      message: "Failed to create a data",
      error: error,
    });
  }
};

module.exports = {
  create,
};
