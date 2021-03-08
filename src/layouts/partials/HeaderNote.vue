<template>
  <div
    class="flex items-center justify-between max-w-2xl px-2 py-4 mx-auto xxs:p-4"
  >
    <transition name="fade">
      <g-link class="flex py-6" :to="$tp('/notes/')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11.03 8.53a.75.75 0 10-1.06-1.06l-4 4a.748.748 0 000 1.06l4 4a.75.75 0 101.06-1.06l-2.72-2.72H18a.75.75 0 000-1.5H8.31l2.72-2.72z"
          />
        </svg>
      </g-link>
    </transition>
    <Navigation class="hidden pl-8 lowercase md:flex" />
    <NavigationMobile class="fixed top-0 right-0 pt-8 pr-4 md:hidden" />
  </div>
</template>
<script>
import Logo from "@/components/atoms/Logo";
import HeaderAbout from "@/components/molecules/HeaderAbout";
import Navigation from "@/components/molecules/Navigation";
import NavigationMobile from "@/components/molecules/navigation_mobile";
import { store, mutations } from "~/store.js";
export default {
  components: {
    Logo,
    HeaderAbout,
    Navigation,
    NavigationMobile,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
    // isNote() {
    //   return this.$route.path === "/notes/" ? true : false;
    // },
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
