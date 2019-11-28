import React from 'react';
import { action } from '@storybook/addon-actions';

import '../App.css';
import '../css/storybookcss/styles.css';

import  EmailForm from '../components/form/UserEmailForm';
import FullNameForm from '../components/form/UserFullNameForm.';
import ThankYouPage from '../components/form/ThankYouPage';




export default {
  title: 'Form Pages',
};

export const Email = () => (
  <div>
      <p>
          By reusing my form atom components, props, and the global state of the signup form wrapper element,
          I am able to create an email sign up form as shown here. This form allows me to store or transfer a user's email.
     </p>
    <EmailForm 
      newHeader = "join the list"
      labelText = "SIGN UP FOR THE TLC NEWSLETTER."
     />
  </div>
);

export const FullName= () => (
  <div>
    <p>
          By reusing my form atom components, props, and the global state of the signup form wrapper element,
          I am able to create a full name sign up form as shown here. This form allows me to store or transfer a user's first and last name.
    </p>
    <FullNameForm  
      newHeader = "join the list" 
      labelText = "ALMOST DONE PLEASE ENTER YOUR FIRST AND LAST NAME."
      
    />
  </div>
);

export const ThankYou = () => (
  <div>
      <p>
          By reusing my form atom components, props, and the global state of the signup form wrapper element,
          I am able to create a Thank you page to show that the form has been completed and submitted.
      </p>
    <ThankYouPage  newHeader = "congratulations" 
      
    />
  </div>
);
