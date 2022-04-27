const express = require( 'express' );
const cors = require( 'cors' );
const usersRoutes = require( './routes/users' );
const port = process.env.PORT || 3000;
const app = express();

const urlencodeParser = express.urlencoded( { extended: false } );
require( 'dotenv' ).config();

app.use( '/users', urlencodeParser, usersRoutes );

// routes
app.get( '/', async ( req, res ) =>
{
    res.json( { msg: "welcome to home page" } );
} );

app.listen( port, () =>
{
    console.log( 'server is up ' );
} );