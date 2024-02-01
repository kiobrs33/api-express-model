const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // The order of imports is IMPORTANT!
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api", require("../routes/albumRoute"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server to in: ", this.port);
    });
  }
}

module.exports = Server;
