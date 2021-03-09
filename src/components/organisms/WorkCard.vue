<template>
  <g-link :href="work.link" target="_blank" :title="work.name">
    <h3 v-if="work.name">{{ work.name }}</h3>
    <p v-if="work.stack" class="text-sm xs:text-xs pb-0">{{ work.stack }}</p>
  </g-link>
</template>
<script>
export default {
  props: ["work"],
};
</script>

