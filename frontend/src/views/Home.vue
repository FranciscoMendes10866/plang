<template>
  <div class="hero bg-main is-fullheight">
    <div class="hero-body">
      <div class="container">
        <form>
          <div class="field">
            <div class="control">
              <div class="columns is-centered has-text-centered">
                <div class="column is-5">
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input
                        v-model="search"
                        class="input is-medium"
                        type="email"
                        placeholder="What product?"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-search"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="column is-1">
                  <button
                    class="button is-medium btn-bg-main mt-1"
                    @click.prevent="fetch"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import axios from "axios";
import router from "../router";

export default defineComponent({
  setup() {
    const search = ref("");
    const store: any = inject("store");

    async function fetch() {
      const content = { searchProduct: search.value };
      await axios
        .post("http://localhost/fnac", content)
        .then(res => {
          store.state.fnacResults = res.data;
        })
        .catch(err => console.log(err));
      await axios
        .post("http://localhost/inter", content)
        .then(res => {
          store.state.interResults = res.data;
        })
        .catch(err => console.log(err));
      router.push("/results");
    }
    return {
      store,
      search,
      fetch
    };
  }
});
</script>
