import React, { useState } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Advantages from "./components/Advantages/Advantages";
import Catalog from "./components/Catalog/Catalog";
import Reviews from "./components/Reviews/Reviews";
import ContactForm from "./components/CatalogForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Decorations from "./components/Decorations/Decorations";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Header setIsModalOpen={setIsModalOpen} />
      <Banner setIsModalOpen={setIsModalOpen} />
      <Advantages />
      <Catalog />
      <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Reviews />
      <Footer />
      <Decorations />
    </div>
  );
}

export default App;
