import React from 'react';

import H1 from '../text/H1';
import Label from './Label';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import CheckBoxText from '../text/CheckBoxText';
import FirstName from '../inputs/FirstName';
import LastName from '../inputs/LastName';



const UserFullNameForm = (props) => {
    return (
          <div id="Signup-Form-Container">
                        <div className="signup-form">
                            <H1/>
                            <Label/>
                            <FirstName firstName  = {props.firstName} />
                            <LastName lastName = {props.lastName} />
                            <NextButton  /> 
                        </div>
                        <div>
                            <CheckBox/>
                            <CheckBoxText/>
                        </div>
                </div>
    );
}

export default UserFullNameForm;