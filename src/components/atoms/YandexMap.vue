<template>
  <yandex-map
    :coords="center"
    :zoom="17"
    :scroll-zoom="false"
    :controls="controls"
  >
    <ymap-marker :coords="coords" :icon="markerIcon" />
  </yandex-map>
</template>
<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  components: {
    yandexMap,
    ymapMarker,
  },
  data: () => ({
    coords: [52.894592, 30.056551],
    center: [52.894592, 30.053951],
    controls: { zoomControl: {} },
    // options: {
    //   float: right,
    // },
    markerIcon: {
      layout: "default#image",
      imageHref: "/icon-map.svg",
      imageSize: [65, 135],
      imageOffset: [-29, -114],
      contentOffset: [0, 0],
    },
  }),
};
</script>
