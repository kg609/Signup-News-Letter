   import React from 'react';
   import H1 from "../text/H1";




const ThankYouPage= (props) => {
    return (
          <div id="Signup-Form-Container">
                        <div className="signup-form">
                            <H1 newH1 = {props.newHeader}/>
                            <div className="thank-you-message">
                                <h3>Thank you for signing up!</h3>
                                <p style={noMargin}> Look out for the latest news on your favorite shows.</p>
                            </div>
                        </div>
                </div>
    );
}


const noMargin = {margin: 0}
export default ThankYouPage;