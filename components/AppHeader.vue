<script setup lang="ts">
import {telegramSendMessage} from "@/composables/useTelegram";

const showModal = ref<boolean>(false);
const textareaEl = ref<HTMLTextAreaElement | null>(null);
const openModal = () => {
  showModal.value = true;
  setTimeout(() => {
    textareaEl.value?.focus();
  }, 100)
}
const closeModal = () => {
  showModal.value = false;
  state.value = JSON.parse(JSON.stringify(defaultState));
}

interface TDefaultState {
  message: string,
  name: string,
  contactMethod: 'Telegram' | 'Email' | string,
  contactMethodValue: string,
  submitted: boolean,
  error: string
}

const defaultState: TDefaultState = {
  message: "",
  name: "",
  contactMethod: "",
  contactMethodValue: "",
  submitted: false,
  error: ""
}
const state = ref<TDefaultState>(JSON.parse(JSON.stringify(defaultState)));
const isValidForm = computed<boolean>(() => {
  return state.value.message.length > 10 && state.value.name.length > 2 && state.value.contactMethod.length > 0 && state.value.contactMethodValue.length > 3;
})
const sendMessage = async () => {
  const message = 'New message from website:\n\n' +
      'Name: ' + state.value.name + '\n' +
      'Message: ' + state.value.message + '\n' +
      state.value.contactMethod + ': ' + (state.value.contactMethod === 'Telegram' ? "@" : "") + state.value.contactMethodValue;
  await telegramSendMessage(message).then(() => {
    state.value.submitted = true;
  }).catch(() => {
    state.value.error = 'Something went wrong. Please try again.'
  })
}
</script>
<template>
  <header :class="header.root">
    <a href="https://github.com/zvekov" target="_blank" rel="nofollow noopener">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd"
              d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/>
      </svg>
    </a>
    <button
        @click="openModal"
        class="px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black transition-all">
      Send message
    </button>
    <!--    <button class="ml-auto">-->
    <!--      <svg class="text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">-->
    <!--        <g fill="currentColor">-->
    <!--          <path-->
    <!--              d="M8.181 11.685a2.481 2.481 0 0 1 2.48-2.48a.5.5 0 0 0 0-1a3.481 3.481 0 0 0-3.48 3.48a.5.5 0 0 0 1 0m3.781 6.06a.75.75 0 0 0-1.061 1.06a7.021 7.021 0 0 0 9.93 0a.75.75 0 1 0-1.06-1.06a5.52 5.52 0 0 1-7.81 0m8.58-9.04a.5.5 0 0 1 .5-.5a3.481 3.481 0 0 1 3.48 3.48a.5.5 0 0 1-1 0a2.481 2.481 0 0 0-2.48-2.48a.5.5 0 0 1-.5-.5M10.3 13.55a1.369 1.369 0 0 1 1.281-.865c.608 0 1.127.394 1.308.945a.75.75 0 0 0 1.425-.47a2.877 2.877 0 0 0-2.733-1.975a2.869 2.869 0 0 0-2.678 1.816a.75.75 0 0 0 1.396.548m9.902-.864a1.37 1.37 0 0 0-1.282.864a.75.75 0 1 1-1.396-.547a2.869 2.869 0 0 1 2.678-1.817c1.273 0 2.354.826 2.733 1.976a.75.75 0 0 1-1.425.47a1.376 1.376 0 0 0-1.308-.946"/>-->
    <!--          <path-->
    <!--              d="M13.071 3.785c1.07-2.34 4.37-2.39 5.52-.09c.43.86 1.49 1.19 2.33.72l.52-.29c2.04-1.16 4.49.57 4.1 2.87l-.1.59c-.16.95.51 1.84 1.47 1.95l.59.07c2.32.27 3.29 3.1 1.62 4.73l-.43.42c-.69.67-.67 1.79.04 2.44l.44.4c1.72 1.58.84 4.44-1.47 4.78l-.59.09c-.95.14-1.59 1.05-1.4 2l.12.59c.46 2.29-1.93 4.09-4 3l-.53-.28c-.85-.45-1.91-.09-2.31.79c-1.07 2.34-4.37 2.39-5.52.09a1.685 1.685 0 0 0-2.33-.72l-.52.29c-2.03 1.15-4.48-.58-4.09-2.88l.1-.59c.16-.95-.51-1.84-1.47-1.95l-.59-.07c-2.32-.27-3.29-3.1-1.62-4.73l.43-.42c.69-.67.67-1.79-.04-2.44l-.44-.4c-1.72-1.58-.84-4.44 1.47-4.78l.59-.09c.95-.14 1.59-1.05 1.4-2l-.12-.58c-.46-2.29 1.93-4.09 4-3l.53.28c.85.44 1.9.08 2.3-.79m2.92 23.38c6.076 0 11-4.924 11-11c0-6.075-4.924-11-11-11c-6.075 0-11 4.925-11 11c0 6.076 4.925 11 11 11"/>-->
    <!--        </g>-->
    <!--      </svg>-->
    <!--      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">-->
    <!--        <g fill="currentColor">-->
    <!--          <path-->
    <!--              d="M15.493 8a2.497 2.497 0 1 0 0-4.994a2.497 2.497 0 0 0 0 4.994m-.703 14.615c1.05.822 1.336 2.211.639 3.102c-.697.89-2.114.945-3.165.123c-1.05-.823-1.336-2.211-.64-3.102c.698-.89 2.115-.946 3.165-.123M8.19 10.52a2.481 2.481 0 0 1 2.48-2.48a.5.5 0 1 0 0-1a3.481 3.481 0 0 0-3.48 3.48a.5.5 0 1 0 1 0m12.36-2.98a.5.5 0 0 1 .5-.5a3.481 3.481 0 0 1 3.48 3.48a.5.5 0 1 1-1 0a2.481 2.481 0 0 0-2.48-2.48a.5.5 0 0 1-.5-.5m-10.242 4.844a1.369 1.369 0 0 1 1.282-.864c.608 0 1.126.394 1.308.945a.75.75 0 0 0 1.424-.47a2.877 2.877 0 0 0-2.732-1.975a2.869 2.869 0 0 0-2.678 1.816a.75.75 0 0 0 1.396.548m9.902-.864a1.37 1.37 0 0 0-1.282.864a.75.75 0 1 1-1.396-.548a2.869 2.869 0 0 1 2.678-1.816c1.272 0 2.354.826 2.732 1.975a.75.75 0 0 1-1.424.47c-.182-.55-.7-.945-1.308-.945m-8.24 5.06a.75.75 0 0 0-1.06 1.06a7.021 7.021 0 0 0 9.93 0a.75.75 0 1 0-1.06-1.06a5.52 5.52 0 0 1-7.81 0"/>-->
    <!--          <path-->
    <!--              d="M1 15.966c0-8.284 6.716-15 15-15c8.284 0 14.999 6.716 14.999 15c0 8.284-6.715 15-15 15C7.717 30.965 1 24.25 1 15.965m15-13c-6.856 0-12.472 5.306-12.965 12.036c.036-.002.072-.002.108-.002a3.651 3.651 0 0 1 1.36 7.04A12.998 12.998 0 0 0 16 28.965c1.241 0 2.441-.174 3.578-.498a3.651 3.651 0 0 1 5.908-3.612a13.023 13.023 0 0 0 2.288-3.37a2.497 2.497 0 0 1 1.184-4.463A13.2 13.2 0 0 0 29 15.966c0-7.18-5.82-13-13-13"/>-->
    <!--        </g>-->
    <!--      </svg>-->
    <!--    </button>-->

    <Teleport to="body">
      <div v-if="showModal"
           class="fixed top-0 left-0 right-0 bottom-0 flex items-start md:items-center justify-center bg-white/80 backdrop-blur-md z-[1000] py-3">
        <div
            v-if="!state.submitted"
            class="absolute right-0 top-0 md:left-auto md:right-auto p-3 w-full md:max-w-[400px] mx-auto flex items-end">
          <button
              @click="closeModal"
              class="ml-auto px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black transition-all">
            Cancel
          </button>
        </div>
        <div class="flex flex-col items-center gap-3 w-full md:max-w-[400px] px-3">
          <template v-if="state.error">
            <div class="w-full text-center pb-2">
              <div class="w-full text-2xl md:text-3xl font-bold pb-4 pt-12 text-center md:pt-0">
                {{ state.error }}
              </div>
              <button
                  @click="state = JSON.parse(JSON.stringify(defaultState))"
                  class="w-fit nx-auto px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black transition-all">
                Try again
              </button>
            </div>
          </template>
          <template v-else-if="state.submitted">
            <div class="w-full text-center pb-2">
              <div class="text-2xl md:text-3xl font-bold mb-2">Success</div>
              <p> I got your message. I'll get back to you soon.</p>
            </div>
            <button
                @click="closeModal"
                class="w-fit nx-auto px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black transition-all">
              Close
            </button>
          </template>
          <template v-else>
            <div class="w-full text-2xl md:text-3xl font-bold pb-4">
              Send message
            </div>
            <label class="w-full flex flex-col gap-1">
              <span class="text-black/70 text-[11px]">Message</span>
              <textarea ref="textareaEl"
                        v-model="state.message"
                        class="border border-black/20 rounded-md px-3 py-2 bg-white/50 min-h-[120px] resize-none outline-none focus:ring-2 ring-purple-400"/>
            </label>
            <label class="w-full flex flex-col gap-1">
              <span class="text-[11px]">Name</span>
              <input v-model="state.name" autocomplete="name" type="text"
                     class="border border-black/20 rounded-md px-3 h-12 bg-white/50 outline-none focus:ring-2 ring-purple-400"/>
            </label>
            <label class="w-full flex flex-col gap-1">
              <span class="text-[11px]">Feedback Method</span>
              <ul class="grid grid-cols-2 gap-3 mt-1">
                <li class="w-full h-12 block bg-gray-200 flex items-center justify-center rounded-md gap-2 text-sm cursor-pointer hover:ring-2 ring-black/50 transition-all"
                    :class="{'ring-2 ring-purple-400 bg-purple-50 text-purple-500': state.contactMethod === 'Telegram'}"
                    @click="state.contactMethod = 'Telegram'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757"/>
                  </svg>
                  Telegram
                </li>
                <li class="w-full h-12 block bg-gray-200 flex items-center justify-center rounded-md gap-2 text-sm cursor-pointer hover:ring-2 ring-black/50 transition-all"
                    :class="{'ring-2 ring-purple-400 bg-purple-50 text-purple-500': state.contactMethod === 'Email'}"
                    @click="state.contactMethod = 'Email'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757"/>
                  </svg>
                  Email
                </li>
              </ul>
              <div v-if="state.contactMethod" class="relative mt-2 flex items-center">
                <span v-if="state.contactMethod === 'Telegram'" class="absolute px-3 opacity-40">t.me/</span>
                <input type="text"
                       v-model="state.contactMethodValue"
                       :autocomplete="state.contactMethod === 'Telegram' ? 'off' : 'email'"
                       class="border border-black/20 rounded-md pr-3 h-12 bg-white/50 w-full outline-none focus:ring-2 ring-purple-400"
                       :class="state.contactMethod === 'Telegram' ? 'pl-[49px]' : 'pl-3'"/>
              </div>
            </label>
            <button :disabled="!isValidForm"
                    class="w-full disabled:opacity-40 disabled:hover:bg-black bg-black text-white py-2 rounded-md text-base h-12 hover:bg-black/80 transition-all mt-2"
                    @click="sendMessage">
              {{ isValidForm ? 'Submit' : 'Please fill out all fields on the form' }}
            </button>
          </template>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<style module="header">
.root {
  @apply flex items-center p-3 w-full md:max-w-[440px] md:mx-auto gap-4;

  & > a {
    @apply opacity-70 hover:opacity-100 transition-all;
  }
}
</style>