import localStorage from "@/utils/local-storage";
import api from "@/plugins/api";

const units = {
  namespaced: true,
  state: {
    units: [],
  },
  mutations: {
    setUnits(state, payload) {
      state.units = payload;
    },

    updateUnits(state, payload) {
      state.units.push(payload);
    },

    deleteUnit(state, payload) {
      state.units = [...state.units.filter(item => +item.id !== +payload.id)];
    },

    setUnit(state, payload) {
      state.units = [
        ...state.units.map(o => {
          return o.id === payload.id ? { ...o, ...payload } : o;
        }),
      ];
    },
  },
  getters: {
    getUnits(state) {
      return state.units;
    },
  },
  actions: {
    async fetchUnits({ commit, state }) {
      const responce = await api.getUnits();
      if (responce) {
        commit("setUnits", responce);
      }
    },

    async createUnit({ commit }, unit) {
      const responce = await api.createUnit(unit);
      if (responce) {
        commit("updateUnits", responce);
      }
    },

    async deleteUnit({ commit }, unit) {
      const responce = await api.deleteUnit(unit.id);
      if (responce) {
        commit("deleteUnit", unit);
      }
    },

    async updateUnit({ commit }, unit) {
      const responce = await api.updateUnit(unit);
      if (responce) {
        commit("setUnit", unit);
      }
    },
  },
};

export default units;
