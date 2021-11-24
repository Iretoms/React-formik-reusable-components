import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const dropDownOptions = [
        {key:'Select an option', value:''},
        {key:'Option 1', value:'option1'},
        {key:'Option 2', value:'option2'},
        {key:'Option 3', value:'option3'}
    ]

    const radioOptions = [
        {key:'Option 1', value:'rOption1'},
        {key:'Option 2', value:'rOption2'},
        {key:'Option 3', value:'rOption3'}
    ]

    const checkboxOptions = [
        {key:'Option 1', value:'cOption1'},
        {key:'Option 2', value:'cOption2'},
        {key:'Option 3', value:'cOption3'}
    ]

    const initialValues = {
        email : '',
        comment:'',
        selectOption:'',
        radioOption:'',
        checkboxOption: [],
        birthDate: null

    }
    const validationSchema = Yup.object({
        email : Yup.string().required('required'),
        comment : Yup.string().required('required'),
        selectOption : Yup.string().required('required'),
        radioOption : Yup.string().required('required'),
        checkboxOption : Yup.array().required('required'),
        birthDate: Yup.date().required('Required').nullable()

    })

    const onSubmit = values =>{console.log('Form data', values);}

    return (
        <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik =>(
                    <Form>
                        <FormikControl 
                          control='input' 
                          type='email' 
                          label='Email' 
                          name='email'
                        />

                        <FormikControl 
                          control='textarea'  
                          label='Comment' 
                          name='comment'
                        />

                        <FormikControl 
                          control='select'  
                          label='Select a drink' 
                          name='selectOption'
                          options={dropDownOptions}
                          />

                        <FormikControl 
                          control='radio'  
                          label='Radio Topic' 
                          name='radioOption'
                          options={radioOptions}
                        />

                        <FormikControl 
                          control='checkbox'  
                          label='Checkbox Topic' 
                          name='checkboxOption'
                          options={checkboxOptions}
                        />  

                        <FormikControl 
                          control='date'  
                          label='Birthday' 
                          name='birthDate'
                        />         

                        <button type='submit'>submit</button>
                    </Form>
                )
            }
        </Formik>
    );
};

export default FormikContainer;