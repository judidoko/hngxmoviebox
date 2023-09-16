import Sidebar from "@/components/Sidebar";
import { Image } from "next/image";
import {
  BsChevronDown,
  BsFillStarFill,
  BsListUl,
  BsPlayFill,
} from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

const MovieDetails = async ({ params }) => {
  const movieId = params.id;
  // get movie
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const movie = await res.json();
  return (
    <>
      <div className="w-full flex p-2">
        <Sidebar />
        <div className="md:pt-8 md:w-8/12 flex-col items-center content-center max-w-6xl mx-auto md:space-x-6">
          <div className=" relative w-full flex items-center rounded-3xl justify-center">
            <div className="absolute h-full rounded-3xl w-full bg-gradient-to-t from-black"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
              }`}
              alt="Movie poster"
              priority="true"
              className="w-full h-full rounded-3xl object-cover"
            />
            <div className="absolute text-center">
              <BsPlayFill className="text-8xl ml-[55px] text-white rounded-full p-4 bg-slate-200 cursor-pointer" />
              <h6 className="text-white text-4xl">Watch Trailer</h6>
            </div>
          </div>
          {/* details */}
          <div className="p-2">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <h6 className="text-lg font-bold" data-testid="movie-title">
                {movie.title || movie.name}
              </h6>
              <RxDotFilled />
              <p className="text-base" data-testid="movie-release-date">
                {movie.release_date || movie.first_air_date}
              </p>
              <RxDotFilled />
              <p className="text-base">PG 13</p>
              <p className="text-base" data-testid="movie-runtime">
                {movie.runtime}M
              </p>
              <RxDotFilled />
              <p>{movie.genres?.map((genre) => genre.name).join("/")}</p>
              <p className="ml-6 flex flex-wrap items-center justify-center space-x-2">
                <span>
                  <BsFillStarFill className="text-yellow-600 text-lg" />
                </span>
                <span>{movie.vote_count}/350K</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between">
              <p
                className="text-lg w-auto lg:w-[70%] float-left mb-3"
                data-testid="movie-overview"
              >
                {movie.overview}
              </p>
              <div>
                <button className="flex flex-wrap items-center py-5 px-8 w-full justify-center mb-4 rounded border-none bg-rose-700 text-sm text-white gap-2">
                  <IoTicketSharp />
                  See Showtimes
                </button>
                <button className="flex flex-wrap items-center w-full rounded text-sm bg-rose-200 border-2 border-rose-700 py-4 px-8 gap-2">
                  <BsListUl />
                  More watch options
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between">
              <div className="">
                <div className="text-base text-black">
                  <p className="gap-2">
                    Director:
                    <span className="text-rose-700 text-lg">
                      Joseph Kosinski
                    </span>
                  </p>
                  <p className="my-4 gap-2">
                    Writers:
                    <span className="text-rose-700 text-lg">
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                  </p>
                  <p className="gap-3">
                    Stars:
                    <span className="text-rose-700 text-lg">
                      Tom Cruise, Jennifer Connelly, Miles Teller
                    </span>
                  </p>
                </div>
                <button className="border-2 flex text-xs md:text-base items-center border-gray-400 mt-4 rounded">
                  <span className="bg-rose-700 p-1 md:p-3 m-0 rounded border-none">
                    Top rated movie #65
                  </span>
                  <span className="bg-white p-1 md:p-3 mr-10 rounded">
                    Award 9 nominations
                  </span>
                  <span>
                    <BsChevronDown className="text-lg mr-3" />
                  </span>
                </button>
              </div>
              <div className="relative w-full md:w-[40%] mt-4">
                <img
                  src="/Rectangle.png"
                  alt="Best Movies and Show September"
                  className="w-full h-auto"
                />
                <button className="absolute flex items-center w-full bottom-0 bg-[#12121280] text-white text-sm p-2 rounded">
                  <BsListUl />
                  The Best Movies and Shows in September
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
