import React from 'react';

import '../css/Contact.css'

const Contact = () => {


    return (    
        <div style={{borderColor: "silver", height: "100%"}}>
            <div className="main-contact">
                <div className="contact-left">
                    <p>Contact Me</p>
                    <p style={{fontSize: "0.5em"}}>Please leave any message or feedbacks.</p> 
                    <p style={{fontSize: "0.5em"}}>Thank you!</p>
                </div>
    
                <form className="contact-right">
                    <label>
                    <p>Your Name</p>
                    <input type="text" style={{width:"80%", height: "5vh",}}/>
                    </label>

                    <label>
                    <p>Your Email</p>
                    <input type="text" style={{width:"80%"}}/>
                    </label>

                    <label>
                    <p>Message</p>
                    <input type="text" style={{width: "80%", }}/>
                    </label>
                    
                    <input type="submit" value="Send" style={{textAlign: "center", width: "40%", height: "8%", margin: "auto", backgroundColor: "lightskyblue"}}/>
                </form>


            </div>
        </div>
    )
}

export default Contact;