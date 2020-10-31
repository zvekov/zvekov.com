<template>
  <div class="max-w-2xl mx-auto">
    <section class="px-4">
      <h1 class="text-2xl font-bold">{{ $t("organisms.search.title") }}</h1>
      <!-- eslint-disable-next-line -->
      <div class="pb-4" v-html="$t('organisms.search.text')"></div>
    </section>
    <NotesSearch class="px-4" />
  </div>
</template>
<script>
import NotesSearch from "@/components/organisms/NotesSearch"
// import notesQuery from '@/apollo/queries/note/notes'
export default {
  components: {
    NotesSearch,
  },
  //   data() {
  //     return {
  //       notes: [],
  //     }
  //   },
  //   apollo: {
  //     notes: {
  //       prefetch: true,
  //       query: notesQuery,
  //       variables() {
  //         return { slug: this.$route.params.slug, limit: 9999 }
  //       },
  //       fetchPolicy: 'cache-and-network',
  //     },
  //   },
}
</script>
