<template>
  <div class="test">
    <span>Test Page</span>
  </div>
  <teleport to="#teleport-area">
    <span>modal area</span>
  </teleport>

  <button @click="openModal = true">텔레포트 모달창</button>
</template>

<script>
import { defineComponent } from "vue";
const Test = defineComponent({
  name: "Test",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    return { props, ctx };
  },
});
export default Test;
</script>
<style></style>
