/* eslint-disable react/prop-types */

import { useState } from "react";

// import { Link } from "react-router-dom";

const Card = ({movie}) => {
  const date = new Date(movie.release_date);
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage =() => {
    let allMovies = JSON.parse(localStorage.getItem("list")) || [];
    if (!allMovies.includes(movie.id)) {allMovies.push(movie.id)
     localStorage.setItem("list", JSON.stringify(allMovies)); console.log("film ajouté aux favoris !")
  }}

  const [isDeleted, setIsDeleted] = useState(false);

  const deleteStorage = () => {
    let allMovies = JSON.parse(localStorage.getItem("list")) || [];
    let newData = allMovies.filter((id)=> id != movie.id)
    localStorage.setItem("list", JSON.stringify(newData))
    setIsDeleted(true)
  }
  if (isDeleted){
    return null;
  }

  return (
    <div>
      {/* <Link to={`/favorites/${movie.id}`}> */}
      <div className="card">
   
        <img
          src={
            movie.poster_path === null
              ? "img/poster.jpg"
              : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
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
          {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <h3>Synopsis</h3>
          <p>{movie.overview}</p>
          {movie.genre_ids ? ( <button className="favBtn" onClick={()=>{addStorage()}}>Ajouter aux favoris <i className="fa-regular fa-heart"></i></button>) : (<button className="favBtn" onClick={()=>{deleteStorage()}}>Supprimer des favoris</button>) }
         
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Card;
