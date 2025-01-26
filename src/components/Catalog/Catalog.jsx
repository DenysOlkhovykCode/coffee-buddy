import "./Catalog.css";
import { useState } from "react";

// Компонент для відображення одного товару
function Product({ header, image, price, description }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div onClick={() => setIsShow(!isShow)} className="catalog-item">
      <img src={image} alt={header} />
      <h3>{header}</h3>
      <p className="price">{price} грн</p>
      {isShow && <p>{description}</p>}
      <button className="btn" onClick={() => setIsShow(!isShow)}>
        {isShow ? "Сховати" : "Детальніше"}
      </button>
    </div>
  );
}

function Catalog() {
  // Масив з інформацією про товари
  const products = [
    {
      image: "images/product1.jpg",
      header: "Еспресо",
      price: 150,
      description:
        "Еспресо — це основа багатьох кавових напоїв. Найкраще його пити без цукру, щоб відчути повний смак та аромат. Має насичений смак і текстуру, що підходить для любителів міцної кави.",
    },
    {
      image: "images/product2.jpg",
      header: "Лате",
      price: 200,
      description:
        "Лате — це напій з еспресо та розігрітого молока, створений для того, щоб ви могли насолоджуватись м'яким смаком кави в поєднанні з молочною ніжністю. Він ідеально підходить для тих, хто любить каву менш гіркою.",
    },
    {
      image: "images/product3.jpg",
      header: "Капучіно",
      price: 180,
      description:
        "Капучіно складається з еспресо, гарячого молока та молочної піни. Його пінка допомагає зберігати тепло та надає напою кремову текстуру. Це класичний кавовий напій, який часто вживають на сніданок.",
    },
    {
      image: "images/product4.jpg",
      header: "Мокачино",
      price: 210,
      description:
        "Якщо вам подобається поєднання кави та шоколаду, мокачино — ідеальний вибір. Він поєднує еспресо, молоко та какао або шоколадний сироп, надаючи напою солодку нотку. Це чудовий варіант для тих, хто хоче спробувати каву з додатковим смаком.",
    },
  ];

  return (
    <section id="catalog" className="catalog-section">
      <div className="catalog-list">
        {products.map((product, index) => (
          <Product
            key={index}
            header={product.header}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
