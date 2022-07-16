const router = require("express").Router()
const validator = require("../app/providers/validators/basicValidator")
const requestHandler = require("../app/https/request/basicRequest")

router.post("/basicCalc", validator(), requestHandler)


module.exports = router