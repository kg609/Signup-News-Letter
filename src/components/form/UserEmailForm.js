import React from 'react';

import H1 from '../text/H1';
import Label from './Label';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import CheckBoxText from '../text/CheckBoxText';
import Email from '../inputs/Email';



const UserEmailForm = (props) => {
    return (
        <div id="Signup-Form-Container">
            <div className="signup-form">
                <H1/>
                <Label/>
                <Email userEmail = {props.email} />
                <NextButton  /> 
            </div>
            <div>
                <CheckBox/>
                <CheckBoxText/>
            </div>
    </div>
    );
}

export default UserEmailForm;