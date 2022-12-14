import React from "react";

function Search({ onSearchChange, search }) {
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchChange}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
