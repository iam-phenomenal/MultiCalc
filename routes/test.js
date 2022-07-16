const router = require("express").Router()

router.post("/basicCalc", async(req, res)=> {
    const operator = req.body.operator
    const initialValue = req.body.initialValue
    const secondValue = req.body.secondValue

    try{
        if(operator == "+"){
            var result = initialValue + secondValue
            res.status(200).json("Addition Result: " + result)
        }
        else if(operator == "-"){
            var result = initialValue -  secondValue
            res.status(200).json("Subtraction Result: " + result)
        }
        else if(operator == "x" || operator == "*"){
            var result = initialValue *  secondValue
            res.status(200).json("Multiplication Result: " + result)
        }
        else if(operator == "/"){
            var result = initialValue /  secondValue
            res.status(200).json("Division Result: " + result)
        }
    }catch(err){
        res.status(500).json(err.message)
    }
})

module.exports = router