import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Work() {

    return (
        <div className="work container-fluid section" name="work">
        <Fade bottom>
            <h2 className="section-header">WORK EXPERIENCE</h2>
        </Fade>
        <div className="section-body section-width top-bot-border-xs">
            <Fade bottom>
                <a href="https://library.rrc.ca/tutoring/peer_tutoring" target="_blank" rel="noopener noreferrer" className="long-card">
                        <div className="long-card-body">
                            <h5 className="title">Peer Tutor - Red River College Polytechnic</h5>
                            <p className="remarks">July 2021 - Present</p>
                            <span className="badge badge-light tech">Programming</span>
                            <span className="badge badge-light tech">Statistics</span>
                            <span className="badge badge-light tech">Python</span>
                        </div>
                    </a>
                </Fade>
        </div>
        <div className="section-body section-width top-bot-border-xs">
            <Fade bottom>
                <a href="https://drive.google.com/file/d/1j1DNI3cz62S5fNF2F4_cFQM_ha8EYAK3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="long-card">
                        <div className="long-card-body">
                            <h5 className="title">Back-end developer - Internship</h5>
                            <p className="remarks">Aug 2020- Oct 2020</p>
                            <span className="badge badge-light tech">Laravel</span>
                            <span className="badge badge-light tech">PWA</span>
                            <span className="badge badge-light tech">Mail integration</span>
                        </div>
                    </a>
                </Fade>
        </div>
        <div className="section-body section-width top-bot-border-xs">
            <Fade bottom>
                <a href="https://drive.google.com/file/d/1zZBbQdJZkW2ld2RrBiag3xsJO8mtF6Xd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="long-card">
                        <div className="long-card-body">
                            <h5 className="title">Ecommerce back-end developer</h5>
                            <p className="remarks">Aug 2020- Dec 2020</p>
                            <span className="badge badge-light tech">Laravel</span>
                            <span className="badge badge-light tech">Bagisto</span>
                            <span className="badge badge-light tech">Rest API</span>
                        </div>
                    </a>
                </Fade>
        </div>
    </div>
    )
}