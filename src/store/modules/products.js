import localStorage from "@/utils/local-storage";
const products = {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    getProducts: state => {
      if (!state.products.length) {
        state.products = localStorage.get("products") || [];
      }
      return state.products;
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },

    addProduct(state, payload) {
      state.products.push({ ...payload, id: Date.now() });
      localStorage.set("products", state.products);
    },

    deleteProduct(state, payload) {
      state.products = [...state.products.filter(item => +item.id !== +payload.id)];
      localStorage.set("products", state.products);
    },

    setProduct(state, payload) {
      state.products = [
        ...state.products.map(o => {
          return o.id === payload.id ? { ...0, ...payload } : o;
        }),
      ];
      localStorage.set("products", state.products);
    },
  },
  actions: {},
};

export default products;
