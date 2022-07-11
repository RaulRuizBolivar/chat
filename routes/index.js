var express = require( 'express' );
var router = express.Router();
const Mensaje = require( '../models/mensaje.model' )

/* GET home page. */
router.get( '/', async function ( req, res, next ) {
  let ultimosMensajes = ( await Mensaje.find().sort( { 'createdAt': -1 } ).limit( 5 ).exec() ).reverse()
  res.render( 'index', { ultimosMensajes } );
} );

module.exports = router;
