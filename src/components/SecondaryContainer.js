import MovieList
 from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return movies.nowPlayingMovies &&  (
    <div className=" bg-black"> 
      <div className="-mt-20 pl-12 relative z-20">
      <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={" Popular Movies "} movies={movies.popularMovies} />
      <MovieList title={"New on Netflix   "} movies={movies.nowPlayingMovies} />
      <MovieList title={" Todays top picks for You "} movies={movies.nowPlayingMovies} />
      </div>
      {/*  MovieList - Popular 
          MovieCards * n 
        MovieList - Now Playing 
         MovieList - Trending 
          MovieList - New on Netflix   
         Todays top picks for u 
         */}
    </div>
  );
};

export default SecondaryContainer;
