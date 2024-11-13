const BASE_URL = `https://swapi.dev/api/starships/`;

const index = async (starship) => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (error) {
      console.log(err);
    }
  };

export { index };