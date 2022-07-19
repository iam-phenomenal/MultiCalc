const router = require("express").Router()
const currencyRequestHandler = require("../app/https/request/currencyRequest")
const validator = require("../app/providers/validators/currencyValidator")
const CC = require("currency-converter-lt")

router.post("", validator(), currencyRequestHandler)

module.exports = router