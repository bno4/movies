import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";

const CineCards = () => {

    const [data, setData] = useState([]);
useEffect(()=> {axios.get("https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR").then((res)=>setData(res.data.results));    

},[])
console.log(data);

    return (
        <div className="cards-container">
          {
            data.map((movie)=> {
                return <Card key={movie.id} movie={movie}/>
            })
          }
        </div>
    );
};

export default CineCards;