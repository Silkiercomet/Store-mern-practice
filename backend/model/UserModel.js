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

/*
ProductSchema define varias propiedades para el documento del producto: featured, rating, createdAt, name, price, y company.

La propiedad featured es un valor booleano que indica si el producto está destacado o no.

La propiedad de rating es un valor numérico que indica la calificación del producto. El valor predeterminado es 0.

La propiedad createdAt es un valor de fecha que indica cuándo se creó el producto. El valor predeterminado es la fecha y la hora actuales.

La propiedad de name es un valor de cadena que representa el nombre del producto. Esta propiedad es obligatoria.

La propiedad price es un valor numérico que representa el precio del producto. Esta propiedad es obligatoria.

La propiedad de la company es un valor de cadena que representa a la empresa que produce el producto. Esta propiedad es obligatoria.

La variable de producto es un modelo Mongoose que se crea a partir de ProductSchema. Este modelo representa la colección de productos en la base de datos MongoDB.
*/