

import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import axios from "axios";

const Favorites = () => {
    
const [data, setData]= useState([]);

useEffect(()=> {
    let allMovies = JSON.parse(localStorage.getItem("list")) || [];
    console.log(allMovies);
for (let i = 0; i < allMovies.length; i++) {
 axios.get(`https://api.themoviedb.org/3/movie/${allMovies[i]}?api_key=b7b3ec164d57a72e901bc1765d723836`).then((res)=> setData((data) => [...data, res.data]))
}
},[])

console.log(data);


    return (
        <div>
            <Header/>
            <ul className="cards-container">
                {data.map((movie)=>  <Card key={movie.id} movie={movie}/>)}

            </ul>
        </div>
    );
};

export default Favorites;