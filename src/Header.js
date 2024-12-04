import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Members from './Members';
import Activities from './Activities';
import SocialMedia from './SocialMedia';
import Applications from './Applications';

const Header = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>全国大学生支部</h1>
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
        </header>
      </div>
    </Router>
  );
};

export default Header;