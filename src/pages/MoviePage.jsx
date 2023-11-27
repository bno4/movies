import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const MoviePage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [film, setFilm] = useState([]);
  const [credit, setCredit] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b7b3ec164d57a72e901bc1765d723836&language=fr-FR`
      )
      .then((res) => {
        setTimeout(() => {
          setFilm(res.data);
          setIsLoading(false);
        }, 0);
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

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} h ${minutes} mn`;
  };

  const date = new Date(film.release_date);
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 1400,
    },
  };

  return (
    <div>
      <div className="film-container">
        {isLoading ? (
          <div className="loader">
            <h2>Loading...</h2>
          </div>
        ) : (
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={{ duration: 0.7 }}
            className="head-container"
          >
            <img
              src={
                film.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${film.backdrop_path}`
                  : "/img/poster.jpg"
              }
              alt={"Visuel de " + film.title}
            />
            <div className="title-director">
              <h2>{film.title}</h2>
              <ul>
                {credit.crew?.map((cred) => {
                  if (cred["job"] == "Director")
                    return <li key={cred.id}>{cred.original_name}</li>;
                })}
              </ul>
            </div>
          </motion.div>
        )}
        <div className="mentions">
          <div className="mentions__container">
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
            <p>Durée / {toHoursAndMinutes(film.runtime)}</p>
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
    </div>
  );
};

export default MoviePage;
