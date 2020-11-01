<template>
  <ais-hits>
    <template slot="item" slot-scope="{ item }">
      <g-link :to="'/notes/' + item.slug">
        <ais-highlight :hit="item" attribute="name" />
      </g-link>
    </template>
  </ais-hits>
</template>

<script>
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
    SearchResults,
    AisPoweredBy,
    AisSearchBox,
    AisConfigure,
    AisHighlight,
    AisInfiniteHits,
    AisStateResults,
    AisInstantSearchSsr,
  },
};
</script>
