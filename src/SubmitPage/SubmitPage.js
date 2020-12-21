import React, {Component} from 'react';
import  '../UserSubmissionForm/UserForm.css'


const Submit = (props) => {
   console.log(JSON.stringify(props));
   const len = Object.keys(props.location.values).length;
   const objArray = Object.keys(props.location.values)
   const element=null;
   const goBack = () => {
    props.history.goBack();
    }
   const template = objArray.map(function(object,i){
            return ( <div> 
            <label>{object}</label>
            <span>{props.location.values[object]}</span>
            </div>)
    })
   
   return (
     <div className='radiobtncontainer'> 
        <h2>User Submitted Values</h2>
            { template }
            <button onClick={goBack}>Back</button> 
      </div>
    )
  
}
export default Submit;