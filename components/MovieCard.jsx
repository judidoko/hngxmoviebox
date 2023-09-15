import Card from "./Card";

const MovieCard = ({ results }) => {
  const tenMovies = results.slice(0, 10);
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {tenMovies?.map((result) => (
        <Card key={result.id} result={result} data-testid="movie-card" />
      ))}
    </div>
  );
};

export default MovieCard;
