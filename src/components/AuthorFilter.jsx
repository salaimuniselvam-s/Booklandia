import PropTypes from "prop-types";
import Select from "react-select";

const AuthorFilter = ({ authors, setAuthors }) => {
  return (
    <div className="w-full max-w-sm relative">
      <Select
        classNamePrefix="select"
        placeholder="Select Author"
        onChange={(book, action) => {
          setAuthors(action.action === "clear" ? "" : book.value);
        }}
        isClearable={true}
        isSearchable={true}
        name="genre"
        options={authors.map((genre) => {
          return { label: genre, value: genre };
        })}
      />
    </div>
  );
};

AuthorFilter.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
};

export default AuthorFilter;
