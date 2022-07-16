const router = require("express").Router()
const tempRequestHandler = require("../app/https/request/tempRequest")
const validator = require("../app/providers/validators/tempValidator")



router.post("", validator(), tempRequestHandler)

module.exports = router