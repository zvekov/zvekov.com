<template>
  <div class="text-base xs:text-lg">
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>
<script>
export default {
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
