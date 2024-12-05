'use client';

import '@/Styling/Homepage.css';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Homepage() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY; // Use scrollY instead of pageYOffset

        if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
            // Scrolling down and past 50px
            setNavbarVisible(false);
        } else {
            // Scrolling up
            setNavbarVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className="homepage">
            <div className={`navbar-container ${navbarVisible ? 'visible' : 'hidden'}`}>
                <Link href="/" className={'logo-container'}>
                    <img src="/logo.png" alt="Logo" className="navbar-logo" />
                    <div className={'logo-text'}>
                        <h1>NeuMemories</h1>
                        <h3>Where Your Future Begins</h3>
                    </div>
                </Link>
                <div className="navbar-links">
                    <a href="#whatIsIt">What is It?</a>
                    <a href="#whatNew">What's New?</a>
                    <a href="#help">How's it Help?</a>
                    <a href="#login" className="navbar-login">Login</a>
                </div>
            </div>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>NeuMemories Now Online</h1>
                    <h3>Manage your memories from your computer!</h3>
                    <a href="#"><button>Learn More</button></a>
                </div>
            </div>
            <div className="section-container" id="whatIsIt">
                <img className="section-image" src="/whatIsIt.jpeg" alt="Chip On Finger"/>
                <div className={'section-inner-container'}>
                    <div className="section-text section-text-right">
                        <h1>What is It?</h1>
                        <p>
                            NeuMemories is a revolutionary technology designed to give you control over your past
                            by allowing you to alter, add, or remove memories. Imagine a life where painful memories
                            no longer hold you back, cherished moments can be vividly enhanced, and new memories can
                            be seamlessly integrated into your mind—all with the power of our cutting-edge Neural
                            Nanochips™.
                        </p>
                        <button className="section-button">Read More</button>
                    </div>
                </div>
            </div>
            <div className="section-container" id="whatNew">
                <h1>What's New?</h1>
            </div>
            <div className="section-container" id="help">
                <h1>How Does it Help?</h1>
            </div>
        </div>
    );
}