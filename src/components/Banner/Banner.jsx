import React from "react";
import "./Banner.css";

function Banner({ setIsModalOpen }) {
  return (
    <div id="home" className="banner">
      <div className="container">
        <h1>Неперевершений аромат і смак!</h1>
        <p>Обирайте ідеальну каву для вашого настрою та моменту</p>
        <button onClick={() => setIsModalOpen(true)}>Обрати каву</button>
      </div>
    </div>
  );
}

export default Banner;
