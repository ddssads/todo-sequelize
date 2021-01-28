const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')
const home = require('./modules/home')
const todos = require('./modules/todos')

router.use('/todos', authenticator, todos)
router.use('/', home)

module.exports = router