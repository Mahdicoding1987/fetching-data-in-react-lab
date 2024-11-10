import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import starshipServices from "./services/starshipServices";
import { useState, useEffect } from "react";

function App() {
  const [starships, setStarships] = useState({});

  const fetchData = async (starship) => {
    const data = await starshipServices.show(starship);
    const starshipState = {
      passengers: data.passengers.name,
      manufacturer: data.manufacturer,
      cargo_capacity: data.cargo_capacity,
    };

    setStarships(starshipState);
    console.log("Data:", data);
  };

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search starships..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <StarshipList />
    </>
  );
}

export default App;
