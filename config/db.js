const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const local = "mongodb://localhost:27017/MyDB";

const atlat =
  "mongodb+srv://boqhpd08480:0356145104Az%40@cluster0.qchgngp.mongodb.net/MyDB?retryWrites=true&w=majority&appName=Cluster0";
const connect = async () => {
  try {
    await mongoose.connect(atlat, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect success");
  } catch (error) {
    console.log("Connect Fail");
    console.log(error);
  }
};
module.exports = { connect };
