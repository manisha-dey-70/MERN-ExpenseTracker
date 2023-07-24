import React from 'react';
import TextField from '@material-ui/core/TextField';
import {ErrorMessage, Field } from 'formik';
import './FormikOpField.css';

interface FormikOpFieldProps {
    name : string
    label : string
    type: string
}

const FormikOpField : React.FC <FormikOpFieldProps> = ({name, label, type ="text "}) =>{
    return(
        <div className="FormikOpField">
            <Field
            autoComplete = "off" 
            as = {TextField}
            label = {label} 
            InputLabelProps = {{ shrink: true}}
            name = {name}
            type= {type}
            size ="small"
            variant="filled"  
            fullWidth
            helperText = {<ErrorMessage name = {name}
             />}
            />
        
            
                    </div>
        

    )
}


export default FormikOpField;

