<template>
  <div class="h-screen text-base xs:text-lg">
    <HeaderNote />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <LocaleSwitcher
      class="bottom-0 left-0 hidden pl-2 md:flex md:mb-3 md:ml-4 md:fixed"
    />
    <Pogonya class="fixed bottom-0 right-0 mb-3 mr-4" style="z-index: -1" />
  </div>
</template>
<script>
import Pogonya from "@/components/atoms/Pogonya";
import HeaderNote from "./partials/HeaderNote";
import LocaleSwitcher from "~/components/atoms/LocaleSwitcher";
export default {
  components: {
    HeaderNote,
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
