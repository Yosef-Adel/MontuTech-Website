import React from 'react'
import classes from './style/contact.module.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
const ContactUs = () => {
 
  const form = useRef();
  const initialValues = {
    name: "",
    email : "",
    message: ""
}
const validationSchema= Yup.object().shape({
  name: Yup.string().min(3).required("Name field is required"),
  email: Yup.string().min(3).email('Invalid email address').required(" Email field is required"),
  message: Yup.string().required("Message field is required") 

})
  const onSubmit =(data,{resetForm })=>{
    emailjs.sendForm('service_tzx3gt8', 'template_bynoide',form.current, 'Q8weAd8VHeuDaongL')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    }); 
    resetForm();
  }
  return (
    <div  className= {classes.container} >
      <Formik initialValues={initialValues}  validationSchema={validationSchema} onSubmit={onSubmit}  >
      <Form ref={form}  className={classes.formBox} >
        <div className={classes.control}>
          
          <Field type="text" name="name"  className={classes.formField} />
          <label className={classes.formLable}>Name </label>
          <ErrorMessage name='name' component="span"  />
        </div>
        <div className={classes.control}>
          <Field type="email" name="email" className={classes.formField}/>
         <label className={classes.formLable}>Email</label>
          <ErrorMessage name='email' component="span"/>
        </div>
         <div className={classes.control}> 
          <Field as= "textarea" name="message" className={classes.formField} />
         <label className={classes.formLable}>Message</label>
          <ErrorMessage name='message' component="span"/>
         </div>
        
          <div className={classes.actions}>
          <button type="submit"  > Send</button>
          </div>
    </Form>
      </Formik>
    </div>
  )
}

export default ContactUs
