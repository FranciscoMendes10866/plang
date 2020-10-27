<template>
  <div class="columns is-3 is-multiline">
    <div
      class="column is-4"
      v-for="(item, i) in store.state.interResults"
      :key="i"
    >
      <div class="card bg-card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="item.img" alt />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p>{{ item.name }}</p>
          </div>
          <div class="content">
            <a
              class="button is-fullwidth bg-btn"
              :href="'https://www.interdiscount.ch' + item.link"
              target="blank"
              >View</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const store: any = inject("store");
    return {
      store
    };
  }
});
</script>
