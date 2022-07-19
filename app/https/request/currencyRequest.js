const {validationResult} = require("express-validator")
const CC = require("currency-converter-lt")

const currencyRequestHandler = async (req, res) =>{
    var result = ""
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()})
    }
    var amount = req.body.amount
    var baseCurrency = req.body.baseCurrency
    var destCurrency = req.body.destCurrency

    try{
        var currencyConverter = new CC()
        currencyConverter.from(baseCurrency).to(destCurrency).amount(amount).convert().then((response)=>{
            res.status(200).json({
                fromCurrency: `${baseCurrency} ${amount}`,
                toCurrency: `${destCurrency} ${response}`
            })
        })

    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports = currencyRequestHandler