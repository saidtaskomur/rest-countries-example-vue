export default {
    getAllCountryies(state) {
      return state.data
    },
    getSearchedCountry(state) {
      return state.searchedCountry
    },
    getLoadingCountryies(state) {
      return state.loadingCountryies
    },
    getSpesificEightCountryies(state) {
      let someSpesificEightCountryList = [];
      state.someSpesificEightCountryList.forEach(item => {
        someSpesificEightCountryList.push(state.data.find(element => element.name === item)) 
      });
      return someSpesificEightCountryList;
    }
  };
  