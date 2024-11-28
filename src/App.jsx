import React, { useState, useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import * as starshipServices from "./services/starshipServices";

function App() {
  const [starships, setStarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStarships, setFilteredStarships] = useState([]);

  const fetchData = async () => {
    const data = await starshipServices.index();
    setStarships(data.results);
    setFilteredStarships(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    const fetchDefaultData = async () => {
      await fetchData();
    };
    fetchDefaultData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = starships.filter((starship) => starship.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredStarships(filtered);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search starships..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <StarshipList starships={filteredStarships} />
    </>
  );
}

export default App;
