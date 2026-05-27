const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let latestData = {};

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/data", (req, res) => {

  latestData = req.body;

  console.log("Received Data:");
  console.log(latestData);

  res.json({
    message: "Data received successfully"
  });

});

app.get("/data", (req, res) => {
  res.json(latestData);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
