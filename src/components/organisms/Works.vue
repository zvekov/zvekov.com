<template>
  <section>
    <h2 class="text-2xl font-bold">{{ $t("organisms.works.title") }}</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <div
        v-for="work in $static.strapi.works"
        :key="work.id"
        class="shadow-md rounded-lg p-4 transform transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl"
      >
        <a
          v-if="work.link"
          :href="work.link"
          target="_blank"
          :title="work.name"
        >
          <h3 v-if="work.name">{{ work.name }}</h3>
        </a>
        <p v-if="work.stack" class="text-sm xs:text-xs">{{ work.stack }}</p>
      </div>
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
