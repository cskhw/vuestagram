<template>
  <div
    @click="clickFilter"
    :class="filter + ' filter-item'"
    :style="`background: url(${image})`"
  >
    <slot></slot>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "filterbox",
  props: {
    image: {
      type: String,
      required: true,
    },
    filter: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    function clickFilter() {
      console.log("clickFilter");
      store.commit("post/setFilter", { filter: props.filter });
    }
    return { clickFilter };
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
