const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());


// 404
app.use((req, res) => {
  res.status(404).json({ error: true, message: "Route unavailable" });
});


module.exports = app;