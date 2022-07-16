const currencyController = require("../controller/currencyController")
const {validationResult} = require("express-validator")

const currencyRequestHandler = async (req, res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()})
    }
    var amount = req.body.amount
    var baseCurrency = req.body.baseCurrency
    var destCurrency = req.body.destCurrency

    try{
        var result,  rate = currencyController(amount, baseCurrency, destCurrency)
        res.status(200).json(result, rate)
    
    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports = currencyRequestHandler