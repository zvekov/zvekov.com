<template>
  <section>
    <h2 class="text-2xl font-bold">{{ $t("organisms.works.title") }}</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <WorkCard
        v-for="work in $static.strapi.works"
        :key="work.id"
        :work="work"
        class="shadow-md rounded-lg p-4 transform transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl"
      />
    </div>
  </section>
</template>
<static-query>
  query{
    strapi {
      works {
        name
        link
        stack
      }
	  }
  }
</static-query>
<script>
import WorkCard from "@/components/organisms/WorkCard";
export default {
  components: {
    WorkCard,
  },
};
</script>
