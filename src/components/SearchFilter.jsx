// import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { BOOKS } from "../constants";

const SearchFilter = ({ searchBook }) => {
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <Select
          classNamePrefix="select"
          placeholder="Search Books"
          onChange={(book, action) => {
            searchBook(action.action === "clear" ? "" : book.value);
          }}
          isClearable={true}
          isSearchable={true}
          name="book"
          options={BOOKS.map((book) => {
            return { label: book.title, value: book.title };
          })}
        />
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  searchBook: PropTypes.func.isRequired,
};

export default SearchFilter;
