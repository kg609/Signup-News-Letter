import React, { Component } from 'react';

import H1 from '../text/H1';
import Label from './Label';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import Email from '../inputs/Email';



class UserEmailForm extends Component {
    continue = (e) => {
        e.preventDefault();

        this.props.nextStep();
    }

    render(){
        return (
            
                <div id="Signup-Form-Container">
                    <form onSubmit={this.continue}>
                        <div className="signup-form">
                            <H1 newH1 = {this.props.newHeader} />
                            <Label Text = {this.props.labelText} />
                            <Email userEmail = {this.props.email} />
                            <NextButton  /> 
                            <CheckBox/>
                        </div>
                    </form>
            </div>
        
        );
    }
}

export default UserEmailForm;