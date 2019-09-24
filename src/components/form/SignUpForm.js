import React, { Component } from 'react';
import H1 from '../text/H1';
import Label from './Label';
import Email from '../inputs/Email';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import CheckBoxText from '../text/CheckBoxText';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

      this.state = {   
            firstName: "",
            lastName: ""
        }
    }

    handleClick = (e) =>  {
        e.preventDefault();

       

        console.log("Prevented default form submission");
        console.log(this.state);
    }

    render() {
        return (
            <div id="Signup-Form-Container">
                <form onSubmit={this.handleClick}>
                    <div className="signup-form">
                        <H1/>
                        <Label/>
                        <Email />
                        <NextButton/> 
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