const mongoose = require('mongoose')
const Schema = mongoose.Schema

//tạo collectinon distributorrs = table
const distributorrs = new Schema({
    name:{type:String},
    
},{
    timestamps: true
})
module.exports = mongoose.model('distributorrs', distributorrs)