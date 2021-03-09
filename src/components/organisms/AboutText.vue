<template>
  <div>
    <h1 class="text-2xl font-bold">{{ $t("organisms.about_text.title") }}</h1>
    <div v-html="$t('organisms.about_text.text')"></div>
    <p class="text-2xl font-bold mt-4">{{ $t("organisms.stack.title") }}</p>
    <div
      class="stack grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3 md:gap-4 items-center mb-8"
    >
      <StackCard
        v-for="stack in $static.strapi.stacks"
        :key="stack.id"
        :stack="stack"
      />
    </div>
  </div>
</template>
<static-query>
  query{
    strapi {
      stacks(sort: "position:asc") {
        name
        link
        description
        gridCol
        svgIcon
        position
      }
	}
}
</static-query>
<script>
import StackCard from "@/components/organisms/StackCard";
export default {
  components: {
    StackCard,
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