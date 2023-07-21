class LocalStorage {
  getUser() {
    return this.get("user") || null;
  }
  getAccessToken() {
    return this.get("accessToken") || [];
  }
  getRefreshToken() {
    return this.get("refreshToken") || [];
  }

  setUser(user) {
    return this.set("user", user);
  }
  setAccessToken(token) {
    return this.set("accessToken", token);
  }
  setRefreshToken(token) {
    return this.set("refreshToken", token);
  }

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  remove(key) {
    window.localStorage.removeItem(key);
  }
}

const localStorage = new LocalStorage();

export default localStorage;
