import React from 'react';
import previewImage from '../assets/preview.png';

const HeroComponent = () => {
    return (
        <div>
            <div className="main-container">
                <div className="title-container">
                    <h1>SIMPLE.<br/>USEFUL.<br/>MULTIPURPOSE.</h1>
                </div>
                <div className="buttons-container">
                    <div className="btn btn-blue-1">🔒 SECURITY</div>
                    <div className="btn btn-blue-4">✨ FUN</div>
                    <div className="btn btn-blue-7">🌐 OPEN SOURCE</div>
                    <div className="btn btn-blue-2">💹 ECONOMY</div>
                    <div className="btn btn-blue-5">🚀 XP SYSTEM</div>
                    <div className="btn btn-blue-8">🤖 AI POWERED</div>
                    <div className="btn btn-blue-3">📊 ANALYTICS</div>
                    <div className="btn btn-blue-6">🎮 LOUNGES</div>
                    <div className="btn btn-blue-9">✅ SUPPORTED</div>
                </div>
            </div>
            <div className="main-container">
                <img className="preview-image" src={previewImage}></img>
                <div className="title-container">
                    <h1>ONE BOT FOR<br/>EVERYTHING</h1>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;