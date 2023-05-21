import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BookCard = ({ imgSrc, title, summary, genres }) => {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-sm rounded cursor-pointer mb-6 shadow-2xl"
      onClick={() => navigate(`/book/${title}`)}
    >
      <img
        className="w-full h-80 object-fit"
        src={"http://127.0.0.1:5173" + `/images/books/${imgSrc}`}
        alt={title}
      />
      <div className="px-6 py-4 overflow-y-auto h-[265px]">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="px-6 pt-2 pb-1 overflow-y-auto h-[95px]">
        {genres.map((genre, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-blue-500 hover:bg-blue-700  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            >
              {genre}
            </span>
          );
        })}
      </div>
    </div>
  );
};

BookCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default BookCard;
