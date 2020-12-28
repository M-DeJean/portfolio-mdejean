import React, { Component } from 'react';
import './Projects.css';
import spaced from '../../images/spaced.png';
import techFighter from '../../images/techFighter.png';
import gofish from '../../images/gofish.png';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects" id="projects">
                <h2>Projects</h2>
                <div className="project-list">

                    <div className="project" id="gofish">
                        <h3>GoFish.io</h3>
                        <img src={gofish} alt="gofish app" />
                        <p>
                            An online version of the classic go fish card game that can be enjoyed by 2-4 players. Built using HTML, CSS, JavaScript, React, Node, Express, PostgreSQL, and Socket.io
                        </p>
                        <i className="fab fa-github fa-2x"></i>
                    </div>
                    <div className="project" id="techfighter">
                        <h3>TechFighter</h3>
                        <img src={techFighter} alt="tech fighter app" />
                        <p>
                            A turn-based fighting game inspired by arcade classics from the 90s. Built with HTML, CSS, JavaScript, React, Node, Express, and PostgreSQL
                        </p>
                        <i className="fab fa-github fa-2x"></i>
                    </div>
                    <div className="project" id="spaced">
                        <h3>Spaced Repetition</h3>
                        <img src={spaced} alt="spaced repetition app" />
                        <p>
                            A langage learning app that teaches users Portuguese by using the spaced repetition technique. Built with HTML, CSS, JavaScript, React, Node, and Express
                        </p>
                        <i className="fab fa-github fa-2x"></i>
                    </div>
                </div>
            </div>
        )
    }
}