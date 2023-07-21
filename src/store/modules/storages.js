import localStorage from "@/utils/local-storage";
import api from "@/plugins/api";

const storages = {
  namespaced: true,
  state: {
    storages: [],
    units: [],
  },
  mutations: {
    deleteStorage(state, payload) {
      state.storages = [...state.storages.filter(item => +item.id !== +payload.id)];
    },
    updateStorages(state, payload) {
      state.storages.push(payload);
    },

    setStorage(state, payload) {
      state.storages = [
        ...state.storages.map(o => {
          return o.id === payload.id ? { ...0, ...payload } : o;
        }),
      ];
    },
    setStorages(state, payload) {
      state.storages = payload;
    },
  },
  getters: {
    getStorages(state) {
      return state.storages;
    },
  },
  actions: {
    async fetchStorages({ commit, state }) {
      const responce = await api.getStorages();
      if (responce) {
        commit("setStorages", responce);
      }
    },
    async createStorage({ commit }, storage) {
      const responce = await api.createStorage(storage);
      if (responce) {
        commit("updateStorages", responce);
      }
    },
    async deleteStorage({ commit }, storage) {
      const responce = await api.deleteStorage(storage.id);
      if (responce) {
        commit("deleteStorage", storage);
      }
    },
    async updateStorage({ commit }, storage) {
      const responce = await api.updateStorage(storage);
      if (responce) {
        commit("setStorage", storage);
      }
    },
  },
};

export default storages;
