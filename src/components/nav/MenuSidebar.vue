<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "~/store.js";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>   
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter {
  transform: translateY(-100%);
  transition: all 75ms ease-in 0s;
}
.slide-leave-to {
  transform: translateY(-100%);
  transition: all 100ms ease-out 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 50;
  padding: 3rem 20px 2rem 20px;
  width: 100%;
}
.sidebar-panel li {
  /* text-transform: uppercase; */
  font-size: 1.5rem;
  padding: 0.5rem 0;
}
</style>