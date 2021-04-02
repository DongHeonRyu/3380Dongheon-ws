const express = require('express');
const router = express.Router();

var favorite_Control = require("../controllers/favorite_Control")


router.get('/',favorite_Control.getFavorite)

router.post('/find',favorite_Control.getSpecFavorite)

router.post('/add',favorite_Control.addFavorite)

router.patch('/edit',favorite_Control.editFavorite)

router.patch('/editcomment',favorite_Control.editComment)

router.delete('/delete',favorite_Control.deleteFavorite)


module.exports = router; 




