const router = require('express').Router()
const handler = require('../handlers/users')
const isAuth = require('../utils/isAuth')
const validations = require('../utils/validator')

// router.get('/login', handler.get.login)
// router.get('/register', handler.get.register)
// router.get('/logout',  isAuth(), handler.get.logout)


router.post('/login', handler.post.login)
router.post('/register',  handler.post.register)

module.exports = router