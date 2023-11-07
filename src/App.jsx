import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
        </Routes></BrowserRouter>
      
    </div>
  );
};
export default App;