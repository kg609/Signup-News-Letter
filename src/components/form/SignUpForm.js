import React, { Component } from 'react';
import H1 from '../text/H1';
import Label from './Label';
import Email from '../inputs/Email';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import CheckBoxText from '../text/CheckBoxText';
import FirstName from '../inputs/FirstName';
import LastName from '../inputs/LastName';

class SignUpForm extends Component {
    constructor(props) {
      super(props);

      this.state = {   
            email: "",
            firstName: "",
            lastName: "",
            show: true
        }

    }

    handleClick = (event) =>  {
        event.preventDefault();

        this.setState({
            email: this.handleEmail,
            firstName: this.handleFNAME,
            lastName: this.handleLNAME
         });
         console.log(this.state.email);
         console.log(this.state.firstName);
         console.log(this.state.lastName);
   }

    handleEmail =  (event) => {
        // console.log(this.state.email);
        // console.log(event.target.name);
        // console.log(event.target.value);
        
       return  this.setState({ email: event.target.value });
    }

    handleFNAME =  (event) => {
        // console.log(this.state.email);
        // console.log(event.target.name);
        // console.log(event.target.value);
        
       return  this.setState({ firstName: event.target.value });
    }

    handleLNAME=  (event) => {
        // console.log(this.state.email);
        // console.log(event.target.name);
        // console.log(event.target.value);
        
        return this.setState({ lastName: event.target.value });
    }
        
    

    render() {
        return (
            <div id="Signup-Form-Container">
                <form onSubmit={this.handleClick}>
                    <div className="signup-form">
                        <H1/>
                        <Label/>
                        <Email userEmail = {this.handleEmail} />
                        <FirstName firstName  = {this.handleFNAME} />
                        <LastName lastName = {this.handleLNAME} />
                        <NextButton /> 
                    </div>
                    <div>
                        <CheckBox/>
                        <CheckBoxText/>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignUpForm;