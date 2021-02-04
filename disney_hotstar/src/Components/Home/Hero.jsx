import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Styles from "../Css/Carousel.module.css";
import axios from "axios"
import Star from "../../icons/star.svg"


function Hero() {
    const [data,setdata]=useState([])
 useEffect(()=>{
   axios({
       method:"get",
       url:"https://api.themoviedb.org/3/tv/popular?api_key=94592a9226293d3b0d881a324bc52598&language=en-US&page=1"
   }).then(res=> setdata(res.data.results))
 },[])
  return (
    <div style={{ margin: "20px 0px" }}>
      <Carousel>
          {
              data.map((item)=>{
                  return (
                    <Carousel.Item interval={2000}>
                    <div style={{height:"70vh", display: "flex", padding: "0px 100px" }}>
                      <div  style={{backgroundImage:`url(${`https://image.tmdb.org/t/p/w500${item.poster_path}`})`,backgroundRepeat:"no-repeat",backgroundPosition:"right",backgroundSize:"60% 100vh"}}>
                       <div className={Styles.Hero_info}>
                           <div className={Styles.text}>
                        <h1>{item.name}</h1>
                        <br/>
                        <h3>Synopsis:</h3>
                        <p>
                         {item.overview}
                        </p>
                        <br/>
                        <br/>
                        
                        <p>Ratings:  {item.vote_average} <span> <img  style={{height:"10px"}} src={Star} alt="*" /></span></p>
                       
                        </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  
                  )
              })
          }
       
      </Carousel>
    </div>
  );
}
export default Hero;
