<template>
  <div class="text-base xs:text-lg h-screen">
    <!-- <span class="fixed z-50 cursor-pointer top-0 right-0 mt-8 mr-4 md:mr-8">
      <a @click="$router.go(-1)">
        <div></div>
      </a>
    </span> -->
    <slot />
    <Navbar />
  </div>
</template>
<script>
import Navbar from "~/components/organisms/Navbar";
export default {
  components: {
    Navbar
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

<style lang="postcss" scoped>
a {
  cursor: pointer;
}
a:focus {
  outline: 0;
}
a > div {
  @apply block z-50 relative rounded-full;
  position: relative;
  height: 2rem;
  width: 2rem;
  border: 4px solid #38485a;
  pointer-events: all;
  background-color: #38485a;
  /* transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); */
}
#burger.active .burger-button {
  background-color: #38485a;
}
</style>
