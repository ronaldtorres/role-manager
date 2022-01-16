import { roles } from "../services/roles.service";

export default {
  namespaced: true,
  state: {
    roles: [],
  },
  mutations: {
    SET_ROLES(state, value) {
      state.roles = value;
    },
  },
  actions: {
    init({ commit }) {
      commit("SET_ROLES", roles);
    },
  },
  getters: {
    roles: (state) => state.roles,
  },
};
