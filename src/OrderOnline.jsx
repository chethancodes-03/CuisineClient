/* eslint-disable no-unused-vars */
import React from 'react';
import './OrderOnline.css';

const OrderOnline = () => {
    const foodDeliverySites = [
        { name: 'Swiggy', logo: '/image-removebg-preview.png', link: 'https://www.swiggy.com' },
        { name: 'Zomato', logo: '/image-removebg-preview (1).png', link: 'https://www.zomato.com' },
        { name: 'Uber Eats', logo: '/uberrea.png', link: 'https://www.ubereats.com' },
        { name: 'Domino\'s Pizza', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/600px-Dominos_pizza_logo.svg.png', link: 'https://www.dominos.co.in' },
        { name: 'Pizza Hut', logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/600px-Pizza_Hut_logo.svg.png', link: 'https://www.pizzahut.co.in' },
        { name: 'BigBazaar', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Dunzo_logo.png', link: 'https://www.dunzo.com' },
        { name: 'Foodpanda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Foodpanda_logo.svg/600px-Foodpanda_logo.svg.png', link: 'https://www.foodpanda.com' },
        { name: 'Box8', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Box8_logo.svg/600px-Box8_logo.svg.png', link: 'https://box8.in' },
        { name: 'Faasos', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Faasos_Logo.svg', link: 'https://www.faasos.com' },
        { name: 'FreshMenu', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Freshmenu_logo.png', link: 'https://www.freshmenu.com' }
    ];

    return (
        <div className="order-online-container">
            <h1>Order Online</h1>
            <div className="logos-container">
                {foodDeliverySites.map((site, index) => (
                    <a key={index} href={site.link} target="_blank" rel="noopener noreferrer" className="logo-link">
                        <img src={site.logo} alt={site.name} className="logo-image" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default OrderOnline;
