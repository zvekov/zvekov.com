<template>
  <div class="text-base xs:text-lg">
    <div class="page">
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    </div>
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
