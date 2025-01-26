import "./Advantages.css";

// Компонент для відображення однієї переваги
function Advantage({ header, description }) {
  return (
    <div className="advantage-item">
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
}

function Advantages() {
  // Масив з інформацією про переваги магазину
  const advantages = [
    {
      header: "Свіжі зерна",
      description: "Ми використовуємо тільки найсвіжіші кавові зерна.",
    },
    {
      header: "Широкий вибір сортів",
      description: "У нас ви знайдете каву на будь-який смак.",
    },
    {
      header: "Швидка доставка",
      description: "Доставляємо каву в найкоротші терміни.",
    },
    {
      header: "Акційні пропозиції",
      description: "Спеціальні знижки та вигідні пропозиції щотижня.",
    },
  ];

  return (
    <section id="advantages" className="advantages-section">
      <h2>Чому обирають наш магазин</h2>
      <div className="advantages-list">
        {advantages.map((advantage, index) => (
          <Advantage key={index} header={advantage.header} description={advantage.description} />
        ))}
      </div>
    </section>
  );
}

export default Advantages;
