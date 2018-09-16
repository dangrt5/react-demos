import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Clock from "./clock";

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <Clock/>
        </div>
    </div>
);

export default App;
