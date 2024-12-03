import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <h1>全国大学生支部</h1>
        <nav>
          <ul>
            <li><a href="/">ホーム</a></li>
            <li><a href="/about">全国大学生支部</a></li>
            <li><a href="/members">メンバー紹介</a></li>
            <li><a href="/activities">これまでの活動</a></li>
            <li><a href="/socialmedia">各種SNS</a></li>
            <li><a href="/applications">申し込み</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;