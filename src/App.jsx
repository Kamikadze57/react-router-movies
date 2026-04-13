import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import HomePage from "./pages/Home/HomePage";
import MoviesPage from "./pages/Movies/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetails/MovieDetailsPage";

import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const [isVisible, setIsVisible] = useState(false);

  // Логіка скролу
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter basename="/react-router-movies">
      <Header baseUrl={baseUrl} />
      <main>
        <Routes>
          {/* Головна сторінка */}
          <Route path="/" element={<HomePage />} />

          {/* Сторінка пошуку фільмів */}
          <Route path="/movies" element={<MoviesPage />} />

          {/* Деталі фільму з вкладеними маршрутами */}
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          {/* На головну, якщо маршрут не знайдено */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {isVisible && (
        <button className="scroll-to-top__btn button" onClick={scrollToTop}>
          ↑
        </button>
      )}
      <Footer baseUrl={baseUrl} />
    </BrowserRouter>
  );
}

export default App;
