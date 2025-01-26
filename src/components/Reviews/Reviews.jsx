import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Reviews.css";

// Компонент для відображення одного відгуку
const Review = ({ photo, name, text }) => {
  return (
    <div className="review-item">
      <img src={photo} alt={name} className="review-photo" />
      <p className="review-text">{text}</p>
      <h4 className="review-name">{name}</h4>
    </div>
  );
};

const Reviews = () => {
  // Масив з інформацією про відгуки
  const reviews = [
    {
      name: "Анна, Київ",
      photo: "/images/human1.jpg",
      text: "Найкраща кава для ранкового настрою!",
    },
    {
      name: "Олег, Львів",
      photo: "/images/human2.jpg",
      text: "Швидка доставка та неперевершений аромат!",
    },
    {
      name: "Марія, Одеса",
      photo: "/images/human3.jpg",
      text: "Якість продукції вражає! Рекомендую всім!",
    },
  ];

  //Налаштування слайдера
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };

  return (
    <section id="reviews" className="reviews-section">
      <h2>Відгуки клієнтів</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Review key={index} photo={review.photo} name={review.name} text={review.text} />
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;
