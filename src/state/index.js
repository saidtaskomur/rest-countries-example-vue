import Vue from 'vue';
import Vuex from 'vuex';
import homePage from '../pages/HomePage/store'
import countryDetail from '../pages/CountryDetail/store'

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    homePage,
    countryDetail
  },
};

export default new Vuex.Store(storeOptions);
