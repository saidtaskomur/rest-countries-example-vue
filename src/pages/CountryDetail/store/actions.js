import axios from 'axios';

export default {
    fetchCountryDetailWithCountryCode({ commit }, param) {
      return axios.get(`v2/alpha/${param}`)
        .then((countryies) => {
          commit('SET_COUNTRY_DETAIL_DATA', {});
          commit('SET_LOADING_COUNTRY', true);
          commit('SET_COUNTRY_DETAIL_DATA', countryies.data);
        })
        .finally(() => {
          commit('SET_LOADING_COUNTRY', false);
        })
    },
  };