import React, { Component } from 'react';


class Email extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
        }
    }

    handleSubmit = () => {

    }

    handleInputChange = (event) => {
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);

        this.setState = ({
            [event.target.name]: event.target.value,
        });
    }

    render(){
        return (
            <div id="Email-Container">
                <input type="email" name="email" placeholder="enter email address" onChange={this.handleInputChange} />
            </div>
        );
    }

}

export default Email;