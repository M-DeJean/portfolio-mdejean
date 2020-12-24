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
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <section>
        </section>
        </>
        )
    }
}