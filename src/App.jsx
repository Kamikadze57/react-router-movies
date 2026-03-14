import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const apiKey = import.meta.env.VITE_MOVIES_API_KEY;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BrowserRouter basename="/react-router-movies">
        <Header baseUrl={baseUrl} />
        <main>
          <Routes>
            {/* Головна сторінка */}
            <Route path="/" element={<></>} />

            {/* Сторінка з пошуком  */}
            <Route path="/movies" element={<></>} />
            {/* Сторінка з інформацією про фільм  */}
            <Route path="/movies/:movieId" element={<></>} />
          </Routes>
        </main>
        {isVisible && (
          <button className="scroll-to-top__btn button" onClick={scrollToTop}>
            ↑
          </button>
        )}
        <Footer baseUrl={baseUrl} />
      </BrowserRouter>
    </>
  );
}

export default App;
