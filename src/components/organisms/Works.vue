<template>
  <section>
    <h2 class="text-2xl font-bold">{{ $t("organisms.works.title") }}</h2>
    <div v-for="work in $static.strapi.works" :key="work.id">
      <a v-if="work.link" :href="work.link" target="_blank" :title="work.name">
        <h3 v-if="work.name">{{ work.name }}</h3>
      </a>
      <p v-if="work.stack" class="text-sm xs:text-xs">{{ work.stack }}</p>
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
      }
	  }
  }
</static-query>
