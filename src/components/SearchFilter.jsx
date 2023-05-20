import PropTypes from "prop-types";

const SearchFilter = ({ searchBook }) => {
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => searchBook(e.target.value)}
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-600 focus:border-blue-600 focus:outline-none"
            placeholder="Search Books"
          />
        </div>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  searchBook: PropTypes.func.isRequired,
};

export default SearchFilter;
