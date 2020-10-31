<template>
  <ul class="text-lg">
    <li v-for="category in $static.strapi.categories" :key="category.id" class="p-1">
      <g-link :to="'/' + category.slug + '/'">{{ category.name }}</g-link>
    </li>
  </ul>
</template>
<static-query>
  query {
    strapi {
      categories(sort: "id:ASC") {
        id
        name
        slug
      }
    }
  }
</static-query>