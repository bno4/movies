import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/moviepage/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
