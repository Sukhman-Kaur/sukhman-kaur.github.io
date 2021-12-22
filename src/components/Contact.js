import React from 'react';
import { email } from '../data';

import Fade from 'react-reveal/Fade';

export default function Articles() {
    return (
        <div className="contact container-fluid section" name="contact">
            <Fade bottom>
                <h2 className="section-header">Let's Talk!</h2>
            </Fade>
            <Fade bottom>
            <br/>Work inquiries, questions or something else?<br/>
                <p>Hit me up at <a href={"mailto:" + email} className="card-link">{email}</a></p>
            </Fade>
        </div>
    )
}
