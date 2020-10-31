<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <PostCard
      v-for="post in Posts"
      :post="post"
      :key="post.id"
      class="m-2 lg:m-3"
    />
  </div>
</template>

<script>
import PostCard from "~/components/atoms/PostCard";

export default {
  props: {
    posts: Array,
  },
  components: {
    PostCard,
  },
  computed: {
    Posts() {
      return this.posts;
    },
  },
};
</script>
