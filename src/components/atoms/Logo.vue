<template>
  <picture>
    <!-- <source :srcSet="require('@/assets/img/logo.jpg?webp')" type="image/webp" />
    <source :srcSet="require('@/assets/img/logo.jpg')" type="image/jpeg" /> -->
    <img :src="require('@/assets/img/logo.jpg')" />
  </picture>
</template>
<style lang="postcss" scoped>
img {
  @apply rounded-full border-4;
  border-color: #34485c;
}
</style>
