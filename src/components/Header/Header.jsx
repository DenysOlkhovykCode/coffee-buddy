import React, { useState } from "react";
import "./Header.css";

function Header({ setIsModalOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
        <h5>CoffeeBuddy</h5>
      </div>
      <div className="burger-menu">
        <button className="burger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
          <li>
            <a href="#home">Головна</a>
          </li>
          <li>
            <a href="#advantages">Переваги</a>
          </li>
          <li>
            <a href="#catalog">Каталог</a>
          </li>
          <li>
            <a href="#reviews">Відгуки</a>
          </li>
          <li>
            <a href="#contacts">Контакти</a>
          </li>
        </ul>
        <button className="order-btn" onClick={() => setIsModalOpen(true)}>
          Замовити
        </button>
      </div>
    </header>
  );
}

export default Header;
