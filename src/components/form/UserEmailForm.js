import React, { Component } from 'react';

import H1 from '../text/H1';
import Label from './Label';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import CheckBoxText from '../text/CheckBoxText';
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
                            <H1/>
                            <Label/>
                            <Email userEmail = {this.props.email} />
                            <NextButton  /> 
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

export default UserEmailForm;