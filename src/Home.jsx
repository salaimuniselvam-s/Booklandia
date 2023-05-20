import { BOOKS } from "./constants";
import BookCard from "./components/BookCard";
import { useEffect, useState } from "react";
import Genre from "./components/Genre";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(BOOKS);
  }, []);

  const searchBook = (book) => {
    if (!book) {
      setBooks(BOOKS);
    } else {
      setBooks(
        BOOKS.filter((b) => b.title.toLowerCase().includes(book.toLowerCase()))
      );
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Description */}
      <div className="text-center text-xl font-semibold py-3 px-6">
        &quot; Enter the enchanting realm of Booklandia, where captivating
        stories come alive and readers&rsquo; dreams take flight. <br /> Unleash
        your imagination and embark on a literary journey like no other. &quot;
      </div>
      {/* Filters */}
      <div className="flex justify-between p-3">
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
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-600 focus:border-blue-600 focus:outline-none"
              placeholder="Search Books"
            />
            {/* <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button> */}
          </div>
        </div>
      </div>
      <Genre />

      {/* Book Widgets */}
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 my-6 mx-3">
        {books.map((book, index) => {
          return <BookCard key={index} {...book} />;
        })}
      </div>
    </div>
  );
};

export default Home;
