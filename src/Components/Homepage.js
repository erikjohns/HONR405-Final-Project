'use client';

import '@/Styling/Homepage.css';
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "@/Components/Modal";

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

    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    }

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
                    <a href="/login" className="navbar-login">Login</a>
                </div>
            </div>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>NeuMemories Now Online</h1>
                    <h3>Manage your memories from your computer!</h3>
                    <a href="#whatNew"><button>Learn More</button></a>
                </div>
                <img src={'/MacMockup.png'} alt={'mockup'} className={'hero-image'}/>
            </div>
            <div className="section-container" id="whatIsIt">
                <img className="section-image" src="/whatIsIt.jpeg" alt="Chip On Finger"/>
                <div className="section-text section-text-right">
                    <h1>What is It?</h1>
                    <p>
                        NeuMemories is a revolutionary technology designed to give you control over your past
                        by allowing you to alter, add, or remove memories. Imagine a life where painful memories
                        no longer hold you back, cherished moments can be vividly enhanced, and new memories can
                        be seamlessly integrated into your mind—all with the power of our cutting-edge Neural
                        Nanochips™.
                    </p>
                    <button className="section-button" onClick={() => openModal(
                        <div style={{display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1rem',
                            marginTop: '2rem'}}><p>NeuMemories is a revolutionary technology designed to give you control over your past by allowing you to alter, add, or remove memories. Imagine a life where painful memories no longer hold you back, cherished moments can be vividly enhanced, and new memories can be seamlessly integrated into your mind—all with the power of our cutting-edge Neural Nanochips™.<br/></p>
                            <p>Using state-of-the-art advancements in neural interface technology, our Neural Nanochips™ interact directly with your brain’s memory centers. This innovation enables precise editing of your memories while preserving your cognitive health and mental clarity. Whether you want to erase traumatic experiences, amplify joyful moments, or craft entirely new memories, NeuMemories empowers you to reshape your personal narrative.</p>
                            <p>The implantation process is safe and minimally invasive, performed through laparoscopic surgery by highly trained professionals. Recovery is quick, and you can begin experiencing the benefits of NeuMemories within days. Our team of neuroscientists, engineers, and healthcare experts ensures that every step of your journey is supported with care and expertise.</p></div>)}>
                        Read More
                    </button>
                </div>
            </div>
            <div className="section-container" id="whatNew">
                <div className="section-text">
                    <h1>What's New?</h1>
                    <p>
                        NeuMemories is now available online! Manage your memories from anywhere
                        you can access the internet. Right now we have launched our Desktop version for
                        computers, with plans to roll-out mobile functionality in the coming weeks. Try it out
                        today and see just how easy managing your memories can be!
                    </p>
                    <Link href={'/login'}>
                        <button className="section-button">Try it Out Now</button>
                    </Link>
                </div>
                <img className="section-image" src="/WhatsNew.png" alt="Couple looking at computer"/>
            </div>
            <div className="section-container" id="help">
                <img className="section-image" src="/HowDoesItHelp.jpg" alt="Chip On Finger"/>
                <div className="section-text section-text-right">
                    <h1>How Does it Help?</h1>
                    <p>

                    </p>
                    <button className="section-button">Read More</button>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
}