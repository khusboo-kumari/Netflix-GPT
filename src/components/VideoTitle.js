const VideoTitle = ({ title, overview }) => {
  //   console.log("Title:", title, "Overview:", overview); // Check if title and overview are passed correctly

  return (
    <div className=" w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-6/12">{overview}</p>
      <div>
        <button className=" bg-gray-700 text-black   p-4  px-16 text-xl  rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className=" mx-2 bg-gray-400 text-black   p-4  px-16 text-xl bg-opacity-40 rounded-lg">
         ⫯ More Info
        </button> 
      </div>
    </div>
  );
};

export default VideoTitle;
