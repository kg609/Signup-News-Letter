import React from 'react';


const LastName = (props) => {



        return (
            <div id="LastName-Container">
                <input type="text" name="LName" placeholder="Last Name" onChange={props.lastName}  required />
            </div>
        );

}

export default LastName;