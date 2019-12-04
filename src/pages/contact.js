import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1>Contact Ciny</h1>
                <form action="/" className="contact">
                <label>First Name</label>
                <input type="text" className='fname' name='firstName' placeholder='first name'/>
                </form>
            
            </div>
        )
    }
}