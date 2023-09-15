const Genres = ({ name }) => {
  console.log(name);
  return (
    <>
      <div className="flex gap-4 text-textColor hover:text-white cursor-pointer">
        <div>{name}</div>
        <div className="text-textColor">{index + 1 !== length ? "/" : ""}</div>
      </div>
    </>
  );
};

export default Genres;
