<template>
  <section class="pt-4">
    <h2 class="text-2xl font-bold">{{ $t("organisms.task.title") }}</h2>
    <div class="pb-4">{{ $t("organisms.task.text") }}</div>
    <g-link
      class="btn inline-flex items-center border border-gray-700 rounded-md px-4 py-1"
      :to="$tp('/briefing/')"
    >
      {{ $t("organisms.task.btn") }}
      <Questions class="ml-3" />
    </g-link>
  </section>
</template>
<script>
import Questions from "@/components/atoms/icons/Questions"
export default {
  components: {
    Questions,
  },
}
</script>
<style scoped>
.btn {
  transition: 0.3s all;
  /* transform: translateY(0); */
}
.btn:hover {
  background: #34485c;
  color: white;
  /* transform: translateY(-0.2rem);
  box-shadow: rgba(0, 0, 0, 0.26) 0rem 0.6rem 2rem; */
}
.btn:hover svg {
  fill: white;
}
</style>
