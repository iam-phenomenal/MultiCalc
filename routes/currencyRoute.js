const router = require("express").Router()
const currencyRequestHandler = require("../app/https/request/currencyRequest")
const validator = require("../app/providers/validators/currencyValidator")


router.post("", validator(), currencyRequestHandler)

module.exports = router