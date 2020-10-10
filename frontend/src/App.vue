<template>
  <div>
      <Navbar />
      <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;300;500;700&display=swap');
* {
  font-family: 'Sora', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
