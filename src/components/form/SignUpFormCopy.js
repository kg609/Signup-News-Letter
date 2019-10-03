import React, { Component } from 'react';
import H1 from '../text/H1';
import Label from './Label';
import Email from '../inputs/Email';
import NextButton from '../buttons/NextButton';
import CheckBox from '../inputs/CheckBox';
import CheckBoxText from '../text/CheckBoxText';
import FirstName from '../inputs/FirstName';
import LastName from '../inputs/LastName';

class SignUpFormCopy extends Component {
    constructor(props) {
      super(props);

      this.state = {   
            email: "",
            firstName: "",
            lastName: "",
            show: true
        }
    }

    handleClick = (event) =>  {
        event.preventDefault();

       
   }

    getEmail = (event) => {
        return this.setState = ({
            [event.target.name]: event.target.value,
        });
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log(this.setState = ({
        //     [event.target.name]: event.target.value,
        // }));
        }

        toggleInputs = () => {
            console.log("The toggle function was fired")

            console.log(this.setState = ({ show: !this.state.show}));
        }
    

    render() {
        return (
            <div id="Signup-Form-Container">
                <form onSubmit={this.handleClick}>
                    <div className="signup-form">
                        <H1/>
                        <Label/>
                        <Email userEmail={this.getEmail} />
                        <FirstName />
                        <LastName/>
                        <NextButton nextInputs={this.toggleInputs} /> 
                    </div>
                    <div>
                        <CheckBox/>
                        <CheckBoxText/>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignUpFormCopy;