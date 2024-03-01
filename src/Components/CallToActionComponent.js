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
                    <a href="https://canary.discord.com/api/oauth2/authorize?client_id=1212373212697071616&permissions=68152540393175&scope=applications.commands%20bot" className="btn btn-discord"><img src={discordLogo}></img> START USING HELPCORD</a>
                    <a href="https://github.com/kamazra4ka/helpcord-multipurpose-bot" className="btn btn-github"><img style={{ paddingRight: '14px' }} src={githubLogo}></img> VIEW THE SOURCE CODE</a>
                </div>
            </div>
        </div>
    );
};

export default CallToActionComponent;