import React, {Component} from 'react';

import H1 from '../text/H1';
import Label from '../text/Label';
import NextButton from '../buttons/NextButton';
import FirstName from '../inputs/FirstName';
import LastName from '../inputs/LastName';



class UserFullNameForm extends Component {
    continue = (e) => {
        e.preventDefault();

        this.props.nextStep();
        this.props.handleClick();
    }

    render(){
        const {
            newHeader,
            labelText,
            firstName,
            lastName,
            handleClick
        } = this.props;

        return (
                <div id="Signup-Form-Container">
                     <form onSubmit={this.continue} style={formWidth}>
                        <div className="signup-form">
                            <H1 newH1 = { newHeader } />
                            <Label Text = { labelText } style={lblPos} />
                            <div className="input-names-container" >
                                <FirstName firstName  = { firstName } />
                                <LastName lastName = {lastName} />
                            </div>
                                <NextButton onClick= {handleClick}   />
                        </div>
                        
                    </form>
                </div>
        );
    }
}

const formWidth = {
    width: '80%'
}

const lblPos= {
    left: '37%'
}


export default UserFullNameForm;