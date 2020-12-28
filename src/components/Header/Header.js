import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {

    myFunction = () => {
        const x = document.getElementById("mobile-links");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block"
        }
    }
    render() {
        return (
        <>
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo">
                Malik<span>DeJean</span>
            </label>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </>
        )
    }
}