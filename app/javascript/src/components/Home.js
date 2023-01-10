import React from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/greeting')
    };

    return (
        <section className="home">
            <h1>React on Rails App</h1>
            <p>Want to see some cool random greeting? Click the link below.</p>
            <button type="button" onClick={handleNavigation}>View Greeting ></button>
        </section>
    );
};

export default Home;
