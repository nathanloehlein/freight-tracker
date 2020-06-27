export const getFavFilters = () =>
  JSON.parse(localStorage.getItem("favFilters")) || [];
export const setFavFilters = (currentFilters, dispatch) => {
  localStorage.setItem("favFilters", JSON.stringify(currentFilters));

  dispatch({
    type: "FAV_FILTER_SAVED",
    payload: currentFilters,
  });
};
export const saveCurrentFilterData = (list, dispatch) => {
  if (list.flat(Infinity).length > 0) {
    const listName = prompt("Please name the list");
    const currentFilters = [...getFavFilters()];
    currentFilters.push({
      name: listName || Math.random() * 26,
      list: list,
    });
    setFavFilters(currentFilters, dispatch);
  } else {
    alert("No filters are currently chosen");
  }
};

export const deleteFavFilter = (filter, index, dispatch) => {
  const newFilterList = getFavFilters().filter(
    (currentFilter, currentIndex) =>
      filter.name !== currentFilter.name && index !== currentIndex
  );
  setFavFilters(newFilterList, dispatch);
};

export default { saveCurrentFilterData, getFavFilters };
