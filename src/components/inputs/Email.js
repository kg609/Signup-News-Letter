import React from 'react';
import NextButton from '../buttons/NextButton';

const Email= () => {
    return (
        <div id="Email-Container">
            <input type="email" name="email" placeholder="enter email address" />
            <NextButton/>
        </div>
    );
}

export default Email;