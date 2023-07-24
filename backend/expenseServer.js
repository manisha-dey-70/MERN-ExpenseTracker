const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Expense = require('./modules/expense/expenseController.js');
const url = 'mongodb://localhost:27017/mydb1';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/expense', Expense);
  
mongoose.connect(url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log(`Connected to ${url}`))
.catch((err) => console.log(`Error occured ${err}`));


app.listen(5000, () => {
    console.log('Server is running ')
});