import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contacts" className="footer">
      <div className="footer__social-media">
        <a href="https://facebook.com" className="footer__icon">
          Facebook
        </a>
        <a href="https://twitter.com" className="footer__icon">
          Twitter
        </a>
        <a href="https://instagram.com" className="footer__icon">
          Instagram
        </a>
      </div>
      <div className="footer__contact">
        <p className="footer__phone">Phone: +38 (050) 123-45-67</p>
        <p className="footer__email">Email: info@coffeebuddy.com</p>
      </div>
      <div className="footer__copyright">
        <p>© 2024 CoffeeBuddy</p>
      </div>
    </footer>
  );
};

export default Footer;
