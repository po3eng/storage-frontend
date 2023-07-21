import api from "@/plugins/api";
import localStorage from "@/utils/local-storage";
const user = {
  namespaced: true,
  state: {
    user: null,
    accessToken: null,
  },
  mutations: {
    update(state, payload) {
      const { user, access_token, refresh_token } = payload;
      state.user = user;
      localStorage.set("user", user);
      state.accessToken = access_token;
      localStorage.set("access_token", access_token);
      localStorage.set("refresh_token", refresh_token);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    logout(state, payload) {
      state.user = null;
      localStorage.remove("access_token");
      localStorage.remove("user");
      localStorage.remove("refresh_token");
    },
    updateTokens(state, payload) {
      const { access_token, refresh_token } = payload;
      state.accessToken = access_token;
      localStorage.set("access_token", access_token);
      localStorage.set("refresh_token", refresh_token);
    },
  },

  getters: {
    getUser(state) {
      if (state.user) {
        return state.user;
      } else {
        state.user = localStorage.get("user");
        return state.user;
      }
    },
    getAccessToken(state) {
      if (state.accessToken) {
        return state.accessToken;
      } else {
        state.accessToken = localStorage.get("access_token");
        return state.accessToken;
      }
    },
  },
  actions: {
    login({ commit }, payload) {
      return api.login(payload);
    },
    
    logout({ commit, state }) {
      const logouted = api.logout({ refresh_token: localStorage.get("refresh_token") });
      commit("user/logout");
      return logouted;
    },

    async refreshTokens({ commit, state }) {
      const response = await api.refreshTokens({ refresh_token: localStorage.get("refresh_token") });
      if (response) {
        commit("updateTokens", response);
      }
      return response;
    },
  },
};
export default user;
