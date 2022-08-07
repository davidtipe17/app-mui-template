import Config from "../config.js";

// crear la funcion searchByText(searchText)
// dentro harán un fetch, a esta url:
// config.apiUrl + "?s=" + searchText + "&apikey=" + config.apiKey

const searchByText = async (searchText) => {
  try {
    const response = await fetch(
      Config.api.url + "?s=" + searchText + "&apikey=" + Config.api.key
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

const Services = {
    searchByText,
}

export default Services;
