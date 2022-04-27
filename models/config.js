const mysql = require( 'mysql2' );
const { Sequelize } = require( 'sequelize' );
require( 'dotenv' ).config();

// connection
const sequelize = new Sequelize(
    process.env.DB, // db
    process.env.DB_USER,       // username
    process.env.DB_PASS,    // pass
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
);

// testing the connection 
async function checkConnection()
{
    try 
    {
        const xyz = await sequelize.authenticate();
        console.log( "Connection has been established successfully." );
    }
    catch ( err )
    {
        console.error( 'Unable to connect to the database:', err );
    }
}

checkConnection();

const db = {};
db.sequelize = sequelize; // sending connction
db.Sequelize = Sequelize;

module.exports = db;
