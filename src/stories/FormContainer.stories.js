import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

export default {
  title: 'Form',
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


const divStyle = {
  background: "#000",
  width: "100%",
  border: "1px solid #FFF",
  height: "300px",
  margin: "auto"
}

export const UserEmail= () => (
  <div>
    <p>User Email Component description.
        </p>
    <form style={divStyle}>
      <div style={divStyle2}>

      </div>
    </form>
  </div>
);


const divStyle2 = {
  background: "#ddd",
  width: "90%",
  border: "1px solid #FFF",
  height: "200px",
  margin: "3rem auto"
}