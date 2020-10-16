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
                  <button class="button is-medium btn-bg-main mt-1">
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home"
});
</script>
