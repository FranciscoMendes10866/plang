<template>
  <div class="hero bg">
    <div class="hero-body">
      <div class="container">
        <button class="button is-fullwidth bg-bbtn mb-6" @click="reset">
          Go back
        </button>
        <h1
          class="has-text-white mb-6 title has-text-weight-bold has-text-centered"
        >
          Fnac
        </h1>
        <Fnac />
        <h1
          class="has-text-white mb-6 mt-6 title has-text-weight-bold has-text-centered"
        >
          InterDiscount
        </h1>
        <Inter />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import Fnac from "../components/Fnac.vue";
import Inter from "../components/Inter.vue";
import router from "../router";

export default defineComponent({
  components: {
    Fnac,
    Inter
  },
  setup() {
    const store: any = inject("store");
    function reset() {
      store.state.fnacResults = [];
      store.state.interResults = [];
      router.push("/");
    }
    return {
      store,
      reset
    };
  }
});
</script>

<style lang="scss">
.bg {
  background: #242629;
}
.bg-bbtn {
  background: #2cb67d;
  color: #fffffe;
  border: none;
}
.bg-card {
  background: #16161a;
}
.bg-btn {
  background: #7f5af0;
  border: none;
  color: #fffffe;
}
p {
  color: #94a1b2;
}
</style>
