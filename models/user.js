const mongoose = require('mongoose')
const Schema = mongoose.Schema

//tạo collectinon users = table
const Users = new Schema({
    unsername:{type:String, unique:true, maxLength:255},
    password:{type:String},
    // email:{type:String, unique: true},
    email: {type: String},
    name :{type:String},
    avater:{type:String},
    age:{type:Number, min:18, max: 65},
    available:{type: Boolean , default : false},
},{
    timestamps: true
})
module.exports = mongoose.model('user', Users)