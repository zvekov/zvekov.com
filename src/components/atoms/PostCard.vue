<template>
  <g-link
    :to="{ path: '/' + post.slug + '/' }"
    :key="post.id"
    class="rounded-md shadow-lg hover:shadow-2xl transform hover:-translate-y-3"
  >
    <div class="">
      <g-image
        v-if="post.image.url"
        :src="post.image.url"
        class="w-full rounded-t-md"
      />
    </div>
    <!-- <p v-if="post.category">
        {{ post.category.name }}
      </p> -->
    <p id="title" class="p-4">{{ post.title }}</p>
  </g-link>
</template>

<script>
// import { getStrapiMedia } from "~/utils/medias";

export default {
  props: {
    post: Object,
  },
  // methods: {
  //   getStrapiMedia,
  // },
};
</script>
