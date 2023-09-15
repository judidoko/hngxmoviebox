import { FaChevronRight } from "react-icons/fa6";
import MovieCard from "./MovieCard";

const Movies = ({results}) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between p-4">
          <h3 className="text-black text-[36px] font-bold">Featured Movie</h3>
          <button className="flex items-center justify-center gap-1 text-rose-700">
            See More <FaChevronRight />
          </button>
        </div>
        <MovieCard results={results} />
      </div>
    </>
  );
};

export default Movies;
