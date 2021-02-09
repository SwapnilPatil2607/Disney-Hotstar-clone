import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "../Css/Movies_Show_card.module.css";
import {v4 as uuidv4} from "uuid"
import { useSelector } from "react-redux";

function WatchLater() {
  const [watch_later, setwatch] = useState([]);
  const later = useSelector((state) => state.watch_later_data.watch_later);
  const user=useSelector((state)=>state.login.user)

  useEffect(() => {
    later && later.forEach((item)=>{
      return  axios({
            method: "get",
            url:
              `https://api.themoviedb.org/3/tv/${item}r?api_key=94592a9226293d3b0d881a324bc52598&language=en-US&page=1`,
          }).then((res) => setwatch([...watch_later,res.data]));
      })
  
  }, [later]);
 
  return (
    <div className={Styles.container}>
      <h4>Watch List</h4>
      <div className={Styles.overflow} >
          <div className={Styles.list} >
      {watch_later &&
        watch_later.map((item) => {
          return (
            <div className={Styles.watchListcard}
                style={{
                  backgroundImage: `url(${`https://image.tmdb.org/t/p/w300${item.backdrop_path}`})`,
                }}
            key={uuidv4()}  >
                <div className={Styles.watchListcardInfo}>
                  <p className={Styles.WLtitle}>{item.name}</p>
                  <p className={Styles.WLdesc}>
                   {item.overview}
                  </p>
                 {user && <button className={Styles.watchListbutton}>Remove From Watch List</button>} 
                </div>
              </div> 
          );
        })}
       </div>
    </div>
    </div>
  );
}

export default WatchLater;