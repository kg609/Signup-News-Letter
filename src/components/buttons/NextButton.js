import React from 'react';

const NextButton = (props) => {

        return (
            <div id="Submit-Container">
                <button onClick={props.nextInputs} >Next</button>
            </div>
        );

 }

export default NextButton;