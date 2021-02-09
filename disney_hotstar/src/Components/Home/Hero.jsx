import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Styles from "../Css/Carousel.module.css";
import Star from "../../icons/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { hero_movies } from "../../Redux/Actioncreator";

function Hero() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.herodata.Hero_shows);
  useEffect(() => {
    dispatch(hero_movies());
  }, [dispatch]);
  return (
    <div style={{ margin: "20px 0px" }}>
      <Carousel>
        {data &&
          data.map((item) => {
            return (
              <Carousel.Item interval={2000} key={item.title}>
                <div
                  style={{
                    height: "70vh",
                    display: "flex",
                    padding: "0px 100px",
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${`https://image.tmdb.org/t/p/original${item.backdrop_path}`})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right",
                      backgroundSize: "70% 70vh",
                    }}
                  >
                    <div className={Styles.Hero_info}>
                      <div className={Styles.text}>
                        <h1>{item.title}</h1>
                        <br />
                        <h3>Synopsis:</h3>
                        <p>{item.overview}</p>
                        <br />
                        <br />
                        <p>
                          Ratings: {item.vote_average}{" "}
                          <span>
                            {" "}
                            <img
                              style={{ height: "10px" }}
                              src={Star}
                              alt="*"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
}
export default Hero;
