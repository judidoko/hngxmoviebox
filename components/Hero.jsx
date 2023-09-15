"use client";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Hero = ({ results }) => {
  // javaScript to reduce overview text length
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  //  Plan javaScript to randomly display each movies anytime the page loads
  const movie = results[Math.floor(Math.random() * results.length)];
  return (
    <>
      <div className="h-[550px] w-full text-white">
        <div className="h-full w-full">
          <div className="absolute h-[550px] w-full bg-gradient-to-r from-black"></div>
          <img
            className="h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt="banner"
            priority="true"
          />
          <div className="absolute top-[20%] w-full p-4 md:p-8">
            <h1 className="text-3xl font-bold md:text-5xl">
              {movie.title || result.name}
            </h1>
            <div className="flex space-x-6 m-3">
              <p className=" text-base space-x-2">
                <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
                  IMDb
                </span>
                <span className="text-base hidden sm:inline">8.6/100</span>
              </p>
              <p className="flex items-center space-x-2">
                <Image
                  src="/PngItem.png"
                  alt="Ratings"
                  width={20}
                  height={10}
                  priority
                />
                <span className="text-white text-base">97%</span>
              </p>
            </div>
            <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
              {truncateString(movie?.overview, 150)}
            </p>
            <div className="my-4">
              <button className="flex items-center gap-2 border-none rounded-md px-5 py-2 text-white bg-red-700">
                <BsFillPlayCircleFill />
                Watch Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
