import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  // Fetch movies from the Redux store
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Early return if movies array is empty or null
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>; // Fallback UI while movies are being fetched
  }

  // Get the first movie from the list
  const mainMovie = movies[0];
  // console.log(mainMovie); // Check if mainMovie is properly retrieved

  // Extract title and overview from the main movie
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground  movieId={id}/>
    </div>
  );
};

export default MainContainer;
