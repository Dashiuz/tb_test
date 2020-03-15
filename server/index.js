const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 4000;
const base_URL = '/api';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.route(`${base_URL}/sendString`).post(function (req, res) {
  let strValue = req.body.strValue;
  console.log("strValue: " + strValue);
  if (strValue) {
    res.send({ status: 200, message: "OK", data: strValue })
  } else {
    res.send({ status: 204, message: "No Data", data: null })
  }
});

app.get(`${base_URL}`, function (req, res) {
  res.send('hello world');
})

let server = app.listen(4000, () => {
  console.log("Server is running in port " + port)
});

module.exports = server;
