import React from 'react';


const FirstName = (props) => {



        return (
            <div id="FirstName-Container">
                <input type="text" name="FName" placeholder="First Name" onChange={props.firstName}  required />
            </div>
        );

}

export default FirstName;