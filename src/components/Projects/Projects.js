import React, { Component } from 'react';
import './Projects.css';
import spaced from '../../images/spaced.png';
import techFighter from '../../images/techFighter.png';
import gofish from '../../images/gofish.png';

export default class Projects extends Component {
    render() {
        return (
            //PROJECT SECTION
            <article className="projects" id="projects">
                <h2>Projects</h2>
                 {/* container for all projects */}
                <ul className="project-list">

                    {/* each individual project has description image and GH link represented by icon */}
                    <li className="project" id="gofish">
                        <h3>GoFish.io</h3>
                        {/* image is a link to app */}
                        <a href="https://gofish-team2.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={gofish} alt="gofish app" /></a>
                        <p>
                            An online version of the classic go fish card game that can be enjoyed by 2-4 players. Built using HTML, CSS, JavaScript, React, Node, Express, PostgreSQL, and Socket.io
                        </p>
                        {/* gh link is its respective fontawesome icon */}
                        <a href="https://github.com/thinkful-ei-rabbit/capstone-three-client-team-b" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li className="project" id="techfighter">
                        <h3>TechFighter</h3>
                        <a href="https://tech-fighter-client.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={techFighter} alt="tech fighter app" /></a>
                        <p>
                            A turn-based fighting game inspired by arcade classics from the 90s. Built with HTML, CSS, JavaScript, React, Node, Express, and PostgreSQL
                        </p>
                        <a href="https://github.com/M-DeJean/tech-fighter-client" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li className="project" id="spaced">
                        <h3>Spaced Repetition</h3>
                        <a href="https://spaced-repetition-beryl.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={spaced} alt="spaced repetition app" /></a>
                        <p>
                            A language learning app that teaches users Portuguese by using the spaced repetition technique. Built with HTML, CSS, JavaScript, React, Node, and Express
                        </p>
                        <a href="https://github.com/M-DeJean/spaced-repetition" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
            </article>
        )
    }
}