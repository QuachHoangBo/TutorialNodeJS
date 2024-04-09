// router.js

var express = require("express");
var router = express.Router();

// Thêm model
const Distributors = require("../models/distributors");

// Api thêm distributor
router.post("/add-distributor", async (req, res) => {
  try {
    // Lấy dữ liệu từ body
    const data = req.body;

    // Tạo một đối tượng mới
    const newDistributors = new Distributors({
      name: data.name,
    });

    // Thêm vào database
    const result = await newDistributors.save();

    if (result) {
      // Nếu thêm thành công result Inull trả về dữ liệu
      res.json({
        status: 200,
        messenger: "Thêm thành công",
        data: result,
      });
    } else {
      // Nếu thêm không thành công result null, thông báo không thành công
      res.json({
        status: 400,
        messenger: "Lỗi, thêm không thành công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/get-list-distributor", async (req, res) => {
  try {
    //Lấy danh sách theo thứ tự distributors mới nhất
    const data = await Distributors.find().sort({ createdAt: -1 });

    if (data) {
      // Trả về danh sách
      res.json({
        status: 200,
        messenger: "thành công",
        data: data,
      });
    } else {
      // Nếu thêm không thành công result null, thông báo không thành công
      res.json({
        status: 400,
        messenger: "Lỗi, không thành công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
