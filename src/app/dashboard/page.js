'use client';

import '@/Styling/Dashboard.css';
import Link from "next/link";
import CustomChart from "@/Components/Chart";
import {falsifiedData} from "@/Components/Data";
import {useState} from "react";
import Modal from "@/Components/Modal";
import ModalMemories from "@/Components/ModalMemories";

export default function DashboardPage () {
    const labels = falsifiedData.map((entry) => entry.date);
    const dataValues = falsifiedData.map((entry) => entry.data_points);

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
        <div className={'dashboard-page'}>
            <div className={'dashboard-page-header'}>
                <Link href="/" className={'logo-container'}>
                    <img src="/logo.png" alt="Logo" className="navbar-logo" />
                    <div className={'logo-text'}>
                        <h1>NeuMemories</h1>
                        <h3>Where Your Future Begins</h3>
                    </div>
                </Link>
                <img src={'/champ.jpg'} alt={'profile'} className={'profile-picture'} />
            </div>

            <div className={'dashboard-page-content'}>
                <div className={'memory-graph'}>
                    <h1>Memories Managed in 2024</h1>
                    <div className={'chart-container'}>
                        <CustomChart data={dataValues} labels={labels} />
                    </div>
                </div>
                <div className={'side-bar-container'}>
                    <div className={'side-bar-section'}>
                        <h3>Want to Clean Your Memories?</h3>
                        <button onClick={() => openModal(<p>This is the content for the button</p>)}>Use NeuAI to Auto-Manage Memories</button>
                    </div>
                    <div className={'side-bar-section'}>
                        <h1>1,893</h1>
                        <h3>Memories Managed<br/>this Year</h3>
                    </div>
                    <div className={'side-bar-section'}>
                        <h1>96</h1>
                        <h3>Your Mental Health<br />Score Today</h3>
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalMemories />
            </Modal>
        </div>
    )
}