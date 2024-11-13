const StarshipList = ({ starships }) => {
  return (
    <div>
      {starships.map((starship) => (
        <div key={starship.name}>
          <h2>{starship.name}</h2>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Passengers: {starship.passengers}</p>
          <p>Cargo Capacity: {starship.cargo_capacity}</p>
        </div>
      ))}
    </div>
  );
};

export default StarshipList;
