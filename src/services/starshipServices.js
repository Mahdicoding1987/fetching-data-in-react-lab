const BASE_URL = `https://swapi.dev/api/starships/`;

const show = async (starship) => {
    try {
      const queryString = `${starship}`;
      const res = await fetch(BASE_URL + queryString);
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (error) {
      console.log(err);
    }
  };

export { show };