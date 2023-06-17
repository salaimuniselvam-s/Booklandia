import { BOOKS } from "./constants";
import BookCard from "./components/BookCard";
import { useEffect, useState } from "react";
import SearchFilter from "./components/SearchFilter";
import GenreFilter from "./components/GenreFilter";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState();
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  // Initialising Books
  useEffect(() => {
    setBooks(BOOKS);
    const genres = [...new Set(BOOKS.map((book) => book.genres).flat())];
    setGenre(genres);
  }, []);

  // Filtering Books Based on the genre category and search keyword
  const filterBook = (book) => {
    if (!book && selectedGenre) {
      setBooks(
        BOOKS.filter((b) => b.genres.some((g) => selectedGenre.includes(g)))
      );
    } else if (!book && !selectedGenre) {
      setBooks(BOOKS);
    } else {
      setBooks(
        BOOKS.filter((b) => b.title.toLowerCase().includes(book.toLowerCase()))
      );
    }
  };

  const searchBook = (book) => {
    setSearchBooks(book);
    filterBook(book);
  };

  useEffect(() => {
    filterBook(searchBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenre]);

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Description */}
      <div className="text-center text-xl font-semibold py-3 px-6">
        &quot; Enter the enchanting realm of Booklandia, where captivating
        stories come alive and readers&rsquo; dreams take flight. <br /> Unleash
        your imagination and embark on a literary journey like no other. &quot;
      </div>
      <div className="flex flex-col sm:flex-row gap-6 my-6 mx-3">
        <div className="w-full sm:w-9/12">
          {/* Search Filter */}
          <SearchFilter searchBook={searchBook} />
        </div>
        <div className="w-full sm:w-3/12">
          {/* Genre Category Filter */}
          <GenreFilter genres={genre} setGenre={setSelectedGenre} />
        </div>
      </div>

      {/* Book Widgets */}
      <div
        className={`flex flex-wrap flex-col items-center sm:items-start ${
          books.length > 1 && "justify-center"
        } sm:flex-row gap-6 my-6 mx-3`}
      >
        {books.map((book, index) => {
          return <BookCard key={index} {...book} />;
        })}
      </div>
    </div>
  );
};

export default Home;
