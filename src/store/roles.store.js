import { roles } from "../services/roles.service";

export default {
  namespaced: true,
  state: {
    roles: [],
    filteredRoles: undefined,
  },
  mutations: {
    SET_ROLES(state, value) {
      state.roles = value;
    },
    SET_FILTERED_ROLES(state, value) {
      state.filteredRoles = value;
    },
  },
  actions: {
    init({ commit }) {
      commit("SET_ROLES", roles);
    },

    filterRoles({ commit }, value) {
      commit("SET_FILTERED_ROLES", value);
    },

    deleteRole({ commit, state }, id) {
      commit(
        "SET_ROLES",
        state.roles.filter((r) => r.id !== Number(id))
      );
    },
  },
  getters: {
    roles: ({ filteredRoles, roles }) =>
      filteredRoles ? filteredRoles : roles,

    getById: (state) => (id) => state.roles.find((r) => r.id === Number(id)),
  },
};
