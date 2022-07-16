const express = require("express")
const basicRoute = require("../routes/basicRoute")
const tempConvRoute = require("../routes/tempConvRoute")
const massConvRoute = require("../routes/massConvRoute")
const currencyConvRoute = require("../routes/currencyRoute")
const { urlencoded } = require("express")

module.exports = function(){
    const app = express()

    app.use(express.json())
    app.use(urlencoded({extended: true}))

    app.use("/calc", basicRoute)
    app.use("/temp-conversion", tempConvRoute)
    app.use("/mass-conversion", massConvRoute)
    app.use("/currency", currencyConvRoute)

    return app
}