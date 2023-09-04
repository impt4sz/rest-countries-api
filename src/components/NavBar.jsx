import { BsMoonStars } from "react-icons/bs";

const NavBar = () => {

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="bg-white text-very-dark-blue-text flex justify-center drop-shadow font-nunito-sans dark:bg-dark-blue dark:text-white">
      <div className="flex items-center justify-between max-w-[1440px] w-[88%]  h-20">
        <h1 className="font-semibold sm:font-bold text-base sm:text-xl ">
          Where in the world?
        </h1>
        <div className=" text-sm font-semibold flex flex-row items-center justify-between gap-x-1 md:gap-x-2">
          <BsMoonStars />
          <button onClick={toggleDarkMode}>Dark Mode</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
