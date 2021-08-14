<template>
  <div
      class="
      min-h-screen
      text-base
      xs:text-lg
      flex flex-col
    "
  >
    <HeaderPartial v-if="!showHeader"/>
    <transition name="fade" appear>
      <main class="relative pb-4 md:pb-8 border-t border-gray-200 pt-8 flex-1">
        <slot/>
      </main>
    </transition>
    <footer class="max-w-3xl px-3 py-4 mx-auto w-full flex items-center">
      <LocaleSwitcher class="hidden md:flex"/>
      <!--      <ul class="px-4">-->
      <!--        <li><a class="text-base" href="">Резюме</a></li>-->
      <!--      </ul>-->
    </footer>
    <Navbar/>
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
  //max-width: calc(100% - 4rem);
  }
}
</style>
