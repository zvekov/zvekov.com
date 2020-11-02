<template>
  <div class="flex flex-col justify-center leading-tight">
    <div class="text-xl font-semibold xs:text-2xl">{{ $t("atoms.name") }}</div>
    <Profession class="text-base opacity-50 xs:text-lg" />
  </div>
</template>
<script>
import Name from "@/components/atoms/Name";
import Profession from "@/components/atoms/Profession";
export default {
  components: {
    Name,
    Profession,
  },
};
</script>
