var {kelvinCelsius, kelvinFahrenhiet, celsiusFahrenhiet} = require("../controller/tempController")
const {validationResult} = require("express-validator")


const tempRequestHandler = async (req, res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()})
    }
    
    var baseTemp = req.body.baseTemp
    var baseUnit = req.body.baseUnit
    var destUnit = req.body.destUnit


    try{
        if ((destUnit == "K" && baseUnit == "C")||(destUnit == "C" && baseUnit == "K")){
            var result = kelvinCelsius(baseTemp, baseUnit, destUnit)
            res.status(200).json(result)
        }
        else if ((destUnit == "F" && baseUnit == "C")||(destUnit == "C" && baseUnit == "F")){
            var result = celsiusFahrenhiet(baseTemp, baseUnit, destUnit)
            res.status(200).json(result)
        }
        else if ((destUnit == "K" && baseUnit == "F")||(destUnit == "F" && baseUnit == "K")){
            var result = kelvinFahrenhiet(baseTemp, baseUnit, destUnit)
            res.status(200).json(result)
        }
        else{
            res.status(200).json("Please Enter Valid Inputs")
        }
    }catch(err){
        res.status(500).json("Err: "+ err.message)
    }
}

module.exports = tempRequestHandler