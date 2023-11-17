import { useParams } from "react-router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const MoviePage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [credit, setCredit] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b7b3ec164d57a72e901bc1765d723836&language=fr-FR`
      )
      .then((res) => {
        setFilm(res.data);
      });
  }, [id]);
  console.log(film);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b7b3ec164d57a72e901bc1765d723836&language=fr-FR`
      )
      .then((res) => setCredit(res.data));
  }, [id]);
  console.log(credit);

  const date = new Date(film.release_date);

  return (
    <div>
      <Header />
      <div className="film-container">
        <div className="head-container">
          <img
            src={
              film.backdrop_path
                ? `https://image.tmdb.org/t/p/original${film.backdrop_path}`
                : "../../public/img/poster.jpg"
            }
            alt={"Visuel de " + film.title}
          />
          <div className="title-director">
            {" "}
            <h2>{film.title}</h2>
            <ul>
              {credit.crew?.map((cred) => {
                if (cred["job"] == "Director")
                  return <li>{cred.original_name}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="mentions-container">
          <h3>Sortie officielle : {date.toLocaleDateString("fr")}</h3>
          <ul className="genres">
            {film.genres?.map((genre) => {
              return (
                <li className="lips" key={genre.id}>
                  {genre.name}
                </li>
              );
            })}
          </ul>
          <div>
            <h3>Avec</h3>
            <ul className="credits">
              {credit.cast?.slice(0, 4).map((actor) => {
                return <li key={actor.id}>{actor.original_name}</li>;
              })}
            </ul>
            <h3>...</h3>
          </div>
          <div className="synopsis">
            <h3>Synopsis</h3>
            <p>{film.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
