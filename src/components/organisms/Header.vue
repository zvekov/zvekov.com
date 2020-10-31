<template>
  <div
    class="flex items-center py-4 px-2 xxs:p-4 justify-between max-w-2xl mx-auto"
  >
    <transition name="fade">
      <g-link class="flex" :to="$tp('/')">
        <Logo class="w-16" />
        <HeaderAbout class="pl-4" />
      </g-link>
    </transition>
    <Navigation class="lowercase hidden md:flex pl-8" />
    <NavigationMobile class="fixed md:hidden right-0 top-0 pt-8 pr-4" />
  </div>
</template>
<script>
import Logo from "@/components/atoms/Logo"
import HeaderAbout from "@/components/molecules/HeaderAbout"
import Navigation from "@/components/molecules/Navigation"
import NavigationMobile from "@/components/molecules/navigation_mobile"
import { store, mutations } from "@/store.js"
export default {
  components: {
    Logo,
    HeaderAbout,
    Navigation,
    NavigationMobile,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen
    },
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
    navigateToHome() {
      // router.push("/");
      if (store.isNavOpen) {
        mutations.toggleNav()
      }
      this.$router.push({ name: "index" })
    },
  },
}
</script>
