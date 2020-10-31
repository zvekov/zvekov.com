<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <ArticleCard
      v-for="article in Articles"
      :article="article"
      :key="article.id"
      class="m-2 lg:m-3"
    />
  </div>
</template>

<script>
import ArticleCard from "~/components/atoms/ArticleCard";

export default {
  props: {
    articles: Array,
  },
  components: {
    ArticleCard,
  },
  computed: {
    Articles() {
      return this.articles;
    },
  },
};
</script>
