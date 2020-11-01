<template>
  <div>
    <ais-instant-search :search-client="searchClient" index-name="prod_Notes">
      <div class="flex flex-col w-full mb-4 md:w-2/3">
        <ais-search-box
          class="text-base border border-gray-700 rounded-md pointer"
          :placeholder="$t('organisms.search.placeholder')"
          type="search"
        />

        <div class="flex justify-end mt-2 ml-2/3 ais-PoweredBy">
          <a
            href="https://www.algolia.com/?utm_source=vue-instantsearch&amp;utm_medium=website&amp;utm_content=zvekov.com&amp;utm_campaign=poweredby"
            target="_blank"
            rel="noopener"
            aria-label="search by Algolia"
            class="ais-PoweredBy-link"
            ><svg
              viewBox="0 0 168 24"
              class="ais-PoweredBy-logo ais-PoweredBy--light"
              style="height: 1.2em; width: auto"
            >
              <path
                fill="#5D6494"
                d="M6.97 6.68V8.3a4.47 4.47 0 0 0-2.42-.67 2.2 2.2 0 0 0-1.38.4c-.34.26-.5.6-.5 1.02 0 .43.16.77.49 1.03.33.25.83.53 1.51.83a7.04 7.04 0 0 1 1.9 1.08c.34.24.58.54.73.89.15.34.23.74.23 1.18 0 .95-.33 1.7-1 2.24a4 4 0 0 1-2.6.81 5.71 5.71 0 0 1-2.94-.68v-1.71c.84.63 1.81.94 2.92.94.58 0 1.05-.14 1.39-.4.34-.28.5-.65.5-1.13 0-.29-.1-.55-.3-.8a2.2 2.2 0 0 0-.65-.53 23.03 23.03 0 0 0-1.64-.78 13.67 13.67 0 0 1-1.11-.64c-.12-.1-.28-.22-.46-.4a1.72 1.72 0 0 1-.39-.5 4.46 4.46 0 0 1-.22-.6c-.07-.23-.1-.48-.1-.75 0-.91.33-1.63 1-2.17a4 4 0 0 1 2.57-.8c.97 0 1.8.18 2.47.52zm7.47 5.7v-.3a2.26 2.26 0 0 0-.5-1.44c-.3-.35-.74-.53-1.32-.53-.53 0-.99.2-1.37.58-.38.39-.62.95-.72 1.68h3.91zm1 2.79v1.4c-.6.34-1.38.51-2.36.51a4.02 4.02 0 0 1-3-1.13 4.04 4.04 0 0 1-1.11-2.97c0-1.3.34-2.32 1.02-3.06a3.38 3.38 0 0 1 2.6-1.1c1.03 0 1.85.32 2.46.96.6.64.9 1.57.9 2.78 0 .33-.03.68-.09 1.04h-5.31c.1.7.4 1.24.89 1.61.49.38 1.1.56 1.85.56.86 0 1.58-.2 2.15-.6zm6.61-1.78h-1.21c-.6 0-1.05.12-1.35.36-.3.23-.46.53-.46.89 0 .37.12.66.36.88.23.2.57.32 1.02.32.5 0 .9-.15 1.2-.43.3-.28.44-.65.44-1.1v-.92zm-4.07-2.55V9.33a4.96 4.96 0 0 1 2.5-.55c2.1 0 3.17 1.03 3.17 3.08V17H22.1v-.96c-.42.68-1.15 1.02-2.19 1.02-.76 0-1.38-.22-1.84-.66-.46-.44-.7-1-.7-1.68 0-.78.3-1.38.88-1.81.59-.43 1.4-.65 2.46-.65h1.34v-.46c0-.55-.13-.97-.4-1.25-.26-.29-.7-.43-1.32-.43-.86 0-1.65.24-2.35.72zm9.34-1.93v1.42c.39-1 1.1-1.5 2.12-1.5.15 0 .31.02.5.05v1.53c-.23-.1-.48-.14-.76-.14-.54 0-.99.24-1.34.71a2.8 2.8 0 0 0-.52 1.71V17h-1.57V8.91h1.57zm5 4.09a3 3 0 0 0 .76 2.01c.47.53 1.14.8 2 .8.64 0 1.24-.18 1.8-.53v1.4c-.53.32-1.2.48-2 .48a3.98 3.98 0 0 1-4.17-4.18c0-1.16.38-2.15 1.14-2.98a4 4 0 0 1 3.1-1.23c.7 0 1.34.15 1.92.44v1.44a3.24 3.24 0 0 0-1.77-.5A2.65 2.65 0 0 0 32.33 13zm7.92-7.28v4.58c.46-1 1.3-1.5 2.5-1.5.8 0 1.42.24 1.9.73.48.5.72 1.17.72 2.05V17H43.8v-5.1c0-.56-.14-.99-.43-1.29-.28-.3-.65-.45-1.1-.45-.54 0-1 .2-1.42.6-.4.4-.61 1.02-.61 1.85V17h-1.56V5.72h1.56zM55.2 15.74c.6 0 1.1-.25 1.5-.76.4-.5.6-1.16.6-1.95 0-.92-.2-1.62-.6-2.12-.4-.5-.92-.74-1.55-.74-.56 0-1.05.22-1.5.67-.44.45-.66 1.13-.66 2.06 0 .96.22 1.67.64 2.14.43.47.95.7 1.57.7zM53 5.72v4.42a2.74 2.74 0 0 1 2.43-1.34c1.03 0 1.86.38 2.51 1.15.65.76.97 1.78.97 3.05 0 1.13-.3 2.1-.92 2.9-.62.81-1.47 1.21-2.54 1.21s-1.9-.45-2.46-1.34V17h-1.58V5.72H53zm9.9 11.1l-3.22-7.9h1.74l1 2.62 1.26 3.42c.1-.32.48-1.46 1.15-3.42l.91-2.63h1.66l-2.92 7.87c-.78 2.07-1.96 3.1-3.56 3.1-.28 0-.53-.02-.73-.07v-1.34c.17.04.35.06.54.06 1.03 0 1.76-.57 2.17-1.7z"
              ></path>
              <path
                fill="#5468FF"
                d="M78.99.94h16.6a2.97 2.97 0 0 1 2.96 2.96v16.6a2.97 2.97 0 0 1-2.97 2.96h-16.6a2.97 2.97 0 0 1-2.96-2.96V3.9A2.96 2.96 0 0 1 79 .94"
              ></path>
              <path
                fill="#FFF"
                d="M89.63 5.97v-.78a.98.98 0 0 0-.98-.97h-2.28a.98.98 0 0 0-.97.97V6c0 .09.08.15.17.13a7.13 7.13 0 0 1 3.9-.02c.08.02.16-.04.16-.13m-6.25 1L83 6.6a.98.98 0 0 0-1.38 0l-.46.46a.97.97 0 0 0 0 1.38l.38.39c.06.06.15.04.2-.02a7.49 7.49 0 0 1 1.63-1.62c.07-.04.08-.14.02-.2m4.16 2.45v3.34c0 .1.1.17.2.12l2.97-1.54c.06-.03.08-.12.05-.18a3.7 3.7 0 0 0-3.08-1.87c-.07 0-.14.06-.14.13m0 8.05a4.49 4.49 0 1 1 0-8.98 4.49 4.49 0 0 1 0 8.98m0-10.85a6.37 6.37 0 1 0 0 12.74 6.37 6.37 0 0 0 0-12.74"
              ></path>
              <path
                fill="#5468FF"
                d="M120.92 18.8c-4.38.02-4.38-3.54-4.38-4.1V1.36l2.67-.42v13.25c0 .32 0 2.36 1.71 2.37v2.24zm-10.84-2.18c.82 0 1.43-.04 1.85-.12v-2.72a5.48 5.48 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.11-.44.28-.58.49a.93.93 0 0 0-.22.65c0 .63.22 1 .61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.62.11 2.23.33.6.22 1.09.53 1.44.92.36.4.61.92.76 1.48.16.56.23 1.17.23 1.85v6.87c-.4.1-1.03.2-1.86.32-.84.12-1.78.18-2.82.18-.69 0-1.32-.07-1.9-.2a4 4 0 0 1-1.46-.63c-.4-.3-.72-.67-.96-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.39-1.53.26-.45.6-.82 1.04-1.1.45-.3.95-.5 1.54-.62a8.8 8.8 0 0 1 3.79.05v-.44c0-.3-.04-.6-.11-.87a1.78 1.78 0 0 0-1.1-1.22c-.31-.12-.7-.2-1.15-.2a9.75 9.75 0 0 0-2.95.46l-.33-2.19c.34-.12.84-.23 1.48-.35.65-.12 1.34-.18 2.08-.18zm52.84 9.63c.82 0 1.43-.05 1.85-.13V13.7a5.42 5.42 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.12-.44.28-.58.5a.93.93 0 0 0-.22.65c0 .63.22.99.61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.63.11 2.23.33.6.22 1.1.53 1.45.92.35.39.6.92.76 1.48.15.56.23 1.18.23 1.85v6.88c-.41.08-1.03.19-1.87.31-.83.12-1.77.18-2.81.18-.7 0-1.33-.06-1.9-.2a4 4 0 0 1-1.47-.63c-.4-.3-.72-.67-.95-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.38-1.53.26-.45.61-.82 1.05-1.1.44-.3.95-.5 1.53-.62a8.8 8.8 0 0 1 3.8.05v-.43c0-.31-.04-.6-.12-.88-.07-.28-.2-.52-.38-.73a1.78 1.78 0 0 0-.73-.5c-.3-.1-.68-.2-1.14-.2a9.85 9.85 0 0 0-2.95.47l-.32-2.19a11.63 11.63 0 0 1 3.55-.53zm-8.03-1.27a1.62 1.62 0 0 0 0-3.24 1.62 1.62 0 1 0 0 3.24zm1.35 13.22h-2.7V7.27l2.7-.42V18.8zm-4.72 0c-4.38.02-4.38-3.54-4.38-4.1l-.01-13.34 2.67-.42v13.25c0 .32 0 2.36 1.72 2.37v2.24zm-8.7-5.9a4.7 4.7 0 0 0-.74-2.79 2.4 2.4 0 0 0-2.07-1 2.4 2.4 0 0 0-2.06 1 4.7 4.7 0 0 0-.74 2.8c0 1.16.25 1.94.74 2.62a2.4 2.4 0 0 0 2.07 1.02c.88 0 1.57-.34 2.07-1.02.49-.68.73-1.46.73-2.63zm2.74 0a6.46 6.46 0 0 1-1.52 4.23c-.49.53-1.07.94-1.76 1.22-.68.29-1.73.45-2.26.45-.53 0-1.58-.15-2.25-.45a5.1 5.1 0 0 1-2.88-3.13 7.3 7.3 0 0 1-.01-4.84 5.13 5.13 0 0 1 2.9-3.1 5.67 5.67 0 0 1 2.22-.42c.81 0 1.56.14 2.24.42.69.29 1.28.69 1.75 1.22.49.52.87 1.15 1.14 1.89a7 7 0 0 1 .43 2.5zm-20.14 0c0 1.11.25 2.36.74 2.88.5.52 1.13.78 1.91.78a4.07 4.07 0 0 0 2.12-.6V9.33c-.19-.04-.99-.2-1.76-.23a2.67 2.67 0 0 0-2.23 1 4.73 4.73 0 0 0-.78 2.8zm7.44 5.27c0 1.82-.46 3.16-1.4 4-.94.85-2.37 1.27-4.3 1.27-.7 0-2.17-.13-3.34-.4l.43-2.11c.98.2 2.27.26 2.95.26 1.08 0 1.84-.22 2.3-.66.46-.43.68-1.08.68-1.94v-.44a5.2 5.2 0 0 1-2.54.6 5.6 5.6 0 0 1-2.01-.36 4.2 4.2 0 0 1-2.58-2.71 9.88 9.88 0 0 1 .02-5.35 4.92 4.92 0 0 1 2.93-2.96 6.6 6.6 0 0 1 2.43-.46 19.64 19.64 0 0 1 4.43.66v10.6z"
              ></path></svg
          ></a>
        </div>
      </div>
      <div>
        <ais-state-results>
          <template slot-scope="{ state: { query } }">
            <ais-hits v-show="query.length > 0">
              <div
                slot="item"
                slot-scope="{ item }"
                class="py-1 text-base xs:text-lg xs:py-2"
              >
                <g-link
                  :to="'/notes/' + item.slug + '/'"
                  class="hover:text-red-700"
                >
                  {{ item.name }}
                </g-link>
              </div>
            </ais-hits>
          </template>
        </ais-state-results>
      </div>
    </ais-instant-search>
  </div>
