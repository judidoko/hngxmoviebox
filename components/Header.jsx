import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import SearchMovie from "./SearchBox";

const Header = () => {
  return (
    <header>
      <div className="flex items-center w-full justify-between space-x-2 md:space-x-10">
        <div className="flex items-center space-x-3">
          <Image
            src="/tv.png"
            alt="Logo"
            width={100}
            height={100}
            priority
            className="cursor-pointer w-[30%] object-contain"
          />
          <h1 className="text-white">MovieBox</h1>
        </div>
        {/* Search Function */}
        <SearchMovie />

        <div className="flex items-center space-x-4">
          <button className="text-white font-bold">Sign in</button>
          <HiMenuAlt4 className="w-[36px] h-[36px] text-white bg-rose-700 rounded-full text-base p-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
