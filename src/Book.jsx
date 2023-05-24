import { useParams } from "react-router-dom";
import { BOOKS } from "./constants";
import { useEffect } from "react";

const Book = () => {
  const { bookName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {BOOKS.filter((book) => book.title === bookName).map((book, index) => (
        <div
          className="flex flex-col items-center  justify-center m-3"
          key={index}
        >
          <div className="text-3xl font-semibold">
            {book.title} <br />
            <div className="text-base text-center italic">
              by <br />{" "}
              <span
                className="cursor-pointer"
                onClick={() => window.open(book.authorUrl)}
              >
                {book.author}
              </span>
            </div>
          </div>
          <div className="p-3 font-medium">{book.summary}</div>
          <div className="p-3 font-normal">
            <ul className="list-disc list-inside">
              {book.description.map((desc, index) => (
                <li className="p-1" key={index}>
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 mt-3 mb-9 bg-slate-50 border border-gray-200 rounded-lg shadow">
            <div className="text-2xl p-1 font-semibold text-center">
              <i className="fa-solid fa-thought-bubble"></i> Analogies
            </div>
            <div>
              {book.Analogies.map((analogy, index) => (
                <p
                  className="p-3 my-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                  key={index}
                >
                  {analogy}
                </p>
              ))}
            </div>
          </div>
          <div className="p-3  bg-slate-50 border border-gray-200 rounded-lg shadow">
            <div className="text-2xl p-1 font-semibold text-center">
              <i className="fa-sharp fa-solid fa-book-open-reader mr-2"></i>
              Quotes
            </div>
            <div>
              {book.quotes.map((quote, index) => (
                <p
                  className="p-3 my-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                  key={index}
                >
                  {`"${quote}"`}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
