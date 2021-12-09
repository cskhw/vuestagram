import api from ".";
export default {
  getPosts() {
    return api({
      baseUrl: "more0.json",
      method: "get",
    });
  },
  getOnePosts() {
    return api;
  },
};
