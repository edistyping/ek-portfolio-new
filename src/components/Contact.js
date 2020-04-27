import React from 'react';

import '../css/Contact.css'

class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            subject: 'Good day, Edward!',
            message: 'Hello Edward and very cool website!',
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event){
        event.preventDefault();
        alert("Submit button was pressed!");
    }


    render() {
        return (    
            <div style={{backgroundColor: "darkslategrey", minHeight: "90vh", overflow: "auto"}}>
                    <h1 style={{margin: "2% auto 0 auto", backgroundColor: "white", width: "fit-content", color: "red"}}>This is currently in-progress! Please Check back Later - Thank you!</h1>
                <div className="main-contact">
                    <div className="contact-left">
                        <p>Contact Me</p>
                        <p style={{fontSize: "0.5em"}}>Please leave any message or feedbacks.</p> 
                        <p style={{fontSize: "0.5em"}}>Thank you!</p>
                    </div>
        
                    <div className="contact-right">

                    <form method="POST" onSubmit={this.handleSubmit}>
                        <label>
                        <p>Your Email</p>
                        <textarea value={this.state.email} onChange={this.handleChange1}/>
                        </label>

                        <label>
                        <p>Subject</p>
                        <textarea value={this.state.subject} onChange={this.handleChange2}/>
                        </label>

                        <label>
                        <p>Message</p>
                        <textarea style={{height: "15vh"}} value={this.state.message} onChange={this.handleChange3}/>                        
                        </label>

                        <button type="submit" value="Send" style={{width: "150px", height: "50px", margin: "auto", backgroundColor: "lightskyblue"}}/>
                        
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;