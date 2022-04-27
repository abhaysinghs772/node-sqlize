const { Sequelize, DataTypes } = require( 'sequelize' );
const db = require( '../models/config' );
// console.log(db);
// const sequelize = db.sequelize;
// const Sequelize = db.Sequelize;

// creating model
const User = db.sequelize.define(

    "user", // ist param , tables name
    {
        // Model attributes are defined here

        // id, name, address, mobile_number
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, // 2nd param, attributes
    { // 3rd param
        timestamps: false
    }
);

module.exports = {
    User
};