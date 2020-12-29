import React, { Component } from 'react'
import malik from '../../images/malik.jpg'
import './About.css'

export default class About extends Component {
    render() {
        return (
            // ABOUT ME SECTION
            <article id="about" className="group">
                {/* Headline and image of me */}
                <div className="greetings">
                    <img src={malik} alt="Malik"></img>
                    <h2>
                        Hello, I'm Malik DeJean, a motivated full stack engineer based in Sacramento, California
                    </h2>
                </div>
                {/* Quick description of me */}
                <h2 className="about-me">About Me</h2>
                <p>
                    My passion for software engineering started at the age of 12. Before I even knew what a software engineer was, I found myself managing my own gaming forum with PHP and creating MySpace page layouts for my friends with CSS and HTML. I had no idea that I was coding at the time, but I knew that I wanted a career in the technology field. Since then, I have become a computer science major at the University of California, Davis, and a graduate from Thinkful's immersive software engineering program. I enjoy working with CSS, HTML, JavaScript, React, Node, and PostgreSQL. Most of all, I enjoy collaborating with other like-minded developers to reach a common goal.<br /><br/>
                    When my eyes aren't glued to a computer screen, they're more than likely glued to the TV screen with an Xbox controller in hand. I also have a passion for martial arts and have participated in several competitions over the years. I truly believe that my background in combat sports has mentally prepared me for any obstacle that I may face during my journey as a web developer.  
                </p>
                <hr />

            </article>
        )
    }
}