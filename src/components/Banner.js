import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip';
import { Link } from "react-scroll";
import { email, githubUrl, linkedInUrl,twitterUrl, displayName, bannerDescription, resumePdfTitle } from '../data';
import { FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

export default function Banner() {
    

    const [showTitle, setShowTitle] = useState(false)
    const [showButtons, setShowButtons] = useState(false)

    useEffect(() => {
        setShowTitle(true)
        setTimeout(() => {
            setShowButtons(true)
        }, 1300)
    }, [])

    return (
        <div className="banner">
            <ReactTooltip />
            <div className="background"></div>
            <div className="container-fluid banner-content">
                <div className="name-wrapper">
                    <h1 className={`name fade-left-sm ${showTitle ? "show" : ""}`}>{displayName.toUpperCase()}</h1>
                    <p className={`section-description fade-right-sm ${showTitle ? "show" : ""}`}>{bannerDescription}</p>
                </div>

                <div className={`delay-sm ${showButtons ? "show" : ""}`}>
                    <a className="btn btn-dark btn-main d-none d-sm-block" href={"/portfolio/"+resumePdfTitle} download> Download Resume</a>
                    <Link
                        className="btn btn-secondary d-none d-sm-block"
                        to="projects"
                        smooth={true}
                        duration={300}
                    >View Projects</Link>
                    <div className="social-media-buttons-group">
                        
                        <a
                            href={githubUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="svg-link"
                            title="Github"
                            data-tip="Github"
                        >
                           <GoMarkGithub  style={style.link}/>
                        </a>
                        <a
                            href={linkedInUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="svg-link"
                            title="LinkedIn"
                            data-tip="LinkedIn"
                        >
                           <FaLinkedinIn  style={style.link}/>
                        </a>
                        <a href={"mailto:" + email} className="svg-link" title="Email" data-tip="Email">
                            <FaEnvelope style={style.link}/>
                        </a>
                        <a
                            href={twitterUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="svg-link"
                            title="Twitter"
                            data-tip="Twitter"
                        >
                           <FaTwitter style={style.link}/>
                        </a>
                    </div >

                </div>
            </div >
        </div >
    )
}
const style={
    link:{
        color:"whitesmoke"
    }
}
