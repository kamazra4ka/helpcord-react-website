import React from "react";
import discordLogo from "../assets/discordlogo.svg";
import githubLogo from "../assets/githublogo.svg";

const discordLink = "https://canary.discord.com/api/oauth2/authorize?client_id=1212373212697071616&permissions=68152540393175&scope=applications.commands%20bot";
const githubLink = "https://github.com/kamazra4ka/helpcord-multipurpose-bot"

const CallToActionComponent = () => {
    return (
        <>
            <div className="call-to-action-container">
                <div className="call-to-action-text">
                    <h1 className="call-to-action-heading">
                        BEGIN YOUR
                        <br />
                        JOURNEY NOW
                    </h1>
                </div>
                <div className="call-to-action-buttons">
                    <a
                        href={discordLink}
                        className="btn btn-discord"
                    >
                        <img src={discordLogo}></img> START USING HELPCORD
                    </a>
                    <a
                        href={githubLink}
                        className="btn btn-github"
                    >
                        <img style={{ paddingRight: "14px" }} src={githubLogo}></img> VIEW
                        THE SOURCE CODE
                    </a>
                </div>
            </div>
        </>
    );
};

export default CallToActionComponent;