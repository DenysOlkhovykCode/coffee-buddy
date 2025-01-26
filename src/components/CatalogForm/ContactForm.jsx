import "./ContactForm.css";

const ContactForm = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div className="contact-form">
      {/* Кнопка для відкриття модального вікна */}
      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
        <img src="images/coffe cup button.png" alt="button" className="cup-image" />
        <span className="button-text">Зробити замовлення</span>
      </button>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Щоб клік всередині не закривав модалку
          >
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>

            <h2>Контактна форма</h2>
            <form>
              <label htmlFor="name">Ім'я:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="phone">Телефон:</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="message">Повідомлення:</label>
              <textarea id="message" name="message" rows="4"></textarea>

              <button type="submit" className="submit-btn">
                Надіслати
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
