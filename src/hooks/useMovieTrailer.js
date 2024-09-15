import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  //  Always use your hooks in the top .

  const dispatch = useDispatch();

  //  make state for the trailer Id for src in iframe tag
  // const [trailerId, setTrailerId] = useState(null);
  //   Fetch trailer video && updating the store with  trailer  video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+
      movieId +"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0]; // To fetch a single "Trailer" from that movie .
    // console.log(trailer);

    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };

  //  Now, i will call this getMovieVideos inside my useEffect
  useEffect(() => {
    getMovieVideos();
  }, []); // If i dont put this [], my API call will stuck in infinite loop .
};

export default useMovieTrailer ; 
