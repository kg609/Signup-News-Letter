This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Case Study

Upon completing this assessment, I was able to increase my skills in the following areas:

* Creating functional, dynamic, and reusable ReactJS components
* Field Validation
* Atomic design principles
* Responsiveness
* Code Documentation
* Live UI Documentation
* Continuous Deployment
* Git Version Control

## Project Requirements

The full breakdown for anyone interested:

1. Must use either React JS or React Native to complete the project
2. Must build and run in either a web browser or device simulator
3. May use third party libraries to complete this task
4. Organize your component into atoms, molecules and one singular organism in a way that shows you have a good understanding of atomic design principles and reuse
5. The component will have 4 responsive breakpoints as shown in Sketch file:
* Mobile
* Tablet Portrait
* Tablet Landscape
* Desktop
6. The component will have 5 states:
* Email address collection
* Email address collection with error message
* Full name collection
* Full name collection with error message
* Congratulations! message
7. Form validation will be as follows:
* Email Address field: Required and must be valid email
* First Name field: Required
* Last Name field: Required
8. Component will not change states while invalid fields exist
9. Form will not actually POST anywhere. Just console log the object that holds {email, first, last } values and toggle to ‘congratulations’ state.
10. Use Storybook to create an interactive documentation guide for:
* Each form state
* Each reusable component
* Each reusable container