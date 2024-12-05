'use client';
import {useState, useEffect} from "react"
import LoadingSpinner from "@/Components/LoadingSpinner";

export default function ModalMemories() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set a timer to hide the spinner after 10 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div>
            {loading ? (
                <div style={{maxWidth: '90%', maxHeight: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <LoadingSpinner />
                </div>
            ) : (
                <div>
                    <p>NeuAI managed 10 memories!.</p>
                </div>
            )}
        </div>
    )
}