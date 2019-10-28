import React from 'react';
import '../App.css';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Form Atoms',
};

export const SignupFormWrapper = () => (
  <div>
    <p>This is the form container/wrapper element for my Signup Newsletter Form. 
      It holds each of the smaller form components such as the email form, full name form, 
      and the thank you component. This wrapper element also stores the global state of the application and 
      manipulate each of its child components state.
        </p>
    <form style={divStyle}>

    </form>
  </div>
);

export const formElement = () => (
  <div>
    <p>This is the form element which allows the information entered into the form to be sent to a server to be 
      stored or reused throughout the application.
        </p>
    <form style={divStyle}>

    </form>
  </div>
);

export const H1Element = () => (
  <div>
    <p>This is the header/tiitle element of the form.</p>
      <h1 style={{fontFamily: "Elaine_D02", color: "#000", fontSize: "60px", textAlign: "center", marginTop: "70px"}}>join the list</h1>
  </div>
);

export const SignupText = () => (
  <div>
    <p>This text gives you an idea of what you will be signing up for.</p>
      <p style={{fontSize: "20px", fontFamily: "Azo-Sans",  textAlign: "center", marginTop: "70px"}}> SIGN UP FOR THE TLC NEWSLETTER.</p>
  </div>
);


export const EmailField = () => (
  <div>
    <p>This the email field that each user will be prompted to fill out first before proceeding to the next form component.</p>
      <input style={{ display: "block", width: "50%", padding: "5px", borderRadius: "5px", margin: "70px auto auto"}} placeholder="enter email address" type="text" />
  </div>
);

export const FirstNameField = () => (
  <div>
    <p>This the first name that each user will be prompted to fill out first before proceeding to the next form component.</p>
      <input style={{ display: "block", width: "50%", padding: "5px", borderRadius: "5px", margin: "70px auto auto"}} placeholder="enter you first name" type="text" />
  </div>
);

export const LastNameField = () => (
  <div>
    <p>This the last name field that each user will be prompted to fill out first before proceeding to the next form component.</p>
      <input style={{ display: "block", width: "50%", padding: "5px", borderRadius: "5px", margin: "70px auto auto"}} placeholder="enter your last name" type="text" />
  </div>
);

export const checkBox= () => (
  <div>
    <p>This checkbox element will be used to determine if a user has opted in to continue to have any future updates
      sent to their emails or not.
    </p>
      <input style={{ display: "block",margin: "auto", marginTop: "70px"}}  type="checkbox"/>
  </div>
);

export const checkBoxConsentText= () => (
  <div>
    <p>Text ensures that the user understands what they're signing up for and increases company's legal protection.</p>
    <div style={{textAlign: "center", fontFamily: "Azo-Sans", marginTop: "70px"}}>
      <small>I agree to receive information from Discovery Communications 
        <span style={{display: "block"}}> in accordance with the following Privacy Policy</span>
      </small>
    </div>
  </div>
);

export const SubmitButton= () => (
  <div>
    <p>The form submit button so that the infomation entered by the user can be processed</p>
    <div style={{textAlign: "center", fontFamily: "Azo-Sans", marginTop: "70px"}}>
      <button onClick={action('clicked the submit button')} style={{padding: "5px 30px", borderRadius: "5px", backgroundColor: "red", border: "none", color: "white"}}>Submit</button>
    </div>
  </div>
);

//  Inline CSS stlyling starts
const divStyle = {
  background: "#000",
  width: "100%",
  border: "1px solid #FFF",
  height: "300px",
  margin: "auto"
}


// Inline CSS stlyling  ends
