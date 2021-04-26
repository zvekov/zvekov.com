<template>
  <section id="works">
    <h2 class="text-2xl font-bold">{{ $t("organisms.works.title") }}</h2>
    <div class="grid landscape:grid-cols-2 md:grid-cols-2 gap-4">
      <WorkCard
        v-for="work in $static.strapi.works"
        :key="work.id"
        :work="work"
        class="shadow-md rounded-lg overflow-hidden transform transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl"
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
        slug
        cover {
          url
          previewUrl
        }
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
