const  {login}  = require('../controllers/login')
const {getCharById} = require('../controllers/getCharById')
const { postFav, deleteFav } = require('../controllers/handleFavorites')

const router = require ('express').Router()

router.get("/login", login )
router.get("/character/:id", getCharById )
router.post("/fav", postFav )
router.delete("/fav/:id", deleteFav )


module.exports=router
