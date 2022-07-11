const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const mensajeSchema = new Schema( {
	mensaje: String,
	nombre: String
}, {
	timestamps: true
} )

module.exports = mongoose.model( 'mensaje', mensajeSchema )