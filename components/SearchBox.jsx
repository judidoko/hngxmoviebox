"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form onClick={handleSubmit} className="my-4 md:my-0">
      <div className="relative w-ful">
        <input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="what do you want to watch"
          className=" w-full md:w-[400px] lg:w-[525px] justify-between py-[6px] px-[10px] rounded-md text-gray-300 bg-transparent text-base border-2 border-gray-300"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 text-[20px] text-white"
          disabled={!search}
        >
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
