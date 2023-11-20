import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Route, Routes, HashRouter } from "react-router-dom";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/moviepage/:id" element={<MoviePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;
