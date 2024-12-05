'use client';

import '@/Styling/Login.css';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = (e) => {
        if (email === 'champ@msu.montana.edu' && password === 'password') {
            setErrorMessage('');
        } else {
            e.preventDefault(); // Prevent navigation
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className={'login-page-container'}>
            <Link href="/" className={'logo-container'}>
                <img src="/logo.png" alt="Logo" className="navbar-logo" />
                <div className={'logo-text'}>
                    <h1>NeuMemories</h1>
                    <h3>Where Your Future Begins</h3>
                </div>
            </Link>
            <form onSubmit={(e) => e.preventDefault()}>
                <h1>Login</h1>
                <div className={"field-holder"}>
                    <input
                        name={"email"}
                        id={"email"}
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor={"email"}>Email</label>
                </div>
                <div className={"field-holder"}>
                    <input
                        name={"password"}
                        id={"password"}
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor={"password"}>Password</label>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Link
                    href="/"
                    onClick={handleSignIn}
                    className="sign-in-button"
                >
                    <button>
                        Sign In <FaArrowRight />
                    </button>
                </Link>
            </form>
        </div>
    );
}