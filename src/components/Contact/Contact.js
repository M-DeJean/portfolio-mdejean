import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <h2>Contact Info</h2>
                <div className="contact-icon">

                    <div className="icon">
                        <a href="https://github.com/M-DeJean" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <h3>GitHub</h3>
                    </div>
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/mdejean13/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <h3>Linkedin</h3>
                    </div>
                    <div className="icon">
                        <a href="mailto: dejeantech@yahoo.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a>
                        <h3>Email</h3>
                    </div>
                    <div className="icon">
                        <a href="https://twitter.com/DeJeanTech1" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                        <h3>Twitter</h3>
                    </div>
                </div>
            </div>
        )
    }
}