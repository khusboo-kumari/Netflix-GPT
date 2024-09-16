//  Name of hooks should always start with use

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //  Fetch Data from TMDB API and  update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results)); 
  };
  //  Now, i will make an API call using  useEffect, so that i can call it only once with an empty [] parantheses
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
