<template>
  <div class="container">
    <div class="hero bg-gray">
      <div class="hero-body">
        <div class="columns">
          <div class="column col-6">
            <button class="btn">default button</button>
          </div>
          <div class="column col-6">
            <button class="btn btn-primary">primary button</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
