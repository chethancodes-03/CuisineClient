/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Import the CSS for styling

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        if (isLogin) {
            try {
                const response = await axios.post('http://localhost:3001/login', { email, password });
                if (response.data === 'success') {
                    // Handle successful login
                } else if (response.data === 'incorrect password') {
                    setErrorMessage('Incorrect password');
                } else {
                    setErrorMessage('Can\'t find account');
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        } else {
            try {
                await axios.post('http://localhost:3001/register', { email, password, name });
                // Handle successful registration
            } catch (error) {
                console.error('Error signing up:', error);
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="toggle-button">
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Switch to Signup' : 'Switch to Login'}
                </button>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
                            {showPassword ? 'Hide' : 'Show'}
                        </span>
                    </div>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
        </div>
    );
};

export default AuthForm;
