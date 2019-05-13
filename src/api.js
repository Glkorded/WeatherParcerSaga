const proxy = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.metaweather.com/api";

const api = {
  getInputData: name => `${proxy}${url}/location/search/?query=${name}`,
  getDetailedData: cityId => `${proxy}${url}/location/${cityId}`
};

export default api;
