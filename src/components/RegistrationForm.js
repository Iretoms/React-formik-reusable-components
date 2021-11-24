import React from 'react';
import {Formik, Form} from 'formik'
import * as yup from 'yup'
import FormikControl from './FormikControl';

const RegistrationForm = () => {
    const options =[
        {key: 'Email', value: 'emailmoc'},
        {key: 'Telephone', value: 'telephonemoc'}
    ]

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const validationSchema= yup.object({
        email: yup.string().email('Invalid Email Format').required('required'),
        password: yup.string().required('required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), ''],'passwords must match').required('required'),
        modeOfContact: yup.string().required('required'),
        phone: yup.string().when('modeOfContact',{
            is:'telephonemoc',
            then: yup.string().required('Required')
        }) 
    })

    const onSubmit= values => {
        console.log('Form Data', values );
    }

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

                      <FormikControl
                         control='input'
                         type='password'
                         label='Confirm Password'
                         name='confirmPassword'
                       />

                      <FormikControl
                         control='radio'
                         label='Mode of Contact'
                         name='modeOfContact'
                         options={options}
                       />

                      <FormikControl
                         control='input'
                         type='text'
                         label='Phone Number'
                         name='phone'
                       />

                       <button type='submit' disabled={!formik.isValid}> Register </button>
                   </Form>
               )
           } 
        </Formik>
    );
};

export default RegistrationForm;