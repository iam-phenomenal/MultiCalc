function gramOunce(baseValue, baseUnit, destUnit){
    if (baseUnit == "g" && destUnit == "oz"){
        var result = (baseValue/ 28.35)
        return result + destUnit
    }
    else if (baseUnit == "oz" && destUnit == "g"){
        var result = (baseValue * 28.35)
        return result + destUnit
    }
    else{
        return "Invalid Input!"
    }
}

function gramKilo(baseValue, baseUnit, destUnit){
    if (baseUnit == "g" && destUnit == "kg"){
        var result = (baseValue/ 1000)
        return result + destUnit
    }
    else if (baseUnit == "kg" && destUnit == "g"){
        var result = (baseValue * 1000)
        return result  + destUnit
    }
    else{
        return "Invalid Input!"
    }
}

module.exports = {gramOunce, gramKilo}