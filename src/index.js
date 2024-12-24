const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {

    // create a express object
  const app = express();

  //body parser setup
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    // console.log(process.env); to see our env variable
    console.log(`Server Started at ${PORT}`);
  });
};

setupAndStartServer();
