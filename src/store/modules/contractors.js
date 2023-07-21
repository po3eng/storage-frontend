import { REGIONS } from "@/utils/constants";
import localStorage from "@/utils/local-storage";
const contractors = {
  namespaced: true,
  state: {
    contractors: [],
    regions: REGIONS,
  },
  getters: {
    getContractors(state) {
      if (!state.contractors.length) {
        state.contractors = localStorage.get("contractors") || [];
      }
      return state.contractors;
    },
    getRegions(state) {
      return state.regions;
    },
  },
  mutations: {
    setContractors(state, payload) {
      state.contractors = payload;
    },
    addContractor(state, payload) {
      state.contractors.push({ ...payload, id: Date.now() });
      localStorage.set("contractors", state.contractors);
    },
    deleteContractor(state, payload) {
      state.contractors = [...state.contractors.filter(item => +item.id !== +payload.id)];
      localStorage.set("contractors", state.contractors);
    },
    setContractor(state, payload) {
      state.contractors = [
        ...state.contractors.map(o => {
          return o.id === payload.id ? { ...0, ...payload } : o;
        }),
      ];
      localStorage.set("contractors", state.contractors);
    },
  },
  actions: {
    async deleteContractor({ commit }, contractor) {
      commit("deleteContractor", contractor);
    },
  },
};

export default contractors;
