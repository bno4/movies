import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Route, Routes, HashRouter } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/moviepage/:id" element={<MoviePage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};
export default App;
