import React, { useState } from "react";

const StarshipSearch = ({ props }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a starship" />
      <button type="submit">Search</button>
    </form>
  );
};

export default StarshipSearch;
