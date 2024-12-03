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

const App = () => {
  return (
    <Router>
      <div>
       <Header />
        <nav>
          <ul>
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/about">説明</Link></li>
            <li><Link to="/members">メンバー紹介</Link></li>
            <li><Link to="/activities">これまでの活動</Link></li>
            <li><Link to="/socialmedia">各SNS</Link></li>
            <li><Link to="/applications">各種申し込み</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
