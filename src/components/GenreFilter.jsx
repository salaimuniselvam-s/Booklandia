import PropTypes from "prop-types";
import Select from "react-select";

const GenreFilter = ({ genres, setGenre }) => {
  return (
    <div className="w-full relative">
      <Select
        classNamePrefix="select"
        placeholder="Select Genre"
        onChange={(book, action) => {
          setGenre(action.action === "clear" ? "" : book.value);
        }}
        isClearable={true}
        isSearchable={true}
        name="genre"
        options={genres.map((genre) => {
          return { label: genre, value: genre };
        })}
      />
    </div>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.array.isRequired,
  setGenre: PropTypes.func.isRequired,
};

export default GenreFilter;
