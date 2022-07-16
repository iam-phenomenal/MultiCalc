const {check} = require("express-validator")

function validationTerms(){
    const inputValidator = [
        check("initialValue").isNumeric().withMessage("Numbers Only").not().isEmpty().withMessage("Initial can't be empty!"),
        check("secondValue").isNumeric().withMessage("Numbers Only"),
        check("operator").isString().withMessage("Only Basic Operations Allowed \n[+, -, *, x, /, root, exponent]")
    ]
    return inputValidator
}

module.exports = validationTerms