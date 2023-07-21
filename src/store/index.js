import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import user from "./modules/user";
import units from "./modules/units";
import storages from "./modules/storages";
import products from "./modules/products";
import lists from "./modules/lists";
import contractors from "./modules/contractors";
import notification from "./modules/notification";
export default new Vuex.Store({
  modules: {
    user,
    storages,
    products,
    lists,
    units,
    contractors,
    notification,
  },
});
