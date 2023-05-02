const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const countRouter = require("./routes/count.routes");

const mongooseConnect = require("./config/mongoose");

const app = express();

dotenv.config();
app.use(cors());

app.use("/count", countRouter);

const { PORT, MONGODB_URI } = process.env;

const port = PORT || 3005;
const url = MONGODB_URI || "mongodb://localhost/popcat";

mongooseConnect(url);

app.get("/", (req, res) => {
  res.send("sucecss");
});

app.listen(port, () => {
  console.log(`server is open at http://localhost:${port}`);
});
