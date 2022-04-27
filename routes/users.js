const express = require( 'express' );
const router = express.Router();

const usersCtrl = require( '../controllers/users' );

// users route
router.get( '/', ( req, res ) =>
{
    res.json( {
        msg: "hey i am users page"
    } );
} );


// fetch all users
router.get( '/get/:id', usersCtrl.singleSelect );
router.get( '/get', usersCtrl.fetchUsers );

router.post( '/post', usersCtrl.insertUser );
router.get( '/bulk', usersCtrl.bulky );

// update
router.post( '/oneUser/:id', usersCtrl.singleUpdate );

router.delete( '/delete', usersCtrl.del );

module.exports = router;