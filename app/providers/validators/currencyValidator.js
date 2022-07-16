const {check} = require("express-validator")

function validationTerms(){
    const inputValidator = [
        check("amount").isNumeric().withMessage("Numbers Only").not().isEmpty().withMessage("Amount can't be empty!"),
        check("baseCurrency").isString().not().isEmpty().withMessage("Base Currency value can't be empty!"),
        check("destCurrency").isString().not().isEmpty().withMessage("Destination Currency value can't be empty!")
    ]
    return inputValidator
}

module.exports = validationTerms