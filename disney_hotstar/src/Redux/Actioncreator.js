import {
  Get_Users_Failure,
  Get_Users_Success,
  Get_Users_Request,
} from "./Actiontype";

import {
  Hero_Show_Request,
  Hero_Show_Success,
  Hero_Show_Failure,
} from "./Actiontype";

import {
  Search_Movies_Request,
  Search_Movies_Success,
  Search_Movies_Failure,
} from "./Actiontype";

import {
  Watch_Later_Request,
  Watch_Later_Success,
  Watch_Later_Failure,
} from "./Actiontype";

import { Log_Out } from "./Actiontype";
import axios from "axios";

export const log_out = () => ({
  type: Log_Out,
});

export const get_users_request = () => ({
  type: Get_Users_Request,
});
export const get_users_success = (payload) => ({
  type: Get_Users_Success,
  payload,
});
export const get_users_failure = () => ({
  type: Get_Users_Failure,
});
export const get_users = ({ username, password }) => (dispatch) => {
  dispatch(get_users_request());
  return axios({
    method: "get",
    url: "https://usersauth.herokuapp.com/users",
    params: {
      user: username,
      password: password,
    },
  })
    .then((res) => dispatch(get_users_success(res.data)))
    .catch((err) => dispatch(get_users_failure()));
};

// <--- Trending Movies --->
export const search_movies_request = () => ({
  type: Search_Movies_Request,
});
export const search_movies_success = (payload) => ({
  type: Search_Movies_Success,
  payload,
});
export const search_movies_failure = () => ({
  type: Search_Movies_Failure,
});
export const search_movies = (query) => (dispatch) => {
  dispatch(search_movies_request());
  return axios({
    method: "get",
    url:
      "https://api.themoviedb.org/3/search/movie?api_key=94592a9226293d3b0d881a324bc52598&language=en-US&include_adult=false",
    params: {
      query: query,
      page: 1,
    },
  })
    .then((res) => dispatch(search_movies_success(res.data.results)))
    .catch((err) => dispatch(search_movies_failure()));
};

// <--- Hero Carousel Shows --->

export const hero_show_request = () => ({
  type: Hero_Show_Request,
});
export const hero_show_failure = () => ({
  type: Hero_Show_Failure,
});
export const hero_show_success = (payload) => ({
  type: Hero_Show_Success,
  payload,
});
export const hero_movies = () => (dispatch) => {
  dispatch(hero_show_request());
  return axios({
    method: "get",
    url:
      "https://api.themoviedb.org/3/movie/upcoming?api_key=94592a9226293d3b0d881a324bc52598&language=en-US&page=1",
  })
    .then((res) => dispatch(hero_show_success(res.data.results)))
    .catch((err) => dispatch(hero_show_failure()));
};

// <--- Watch_Later --->

export const watch_later_request = () => ({
  type: Watch_Later_Request,
});
export const watch_later_failure = () => ({
  type: Watch_Later_Failure,
});
export const watch_later_success = (payload) => ({
  type: Watch_Later_Success,
  payload,
});
export const watch_later = ({ userdata, showId, data_later }) => (dispatch) => {
  dispatch(watch_later_request());
  return axios({
    method: "Patch",
    url: `https://usersauth.herokuapp.com/users/${userdata[0].id}`,
    data: {
      ...userdata[0],
      watch_later_shows: [...data_later, showId],
    },
  })
    .then((res) => dispatch(watch_later_success(res.data.watch_later_shows)))
    .catch((err) => dispatch(watch_later_failure()));
};
