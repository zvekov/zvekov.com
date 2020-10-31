<template>
  <g-link
    :to="{ path: '/' + article.slug + '/' }"
    :key="article.id"
    class="rounded-md shadow-lg hover:shadow-2xl transform hover:-translate-y-3"
  >
    <div class="">
      <g-image
        v-if="article.image.url"
        :src="article.image.url"
        class="w-full rounded-t-md"
      />
    </div>
    <!-- <p v-if="article.category">
        {{ article.category.name }}
      </p> -->
    <p id="title" class="p-4">{{ article.title }}</p>
  </g-link>
</template>

<script>
export default {
  props: {
    article: Object,
  },
};
</script>
