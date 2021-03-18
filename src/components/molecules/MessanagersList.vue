<template>
  <ul>
    <li>
      <a href="tg://resolve?domain=zvekov">
        <Telegram />
      </a>
    </li>
    <li>
      <a href="https://wa.me/375336045454" target="_blank">
        <Whatsapp />
      </a>
    </li>
    <li>
      <a href="skype:yurazvekov?chat">
        <Skype />
      </a>
    </li>
    <li>
      <a href="https://m.me/zvekau" target="_blank">
        <Messanager />
      </a>
    </li>
    <li>
      <a class="hidden md:block" href="viber://chat?number=+375336045454">
        <Viber />
      </a>
      <a class="md:hidden" href="viber://add?number=+375336045454">
        <Viber />
      </a>
    </li>
  </ul>
</template>
<script>
import Telegram from '@/components/atoms/icons/Telegram'
import Whatsapp from '@/components/atoms/icons/Whatsapp'
import Skype from '@/components/atoms/icons/Skype'
import Messanager from '@/components/atoms/icons/Messanager'
import Viber from '@/components/atoms/icons/Viber'
export default {
  components: {
    Telegram,
    Whatsapp,
    Skype,
    Messanager,
    Viber,
  },
}
</script>
<style lang="postcss" scoped>
svg {
  @apply transform duration-300 transition-all;
  &:hover {
    @apply scale-125;
  }
}
</style>
