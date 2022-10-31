import Image from "next/image";
import { MenuIcon, SearchIcon, UserCircleIcon, UsersIcon, GlobeAltIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5">
      <div> 
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          width={110}
          height={110}
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-xl sd:shadow">
        <input type="text" placeholder="Start Your Search" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"/>
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
      </div>

      <div>
        <p>Become a host</p>
      </div>
    </header>
  );
}

export default Header;

