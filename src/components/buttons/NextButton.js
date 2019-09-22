import React, { Component } from 'react';

 class NextButton  extends Component  {
     constructor(props) {
         super(props);
         this.State = '';
     }
    
    onNextClick()  {
        return  alert('This function works! I think lol.')
    }

    render() {
        return (
            <div id="Submit-Container">
                <button onClick={this.onNextClick}>Next</button>
            </div>
        );
    }


 }

export default NextButton;