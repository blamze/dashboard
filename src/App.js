import React, {useState, useEffect} from 'react';
import './App.css';
import {Weather, Logo, Clock, FrontendPoints, NameDays, DailyProverb} from './components'
import {backgrounds} from './assets/backgroundsList'

function App() {
    const [background, setBackground] = useState('');
    useEffect(() => {

        const cycleImages = () => {
            const element = backgrounds[Math.floor(Math.random() * backgrounds.length)];
            setBackground(`url(${element})`)
        };

        const imageChangeInterval = 10 * 60 * 1000;
        cycleImages();
        setInterval(() => {
            cycleImages()
        }, imageChangeInterval);
    }, []);
    return (
        <div className="background" id="background" style={{backgroundImage: background}}>
            <main className="content">
                <header className="header">
                    <Logo/>
                    <Clock/>
                </header>
                <div className="content-block">
                    <div id="slider-container" className="slider-container">
                        <div className="slide">
                            <FrontendPoints/>
                        </div>
                        <div className="slide">
                            <NameDays/>
                        </div>
                        <div className="slide">
                            <DailyProverb/>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <Weather/>
                </footer>
            </main>
        </div>
    );
}

export default App;
