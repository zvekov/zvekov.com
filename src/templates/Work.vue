<!-- eslint-disable vue/no-v-html -->
<template>
  <Layout>
    <div class="max-w-2xl mx-auto px-4">
      <h1 v-if="work.name" class="text-2xl font-bold">
        {{ work.name }}
      </h1>
      <h2 class="font-bold text-2xl">I use for it</h2>
      <div
        class="stack grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3 md:gap-4 items-center mb-8"
      >
        <StackCard
          v-for="stack in work.stacks"
          :key="stack.id"
          :stack="stack"
        />
      </div>
      <g-link
        :to="work.link"
        target="_blank"
        class="bg-black px-4 py-2 text-white rounded-lg"
        >view a work</g-link
      >
      <g-image :src="work.cover.url" class="rounded-xl mt-8" />
    </div>
  </Layout>
</template>
<page-query>
  query ($slug: String!) {
    strapi {
      works(where: { slug: $slug }) {
        slug
        name
        link
        cover {
          url
        }
        stacks {
          name
          link
          description
          gridCol
          svgIcon
          position
        }
      }
	  }
  }
</page-query>
<script>
import StackCard from "~/components/organisms/StackCard";
export default {
  components: {
    StackCard,
  },
  computed: {
    work() {
      return this.$page.strapi.works[0];
    },
  },
};
</script>
<style lang="postcss">
.col-span-2 {
  grid-column: span 2 / span 2;
}
.stack {
  & > a {
    @apply bg-white shadow-md h-16 w-auto rounded-lg p-2 transform transition-all duration-300 cursor-pointer;
    &:hover {
      @apply -translate-y-2 shadow-xl;
    }
    & > svg {
      @apply w-full h-full mx-auto;
    }
  }
}
</style>