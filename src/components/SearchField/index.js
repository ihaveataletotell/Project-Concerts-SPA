import "./SearchField.scss";
import React from "react";

const SearchField = ({ text, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search__search-field"
        value={text}
        onChange={onChange}
        placeholder="Найти группу..."
      />
    </div>
  );
};

export default SearchField;
