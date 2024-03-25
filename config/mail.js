const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "boqhpd08480@fpt.edu.vn",
    pass: "lmyw ksvz lvip mnxw",
  },
});
module.exports = transporter;
