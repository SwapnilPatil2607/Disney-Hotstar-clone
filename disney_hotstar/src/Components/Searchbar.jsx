import React, { useEffect, useState } from "react"
import Searchicon from "./magnifying-glass.svg"
import Styles from "./Searchbar.module.css"
import axios from "axios"
function Search(){
    const [query,setquery]=useState("");
    const [searched,setsearched]=useState([]);

    useEffect(()=>{
            axios({
                method:"get",
                url:"https://api.themoviedb.org/3/search/movie?api_key=94592a9226293d3b0d881a324bc52598&language=en-US&include_adult=false",
                params:{
                    query:query,
                    page:1
                }
            }).then(res=> query===""?setsearched([]):setsearched(res.data.results))
    },[query])

    console.log(searched)
    return(
        <div>
        <div className={Styles.search_container}>
          <input className={Styles.input} value={query} onChange={(e)=>setquery(e.target.value)} type="text" placeholder="Search" />
          <img src={Searchicon} alt="search" />
          <div className={Styles.info}>
               {searched.slice(0,6).map((item)=>{
                   return <div className={Styles.searchedcard}><img src={item.backdrop_path?`https://image.tmdb.org/t/p/w200${item.backdrop_path}`:"https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"} alt="Disney +" /><div> <h2>{item.original_title}</h2> <p>Release Date: {item.release_date}</p></div> </div>
               })}
            </div>
        </div>
            
        </div>
    )
}

export default Search