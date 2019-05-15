export const getFavourites = () =>
  JSON.parse(localStorage.getItem("favouriteData"));

export const setFavourites = favouriteData =>
  localStorage.setItem("favouriteData", JSON.stringify(favouriteData));
