<template>
  <div class="container">
    <div class="posts" v-if="step == 1">
      <Post v-for="(a, i) in posts" :key="i" :post="a" :id="i" />
    </div>
    <div v-if="step == 2">
      <div
        :class="filter + ' upload-image'"
        :style="`background: url(${imageUrl})`"
      ></div>
      <div class="filters">
        <FilterBox :image="imageUrl" v-for="a in filters" :key="a" :filter="a">
          <span style="color: black">{{ a }}</span>
        </FilterBox>
      </div>
    </div>
    <div v-if="step == 3" class="upload-image"></div>
    <div v-if="step == 3" class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">
write!</textarea
      >
    </div>
    <button @click="check"></button>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import { ref, watch } from "vue";
import filtersData from "../filters";
import FilterBox from "../components/FilterBox.vue";
import { useStore } from "vuex";

export default {
  name: "Container",
  components: { Post, FilterBox },
  props: {
    step: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const filter = ref(store.state.post.filter);
    watch(
      () => store.state.post.filter,
      (newValue, oldValue) => {
        filter.value = newValue;
      }
    );
    const filters = ref([...filtersData]);
    return { filter, filters };
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
