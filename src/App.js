import React, {useState, useEffect} from 'react';
import './App.css';
import {Weather, Logo, Clock, NameDays, DailyProverb} from './components'
import {backgrounds} from './assets/backgroundsList'

function App() {
    const [background, setBackground] = useState('');
    useEffect(() => {

        const cycleImages = () => {
            const element = backgrounds[Math.floor(Math.random() * backgrounds.length)];
            setBackground(`url(${Math.random() < 0.5 ? element : 'https://source.unsplash.com/1920x1080/?painting,arts-culture'})`)
        };

        const imageChangeInterval = 5 * 60 * 1000;
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
