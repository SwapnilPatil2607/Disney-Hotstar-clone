import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Searchicon from "../icons/magnifying-glass.svg"
import Styles from "./Css/Searchbar.module.css"
import {search_movies} from "../Redux/Actioncreator"
function Search(){
    const [query,setquery]=useState("");
    const dispatch=useDispatch();
    const movies=useSelector(state=>state.search.Searched_movies)
    useEffect(()=>{
           dispatch(search_movies(query))
    },[query,dispatch])
    return(
        <div>
        <div className={Styles.search_container}>
          <input className={Styles.input} value={query} onChange={(e)=>setquery(e.target.value)} type="text" placeholder="Search" />
          <img src={Searchicon} alt="search" />
          <div className={Styles.info}>
               {movies && movies.map((item)=>{
                   return <div key={item.id} className={Styles.searchedcard}><img src={item.backdrop_path?`https://image.tmdb.org/t/p/w200${item.backdrop_path}`:"https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"} alt="Disney +" /><div> <h5>{item.original_title}</h5> <p>Release Date: {item.release_date}</p></div> </div>
               })}
            </div>
        </div>
            
        </div>
    )
}

export default Search