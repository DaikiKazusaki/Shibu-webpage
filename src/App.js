import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Members from './components/Members';
import Activities from './components/Activities';
import SocialMedia from './components/SocialMedia';
import Applications from './components/Applications';
import Header from './components/Header';
import Footer from './components/Footer';
// 以下CSS
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <h1>活動内容</h1>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
