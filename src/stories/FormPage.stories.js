import React from 'react';
import { action } from '@storybook/addon-actions';
import '../App.css';




export default {
  title: 'Form Pages',
};

export const EmailForm= () => {
  return (
    <div>
      <p>This is the complete email form that users will see first once the page is loaded.</p>

      <div id="Signup-Form-Container" style={{margin: "auto", height: "250px"}}>
                    <form >
                        <div className="signup-form">
                        <h1 style={{fontFamily: "Elaine_D02", color: "#B6FDBF", fontSize: "60px"}}>join the list</h1>
                        <p style={{fontSize: "20px", fontFamily: "Azo-Sans",  textAlign: "center"}}> SIGN UP FOR THE TLC NEWSLETTER.</p>
                        <input style={{ display: "block", width: "50%", padding: "5px", borderRadius: "5px", margin: "70px auto auto"}} placeholder="enter email address" type="text" />
                        <div style={{textAlign: "center", fontFamily: "Azo-Sans"}}>
                          <button onClick={action('clicked the submit button')} style={{padding: "5px 30px", borderRadius: "5px", backgroundColor: "red", border: "none", color: "white"}}>Submit</button>
                        </div>
                        <input style={{ display: "block",margin: "auto"}}  type="checkbox"/>
                        <div style={{textAlign: "center", fontFamily: "Azo-Sans"}}>
                          <small>I agree to receive information from Discovery Communications 
                            <span style={{display: "block"}}> in accordance with the following Privacy Policy</span>
                          </small>
                        </div>
                        </div>
                    </form>
            </div>
    </div>
  )
}
