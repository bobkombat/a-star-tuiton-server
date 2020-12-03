if (process.env.NODE_ENV != "production") require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./router");
const errorHandler = require("./middlewares/errorHandler.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use(errorHandler);

if (process.env.NODE_ENV != "test")
  app.listen(PORT, () =>
    console.log(`Starting local server listening at port http://localhost:${PORT}`)
  );

module.exports = app;
