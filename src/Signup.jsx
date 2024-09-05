/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Clear the error if all fields are filled and passwords match
        setError("");

        axios.post('http://localhost:3001/check-email', { email }) //config
            .then(result => {
                if (result.data === "Email already exists") {
                    setError("Email already exists");
                } else {
                    axios.post('http://localhost:3001/register', { name, email, password })
                        .then(result => {
                            console.log(result);
                            navigate('/login');
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <div className="d-flex justify-content-center align-items-center custom-background vh-100">
            <div className="image-side">
                <img src="https://media.licdn.com/dms/image/D5612AQElipeUIZZQ6Q/article-cover_image-shrink_720_1280/0/1708232269853?e=2147483647&v=beta&t=kuFBJN33LhrLF8eHA5aPaOnl3LaPl7g2_sLtpTymUnI" alt="Description" className="custom-image" />
            </div>
            <div className="d-flex flex-column bg-white p-4 rounded custom-container">
                <h2 className="custom-header">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-25 custom-input"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                            <strong>Confirm Password</strong>
                        </label>
                        <div className="input-group">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                className="form-control rounded-25 custom-input"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary custom-toggle-button"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? "👁️‍🗨️" : "👁"}
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="btn custom-button w-100 rounded-25 mb-3">
                        Register
                    </button>
                </form>
                <div className="mt-3 text-center">
                    <p>Already have an account?</p>
                    <Link to='/login' className="btn custom-link-button bg-light rounded-25 text-decoration-none">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
