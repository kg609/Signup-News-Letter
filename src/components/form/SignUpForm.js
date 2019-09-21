import React from 'react';
import H1 from '../text/H1';
import Label from './Label';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import CheckBoxText from '../text/CheckBoxText';

const SignUpForm = () => {
    return (
        <div id="Signup-Form-Container">
            <form>
                <div class="signup-form">
                    <H1/>
                    <Label/>
                    <NextButton/> 
                </div>

                <CheckBox/>
                <CheckBoxText/>
            </form>
        </div>
    );
}

export default SignUpForm;