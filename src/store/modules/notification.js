const notification = {
  /* example 
    notification: {
      type: '', // success, warning, error,info
      text: '',
    },
  */
  namespaced: true,
  state: {
    notification: { text: "", type: "info" },
  },

  getters: {
    get(state) {
      return state.notification;
    },
  },
  mutations: {
    set(state, payload) {
      state.notification = { ...state.notification, ...payload };
    },
  },
  actions: {
    showNotification({ commit, state }, payload) {
      commit("set", payload);
    },
    hideNotification({ commit }) {
      commit("set", { text: "" });
    },
  },
};

export default notification;
