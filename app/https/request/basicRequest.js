const {addition, subtraction, multiplication, division, exponent, root} = require("../controller/basicController")

const {validationResult} = require("express-validator")


const basicRequestHandler = async (req, res) =>{
    const operator = req.body.operator
    const initialValue = req.body.initialValue
    const secondValue = req.body.secondValue

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()})
    }
    try{
        if(operator == "+"){
            var result = addition(initialValue, secondValue)
            res.status(200).json("Addition Result: " + result)
        }
        else if(operator == "-"){
            var result = subtraction(initialValue, secondValue)
            res.status(200).json("Subtraction Result: " + result)
        }
        else if(operator == "x" || operator == "*"){
            var result = multiplication(initialValue, secondValue)
            res.status(200).json("Multiplication Result: " + result)
        }
        else if(operator == "/"){
            var result = division(initialValue, secondValue)
            res.status(200).json("Division Result: " + result)
        }
        else if(operator == "root"){
            var result = root(initialValue,secondValue)
            res.status(200).json("Root Result: " + result)
        }
        else if(operator == "exponent"){
            var result = exponent(initialValue,secondValue)
            res.status(200).json("Exponential Result: " + result)
        }
        else{
            res.status(400).json("Invalid Operation!")
        }
    }catch(err){
        res.status(500).json(err.message)
    }   
}

module.exports = basicRequestHandler