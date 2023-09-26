const express = require("express");
const app = express();

// Get the server's IP address

app.get("/", (req, res) => {
  res.send("Welcome to your Node.js server, bro!");
});

app.get("/temperature", (req, res) => {
  // Replace the following with your logic to fetch the temperature value
  const temperatureValue = 25.5; // Example temperature value in Celsius

  // Send the temperature value as a JSON response
  res.json({ temperature: temperatureValue });
});

// Specify 0.0.0.0 as the host to listen on all available network interfaces
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
