var {gramOunce, gramKilo} = require("../controller/massController")
const {validationResult} = require("express-validator")


const massRequestHandler = async (req, res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()})
    }
    
    var baseMass = req.body.baseMass
    var baseUnit = req.body.baseUnit
    var destUnit = req.body.destUnit

    try{
        if ((destUnit == "kg" && baseUnit == "g") || (destUnit == "g" && baseUnit == "kg")){
            var result = gramKilo(baseMass, baseUnit, destUnit)
            res.status(200).json(result)
        }
        else if ((destUnit == "g" && baseUnit == "oz")|| (destUnit == "oz" && baseUnit == "g")){
            var result = gramOunce(baseMass, baseUnit, destUnit)
            res.status(200).json(result)
        }else{
            res.status(400).json("Invalid Input!")
        }
    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports = massRequestHandler