import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {

    myFunction = () => {
        //Making mobile nav only show up when needed
        const x = document.getElementById("mobile-links");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block"
        }
    }
    render() {
        return (
            //HEADER
        <>
        <nav>
            {/* Mobile nav */}
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            {/* Logo (my name for now) goes here */}
            <label className="logo">
                {/* styling first and last name differently */}
                Malik<span>DeJean</span>
            </label>
            <ul>
                {/* nav links */}
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </>
        )
    }
}