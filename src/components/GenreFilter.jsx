import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const GenreFilter = ({ genres, isCheckedGenres, setGenre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const updateGenre = (event) => {
    if (event.target.checked) {
      setGenre([...new Set([...isCheckedGenres, event.target.name])]);
    } else {
      setGenre(isCheckedGenres.filter((genre) => genre !== event.target.name));
    }
  };

  return (
    <div className="w-full" ref={dropdownRef}>
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="w-full text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-600 focus:border-blue-600 focus:outline-none font-medium text-sm p-3 text-center inline-flex items-center justify-between"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 2a3 3 0 0 1 2.238 5.07A3 3 0 0 1 7 12h10a3 3 0 0 1-2.238-4.93A3 3 0 0 1 17 6H7z" />
            <path d="M7 22a3 3 0 0 1-2.238-5.07A3 3 0 0 1 7 12h10a3 3 0 0 1 2.238 4.93A3 3 0 0 1 17 18H7z" />
          </svg>
          <span>Genre</span>
        </span>
        <svg
          className="w-5 h-5 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownDefaultCheckbox"
        className={`z-10 ${
          isOpen ? "" : "hidden"
        } w-full bg-gray-50 border border-gray-100 divide-y divide-gray-100 rounded-b-lg shadow absolute`}
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700 "
          aria-labelledby="dropdownCheckboxButton"
        >
          {genres.map((genre, index) => {
            return (
              <li key={index}>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    name={genre}
                    onChange={updateGenre}
                    defaultChecked
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 "
                  />
                  <label
                    htmlFor="checkbox-item-1"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    {genre}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.array.isRequired,
  setGenre: PropTypes.func.isRequired,
  isCheckedGenres: PropTypes.array.isRequired,
};

export default GenreFilter;
