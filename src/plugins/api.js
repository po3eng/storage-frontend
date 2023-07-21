import axios from "axios";
import { API_ROOT } from "@/utils/constants";
import store from "@/store";
import router from "@/router";
class API {
  constructor() {
    this.axios = axios.create({
      baseURL: API_ROOT,
      withCredentials: true,
    });

    this.axios.interceptors.request.use(
      async config => {
        // добавляем токен
        config.headers.Authorization = store.getters["user/getAccessToken"];
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
    //  обработка ответа
    this.axios.interceptors.response.use(
      async res => {
        return res.data;
      },
      async errorResponse => {
        const originalRequest = errorResponse.config;
        // если пришла 403
        if (errorResponse.response.status === 403 && !originalRequest._retry) {
          // ставим флаг повтора - избегаем рекурсии
          originalRequest._retry = true;
          // обновляем рефреш
          const tokens = await store.dispatch("user/refreshTokens");
          // закидываем новый токен в старый запрос
          axios.defaults.headers.common.Authorization = tokens["access_token"];
          // и запрашиваем данные снова
          return this.axios(originalRequest);
        }
        // если 401
        if (errorResponse.response.status === 401) {
          // разлогиниваемся 
          // идем на вход
          store.commit("user/logout");
          router.replace("/login").catch(() => {});
          return;
        }
        return Promise.reject(errorResponse);
      },
    );
  }

  login(data) {
    return this.axios.post("/auth/login", data);
  }
  logout(data) {
    return this.axios.get("/auth/logout", data);
  }

  refreshTokens(data) {
    return this.axios.post("/auth/refresh", data);
  }
  ///
  getStorages() {
    return this.axios.get("/storages");
  }
  createStorage(storage) {
    return this.axios.post("/storages", storage);
  }
  deleteStorage(id) {
    return this.axios.delete(`/storages/${id}`);
  }
  updateStorage(storage) {
    return this.axios.patch(`/storages/${storage.id}`, storage);
  }
  ///
  getUnits() {
    return this.axios.get("/units");
  }
  createUnit(unit) {
    return this.axios.post("/units", unit);
  }
  deleteUnit(id) {
    return this.axios.delete(`/units/${id}`);
  }
  updateUnit(storage) {
    return this.axios.patch(`/units/${storage.id}`, storage);
  }

  ///
}
const api = new API();

export default api;
