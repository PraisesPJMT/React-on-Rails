import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from "./Greeting";
import Home from "./Home";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/greeting" element={ <Greeting /> } />
        </Routes>
    </Router>
);

export default App;
