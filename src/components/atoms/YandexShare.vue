<template>
  <vue-yandex-share
    v-bind="options"
    color-scheme="whiteblack"
  ></vue-yandex-share>
</template>
<script>
import VueYandexShare from "@alexlit/vue-yandex-share";

export default {
  components: { VueYandexShare },

  data() {
    return {
      /**
       * Параметры плагина
       * Документация по API
       * https://yandex.ru/dev/share/doc/dg/api-docpage/
       */
      options: {
        accessToken: null,
        bare: false,
        counter: false,
        copy: "last",
        // description: null,
        direction: "horizontal",
        hashtags: null,
        // image: null,
        lang: "en",
        limit: 3,
        popupDirection: "bottom",
        popupPosition: "inner",
        size: "s",
        title: null,
        url: null,
        services: [
          "telegram",
          "pocket",
          "linkedin",
          "collections",
          "blogger",
          //   'delicious',
          //   'digg',
          //   'evernote',
          "facebook",
          "gplus",
          //   'lj',
          "moimir",
          "odnoklassniki",
          ,
          //   'pinterest',
          //   'qzone',
          //   'reddit',
          //   'renren',
          //   'sinaWeibo',
          //   'skype',
          "surfingbird",
          //   'tencentWeibo',
          //   'tumblr',
          "twitter",
          "viber",
          "vkontakte",
          "whatsapp",
        ],
      },
    };
  },
};
</script>
