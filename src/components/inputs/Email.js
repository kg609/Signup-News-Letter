import React from 'react';


const Email = (props) => {



        return (
            <div id="Email-Container">
                <input type="email" name="email" placeholder="enter email address" onChange={props.userEmail} />
            </div>
        );

}

export default Email;