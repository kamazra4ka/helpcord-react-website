import React from 'react';
import discordLogo from '../assets/discordlogo.svg';
import githubLogo from '../assets/githublogo.svg';

const CallToActionComponent = () => {
    return (
        <div>
            <div className="call-to-action-container">
                <div className="call-to-action-text">
                    <h1 style={{ marginBlockEnd: 0 }}>BEGIN YOUR<br></br>JOURNEY NOW</h1>
                </div>
                <div className="call-to-action-buttons">
                    <div className="btn btn-discord"><img src={discordLogo}></img> START USING HELPCORD</div>
                    <div className="btn btn-github"><img style={{ paddingRight: '14px' }} src={githubLogo}></img> VIEW THE SOURCE CODE</div>
                </div>
            </div>
        </div>
    );
};

export default CallToActionComponent;