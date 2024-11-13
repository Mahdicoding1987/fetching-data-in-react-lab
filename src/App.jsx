import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import * as starshipServices from "./services/starshipServices";
import { useState, useEffect } from "react";

function App() {
  const [starships, setStarships] = useState([]);

  const fetchData = async () => {
    const data = await starshipServices.index();
    setStarships(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    const fetchDefaultData = async () => {
      await fetchData();
    };
    fetchDefaultData();
  }, []);

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search starships..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <StarshipList starships={starships} />
    </>
  );
}

export default App;
