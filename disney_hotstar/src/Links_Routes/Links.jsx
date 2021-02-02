import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Links.module.css";
import Search from "../Components/Searchbar";
import Login from "../Components/Login";
export const Link_data = [
  { to: "/tv", title: "TV" },
  { to: "/movies", title: "Movies" },
  { to: "/sports", title: "Sports" },
  { to: "/news", title: "News" },
  { to: "/premium", title: "Premium" },
  { to: "/disney+", title: "Disney+" },
];
export const Links = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.burger_container}>
        {[1, 2, 3].map((item) => {
          return <div className={Styles.burger}></div>;
        })}
      </div>
      <div>
        <NavLink exact to="/">
          <img
            className={Styles.logo}
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt="disney+"
          />
        </NavLink>
        {Link_data.map((item) => {
          return (
            <NavLink
              key={item.title}
              className={Styles.link}
              activeClassName={Styles.active}
              to={item.to}
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <div>
        <Search />
      </div>
      <Login />
    </div>
  );
};
