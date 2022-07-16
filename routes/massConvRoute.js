const router = require("express").Router()
const massRequestHandler = require("../app/https/request/massRequest")
const validator = require("../app/providers/validators/massValidator")


router.post("", validator(), massRequestHandler)

module.exports = router