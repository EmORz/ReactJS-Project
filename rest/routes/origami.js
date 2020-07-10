  
const router = require('express').Router()
const handler = require('../handlers/origami')
const isAuth = require('../utils/isAuth')

router.get('/create',  isAuth(), handler.get.create)
router.get('/details/:id',  isAuth(), handler.get.details)
router.get('/edit/:id',  isAuth(), handler.get.edit)
router.get('/delete/:id',  isAuth(), handler.get.delete)






router.post('/create',  isAuth(), handler.post.create)


module.exports = router