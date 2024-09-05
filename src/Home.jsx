/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Home() {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3001/home')
            .then(result => {
                console.log(result);
                if (result.data !== "success") {
                    //navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout")
        .then(result => {
            if (result.data === "success"){
                navigate('/login')
            }
        }).catch(err => console.log(err));
    };
    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="navbar-left">
                    <img src="/bg.png" alt="Logo" className="nav-logo" />
                    <span className="nav-company-name">CuisineAI</span>
                </div>
                <div className="navbar-right">
                    <Link to="/diet-plan" className="nav-link">Diet Plan</Link>
                    <Link to="/order-online" className="nav-link">Order Online</Link>
                    <Link to="/user-details" className="nav-l">
                        <img src="/user.png" alt="User" className="user-icon" />
                    </Link>
                </div>
            </nav>
            <div className="content">
                <div className="left-side">
                    <div className="tagline">
                        <p>Cooking</p>
                        <p>Made</p>
                        <p>Easy</p>
                    </div>
                </div>
                <div className="bottom-middle">
                    <Link to="/recipe">
                        <button className="generate-button">Generate Recipe</button>
                    </Link>
                </div>

                <div className="right-side">
                    <img src="https://media.licdn.com/dms/image/D5612AQElipeUIZZQ6Q/article-cover_image-shrink_720_1280/0/1708232269853?e=2147483647&v=beta&t=kuFBJN33LhrLF8eHA5aPaOnl3LaPl7g2_sLtpTymUnI" alt="Image" className="big-image" />
                </div>
            </div>
        </div>
    );
}

export default Home;
