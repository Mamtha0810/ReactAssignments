import React, { Component } from 'react'
import {Field, reduxForm, SubmissionError   } from 'redux-form'
import  './UserForm.css'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }
  return errors
}


 const renderField = ({ input, radio, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className ='errorcontainer'>
      <input {...input} placeholder={label} type={type} />

      {touched && error && <span>{error}</span>}
    </div>
  </div>
)
  class UserSubmissionForm  extends Component {
    submit = values => {
      const errors = {}
      if (!values.username) {
        throw new SubmissionError({ username: 'User Name is required', _error: 'Login failed!' })
      } else if (values.username.length > 15) {
        throw new SubmissionError({ username: 'Must be 15 characters or less', _error: 'Login failed!' })
      }
      if (!values.lastname) {
        throw new SubmissionError({ username: 'last Name is required', _error: 'Login failed!' })
      } else if (values.lastname.length > 15) {
        throw new SubmissionError({ username: 'Must be 15 characters or less', _error: 'Login failed!' })
      }
      console.log('values' +JSON.stringify(values))
      return new Promise((resolve, reject) => {
         setTimeout(() => {
          
             this.props.history.push({
               pathname: '/submit',
               values : values
             })
           
         }, 10) 
       })
     }
    
        render(){
          const { error, handleSubmit, pristine, reset, submitting } = this.props

        return (
        <div className='container'>
          <h2> Login Form </h2>
          <form onSubmit={handleSubmit(this.submit)}>
            <Field 
              name="username"
              type="text"
              component={renderField}
              label="User Name"
            />
           
            <Field
              name="lastname"
              type="text"
              component={renderField}
              label="Last Name"
            />
            <Field 
             name="email" 
             component={renderField}
             type="email"
             label="Email"
            />
              <Field 
             name="phone" 
             component={renderField}
             type="phone"
             label="Phone"
            />
              <label>Gender</label>
              <div>
                <label>Male <Field name="gender" component={renderField} type="radio" value="male"/> </label>
                <label>Female<Field name="gender" component={renderField} type="radio" value="female"/> </label>
              </div>
              <button type="submit" disabled={submitting}>
                Log In
              </button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear
              </button>
          </form>
          </div>
        )
      }
    }

export default reduxForm({
  form: 'submitValidation',
  validate
  // a unique identifier for this form
})(UserSubmissionForm)
