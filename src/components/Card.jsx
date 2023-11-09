/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const date = new Date(movie.release_date);
  const genres = movie.genre_ids;



const selectedMovie = {
  id:movie.id,
  img:`https://image.tmdb.org/t/p/original/${movie.poster_path}`,
  title:movie.title,
  date:date,
  vote_average: movie.votre_average
};


  return (
    <div>
      {/* <Link to={`/favorites/${movie.id}`}> */}
      <div className="card-container">
        <img
          src={
            movie.poster_path === null
              ? "img/poster.jpg"
              : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          }
          alt={movie.title}
        />
        <div className="text-container">
          <h2>{movie.title}</h2>
          <p>Sortie : {date.toLocaleDateString("fr")} </p>
          <h4>
            {Math.round(movie.vote_average * 10) / 10} / 10{" "}
            <i className="fa-solid fa-star"></i>{" "}
          </h4>
          <ul className="genre">
            {genres.map((genre, i) => (
              <li key={i}>{genre}</li>
            ))}
          </ul>
          <h3>Synopsis</h3>
          <p>{movie.overview}</p>
          <button onClick={()=>{
          let allMovies = JSON.parse(localStorage.getItem("list")) || []
            allMovies.push(selectedMovie)
           localStorage.setItem("list", JSON.stringify(allMovies))
           }}>Ajouter aux favoris</button>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Card;
