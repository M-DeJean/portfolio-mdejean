import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            //CONTACT SECTION
            <article className="contact" id="contact">
                <h2>Contact Info</h2>
                <ol className="contact-icon">
            {/* Each contact link will be represented by its respective fontawesome icon */}
                    <li className="icon">
                        {/* github */}
                        <a href="https://github.com/M-DeJean" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <h3>GitHub</h3>
                    </li>
                    <li className="icon">
                        {/* linkedin */}
                        <a href="https://www.linkedin.com/in/mdejean13/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <h3>Linkedin</h3>
                    </li>
                    <li className="icon">
                        {/* email */}
                        <a href="mailto: dejeantech@yahoo.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a>
                        <h3>Email</h3>
                    </li>
                    <li className="icon">
                        {/* twitter */}
                        <a href="https://twitter.com/DeJeanTech1" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                        <h3>Twitter</h3>
                    </li>
                </ol>
            </article>
        )
    }
}