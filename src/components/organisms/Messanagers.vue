<template>
  <section>
    <h1 class="text-2xl font-bold">{{ $t("organisms.messanagers.title") }}</h1>
    <p class="mb-2">{{ $t("organisms.messanagers.for_contact") }}</p>
    <!-- <p class="underline pb-6">{{ $t("organisms.messanagers.best") }}</p> -->
    <MessanagersList class="flex justify-between max-w-xs pr-6" />
    <!-- <div class="text-sm xs:text-xs pt-6">
        {{ $t('organisms.messanagers.click') }}
      </div> -->
  </section>
</template>
<script>
import MessanagersList from "@/components/molecules/MessanagersList";
export default {
  components: {
    MessanagersList,
  },
};
</script>
