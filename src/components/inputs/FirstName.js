import React from 'react';


const FirstName = (props) => {



        return (
            <div id="FirstName-Container">
                <input type="text" name="email" placeholder="First Name" onChange={props.userEmail} />
            </div>
        );

}

export default FirstName;