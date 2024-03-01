import React from 'react';

const CallToActionComponent = () => {
    return (
        <div>
            <div className="call-to-action-container">
                <div className="call-to-action-text">
                    <h1 style={{ marginBlockEnd: 0 }}>ARE YOU READY?</h1>
                </div>
                <div className="call-to-action-buttons">
                    <div className="btn btn-discord">🔒 START USING HELPCORD</div>
                    <div className="btn btn-github">✨ VIEW THE SOURCE CODE</div>
                </div>
            </div>
        </div>
    );
};

export default CallToActionComponent;