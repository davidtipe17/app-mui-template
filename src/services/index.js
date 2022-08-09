import Config from "../Config.js";

// crear la funcion searchByText(searchText)
// dentro harán un fetch, a esta url:
// config.apiUrl + "?s=" + searchText + "&apikey=" + config.apiKey

const searchByText = async (searchText) => {
  const response = await fetch(
    Config.api.url + "?s=" + searchText + "&apikey=" + Config.api.key
  );
  const data = await response.json();
  return data;
};

const Services = {
  searchByText,
};

export default Services;
