var express = require("express");
var router = express.Router();
const Transporter = require("../config/mail");

router.post("/test", function (reg, res, next) {
  const mailOption = {
    from: "bophpd08480@fpt.edu.vn",
    to: "kusang112003@gmail.com",
    subject: "test mail",
    text: "this is a test eamil sent Nodejs project",
  };

  Transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      res.status(500).json({ error: "send mai fail" + error });
    } else {
      res.status(300).json({ message: "send mai success" + info });
    }
  });
});

module.exports = router;
