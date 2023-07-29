const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ type: "GET" });
});

app.listen(5555, () => {
  console.log("listening to port 5555");
});
