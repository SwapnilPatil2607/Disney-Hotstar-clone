import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "../Css/Movies_Show_card.module.css";
import {v4 as uuidv4} from "uuid"
import { useSelector } from "react-redux";

function Recomended() {
  const [Recomended, setRecomended] = useState("");
  const user = useSelector((state) => state.login.user);

  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/movie/284053/recommendations?api_key=94592a9226293d3b0d881a324bc52598&language=en-US&page=1",
    }).then((res) => setRecomended(res.data.results));
  }, []);
  return (
    <div className={Styles.container}>
    <h4>Recomended For You</h4>
    <div className={Styles.overflow} >
        <div className={Styles.list} >
    {Recomended &&
      Recomended.map((item) => {
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
                {user && <button className={Styles.cardbutton}>+ Watch Later</button>}
              </div>
            </div> 
        );
      })}
     </div>
  </div>
  </div>
  );
}

export default Recomended;
