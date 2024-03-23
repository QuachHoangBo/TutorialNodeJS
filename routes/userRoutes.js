var express = require("express");
var router = express.Router();
const modelUser = require("../model/user");

/* Get user listing*/

router.get("/test", function (req, res, next) {
  res.send("respond with a resource test");
});

//add data
router.post("/add", async (req, res) => {
  try {
    const model = new modelUser(req.body);
    const result = await model.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.get("/list", async (req, res) => {
  const result = await modelUser.find();
  try {
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
