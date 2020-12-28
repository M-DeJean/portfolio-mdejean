import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <h2>Contact Info</h2>
                <div className="contact-icon">

                    <div className="icon">
                        <h3>GitHub</h3>
                        <i className="fab fa-github"></i>
                    </div>
                    <div className="icon">
                        <h3>Linkedin</h3>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="icon">
                        <h3>Email</h3>
                        <i className="far fa-envelope"></i>
                    </div>
                </div>
            </div>
        )
    }
}