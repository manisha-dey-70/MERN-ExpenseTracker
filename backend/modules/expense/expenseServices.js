const Expense  = require("./expenseModel.js");

function addExpense(data){
   
    const expense = new Expense(data);
    expense.save();
    console.log("EXPENSE added successfully");
    return {
      "status":200,
      "message" : "Expense added"
    }
  }
  
  async function getExpense(){
    var expDetails={};
   await Expense.find({}, function(err,data){
     if(err){
       expDetails= {"error":err}
     }
     else{
      expDetails= {"value":data, "error": ""}
     }
  });
  console.log("FETCHED DATA IS: ", expDetails);
  return expDetails;
}
  
exports.addExpense = addExpense;
exports.getExpense = getExpense;

