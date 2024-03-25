const mongoose = require('mongoose')
const Schema = mongoose.Schema

//tạo collectinon distributorrs = table
const Fruits = new Schema({
    name:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    status:{type:Number},
    images:{type:Array},
    description:{type:String},
    id_distributor:{type: Schema.Types.ObjectId, ref:'distributor'},
    
},{
    timestamps: true
})
module.exports = mongoose.model('Fruits', Fruits)