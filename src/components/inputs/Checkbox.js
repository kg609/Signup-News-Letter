import React from 'react';


const CheckBox= () => {
    return (
        <div id="Checkbox-Container">
            <input type="checkbox" name="opt-in"  />
            <small className="checkbox-text">I agree to receive information from Discovery Communications <span>in accordance with the following Privacy Policy</span></small>
        </div>
    );
}


export default CheckBox;