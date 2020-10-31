<template>
  <div class="sidebar">
    <div
      v-if="isPanelOpen"
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
    ></div>
    <transition name="fade">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "~/store.js";
export default {
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
};
</script>
<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
.sidebar-backdrop {
  background-color: rgba(19, 15, 64, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  cursor: pointer;
}
.sidebar-panel {
  @apply w-full fixed top-0 left-0 h-screen z-40;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.93);
  padding: 3rem 20px 2rem 20px;
}
</style>
