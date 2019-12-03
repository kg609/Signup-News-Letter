import React, { Component } from 'react';

import H1 from '../text/H1';
import Label from  '../text/Label';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/Checkbox';
import Email from '../inputs/Email';



class UserEmailForm extends Component {
    continue = (e) => {
        e.preventDefault();

        this.props.nextStep();
    }

    render(){
       const {          
            newHeader,
            labelText,
            email
        }  =  this.props;

        return (           
                <div id="Signup-Form-Container">
                    <form onSubmit={this.continue}>
                        <div className="signup-form">
                            <H1 newH1 = { newHeader } />
                            <Label Text = { labelText } />
                            <Email userEmail = { email }  />
                            <NextButton  /> 
                            <CheckBox/>
                        </div>
                    </form>
            </div>
        
        );
    }
}

export default UserEmailForm;