<template>
  <div class="h-screen text-base xs:text-lg">
    <HeaderNote />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <Navbar />
  </div>
</template>
<script>
import HeaderNote from "./partials/HeaderNote";
import LocaleSwitcher from "~/components/atoms/LocaleSwitcher";
import Navbar from "~/components/organisms/Navbar";
export default {
  components: {
    HeaderNote,
    LocaleSwitcher,
    Navbar
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
<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
