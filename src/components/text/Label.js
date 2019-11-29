import React from 'react';




const Label = (props) => {
    return (
        <div id="Sign-Up-Label-Container" style={props.style}>
            <label> {props.Text} </label>
        </div>
    );
}

export default Label;