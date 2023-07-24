import React from 'react';
import TextField from '@material-ui/core/TextField';
import {ErrorMessage, Field } from 'formik';
import './FormikField.css';

interface FormikFieldProps {
    name : string
    label : string
    type: string
}


const FormikField : React.FC <FormikFieldProps> = ({name, label, type ="text"}) =>{
    return(
        <div id ="FormikField">
            <Field
            required
            autoComplete = "off" 
            as = {TextField}
            label = {label}
            InputLabelProps = {{ shrink: true}} 
            name = {name}
            type= {type}
            size ="small"
            variant="filled"  
            fullWidth
            helperText = {<ErrorMessage name = {name}/>}
            />
        
            
                    </div>
        
        

    )
}


export default FormikField;

