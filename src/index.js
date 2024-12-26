const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./Routes/index");

const db = require("./models/index");
const sequelize = require("sequelize");

const setupAndStartServer = async () => {
  // create a express object
  const app = express();

  //body parser setup
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    // console.log(process.env); to see our env variable
    console.log(`Server Started at ${PORT}`);

    if(process.env.SYNC_DB){
      db.sequelize.sync({ alter: true });
    }

    // const airport = await db.Airport.create({
    //   name: "Kempegouda Internation Airport",
    //   cityId: 3,
    // });

    // const airport = await db.Airport.findOne({
    //   where: {
    //     cityId: 3,
    //   },
    // });


    // const city = await db.City.findOne({
    //   where: {
    //     id: 10,
    //   },
    // });
    // const res = await city.getAirports();
    // console.log(res);


  });
};

setupAndStartServer();
