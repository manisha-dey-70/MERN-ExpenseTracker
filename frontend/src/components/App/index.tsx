import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import './App.css';
import FormikOpField from '../FormikOptionalField/indexOp';
import FormikField from '../FormikField';
import axios from 'axios';
import {Button} from '@material-ui/core';


interface FormValues{
    amount: any;
    date: any;
    category: String;
    comments: String;
}
const initialValues: FormValues = {
    amount: '',
    date: '',
    category: '',
    comments: '',
};
const valSchema = Yup.object().shape({
    amount: Yup.string().required('Required').nullable().matches(/^([\d]+)(\.[\d]{1,2})?$/i , 'Amount should be upto 2 decimal places are allowed!'),
    
    date: Yup.date().required('Required').nullable(),

    category: Yup.string().required('Required').max(100, 'Character Limit Reached!'),

    comments: Yup.string().notRequired().max(500, 'Character Limit Reached!')
});


const App = () => {
    const handleSubmit = (values: FormValues): void => {
        const details = {
            amount: values.amount,
            date: values.date,
            category: values.category,
            comments: values.comments
        }
        
        axios.post('http://localhost:5000/api/expense/add', details);
        alert("Your Expense got saved!");
        axios.get('http://localhost:5000/api/expense/');
                       
  };


    
    return <div className = "App">
        <h3>Add your expenses!</h3>
        <Formik initialValues = {initialValues} onSubmit = {handleSubmit} validationSchema = {valSchema}>
            {({dirty, isValid}) => {
                return(<Form>
                        <FormikField name = "amount" label = "Amount" type = "number"/>
                        <FormikField name = "date" label = "Date" type = "date" />
                        <FormikField name = "category" label = "Category" type ="string" />
                        <FormikOpField name = "comments" label = "Comments" type ="string" />
                        <Button variant="outlined" color="primary" disabled={!dirty || !isValid} type="submit">Save</Button>
                        
                    </Form>

            )}
                }
        </Formik>
    </div>
};

export default App;
