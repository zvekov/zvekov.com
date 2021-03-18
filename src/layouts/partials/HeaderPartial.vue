<template>
  <div
    class="flex items-center justify-between max-w-2xl px-2 py-4 mx-auto xxs:p-4 h-24"
  >
    <transition name="fade">
      <g-link class="flex" :to="$tp('/')">
        <g-image src="~/assets/img/logo.jpg" :alt="$t('atoms.name')" />
        <HeaderAbout class="pl-4" />
      </g-link>
    </transition>
    <Navigation class="hidden pl-8 lowercase md:flex" />
  </div>
</template>
<script>
import Logo from "@/components/atoms/Logo";
import HeaderAbout from "@/components/molecules/HeaderAbout";
import Navigation from "@/components/molecules/Navigation";
import { store, mutations } from "~/store.js";
export default {
  components: {
    Logo,
    HeaderAbout,
    Navigation,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
    navigateToHome() {
      // router.push("/");
      if (store.isNavOpen) {
        mutations.toggleNav();
      }
      this.$router.push({ name: "index" });
    },
  },
};
</script>
<style lang="postcss" scoped>
img {
  @apply rounded-full border-4;
  max-width: 4.5rem;
  max-height: 4.5rem;
  border-color: #34485c;
}
</style>
