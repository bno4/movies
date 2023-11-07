/* eslint-disable react/prop-types */

const Card = ({ movie }) => {
    const date = new Date(movie.release_date)
    let genres = [movie.genre_ids]
   
    const renderList = genres.map((item, index) => 
    <p className="genre" key={index}>{item.join(" ")}</p>
  );    
    return (
        <div> <div className="card-container">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Sortie : {date.toLocaleDateString("fr")} </p>
            <h4>{Math.round(movie.vote_average*10)/10}/10  </h4>
            <p>{renderList}</p>
           
            <h3>Synopsis</h3>
            <p>{movie.overview}</p>
            <button>Ajouter aux coups de coeur</button>
        </div>
        </div>
       
    );
}

export default Card;