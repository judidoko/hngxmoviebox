import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Genres from "./Genres";

const Card = async ({ result }) => {
  return (
    <>
      <div className="relative cursor-pointer h-[500px] sm:hover:shadow-slate-400 sm:shadow-md rounded-md sm:border gap-10 sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Link href={`/movies/${result.id}`} className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={400}
            className="sm:rounded-t-md object-fill group-hover:opacity-80 transition-opacity duration-200"
            style={{
              maxWidth: "100%",
              height: "60%",
            }}
            alt="Poster"
            priority="true"
            data-testid="movie-poster"
          ></Image>
          <div className="my-2 px-2">
            <p className="line-clamp-2 text-md text-gray-400">
              {result.origin_country || "US"},
              {result.release_date || result.first_air_date}
            </p>
            <h2
              className="truncate text-lg my-2 text-gray-900 font-bold"
              data-testid="movie-title"
            >
              {result.title || result.name}
            </h2>
            <div className="flex items-center my-2 justify-between space-x-6">
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
                  width={50}
                  height={20}
                  priority
                />
                <span className="text-gray-900 text-base">97%</span>
              </p>
            </div>
            <p
              className="flex items-center my-2"
              data-testid="movie-release-date"
            >
              {result.release_date || result.first_air_date}
              {result.vote_count}
            </p>
            <p className="text-gray-400 my-2">
              {result?.genres?.map((genre, index) => (
                <Genres
                  key={genre?.id}
                  index={index}
                  length={movie?.genres?.length}
                  name={genre?.name}
                />
              )) || "Action / Adventure / Horror"}
            </p>
          </div>
        </Link>

        <p className="absolute right-4 top-4">
          <FaHeart className="w-[40px] h-[40px] p-3 rounded-full text-xl bg-gray-400 text-gray-300" />
        </p>
      </div>
    </>
  );
};

export default Card;
