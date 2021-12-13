export default {
    SET_ALL_COUNTRYIES(state, data) {
      state.data = data;
    },
    SET_SEARCH_COUNTRYIES(state, data) {
      state.searchedCountry = data;
    },
    LOADING_ALL_COUNTRYIES(state, data) {
      state.loadingCountryies = data;
    },
  };
  