<template>
  <div>
    <ais-instant-search :search-client="searchClient" index-name="prod_Notes">
      <ais-search-box
        class="w-full mb-8 text-base border border-gray-700 rounded-md md:w-2/3 pointer"
        :placeholder="$t('organisms.search.placeholder')"
        type="search"
      />
      <div>
        <div>
          <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <p>
                <g-link :to="'/notes/' + item.slug">
                  <ais-highlight :hit="item" attribute="name" />
                </g-link>
              </p>
            </template>
          </ais-hits>
        </div>
        <!-- <div v-if="item.length == 0">
          <p>{{ $t("organisms.search.not_found") }}</p>
        </div> -->
      </div>
    </ais-instant-search>
    <!-- <ais-instant-search :search-client="searchClient" index-name="prod_Notes">
      <div class="search-panel">
        <div class="search-panel__results"> -->
    <!-- <ais-search-box placeholder="Search here…" class="searchbox" /> -->
    <!-- <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <p>
                <g-link :to="'/notes/' + item.slug">
                  <ais-highlight :hit="item" attribute="name" />
                </g-link>
              </p>
            </template>
          </ais-hits> -->

    <!-- <div class="pagination"><ais-pagination /></div>
        </div>
      </div>
    </ais-instant-search> -->
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
import "instantsearch.css/themes/algolia-min.css";
import algoliasearch from "algoliasearch/lite";
import {
  createInstantSearch,
  AisInstantSearchSsr,
  AisStateResults,
  AisInfiniteHits,
  AisHighlight,
  AisConfigure,
  AisSearchBox,
  AisPoweredBy,
} from "vue-instantsearch";
export default {
  components: {
    AisPoweredBy,
    AisSearchBox,
    AisConfigure,
    AisHighlight,
    AisInfiniteHits,
    AisStateResults,
    AisInstantSearchSsr,
  },
  data() {
    return {
      searchClient: algoliasearch(
        "HID8CLPPRG",
        "8e6784f9d6376600c998128bb3f713ae"
      ),
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
<style lang="postcss">
[type="search"] {
  appearance: none;
}
.ais-SearchBox-input {
  @apply border-0;
}
.ais-SearchBox-form input::placeholder {
  @apply opacity-100;
  color: #38485a;
}
.ais-SearchBox-form input:placeholder-shown {
  @apply opacity-100;
  color: #38485a;
}
</style>
