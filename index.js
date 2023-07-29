const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ name: "OMKAR" });
});

app.listen(5555, () => {
  console.log("listening to port 5555");
});
