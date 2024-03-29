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

    handleClick = () =>  {

        this.setState({
            email: this.handleEmail,
            firstName: this.handleFNAME,
            lastName: this.handleLNAME,
            step: this.state.step + 1
            // showContent: !this.state.showContent
         });

        console.log("user's email: " + this.state.email);
        console.log("user's firstname: " +this.state.firstName);
        console.log("user's lastname: " +this.state.lastName);
        console.log(this.state);
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
            return <UserEmailForm
                         email = {this.handleEmail}
                         nextStep = {this.nextStep}
                         labelText = "SIGN UP FOR THE TLC NEWSLETTER."
                         newHeader = "join the list"
                         />


            case 2:
                return<UserFullNameForm
                            firstName = {this.handleFNAME}
                            lastName = {this.handleLNAME}
                            nextStep = {this.nextStep}
                            labelText = "ALMOST DONE PLEASE ENTER YOUR FIRST AND LAST NAME."
                            newHeader = "join the list"
                            handleClick = {this.handleClick}
                            />;
                

            case 3: 
            return  <ThankYouPage
                        newHeader = "congratulations!"
                        />
        }
    }
}



export default SignUpForm;