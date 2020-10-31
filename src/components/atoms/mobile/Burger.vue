<template>
  <div id="burger" :class="{ active: isBurgerActive }" @click.prevent="toggle">
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
      </button>
    </slot>
  </div>
</template>
<script>
import { store, mutations } from "~/store.js";
export default {
  // data: () => ({
  //   isBurgerActive: false
  // }),
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    },
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    },
  },
};
</script>
<style lang="postcss">
button {
  cursor: pointer;
}
/* remove blue outline */
button:focus {
  outline: 0;
}
.burger-button {
  @apply block z-50 relative rounded-full bg-transparent;
  position: relative;
  height: 2rem;
  width: 2rem;
  border: 4px solid #38485a;
  pointer-events: all;
  /* transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); */
}
#burger.active .burger-button {
  background-color: #38485a;
}
</style>
