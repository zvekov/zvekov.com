<template>
  <section class="inner lg:flex py-12 lg:pt-16 lg:pb-24 xl:px-0">
    <div class="w-full">
      <h1 class="font-bold uppercase text-4xl flex justify-center">
        <span>Блог</span>
      </h1>

      <ClientOnly>
        <hooper
          class="h-screen w-full"
          :playSpeed="10000"
          :transition="500"
          :itemsToSlide="1"
          :itemsToShow="3"
          :infiniteScroll="false"
          :initialSlide="0"
          :mouseDrag="false"
          :autoPlay="true"
          :wheelControl="false"
        >
          <slide
            v-for="article in $static.strapi.articles"
            v-bind:key="article.id"
            style="padding: 1rem"
            class="z-10 flex lg:items-center justify-between"
          >
            <g-link
              :to="{ path: '/' + article.slug + '/' }"
              class="bg-white hover:z-50 rounded-md shadow-lg hover:shadow-2xl transform hover:-translate-y-3"
            >
              <div class="w-full">
                <g-image
                  v-if="article.image.url"
                  :src="article.image.url"
                  class="w-full rounded-t-md"
                />
              </div>
              <p id="title" class="article-title p-4 flex items-center">
                {{ article.title }}
              </p>
            </g-link>
          </slide>
        </hooper>
      </ClientOnly>
    </div>
  </section>
</template>

<static-query>
  query {
    strapi {
      articles(where: {status: "published"}) {
        slug
        title
        image {
          url
        }
      }
    }
  }
</static-query>

<script>
import "hooper/dist/hooper.css"
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from "hooper"
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
}
</script>
<style scoped>
.article-title {
  height: 6rem;
}
/* hooper start */
.hooper-slide {
  flex-shrink: 0;
  margin: auto;
  padding: 0;
  list-style: none;
}
/* .hooper-progress {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background-color: #efefef;
} */
/* .hooper-progress-inner {
  height: 100%;
  background-color: #4285f4;
  transition: 300ms;
} */
/* .hooper-pagination {
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  padding: 5px 10px;
}
.hooper-indicators {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
} */
/* .hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #4285f4;
}
.hooper-indicator {
  margin: 0 2px;
  width: 12px;
  height: 4px;
  border-radius: 4px;
  border: none;
  padding: 0;
  background-color: #fff;
  cursor: pointer;
} */
/* .hooper-pagination.is-vertical {
  bottom: auto;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
} */
.hooper-pagination.is-vertical .hooper-indicators {
  flex-direction: column;
}
.hooper-pagination.is-vertical .hooper-indicator {
  width: 6px;
}
.hooper-next,
.hooper-prev {
  background-color: transparent;
  border: none;
  padding: 1em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.hooper-next.is-disabled,
.hooper-prev.is-disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.hooper-next {
  right: 0;
}
.hooper-prev {
  left: 0;
}
.hooper-navigation.is-vertical .hooper-next {
  top: auto;
  bottom: 0;
  transform: initial;
}
.hooper-navigation.is-vertical .hooper-prev {
  top: 0;
  bottom: auto;
  right: 0;
  left: auto;
  transform: initial;
}
.hooper-navigation.is-rtl .hooper-prev {
  left: auto;
  right: 0;
}
.hooper-navigation.is-rtl .hooper-next {
  right: auto;
  left: 0;
}
.hooper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.hooper * {
  /* box-sizing: border-box; */
  border: 0;
}
.hooper:hover,
.hooper:focus,
.hooper:active {
  outline: none;
}
.hooper-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.hooper-track {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.hooper {
  height: 500px;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #1d327a !important;
}
</style>
