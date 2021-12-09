import { createStore, storeKey } from "vuex";
import user from "./modules/user";
import post from "./modules/post";
import data from "../postdata";
import api from "../api";

export default createStore({
  state: () => ({
    count: 0,
    more: {},
  }),
  mutations: {
    increase(state) {
      console.log("increase");
      state.count += 1;
    },
    setMore(state, payload) {
      state.more = payload;
    },
  },
  actions: {
    async getAsyncMore(ctx) {
      let response = await api.get("more0.json");
      try {
        ctx.commit("setMore", response.data);
      } catch (e) {
        console.log(e);
        alert("네트워크 연결 상태를 확인해주세요");
      }
    },
  },
  modules: {
    user,
    post,
  },
});