</template>
<script>
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
      AisStateResults: null,
      searchClient: algoliasearch(
        "HID8CLPPRG",
        "8e6784f9d6376600c998128bb3f713ae"
      ),
    };
  },
};
</script>
<style lang="postcss">
/*! purgecss start ignore */
.ais-PoweredBy-logo {
  @apply opacity-60;
  width: 6rem !important;
  filter: grayscale(100%);
}
.ais-PoweredBy-logo:hover {
  filter: grayscale(0%);
}
.ais-Breadcrumb-list,
.ais-CurrentRefinements-list,
.ais-HierarchicalMenu-list,
.ais-Hits-list,
.ais-InfiniteHits-list,
.ais-InfiniteResults-list,
.ais-Menu-list,
.ais-NumericMenu-list,
.ais-Pagination-list,
.ais-RatingMenu-list,
.ais-RefinementList-list,
.ais-Results-list,
.ais-ToggleRefinement-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ais-ClearRefinements-button,
.ais-CurrentRefinements-delete,
.ais-CurrentRefinements-reset,
.ais-GeoSearch-redo,
.ais-GeoSearch-reset,
.ais-HierarchicalMenu-showMore,
.ais-InfiniteHits-loadMore,
.ais-InfiniteHits-loadPrevious,
.ais-InfiniteResults-loadMore,
.ais-Menu-showMore,
.ais-RangeInput-submit,
.ais-RefinementList-showMore,
.ais-SearchBox-reset,
.ais-SearchBox-submit,
.ais-VoiceSearch-button {
  padding: 0;
  overflow: visible;
  font: inherit;
  line-height: normal;
  color: inherit;
  background: none;
  border: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.ais-ClearRefinements-button::-moz-focus-inner,
.ais-CurrentRefinements-delete::-moz-focus-inner,
.ais-CurrentRefinements-reset::-moz-focus-inner,
.ais-GeoSearch-redo::-moz-focus-inner,
.ais-GeoSearch-reset::-moz-focus-inner,
.ais-HierarchicalMenu-showMore::-moz-focus-inner,
.ais-InfiniteHits-loadMore::-moz-focus-inner,
.ais-InfiniteHits-loadPrevious::-moz-focus-inner,
.ais-InfiniteResults-loadMore::-moz-focus-inner,
.ais-Menu-showMore::-moz-focus-inner,
.ais-RangeInput-submit::-moz-focus-inner,
.ais-RefinementList-showMore::-moz-focus-inner,
.ais-SearchBox-reset::-moz-focus-inner,
.ais-SearchBox-submit::-moz-focus-inner,
.ais-VoiceSearch-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.ais-ClearRefinements-button[disabled],
.ais-CurrentRefinements-delete[disabled],
.ais-CurrentRefinements-reset[disabled],
.ais-GeoSearch-redo[disabled],
.ais-GeoSearch-reset[disabled],
.ais-HierarchicalMenu-showMore[disabled],
.ais-InfiniteHits-loadMore[disabled],
.ais-InfiniteHits-loadPrevious[disabled],
.ais-InfiniteResults-loadMore[disabled],
.ais-Menu-showMore[disabled],
.ais-RangeInput-submit[disabled],
.ais-RefinementList-showMore[disabled],
.ais-SearchBox-reset[disabled],
.ais-SearchBox-submit[disabled],
.ais-VoiceSearch-button[disabled] {
  cursor: default;
}
.ais-HierarchicalMenu-showMore,
.ais-InfiniteHits-loadMore,
.ais-InfiniteHits-loadPrevious,
.ais-Menu-showMore,
.ais-RefinementList-showMore {
  overflow-anchor: none;
}
.ais-Breadcrumb-item,
.ais-Breadcrumb-list,
.ais-Pagination-list,
.ais-PoweredBy,
.ais-RangeInput-form,
.ais-RatingMenu-link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.ais-GeoSearch,
.ais-GeoSearch-map {
  height: 100%;
}
.ais-HierarchicalMenu-list .ais-HierarchicalMenu-list {
  margin-left: 1em;
}
.ais-PoweredBy-logo {
  display: block;
  height: 1.2em;
  width: auto;
}
.ais-RatingMenu-starIcon {
  display: block;
  width: 20px;
  height: 20px;
}
.ais-SearchBox-input::-ms-clear,
.ais-SearchBox-input::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
.ais-SearchBox-input::-webkit-search-cancel-button,
.ais-SearchBox-input::-webkit-search-decoration,
.ais-SearchBox-input::-webkit-search-results-button,
.ais-SearchBox-input::-webkit-search-results-decoration {
  display: none;
}
.ais-RangeSlider .rheostat {
  overflow: visible;
  margin-top: 40px;
  margin-bottom: 40px;
}
.ais-RangeSlider .rheostat-background {
  height: 6px;
  top: 0;
  width: 100%;
}
.ais-RangeSlider .rheostat-handle {
  margin-left: -12px;
  top: -7px;
}
.ais-RangeSlider .rheostat-background {
  position: relative;
  background-color: #fff;
  border: 1px solid #aaa;
}
.ais-RangeSlider .rheostat-progress {
  position: absolute;
  top: 1px;
  height: 4px;
  background-color: #333;
}
.rheostat-handle {
  position: relative;
  z-index: 1;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 50%;
  cursor: -webkit-grab;
  cursor: grab;
}
.rheostat-marker {
  margin-left: -1px;
  position: absolute;
  width: 1px;
  height: 5px;
  background-color: #aaa;
}
.rheostat-marker--large {
  height: 9px;
}
.rheostat-value {
  padding-top: 15px;
}
.rheostat-tooltip,
.rheostat-value {
  margin-left: 50%;
  position: absolute;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.rheostat-tooltip {
  top: -22px;
}
[class^="ais-"] {
  font-size: 1rem;
  box-sizing: border-box;
}
a[class^="ais-"] {
  text-decoration: none;
}
.ais-Breadcrumb,
.ais-ClearRefinements,
.ais-CurrentRefinements,
.ais-GeoSearch,
.ais-HierarchicalMenu,
.ais-Hits,
.ais-HitsPerPage,
.ais-InfiniteHits,
.ais-InfiniteResults,
.ais-Menu,
.ais-MenuSelect,
.ais-NumericMenu,
.ais-NumericSelector,
.ais-Pagination,
.ais-Panel,
.ais-PoweredBy,
.ais-RangeInput,
.ais-RangeSlider,
.ais-RatingMenu,
.ais-RefinementList,
.ais-Results,
.ais-ResultsPerPage,
.ais-SearchBox,
.ais-SortBy,
.ais-Stats,
.ais-ToggleRefinement {
  color: #3a4570;
}
.ais-Breadcrumb-item--selected,
.ais-HierarchicalMenu-item--selected,
.ais-Menu-item--selected {
  font-weight: 700;
}
.ais-Breadcrumb-separator {
  margin: 0 0.3em;
  font-weight: 400;
}
.ais-Breadcrumb-link,
.ais-HierarchicalMenu-link,
.ais-Menu-link,
.ais-Pagination-link,
.ais-RatingMenu-link {
  color: #0096db;
  transition: color 0.2s ease-out;
}
.ais-Breadcrumb-link:focus,
.ais-Breadcrumb-link:hover,
.ais-HierarchicalMenu-link:focus,
.ais-HierarchicalMenu-link:hover,
.ais-Menu-link:focus,
.ais-Menu-link:hover,
.ais-Pagination-link:focus,
.ais-Pagination-link:hover,
.ais-RatingMenu-link:focus,
.ais-RatingMenu-link:hover {
  color: #0073a8;
}
.ais-ClearRefinements-button,
.ais-CurrentRefinements-reset,
.ais-GeoSearch-redo,
.ais-GeoSearch-reset,
.ais-HierarchicalMenu-showMore,
.ais-InfiniteHits-loadMore,
.ais-InfiniteHits-loadPrevious,
.ais-InfiniteResults-loadMore,
.ais-Menu-showMore,
.ais-RefinementList-showMore {
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #0096db;
  border-radius: 5px;
  transition: background-color 0.2s ease-out;
  outline: none;
}
.ais-ClearRefinements-button:focus,
.ais-ClearRefinements-button:hover,
.ais-CurrentRefinements-reset:focus,
.ais-CurrentRefinements-reset:hover,
.ais-GeoSearch-redo:focus,
.ais-GeoSearch-redo:hover,
.ais-GeoSearch-reset:focus,
.ais-GeoSearch-reset:hover,
.ais-HierarchicalMenu-showMore:focus,
.ais-HierarchicalMenu-showMore:hover,
.ais-InfiniteHits-loadMore:focus,
.ais-InfiniteHits-loadMore:hover,
.ais-InfiniteHits-loadPrevious:focus,
.ais-InfiniteHits-loadPrevious:hover,
.ais-InfiniteResults-loadMore:focus,
.ais-InfiniteResults-loadMore:hover,
.ais-Menu-showMore:focus,
.ais-Menu-showMore:hover,
.ais-RefinementList-showMore:focus,
.ais-RefinementList-showMore:hover {
  background-color: #0073a8;
}
.ais-ClearRefinements-button--disabled,
.ais-GeoSearch-redo--disabled,
.ais-GeoSearch-reset--disabled,
.ais-HierarchicalMenu-showMore--disabled,
.ais-InfiniteHits-loadMore--disabled,
.ais-InfiniteResults-loadMore--disabled,
.ais-Menu-showMore--disabled,
.ais-RefinementList-showMore--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.ais-ClearRefinements-button--disabled:focus,
.ais-ClearRefinements-button--disabled:hover,
.ais-GeoSearch-redo--disabled:focus,
.ais-GeoSearch-redo--disabled:hover,
.ais-GeoSearch-reset--disabled:focus,
.ais-GeoSearch-reset--disabled:hover,
.ais-HierarchicalMenu-showMore--disabled:focus,
.ais-HierarchicalMenu-showMore--disabled:hover,
.ais-InfiniteHits-loadMore--disabled:focus,
.ais-InfiniteHits-loadMore--disabled:hover,
.ais-InfiniteResults-loadMore--disabled:focus,
.ais-InfiniteResults-loadMore--disabled:hover,
.ais-Menu-showMore--disabled:focus,
.ais-Menu-showMore--disabled:hover,
.ais-RefinementList-showMore--disabled:focus,
.ais-RefinementList-showMore--disabled:hover {
  background-color: #0096db;
}
.ais-InfiniteHits-loadPrevious--disabled {
  display: none;
}
.ais-CurrentRefinements {
  margin-top: -0.3rem;
}
.ais-CurrentRefinements,
.ais-CurrentRefinements-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.ais-CurrentRefinements-item {
  margin-right: 0.3rem;
  margin-top: 0.3rem;
  padding: 0.3rem 0.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #495588;
  border-radius: 5px;
}
.ais-CurrentRefinements-category {
  margin-left: 0.3em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.ais-CurrentRefinements-delete {
  margin-left: 0.3rem;
}
.ais-CurrentRefinements-categoryLabel,
.ais-CurrentRefinements-delete,
.ais-CurrentRefinements-label {
  white-space: nowrap;
  font-size: 0.8rem;
  color: #fff;
}
.ais-CurrentRefinements-reset {
  margin-top: 0.3rem;
  white-space: nowrap;
}
.ais-CurrentRefinements-reset + .ais-CurrentRefinements-list {
  margin-left: 0.3rem;
}
.ais-GeoSearch {
  position: relative;
}
.ais-GeoSearch-control {
  position: absolute;
  top: 0.8rem;
  left: 3.75rem;
}
.ais-GeoSearch-label {
  display: block;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  background-color: #fff;
  border-radius: 5px;
  transition: background-color 0.2s ease-out;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  outline: none;
}
.ais-GeoSearch-input {
  margin: 0 0.25rem 0 0;
}
.ais-GeoSearch-label,
.ais-GeoSearch-redo,
.ais-GeoSearch-reset {
  white-space: nowrap;
}
.ais-GeoSearch-reset {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.ais-HierarchicalMenu-link,
.ais-Menu-link {
  display: block;
  line-height: 1.5;
}
.ais-HierarchicalMenu-list,
.ais-Menu-list,
.ais-NumericMenu-list,
.ais-RatingMenu-list,
.ais-RefinementList-list {
  font-weight: 400;
  line-height: 1.5;
}
.ais-HierarchicalMenu-link:after {
  margin-left: 0.3em;
  content: "";
  width: 10px;
  height: 10px;
  display: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7.3 24l-2.8-2.8 9.3-9.2-9.3-9.2L7.3 0l12.2 12z' fill='%233A4570'/%3E%3C/svg%3E");
  background-size: 100% 100%;
}
.ais-HierarchicalMenu-item--parent > .ais-HierarchicalMenu-link:after {
  display: inline-block;
}
.ais-HierarchicalMenu-item--selected > .ais-HierarchicalMenu-link:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.ais-CurrentRefinements-count,
.ais-RatingMenu-count {
  font-size: 0.8rem;
}
.ais-CurrentRefinements-count:before,
.ais-RatingMenu-count:before {
  content: "(";
}
.ais-CurrentRefinements-count:after,
.ais-RatingMenu-count:after {
  content: ")";
}
.ais-HierarchicalMenu-count,
.ais-Menu-count,
.ais-RefinementList-count,
.ais-ToggleRefinement-count {
  padding: 0.1rem 0.4rem;
  font-size: 0.8rem;
  color: #3a4570;
  background-color: #dfe2ee;
  border-radius: 8px;
}
.ais-HierarchicalMenu-showMore,
.ais-Menu-showMore,
.ais-RefinementList-showMore {
  margin-top: 0.5rem;
}
.ais-Highlight-highlighted,
.ais-Snippet-highlighted {
  background-color: #ffc168;
}
.ais-Hits-list,
.ais-InfiniteHits-list,
.ais-InfiniteResults-list,
.ais-Results-list {
  margin-top: -1rem;
  margin-left: -1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.ais-Panel-body .ais-Hits-list,
.ais-Panel-body .ais-InfiniteHits-list,
.ais-Panel-body .ais-InfiniteResults-list,
.ais-Panel-body .ais-Results-list {
  margin: 0.5rem 0 0 -1rem;
}
.ais-Hits-item,
.ais-InfiniteHits-item,
.ais-InfiniteResults-item,
.ais-Results-item {
  @apply w-full mx-4 my-2;
}
.ais-Panel-body .ais-Hits-item,
.ais-Panel-body .ais-InfiniteHits-item,
.ais-Panel-body .ais-InfiniteResults-item,
.ais-Panel-body .ais-Results-item {
  margin: 0.5rem 0 0.5rem 1rem;
}
.ais-InfiniteHits-loadMore,
.ais-InfiniteResults-loadMore {
  margin-top: 1rem;
}
.ais-InfiniteHits-loadPrevious {
  margin-bottom: 1rem;
}
.ais-HitsPerPage-select,
.ais-MenuSelect-select,
.ais-NumericSelector-select,
.ais-ResultsPerPage-select,
.ais-SortBy-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.3rem 2rem 0.3rem 0.3rem;
  max-width: 100%;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M0 7.3l2.8-2.8 9.2 9.3 9.2-9.3L24 7.3 12 19.5z' fill='%233A4570'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: 92% 50%;
  border: 1px solid #c4c8d8;
  border-radius: 5px;
}
.ais-Panel--collapsible {
  position: relative;
}
.ais-Panel--collapsible.ais-Panel--collapsed .ais-Panel-body,
.ais-Panel--collapsible.ais-Panel--collapsed .ais-Panel-footer {
  display: none;
}
.ais-Panel--collapsible .ais-Panel-collapseButton {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  border: none;
  background: none;
}
.ais-Panel-header {
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid #c4c8d8;
}
.ais-Panel-footer {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}
.ais-RangeInput-input {
  padding: 0 0.2rem;
  width: 5rem;
  height: 1.5rem;
  line-height: 1.5rem;
}
.ais-RangeInput-separator {
  margin: 0 0.3rem;
}
.ais-RangeInput-submit {
  margin-left: 0.3rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 0.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #0096db;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-out;
  outline: none;
}
.ais-RangeInput-submit:focus,
.ais-RangeInput-submit:hover {
  background-color: #0073a8;
}
.ais-RatingMenu-count {
  color: #3a4570;
}
.ais-Pagination-list {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.ais-Pagination-item + .ais-Pagination-item {
  margin-left: 0.3rem;
}
.ais-Pagination-link {
  padding: 0.3rem 0.6rem;
  display: block;
  border: 1px solid #c4c8d8;
  border-radius: 5px;
  transition: background-color 0.2s ease-out;
}
.ais-Pagination-link:focus,
.ais-Pagination-link:hover {
  background-color: #e3e5ec;
}
.ais-Pagination-item--disabled .ais-Pagination-link {
  opacity: 0.6;
  cursor: not-allowed;
  color: #a5abc4;
}
.ais-Pagination-item--disabled .ais-Pagination-link:focus,
.ais-Pagination-item--disabled .ais-Pagination-link:hover {
  color: #a5abc4;
  background-color: #fff;
}
.ais-Pagination-item--selected .ais-Pagination-link {
  color: #fff;
  background-color: #0096db;
  border-color: #0096db;
}
.ais-Pagination-item--selected .ais-Pagination-link:focus,
.ais-Pagination-item--selected .ais-Pagination-link:hover {
  color: #fff;
}
.ais-PoweredBy-text,
.ais-Stats-text,
.rheostat-tooltip,
.rheostat-value {
  font-size: 0.8rem;
}
.ais-PoweredBy-logo {
  margin-left: 0.3rem;
}
.ais-RangeSlider .rheostat-progress {
  background-color: #495588;
}
.ais-RangeSlider .rheostat-background {
  border-color: #878faf;
  box-sizing: border-box;
}
.ais-RangeSlider .rheostat-handle {
  border-color: #878faf;
}
.ais-RangeSlider .rheostat-marker {
  background-color: #878faf;
}
.ais-Panel-body .ais-RangeSlider {
  margin: 2rem 0;
}
.ais-RangeSlider-handle {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 1;
  background: #fff;
  border: 1px solid #46aeda;
  border-radius: 50%;
  cursor: pointer;
}
.ais-RangeSlider-tooltip {
  position: absolute;
  background: #fff;
  top: -22px;
  font-size: 0.8em;
}
.ais-RangeSlider-value {
  width: 40px;
  position: absolute;
  text-align: center;
  margin-left: -20px;
  padding-top: 15px;
  font-size: 0.8em;
}
.ais-RangeSlider-marker {
  position: absolute;
  background: #ddd;
  margin-left: -1px;
  width: 1px;
  height: 5px;
}
.ais-RatingMenu-item--disabled .ais-RatingMenu-count,
.ais-RatingMenu-item--disabled .ais-RatingMenu-label {
  color: #c4c8d8;
}
.ais-RatingMenu-item--selected {
  font-weight: 700;
}
.ais-RatingMenu-link {
  line-height: 1.5;
}
.ais-RatingMenu-link > * + * {
  margin-left: 0.3rem;
}
.ais-RatingMenu-starIcon {
  position: relative;
  top: -1px;
  width: 15px;
  fill: #ffc168;
}
.ais-RatingMenu-item--disabled .ais-RatingMenu-starIcon {
  fill: #c4c8d8;
}
.ais-HierarchicalMenu-searchBox > *,
.ais-Menu-searchBox > *,
.ais-RefinementList-searchBox > * {
  margin-bottom: 0.5rem;
}
.ais-SearchBox-form {
  display: block;
  position: relative;
}
.ais-SearchBox-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.3rem 1.7rem;
  width: 100%;
  position: relative;
  background-color: #fff;
  border: 1px solid #c4c8d8;
  border-radius: 5px;
}
.ais-SearchBox-input::-webkit-input-placeholder {
  color: #a5aed1;
}
.ais-SearchBox-input::-moz-placeholder {
  color: #a5aed1;
}
.ais-SearchBox-input:-ms-input-placeholder {
  color: #a5aed1;
}
.ais-SearchBox-input:-moz-placeholder {
  color: #a5aed1;
}
.ais-SearchBox-loadingIndicator,
.ais-SearchBox-reset,
.ais-SearchBox-submit {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 0.3rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.ais-SearchBox-submit {
  left: 0.3rem;
}
.ais-SearchBox-reset {
  right: 0.3rem;
}
.ais-SearchBox-loadingIcon,
.ais-SearchBox-resetIcon,
.ais-SearchBox-submitIcon {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.ais-SearchBox-resetIcon path,
.ais-SearchBox-submitIcon path {
  fill: #495588;
}
.ais-SearchBox-submitIcon {
  width: 14px;
  height: 14px;
}
.ais-SearchBox-resetIcon {
  width: 12px;
  height: 12px;
}
.ais-SearchBox-loadingIcon {
  width: 16px;
  height: 16px;
}
.ais-VoiceSearch-button {
  border: none;
  width: 24px;
  height: 24px;
  padding: 4px;
  border-radius: 50%;
  color: #3a4570;
  background-color: transparent;
}
.ais-VoiceSearch-button svg {
  color: currentColor;
}
.ais-VoiceSearch-button:hover {
  cursor: pointer;
  background-color: #a5aed1;
  color: #fff;
}
.ais-VoiceSearch-button:disabled {
  color: #a5aed1;
}
.ais-VoiceSearch-button:disabled:hover {
  color: #a5aed1;
  cursor: not-allowed;
  background: inherit;
}
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

/*! purgecss end ignore */
</style>
