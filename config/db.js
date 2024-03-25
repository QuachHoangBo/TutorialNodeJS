const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const atlasURI =
  "mongodb+srv://bophpd08480:MvtjNCqlC2cvMmP3@cluster0.unftlza.mongodb.net/MyDBretryWrites=true&w=majority&appName=Cluster0";
const local = "mongodb://localhost:27017/database";
const connect = async () => {
  try {
    await mongoose.connect(local, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect success");
  } catch (error) {
    console.log("Connect fail:", error.message);
  }
};

module.exports = { connect };
