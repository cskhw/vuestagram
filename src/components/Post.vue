<template>
  <div class="post">
    <div class="post-header">
      <div class="profile">
        <img :src="post.userImage" />
      </div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div class="post-body">
      <img :src="post.postImage" />
    </div>
    <div style="margin-top: 30px" class="post-content">
      <p @click="onClickLike" style="cursor: pointer">
        좋아요 {{ $store.state.post.posts[id].likes }}개
      </p>
      <p>
        <strong>{{ post.name }}</strong> {{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onCreate } from "vue";
import { useStore } from "vuex";

export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  components: {},
  setup(props) {
    const store = useStore();
    function onClickLike() {
      if (props.post.likeUsers.includes(props.post.name)) {
        store.commit("post/decreaseLike", { name: props.post.name });
        console.log(store.state.post.posts[props.id].likeUsers);
      } else {
        store.commit("post/increaseLike", { name: props.post.name });
        console.log(store.state.post.posts[props.id].likeUsers);
      }
    }
    return { onClickLike };
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile img {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
