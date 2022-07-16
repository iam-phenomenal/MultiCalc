function addition(initialValue, secondValue = 0){
    var result = initialValue + secondValue
    return result
}

function subtraction(initialValue, secondValue = 0){
    var result = initialValue - secondValue
    return result
}

function multiplication(initialValue, secondValue = 1){
    var result = initialValue * secondValue
    return result
}

function division(initialValue, secondValue = 1){
    var result = initialValue / secondValue
    return result
}

function root(initialValue, secondValue = 2){
    var result = initialValue ** (1/secondValue)
    return result
}

function exponent(initialValue, secondValue = 2){
    var result = initialValue ** secondValue
    return result
}

module.exports = {addition, subtraction, multiplication, division, exponent, root}