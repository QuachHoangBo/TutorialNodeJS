var express = require("express");
var router = express.Router();
const modeFruit = require("../models/fruit");
const Upload = require("../config/upload");

router.get("/test", function (reg, res, next) {
  res.send("respond with a resource fruit test");
});

//add data

router.post("/add", Upload.array("images"), async (req, res) => {
  try {
    const { files } = req;
    const urlImages = files.map(
      (file) => `${req.protocol}://${req.get("hosst")}/uploads/${file.filename}`
    );
    const model = new modeFruit(req.body);
    model.images = urlImages;
    const result = await model.save(); //thêm  dl vaò đata
    if (result) {
      res.json({
        status: 200,
        message: "Thêm thành công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        message: "Thêm thất bại",
        data: result,
      });
    }
    // res.send(result)
  } catch (error) {
    console.log(error);
  }
});
//
router.get("/list", async (req, res) => {
  const result = await modeFruit.find();
  try {
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});
//
router.get("/getbyid/:id", async (req, res) => {
  const result = await modeFruit.findById(req.params.id);
  try {
    if (result) {
      res.send(result);
    } else {
      res.json({
        status: 400,
        message: "không tìm thấy ID  ",
        data: result,
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).send("Invalid ID format");
    } else {
      console.log(error);
      res.status(500).send("Internal Server");
    }
  }
});
router.patch("/edit/:id", async (req, res) => {
  const result = await modeFruit.findByIdAndUpdate(req.params.id, req.body);
  try {
    if (result) {
      const rs = await result.save();
      res.send(rs);
    } else {
      res.json({
        status: 400,
        message: "không tìm thấy ID  ",
        data: result,
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).send("Invalid ID format");
    } else {
      console.log(error);
      res.status(500).send("Internal Server");
    }
  }
});
router.delete("/delete/:id", async (req, res) => {
  const result = await modeFruit.findByIdAndDelete(req.params.id, req.body);
  try {
    if (result) {
      res.json({
        status: 200,
        message: "Xóa thành công  ",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        message: "Xóa thất bại  ",
        data: [],
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).send("Invalid ID format");
    } else {
      console.log(error);
      res.status(500).send("Internal Server");
    }
  }
});

module.exports = router;
