<template>
  <div>
    <input
      v-model="query"
      class="w-full px-3 py-1 mb-8 text-base border border-gray-700 rounded-md md:w-2/3 pointer"
      :placeholder="$t('organisms.search.placeholder')"
      type="search"
    />
    <div v-if="query">
      <div>
        <div
          v-for="note in $static.strapi.notes"
          :key="note.slug"
          class="w-full"
        >
          <g-link :to="'/notes/' + note.slug + '/'">
            <div>
              <p>{{ note.name }}</p>
            </div>
          </g-link>
        </div>
      </div>
      <div v-if="filteredList.length == 0">
        <p>{{ $t("organisms.search.not_found") }}</p>
      </div>
    </div>
  </div>
</template>
<static-query>
  query{
    strapi {
      notes {
        slug
        name
        content
      }
	  }
  }
</static-query>
<script>
export default {
  data() {
    return {
      notes: [],
      query: "",
    };
  },
  computed: {
    filteredList() {
      return this.notes.filter((note) => {
        return note.name.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
};
</script>
<style lang="postcss" scoped>
input::placeholder {
  @apply opacity-100;
  color: #38485a;
}
input:placeholder-shown {
  @apply opacity-100;
  color: #38485a;
}
</style>
