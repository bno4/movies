import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";

const CineCards = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("od");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b7b3ec164d57a72e901bc1765d723836&query=${filter}&language=fr-FR`
      )
      .then((res) => setData(res.data.results));
  }, [filter]);
  console.log(data);

  const ascendingEvent = () => {
    let tempList = [...data];
    if (data.length > 0) {
      let result = tempList.sort((a, b) => a.vote_average - b.vote_average);
      setData(result);
    }
  };
  const descendingEvent = () => {
    let tempList = [...data];
    if (data.length > 0) {
      let result = tempList.sort((a, b) => b.vote_average - a.vote_average);
      setData(result);
    }
  };

  return (
    <div>
      <div className="filter-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Entrez le titre d'un film"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </form>
        <div className="sort-container">
          <button className="btnSort" id="maxToMin" onClick={descendingEvent}>
            <i className="fa-solid fa-arrow-up"></i> Top
          </button>
          <button className="btnSort" id="minToMax" onClick={ascendingEvent}>
            <i className="fa-solid fa-arrow-down"></i> Flop
          </button>
        </div>
      </div>
      <ul className="cards-container">
        {data === null ? (
          <h3>Oups ! No results...</h3>
        ) : (
          data.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })
        )}
      </ul>
    </div>
  );
};

export default CineCards;

// 'https://api.themoviedb.org/3/genre/movie/list?language=en'
