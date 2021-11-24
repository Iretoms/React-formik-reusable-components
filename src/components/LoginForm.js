import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup'
import FormikControl from './FormikControl';

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = yup.object({
        email: yup.string().email('Invalid Email').required('required'),
        password: yup.string().required('Required')
    })

    const onSubmit = values =>{console.log('values',values);}

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
                         control='input'
                         type='password'
                         label='Password'
                         name='password'
                       />  

                       <button type='submit' disabled={!formik.isValid}> Login</button>

                   </Form>
               )
           } 
        </Formik>
    );
};

export default LoginForm;