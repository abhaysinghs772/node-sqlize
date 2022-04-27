const express = require( 'express' );
const userModel = require( '../models/users' );

// SELECT all
const fetchUsers = async ( req, res ) =>
{
    // code 
    try 
    {
        const users = await userModel.User.findAll();
        if ( users.length > 0 )
        {
            res.json( { msg: "found", res: users } );
        }
        else
        {
            res.json( { msg: "data doesn't exist", } );
        }
    }
    catch ( error )
    {
        res.json( { msg: "not found", err: error } );
    }

};

// single select
const singleSelect = async ( req, res ) =>
{

    // code 
    try 
    {
        const users = await userModel.User.findAll(
            {
                where: {
                    id: req.params.id
                }
            }
        );

        if ( users.length > 0 )
        {
            res.json( { msg: "found", res: users } );
        }
        else
        {
            res.json( { msg: "data doesn't exist", } );
        }
    }
    catch ( error )
    {
        res.json( { msg: "not found", err: error } );
    }
};

// insert user => single insert
const insertUser = async ( req, res ) => 
{
    // code
    const save = await userModel.User.create(
        {
            name: req.body.name,
            address: req.body.address,
            mobile_number: req.body.mobile_numbernp
        }
    );
    if ( save )
    {
        res.json( {
            msg: "data saved successfully"
        } );
    }
};

// bulk insert
const bulky = async ( req, res ) =>
{
    // code
    const bulks = await userModel.User.bulkCreate(
        // [
        //     {
        //         "name": "Kitty Sawyer",
        //         "address": "659 Tilden Avenue, Dexter, Connecticut, 160",
        //         "phone_number": "+91 (940) 457-3348"
        //     },
        //     {
        //         "name": "Shannon Ellison",
        //         "address": "763 Ryerson Street, Terlingua, Louisiana, 3884",
        //         "phone_number": "+91 (890) 474-2646"
        //     },
        //     {
        //         "name": "Ines Becker",
        //         "address": "946 Willow Street, Ola, Nebraska, 3303",
        //         "phone_number": "+91 (881) 520-2921"
        //     },
        //     {
        //         "name": "Leonor Chambers",
        //         "address": "334 Brighton Court, Rosburg, Wisconsin, 6996",
        //         "phone_number": "+91 (926) 472-2882"
        //     },
        //     {
        //         "name": "Bertha Poole",
        //         "address": "533 Tapscott Street, Kieler, Florida, 2019",
        //         "phone_number": "+91 (952) 428-2961"
        //     },
        //     {
        //         "name": "Lucile Mendoza",
        //         "address": "716 Strauss Street, Caledonia, Texas, 9772",
        //         "phone_number": "+91 (856) 431-2104"
        //     },
        //     {
        //         "name": "Bertie Gentry",
        //         "address": "588 Dunne Court, Century, Wyoming, 1517",
        //         "phone_number": "+91 (861) 566-3488"
        //     }
        // ]
    );
    // console.log( bulks );
    if ( bulks )
    {
        res.json( {
            msg: "big data saved successfully"
        } );
    }
    else 
    {
        res.json( {
            msg: "some err occured"
        } );
    }
};

// update
// update One
const singleUpdate = async ( req, res ) =>
{
    console.log( req.params );
    const singlePut = await userModel.User.update(
        {
            name: "abhay singh"
        },
        {
            where:
            {
                id: req.params.id
            }
        }
    );
    // returns no of rows affected
};


// delete
const del = async ( req, res ) =>
{
    const delUser = await userModel.User.destroy(
        {
            where: {
                name: req.query.name
            }
        }
    );
    console.log( delUser );
    res.json( { delUser } );
};

module.exports = {
    singleSelect,
    fetchUsers,
    insertUser,
    bulky,
    singleUpdate,
    del
};