const express = require("express");
const Expense = require("./expenseModel.js");
const { addExpense, getExpense} = require("./expenseServices.js");

const router = express.Router();

router.post("/add", async (req, res) => {
    const expenseData = req.body;
    console.log('NEW EXPENSE ADDED:  ' ,expenseData);
    const ExpenseObject = await addExpense(expenseData);
    if (ExpenseObject instanceof Error) {
        return res.status(400).send({
        
        message: "Addition failed"
        });
        }
    return res.status(ExpenseObject.status).send({message: ExpenseObject.message});

    
});

router.get("/",async (req,res) =>{
    const expDetails = await getExpense();
    
    if(expDetails.error != ""){
        
        return res.status(400).send({message: expDetails.error});
    }
    
    return res.status(200).send({value: expDetails.value})

});

 module.exports = router;