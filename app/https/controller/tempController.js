function kelvinCelsius(baseTemp, baseUnit, destUnit){
    if (baseUnit == "K" && destUnit == "C"){
        var result = 273 - baseTemp
        return result + destUnit
    }
    else if (baseUnit == "C" && destUnit == "K"){
        var result = baseTemp - 273
        return result + destUnit
    }
    else{
        return "Invalid Input"
    }
}

function kelvinFahrenhiet(baseTemp, baseUnit, destUnit){
    if (baseUnit == "F" && destUnit == "K"){
        var result = ((baseTemp - 32) * 5/9) + 273.15
        return result + destUnit
    }
    else if (baseUnit == "K" && destUnit == "F"){
        var result = ((baseTemp - 273.15) * 9/5) + 32
        return result  + destUnit
    }
    else{
        return "Invalid Input"
    }
}

function celsiusFahrenhiet(baseTemp, baseUnit, destUnit){
    if (baseUnit == "F" && destUnit == "C"){
        var result = (baseTemp - 32) * (5/9)
        return result + destUnit
    }
    else if (baseUnit == "C" && destUnit == "F"){
        var result = (baseTemp * 9/5) + 32
        return result  + destUnit
    }
    else{
        return "Invalid Input"
    }
}

module.exports = {kelvinCelsius, kelvinFahrenhiet, celsiusFahrenhiet}