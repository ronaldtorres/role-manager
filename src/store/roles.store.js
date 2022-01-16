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
      let roles = state.roles.filter((r) => r.id !== Number(id));
      commit("SET_ROLES", roles);
      commit("SET_FILTERED_ROLES", roles);
    },

    updateRole({ state, commit }, [id, value]) {
      let updated = state.roles.map((r) => (r.id == id ? value : r));
      commit("SET_ROLES", updated);
    },

    addRole({ state, commit }, value) {
      value = {
        ...value,
        id: state.roles.length + 1,
        created_on: new Date(),
        modified_on: new Date(),
        users: [],
      };

      state.roles.push(value);

      commit("SET_ROLES", state.roles);
    },
  },
  getters: {
    roles: ({ filteredRoles, roles }) =>
      filteredRoles ? filteredRoles : roles,

    getById: (state) => (id) => state.roles.find((r) => r.id === Number(id)),
  },
};
