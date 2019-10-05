/* eslint-disable default-case */
import React, { Component } from 'react';

import UserFullNameForm from './UserFullNameForm.';
import UserEmailForm from './UserEmailForm';
import ThankYouPage from '../form/ThankYouPage';

class SignUpForm extends Component {
    constructor(props) {
      super(props);

      this.state = {   
            email: "",
            firstName: "",
            lastName: "",
            step: 1
            // showContent: true
        }
    }

    handleClick = (event) =>  {
        event.preventDefault();

        this.setState({
            email: this.handleEmail,
            firstName: this.handleFNAME,
            lastName: this.handleLNAME,
            step: this.state.step + 1
            // showContent: !this.state.showContent
         });

        // console.log(this.state.email);
        // console.log(this.state.firstName);
        // console.log(this.state.lastName);
        // console.log(this.state.showContent);
   }

    handleEmail =  (event) => {
       return  this.setState({ email: event.target.value });
    }

    handleFNAME =  (event) => {
       return  this.setState({ firstName: event.target.value });
    }

    handleLNAME = (event) => {
        return this.setState({ lastName: event.target.value });
       
    }
    
    nextStep = () => {
        return this.setState({ step: this.state.step + 1 })
    }
    

    render() {
        switch(this.state.step) {
            case 1:
            return  (
                    <form onSubmit={this.handleClick}>
                        <UserEmailForm
                         email = {this.handleEmail}
                         />
                    </form>
            )


            case 2:
                return (
                        <form onSubmit={this.handleClick}>
                        <UserFullNameForm
                            firstName = {this.handleFNAME}
                            lastName = {this.handleLNAME}
                            onSubmit = {this.handleClick}
                            />;
                        </form>
                )
                

            case 3: 
            return  <ThankYouPage/>
        }
    }
}


export default SignUpForm;