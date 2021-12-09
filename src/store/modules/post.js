import data from "../../postdata";

const post = {
  namespaced: true,
  state: () => ({
    posts: [...data],
    filter: "",
  }),
  mutations: {
    increaseLike(state, payload) {
      console.log("increaseLike");
      state.posts = state.posts.filter((post) => {
        if (post.name == payload.name) {
          console.log(post.name);
          post.likes += 1;
          post.likeUsers.push(payload.name);
          return post;
        }
        return post;
      });
    },
    decreaseLike(state, payload) {
      console.log("decreaseLike");
      state.posts = state.posts.filter((post) => {
        if (post.name == payload.name) {
          console.log(post.name);
          post.likes -= 1;
          post.likeUsers = post.likeUsers.filter((item) => {
            item.name != payload.name;
          });
          console.log(post.likeUsers);
          return post;
        }
        return post;
      });
    },
    setFilter(state, payload) {
      state.filter = payload.filter;
    },
  },
  actions: {},
};

export default post;
