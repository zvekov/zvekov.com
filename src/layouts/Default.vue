<template>
  <div
    class="
      min-h-screen
      h-full
      text-base
      xs:text-lg
      flex flex-col
      justify-between
    "
  >
    <div class="page">
      <HeaderPartial v-if="!showHeader" />
      <transition name="fade" appear>
        <main class="mb-4 md:mb-8">
          <slot />
        </main>
      </transition>
      <div class="max-w-2xl px-3 py-4 mx-auto w-full">
        <LocaleSwitcher class="hidden md:flex md:mb-3" />
      </div>
    </div>
    <Navbar />
  </div>
</template>
<script>
import HeaderPartial from "./partials/HeaderPartial";
import LocaleSwitcher from "~/components/atoms/LocaleSwitcher";
import Navbar from "~/components/organisms/Navbar";
export default {
  components: {
    Navbar,
    HeaderPartial,
    LocaleSwitcher,
  },
  metaInfo() {
    return {
      bodyAttrs: {
        class: "default",
      },
      link: [
        {
          rel: "canonical",
          href: process.env.APP_URL + this.$route.path,
        },
      ],
    };
  },
};
</script>
<style lang="postcss">
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
.page {
  @screen landscape {
    max-width: calc(100% - 4rem);
  }
}
</style>
