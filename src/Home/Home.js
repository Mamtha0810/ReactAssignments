import React, { Component } from 'react'
import PropTypes from 'prop-types';

import UserSubmissionForm from '../UserSubmissionForm/UserSubmissionForm'
import { withRouter } from 'react-router-dom';
import '../App.css';

class home extends Component {
    constructor(props) {
    super(props)

    // Pro tip: The best place to bind your member functions is in the component constructor
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      loginPage: 'login',
      submitPage: 'submit'
    }
  }

  onSubmitForm() {
      console.log ("hiii +"+JSON.stringify(this.props));
      console.log ("hiii +"+JSON.stringify(this.props.location.pathname));
      
    //  this.setState({ page: this.state.page + 1 })
    //  this.props.history.push('/submit')
  }  

  previousPage() {
    this.setState({ page: this.state.loginPage })
   // e.preventDefault();
  }

  render() {
    const { onSubmitForm } = this.props
    const { page } = this.state
    return (<div className="App">
          {<UserSubmissionForm  />}
      </div>
    )
  }
}


export default home


