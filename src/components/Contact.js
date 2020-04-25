import React from 'react';

import '../css/Contact.css'

class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: 'test@gmaiml.com',
            subject: 'Good day to you Edward! ',
            message: 'Message lalala',
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }
    
    handleChange1(event){
        this.setState({email: event.target.value});
    }
    handleChange2(event){
        this.setState({subject: event.target.value});
    }
    handleChange3(event){
        this.setState({message: event.target.value});
    }


    render() {
        return (    
            <div style={{backgroundColor: "darkslategrey", minHeight: "90vh", overflow: "auto"}}>
                <div className="main-contact">
                    <div className="contact-left">
                        <p>Contact Me</p>
                        <p style={{fontSize: "0.5em"}}>Please leave any message or feedbacks.</p> 
                        <p style={{fontSize: "0.5em"}}>Thank you!</p>
                    </div>
        
                    <div className="contact-right">
                    <form>
                        <label>
                        <p>Your Email</p>
                        <textarea value={this.state.email} onChange={this.handleChange1}/>
                        </label>

                        <label>
                        <p>Your Subject (Optional)</p>
                        <textarea value={this.state.subject} onChange={this.handleChange2}/>
                        </label>

                        <label>
                        <p>Message</p>
                        <textarea style={{height: "15vh"}} value={this.state.message} onChange={this.handleChange3}/>
                        
                        </label>
                        
                        <input type="submit" value="Send" style={{textAlign: "center", width: "40%", height: "8%", margin: "5% auto", backgroundColor: "lightskyblue"}}/>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;