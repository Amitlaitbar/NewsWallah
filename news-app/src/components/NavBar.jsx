import React from "react";

export default function NavBar({setCategory}) {

  function updateCategory(e){
    setCategory(e.target.textContent.toLowerCase());
  }

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-0 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl cursor-pointer">NewsWallah</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>General</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Business</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Entertainment</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Health</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Science</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Sports</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Technology</a>
          </nav>
        
        </div>
      </header>
    </>
  );
}
