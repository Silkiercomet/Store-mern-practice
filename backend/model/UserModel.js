const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    featured: {required:true, type:Boolean},
    rating : {type:Number, default:0},
    createdAt : {type: Date, default: Date.now},
    name : {type:String, required:true},
    price: {type:Number, required:true},
    company:{type:String, required:true}
})

// el primer parametro es el nombre de la colleccion a la que pertenece el model, es segundo es la schema
const product = mongoose.model("product", ProductSchema)

module.exports = product