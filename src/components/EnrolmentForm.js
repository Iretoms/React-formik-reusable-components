import React from 'react';
import {Formik, Form} from 'formik'
import * as yup from 'yup'
import FormikControl from './FormikControl';

const EnrolmentForm = () => {
    const dropCourseOptions = [
        {key:'Select a course', value:''},
        {key:'ReactJs', value:'reactjs'},
        {key:'NodeJs', value:'nodejs'},
        {key:'Angular', value:'angular'}
    ]

    const checkSkillOptions = [
        {key:'HTML', value:'html'},
        {key:'CSS', value:'css'},
        {key:'JavaScript', value:'javascript'}
    ]

    const initialValues = {
        email:'',
        bio: '',
        course:'',
        skillSet: [],
        courseDate: null
    }

     const validationSchema= yup.object({
         email: yup.string().email('Invalid email format').required('Required'),
         bio: yup.string().required('Required'),
         course: yup.string().required('Required'),
         courseDate: yup.date().required('Required').nullable()
     })

     const onSubmit= values =>{
         console.log('form data', values);
     }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
           {
               formik =>(
                   <Form>
                       <FormikControl
                         control='input'
                         type='email'
                         name='email'
                         label='Email'
                       />

                       <FormikControl
                         control='textarea'
                         name='bio'
                         label='Bio'
                       />

                       <FormikControl
                         control='select'
                         name='course'
                         label='Course'
                         options={dropCourseOptions}
                       />

                       <FormikControl
                         control='checkbox'
                         name='skillSet'
                         label='Skill Set'
                         options={checkSkillOptions}
                       />

                       <FormikControl
                         control='date'
                         name='courseDate'
                         label='Course Date'
                       />

                       <button type='submit' disabled={!formik.isValid}> Submit</button>
                   </Form>
               )
           } 
        </Formik>
    );
};

export default EnrolmentForm;