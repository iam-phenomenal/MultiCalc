const {check} = require("express-validator")

function validationTerms(){
    const inputValidator = [
        check("baseTemp").isNumeric().withMessage("Numbers Only").not().isEmpty().withMessage("Temperature value can't be empty!"),
        check("baseUnit").isString().withMessage("Units Allowed: [ K, C, F]"),
        check("destUnit").isString().withMessage("Units Allowed: [ K, C, F]")
    ]
    return inputValidator
}

module.exports = validationTerms