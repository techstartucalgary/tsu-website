// server.js
// where your node app starts

// init project
const express = require("express");
const { getAlbum } = require("./google-photos");
const app = express();

app.use(function (req, res, next) {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/:id", async function (request, response) {
  try {
    const results = await getAlbum(request.params.id);
    response.json(results);
  } catch (e) {
    response.status(500);
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
