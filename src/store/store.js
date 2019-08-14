import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import event from "@/store/event";

Vue.use(Vuex);

const namespaced = true;

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  namespaced,
  modules: {
    event
  }
});

export default store;
