import React, {Component} from 'react';

import H1 from '../text/H1';
import Label from './Label';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import CheckBoxText from '../text/CheckBoxText';
import FirstName from '../inputs/FirstName';
import LastName from '../inputs/LastName';



class UserFullNameForm extends Component {
    continue = (e) => {
        e.preventDefault();

        this.props.nextStep();
        this.props.handleClick();
    }

    render(){
        return (
                <div id="Signup-Form-Container">
                     <form onSubmit={this.continue}>
                        <div className="signup-form">
                            <H1/>
                            <Label/>
                            <div className="input-names-container">
                                <FirstName firstName  = {this.props.firstName} />
                                <LastName lastName = {this.props.lastName} />
                            </div>
                            <NextButton onClick= {this.props.handleClick}  /> 
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

export default UserFullNameForm;