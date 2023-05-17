import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-6">
        <a className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <i className="fa-solid fa-book-open-cover text-blue-400 text-xl mr-2"></i>
            <Link to="/">Booklandia</Link>
          </span>
        </a>
        <div className="flex md:order-2">
          <a
            href="https://github.com/salaimuniselvam-s/books"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer whitespace-nowrap  text-base font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 button-text "
          >
            <i className="fa-brands fa-github cursor-pointer" /> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
