import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component{
    render(){
        return(
            <div className='footer'>
                <div className="inner-footer">
                    <div className="logo-container">
                        <h3>&copy; Malik DeJean 2020</h3>
                    </div>
                    <div className="footer-third">
                        <h1>Need Help?</h1>
                        <a href="#">Terms &amp; Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer-third">
                        <h1>Follow Me</h1>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </div>
                </div>
            </div>
        )
    }
}