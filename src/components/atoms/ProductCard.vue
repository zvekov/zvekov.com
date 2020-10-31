<template>
  <g-link
    :to="{ path: '/' + product.slug + '/' }"
    :key="product.id"
    class="rounded-md shadow-lg hover:shadow-2xl transform hover:-translate-y-3"
  >
    <div class="">
      <g-image
        v-if="product.image.url"
        :src="product.image.url"
        class="w-full rounded-t-md"
      />
    </div>
    <!-- <p v-if="product.category">
        {{ product.category.name }}
      </p> -->
    <p id="title" class="p-4">{{ product.title }}</p>
  </g-link>
</template>

<script>
// import { getStrapiMedia } from "~/utils/medias";

export default {
  props: {
    product: Object,
  },
  // methods: {
  //   getStrapiMedia,
  // },
};
</script>
