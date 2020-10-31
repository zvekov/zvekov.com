<template>
  <div class="text-base xs:text-lg h-screen">
    <HeaderPartial />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <LocaleSwitcher
      class="md:flex bottom-0 left-0 md:mb-3 pl-2 md:ml-4 hidden md:fixed"
    />
    <Pogonya class="fixed bottom-0 right-0 mr-4 mb-3" style="z-index: -1" />
  </div>
</template>
<script>
import Pogonya from "@/components/atoms/Pogonya";
import HeaderPartial from "./partials/HeaderPartial";
import LocaleSwitcher from "~/components/atoms/LocaleSwitcher";
export default {
  components: {
    HeaderPartial,
    LocaleSwitcher,
    Pogonya,
  },
  metaInfo() {
    return {
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
<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
