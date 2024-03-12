import React from 'react';
import previewImage from '../assets/preview.png';

const buttons = [
    { id: 1, color: 'btn-blue-1', text: '🔒 SECURITY' },
    { id: 2, color: 'btn-blue-4', text: '✨ FUN' },
    { id: 3, color: 'btn-blue-7', text: '🌐 OPEN SOURCE' },
    { id: 4, color: 'btn-blue-2', text: '💹 ECONOMY' },
    { id: 5, color: 'btn-blue-5', text: '🚀 XP SYSTEM' },
    { id: 6, color: 'btn-blue-8', text: '🤖 AI POWERED' },
    { id: 7, color: 'btn-blue-3', text: '📊 ANALYTICS' },
    { id: 8, color: 'btn-blue-6', text: '🎮 LOUNGES' },
    { id: 9, color: 'btn-blue-9', text: '✅ SUPPORTED' },
];

const HeroComponent = () => {
    return (
        <div>
            <div className="main-container">
                <div className="title-container">
                    <h1>SIMPLE.<br/>USEFUL.<br/>MULTIPURPOSE.</h1>
                </div>
                <div className="title-container-mobile">
                    <h1>SIMPLE.<br/>USEFUL.<br/>MULTIPURPOSE.</h1>
                </div>
                <div className="buttons-container">
                    {buttons.map((button) => (
                        <div key={button.id} className={`btn ${button.color}`}>{button.text}</div>
                    ))}
                </div>
            </div>
            <div className="main-container gap">
                <img className="preview-image" src={previewImage}></img>
                <div style={{paddingRight: '3em'}} className="title-container">
                    <h1>ONE BOT FOR<br/>EVERYTHING</h1>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;