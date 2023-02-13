import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import VueAxios from "vue-axios";


Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.axios.defaults.baseURL = "https://63e7e8d55f3e35d898eab908.mockapi.io/deepspacestore/api/v1/";


export default new Vuex.Store({
  state: {
    offer: null,
    address: null,
    addressRequestStatus: 'IDLE',
    offerRequestStatus: 'IDLE',
  },
  getters: {
  },
  mutations: {
    setOffer(state, offer) {
      state.offer = offer;
    },
    setAddress(state, address) {
      state.address = address;
    },
    setOfferRequestStatus(state, offerRequestStatus) {
      state.offerRequestStatus = offerRequestStatus;
    },
    setAddressRequestStatus(state, addressRequestStatus) {
      state.addressRequestStatus = addressRequestStatus;
    }
  },
  actions: {
    loadOffer({ commit }, id: number) {
      commit('setOfferRequestStatus', 'START');
      Vue.axios.get(`/offers/${id}`).then(result => {
        commit('setOffer', result.data);
        commit('setOfferRequestStatus', 'SUCCESS');
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    loadAddress({ commit }, zipCode: String) {
      commit('setAddressRequestStatus', 'START');
      Vue.axios.get(`https://viacep.com.br/ws/${zipCode}/json/`).then(result => {
        commit('setAddress', result.data);
        commit('setAddressRequestStatus', 'SUCCESS');
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  },
});
