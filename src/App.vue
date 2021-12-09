<template>
  <div class="header">
    <router-link to="/test">테스트 페이지</router-link>
    <router-view></router-view>
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 2" @click="next">Next</li>
      <li v-if="step == 3" @click="publish(step)">발행</li>
    </ul>
  </div>
  <Container
    @write="content = $event"
    :posts="posts"
    :step="step"
    :imageUrl="url"
  />
  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button>
  <button @click="step = 3">버튼3</button>
  <button @click="check(step, posts, posts)">스텝체크</button>
  {{ tempText }}
  <input type="text" @input="temp2" v-model="tempText" />
  <div style="display: flex; flex-direction: column; border: 1px solid black">
    {{ temp }}
  </div>
  <div style="margin-top: 500px"></div>
</template>

<script>
import Container from "./views/Container.vue";
import { ref } from "vue";
import data from "./postdata";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Container,
  },
  setup() {
    const tempText = ref("");
    const store = useStore();
    const step = ref(1);
    const url = ref("");
    const posts = ref([...data]);
    const content = ref("");
    const dd = ["fdsa", "qrewq", "vcxz"];
    const temp = ref([...dd]);
    function temp2() {
      console.log(temp.value[0].includes(tempText.value));
      temp.value = dd.filter((item) => {
        if (item.includes(tempText.value)) {
          return true;
        }
      });
    }
    function publish() {
      var post = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: url.value,
        likes: 36,
        date: "May 15",
        liked: false,
        content: content.value,
        filter: "perpetua",
      };
      posts.value.unshift(post);
      step.value = 0;
    }
    function check() {
      console.log(step.value);
      console.log(data);
      console.log(posts.value);
    }
    function next() {
      step.value++;
      if (step.value > 2) {
        step.value = 0;
      }
    }
    function upload(e) {
      let file = e.target.files[0];
      if (file.type.substr(0, 5) == "image") {
        console.log("fdsa");
        url.value = URL.createObjectURL(file);
        step.value = 2;
      } else {
        alert("이미지를 업로드해주세요.");
      }
    }
    async function more() {
      console.log("more");
      store.dispatch("getAsyncMore");
    }

    return {
      step,
      url,
      posts,
      content,
      temp,
      tempText,
      more,
      check,
      upload,
      next,
      publish,
      temp2,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
