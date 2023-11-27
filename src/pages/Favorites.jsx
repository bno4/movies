import { useEffect, useState } from "react";
import Card from "../components/Card";
// import Header from "../components/Header";
import axios from "axios";
// import Footer from "../components/Footer";

const Favorites = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let allMovies = JSON.parse(localStorage.getItem("list")) || [];
    console.log(allMovies);
    for (let i = 0; i < allMovies.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${allMovies[i]}?api_key=b7b3ec164d57a72e901bc1765d723836&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  console.log(listData);

  return (
    <div>
      {/* <Header/> */}
      <h2>
        Films favoris<i className="fa-solid fa-heart"></i>
      </h2>
      <ul className="cards-container">
        {listData.length > 0 ? (
          listData.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <h2>Aucun film favori pour le moment </h2>
        )}
      </ul>
      {/* <Footer/> */}
    </div>
  );
};

export default Favorites;
