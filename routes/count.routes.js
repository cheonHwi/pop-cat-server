const express = require("express");
const { getTotalCount } = require("../controllers/totalCountCtrl");

const countRouter = express.Router();

countRouter.get("/", async (req, res) => {
  console.log(await getTotalCount());
  res.json(await getTotalCount());
});

module.exports = countRouter;
