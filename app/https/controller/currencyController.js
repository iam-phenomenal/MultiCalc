const {Wallet, {Money} } = require("walletjs")

function convertCurrency(amount, baseCurrency, destCurrency){
    var currencyConverter = new CC({
        from: baseCurrency,
        to: destCurrency,
        amount: amount,
        isDecimalComma:true
    })

    var result = currencyConverter.convert(amount).then((response) => {
        return response
    })
    var rates = currencyConverter.rates().then((response) => {
        return response
    })

    return result, rates

}

module.exports = convertCurrency
