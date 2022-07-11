const mongoose = require( 'mongoose' )


mongoose.connect( process.env.MONGO_URL )

//mongodb+srv://raulruizbolivar:passwordmongo@chat.ovnwl.mongodb.net/?retryWrites=true&w=majority