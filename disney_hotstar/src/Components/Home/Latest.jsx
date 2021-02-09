import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "../Css/Movies_Show_card.module.css";
import {v4 as uuidv4} from "uuid"
import { useDispatch, useSelector } from "react-redux";
import {watch_later} from "../../Redux/Actioncreator"

function Latest() {
  const [Latest, setLatest] = useState("");
  const later = useSelector((state) => state.watch_later_data.watch_later);
  const user=useSelector((state)=>state.login.user)
  
  const dispatch=useDispatch()
  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/tv/popular?api_key=94592a9226293d3b0d881a324bc52598&language=en-US&page=1",
    }).then((res) => setLatest(res.data.results));

  }, []);

  return (
    <div className={Styles.container}>
      <h4>Special & Latest Shows</h4>
      <div className={Styles.overflow} >
          <div className={Styles.list} >
      {Latest &&
        Latest.map((item) => {
          return (
            <div className={Styles.card}
                style={{
                  backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${item.poster_path}`})`,
                }}
            key={uuidv4()}  >
                <div className={Styles.cardInfo}>
                  <p className={Styles.title}>{item.name}</p>
                  <p className={Styles.desc}>
                   {item.overview}
                  </p>
                  {user && <button className={Styles.cardbutton} onClick={()=>dispatch(watch_later({userdata:user,showId:item.id,data_later:later}))}>+ Watch Later</button>}
                </div>
              </div> 
          );
        })}
       </div>
    </div>
    </div>
  );
}

export default Latest;
