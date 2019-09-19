import React from 'react';
import Email from '../inputs/Email';
import CheckBox from '../inputs/Checkbox';


const Label = () => {
    return (
        <div id="Sign-Up-Label-Container">
            <label>SIGN UP FOR THE TLC NEWSLETTER.</label>
            <Email/>
            <CheckBox/>      
        </div>
    );
}

export default Label;