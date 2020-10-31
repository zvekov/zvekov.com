<template>
  <div class="grid grid-cols-2 lg:grid-cols-3">
    <ProductCard
      v-for="product in Products"
      :product="product"
      :key="product.id"
      class="m-2 lg:m-3"
    />
  </div>
</template>

<script>
import ProductCard from "~/components/atoms/ProductCard";

export default {
  props: {
    products: Array,
  },
  components: {
    ProductCard,
  },
  computed: {
    Products() {
      return this.products;
    },
  },
};
</script>
