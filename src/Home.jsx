import { BOOKS } from "./constants";
import BookCard from "./components/BookCard";
import { useEffect, useState } from "react";
import SearchFilter from "./components/SearchFilter";
import GenreFilter from "./components/GenreFilter";
import AuthorFilter from "./components/AuthorFilter";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState();
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  // Initialising Books
  useEffect(() => {
    setBooks(BOOKS);
    const genres = [...new Set(BOOKS.map((book) => book.genres).flat())];
    setGenre(genres);
    const authors = [...new Set(BOOKS.map((book) => book.author).flat())];
    setAuthors(authors);
  }, []);

  const filterBook = (book) => {
    // Filtering Books Based on the book,author and genre filters
    setBooks(
      BOOKS.filter(
        (b) =>
          (selectedGenre
            ? b.genres.some((g) => selectedGenre.includes(g))
            : true) &&
          (book ? b.title.toLowerCase().includes(book.toLowerCase()) : true) &&
          (selectedAuthor
            ? b.author.toLowerCase().includes(selectedAuthor.toLowerCase())
            : true)
      )
    );
  };

  const searchBook = (book) => {
    setSearchBooks(book);
    filterBook(book);
  };

  useEffect(() => {
    filterBook(searchBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenre, selectedAuthor]);

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Description */}
      <div className="text-center text-xl font-semibold py-3 px-6">
        &quot; Enter the enchanting realm of Booklandia, where captivating
        stories come alive and readers&rsquo; dreams take flight. <br /> Unleash
        your imagination and embark on a literary journey like no other. &quot;
      </div>
      <div className="flex flex-col items-center sm:items-start justify-center sm:flex-row gap-6 my-6 mx-3">
        {/* Book Filter */}
        <SearchFilter searchBook={searchBook} />

        {/* Genre Filter */}
        <GenreFilter genres={genre} setGenre={setSelectedGenre} />

        {/* Author Filter */}
        <AuthorFilter authors={authors} setAuthors={setSelectedAuthor} />
      </div>

      {/* Book Widgets */}
      <div
        className={`flex flex-wrap flex-col items-center sm:items-start justify-center sm:flex-row gap-6 my-6 mx-3`}
      >
        {books.map((book, index) => {
          return <BookCard key={index} {...book} />;
        })}
      </div>
    </div>
  );
};

export default Home;
