<template>
  <div class="flex flex-wrap w-full">
    <div v-for="note in notes" class="w-full md:w-1/3 p-4" :key="note.slug">
      <g-link :to="'/notes/' + note.slug">
        <div>
          <p>{{ note.name }}</p>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
import notesQuery from "@/apollo/queries/note/notes"
export default {
  nuxtI18n: false,
  data() {
    return {
      api_url: process.env.API_URL,
    }
  },
  props: {
    notes: Array,
  },
}
</script>
