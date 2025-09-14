import React, { useState } from "react";
import "./Header.css";

const Header = ({setPage}) => {
  const [showSearch, setShowSearch] = useState(false);


  const toggleSearch = (e) => {
    e.preventDefault(); 
    setShowSearch(!showSearch);
  };

  return (
    <header className="header">
      <div className="header-container">
      <a href="#" onClick={() => setPage("home")}>
          <img
            className="logo"
            src="https://img5.pic.in.th/file/secure-sv1/9cho.png"
            alt="ภาพ 9choet"
          />
        </a>
        <div className="nav-links">
          <a href="#" className="nav-link" onClick={() => setPage("home")}>
            เกี่ยวกับผม
          </a>
          <a href="#" className="nav-link" onClick={() => setPage("skills")}>
            ทักษะ
          </a>
          <a href="#" className="nav-link" onClick={() => setPage("portfolio")}>
            ผลงาน
          </a>
          <a href="#" className="nav-link" onClick={() => setPage("contact")}>
            ติดต่อ
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
