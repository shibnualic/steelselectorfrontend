import React, { useState, useEffect } from 'react';
import './SpashScreen.css';
import animated_logo from '../Assets/Steelselector Animated Logo.gif';

function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide the splash screen after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
            <img src={animated_logo} alt="" />

        </div>
    );
}

export default SplashScreen;
