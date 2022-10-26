import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    input: "",
  },
  mutations: {
    setInput(state, value) {
      state.input = value;
    },
  },
});

export default store;
