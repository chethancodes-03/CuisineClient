/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                if (result.data === "success") {
                    navigate('/home');
                } else if (result.data === "incorrect password") {
                    setError("Password is wrong");
                } else if (result.data === "no user data found") {
                    setError("No user data found");
                }
            })
            .catch(err => console.log(err));
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="d-flex justify-content-end align-items-center custom-background vh-100">
            <div className="image-side">
                <img src="https://media.licdn.com/dms/image/D5612AQElipeUIZZQ6Q/article-cover_image-shrink_720_1280/0/1708232269853?e=2147483647&v=beta&t=kuFBJN33LhrLF8eHA5aPaOnl3LaPl7g2_sLtpTymUnI" alt="Description" className="custom-image" />
            </div>
            <div className="bg-white p-4 rounded custom-container">
                <h2 className="custom-header">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-25 custom-input"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                name="password"
                                className="form-control rounded-25 custom-input"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary custom-toggle-button"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "👁️‍🗨️" : "👁"}
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="btn custom-button w-100 rounded-25 mb-3">
                        Login
                    </button>
                </form>
                <p className="mt-3">Do not have an account?</p>
                <Link to='/register' className="btn custom-link-button w-50 bg-light rounded-25 text-decoration-none">
                    Signup
                </Link>
            </div>
        </div>
    );
}

export default Login;