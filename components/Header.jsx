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
          width={120}
          height={120}
          className="hover:scale-120  transition duration-250"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md sd:shadow hover:shadow-xl transition duration-250">
        <input type="text" placeholder="Start Your Search" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 "/>
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 active:scale-90  transition duration-250"/>
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
       < GlobeAltIcon className="h-6 cursor-pointer"/>
       <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-xl transition duration-250">
        <MenuIcon className="h-6 cursor-pointer" />
        <UserCircleIcon className="h-6 cursor-pointer"/>
      </div>
      </div>

   
    </header>
  );
}

export default Header;

