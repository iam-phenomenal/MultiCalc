const {check} = require("express-validator")

function validationTerms(){
    const inputValidator = [
        check("baseMass").isNumeric().withMessage("Numbers Only").not().isEmpty().withMessage("Mass value can't be empty!"),
        check("baseUnit").isString().withMessage("Units Allowed: [ kg, g, oz]"),
        check("destUnit").isString().withMessage("Units Allowed: [ kg, g, oz]")
    ]
    return inputValidator
}

module.exports = validationTerms