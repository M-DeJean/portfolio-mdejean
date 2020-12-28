import React, { Component } from 'react'
import malik from '../../images/malik.jpg'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div id="about" className="group">
                <div className="greetings">
                <img src={malik} alt="Malik"></img>
                    <h2>
                        Hello, I'm Malik DeJean, a motivated full stack engineer based in Sacramento, California
                    </h2>
                </div>
                <h2 className="about-me">About Me</h2>
                <p>
                    Before I even knew the definition of software engineering, I found my 12 year old self hosting a gaming forum with the use of PHP. This is where I found my passion. Since then, I have become a computer science major at University of California, Davis and a graduate from Thinkful's immersive software engineering program. I enjoy working with CSS, HTML, JavaScript, React, Node and PostgreSQL.<br />
                    When my eyes aren't glued to a computer screen, they're more than likely glued to the TV screen with an Xbox controller in hand. Wether it's completing a mission in a multiplayer game, playing a sport, or creating a React project, I belive that the key to success is to surround yourself with other like-minded individuals.
                </p>
            </div>
        )
    }
}