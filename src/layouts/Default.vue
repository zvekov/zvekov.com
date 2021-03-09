<template>
  <div class="min-h-screen text-base xs:text-lg">
    <HeaderPartial />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <div class="flex items-end justify-between max-w-2xl px-2 py-4 mx-auto flex-shrink">
      <LocaleSwitcher class="hidden pl-2 md:flex md:mb-3" />
    </div>
  </div>
</template>
<script>
import HeaderPartial from "./partials/HeaderPartial";
import LocaleSwitcher from "~/components/atoms/LocaleSwitcher";
export default {
  components: {
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
<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
