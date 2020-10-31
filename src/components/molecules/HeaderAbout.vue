<template>
  <div class="leading-tight flex flex-col justify-center">
    <Name class="text-xl xs:text-2xl font-semibold" />
    <Profession class="text-base xs:text-lg opacity-50" />
  </div>
</template>
<script>
import Name from '@/components/atoms/Name'
import Profession from '@/components/atoms/Profession'
export default {
  components: {
    Name,
    Profession,
  },
}
</script>
