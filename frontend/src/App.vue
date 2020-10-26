<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import store from "./store/index";

export default defineComponent({
  setup() {
    provide("store", store);
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Commissioner:wght@400;600&display=swap");
* {
  font-family: "Commissioner", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bg-main {
  background-color: #004643 !important;
}
.btn-bg-main {
  background-color: #f9bc60 !important;
  color: #001e1d !important;
  outline: none !important;
  border: none !important;
}
</style>
