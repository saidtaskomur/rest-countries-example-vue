import axios from 'axios';

export default {
  fetchAllCountryies({ commit }) {
    return axios.get('v2/all')
      .then((countryies) => {
        commit('LOADING_ALL_COUNTRYIES', true);
        commit('SET_ALL_COUNTRYIES', countryies.data);
      })
      .finally(() => {
        commit('LOADING_ALL_COUNTRYIES', false);
      })
  },
  fetchCountrySearch({ commit }, param) {
    return axios.get(`v2/name/${param}`)
      .then((countryies) => {
        commit('LOADING_ALL_COUNTRYIES', true);
        commit('SET_SEARCH_COUNTRYIES', countryies.data);
      })
      .finally(() => {
        commit('LOADING_ALL_COUNTRYIES', false);
      })
  },
  fetchCountryRegionSearch({ commit }, param) {
    return axios.get(`/v2/regionalbloc/${param.key}`)
      .then((countryies) => {
        commit('LOADING_ALL_COUNTRYIES', true);
        commit('SET_SEARCH_COUNTRYIES', countryies.data);
      })
      .finally(() => {
        commit('LOADING_ALL_COUNTRYIES', false);
      })
  },
};
