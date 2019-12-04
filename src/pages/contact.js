import React, { Component } from "react";
import '../assets/pages.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="contactForm">
                <h1>Contact Cindy</h1>

                <form action="/" className="contact">

                <label>First Name</label>
                <input type="text" className='fname' name='firstName' placeholder='first name' value={this.state.fname} onChange={e => this.setState({fname: e.target.value})}/>

                <label>Last Name</label>
                <input type="text" className='lname' name="lastName" placeholder='last name' value={this.state.lname} onChange={e => this.setState({lname: e.target.value})}/>

                <label>Email</label>
                <input type="email" className='email' name='email' placeholder='your email' value={this.state.email} onChange={e=> this.setState({email: e.target.value})}/>

                <textarea name="message" className="message" cols="30" rows="10" placeholder='Write your message' value={this.state.message} onChange={e => this.setState({message: e.target.value})}></textarea>

                <input type="submit" onClick={e => this.handleFormSubmit(e)} value='Send'/>
                </form>
            
            </div>
        )
    }
}

export default Contact;