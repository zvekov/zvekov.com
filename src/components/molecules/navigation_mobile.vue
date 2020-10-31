<template>
  <div class="z-50">
    <nav class="main-nav">
      <burger></burger>
    </nav>
    <sidebar>
      <Navigation
        class="pb-16 flex flex-col text-center uppercase font-bold leading-loose text-xl xs:text-2xl"
        @click.native="closeSidebarPanel"
      />
      <LocaleSwitcher class="flex" @click.native="closeSidebarPanel" />
    </sidebar>
  </div>
</template>

<script>
import Navigation from "@/components/molecules/Navigation"
import Burger from "@/components/atoms/mobile/Burger"
import Sidebar from "@/components/atoms/mobile/Sidebar"
import LocaleSwitcher from "@/components/atoms/LocaleSwitcher"
import { store, mutations } from "@/store.js"
export default {
  components: {
    Navigation,
    Burger,
    Sidebar,
    LocaleSwitcher,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen
    },
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
}
</script>
<style lang="postcss">
.sidebar-panel {
  @apply flex items-center justify-center flex-col;
}
</style>
