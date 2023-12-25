<script setup lang="ts">
import {computed} from "vue";
import {telegramSendMessage} from "@/composables/useTelegram";

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});
const showModal = ref<boolean>(false);
const textareaEl = ref<HTMLTextAreaElement | null>(null);
const openModal = () => {
  new Promise(resolve => {
    showModal.value = true;
    resolve(showModal.value);
  }).then(() => {
    textareaEl.value?.focus({preventScroll: true});
  });
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
  return state.value.message.length >= 70 && state.value.name.length > 2 && state.value.contactMethod.length > 0 && state.value.contactMethodValue.length > 3;
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
        class="px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black dark:text-white/70 dark:hover:text-white dark:hover:border-white transition-all">
      Send message
    </button>
    <UIcon :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun'" class="ml-auto w-6 h-6 cursor-pointer"
           @click="isDark = !isDark"/>
    <Teleport to="body">
      <transition name="slide-up">
        <div v-if="showModal"
             class="h-full w-full fixed overflow-hidden top-0 left-0 right-0 bottom-0 flex items-start md:items-center justify-center bg-white/80 dark:bg-[#212121]/90 backdrop-blur-md z-[1000] py-3">
          <div
              v-if="!state.submitted"
              class="absolute right-0 top-0 md:left-auto md:right-auto p-3 w-full md:max-w-[400px] mx-auto flex items-end">
            <button
                @click="closeModal"
                class="ml-auto px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black dark:text-white/70 dark:hover:text-white dark:hover:border-white transition-all">
              Cancel
            </button>
          </div>
          <div class="flex flex-col items-center gap-3 w-full md:max-w-[400px] px-3 h-full md:justify-center">
            <template v-if="state.error">
              <div>
                <div class="w-full text-center pb-2">
                  <div class="w-full text-2xl md:text-3xl font-bold pb-4 pt-12 text-center md:pt-0">
                    {{ state.error }}
                  </div>
                  <button
                      @click="state = JSON.parse(JSON.stringify(defaultState))"
                      class="w-fit nx-auto px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black dark:text-white/70 dark:hover:text-white dark:hover:border-white transition-all">
                    Try again
                  </button>
                </div>
              </div>
            </template>
            <template v-else-if="state.submitted">
              <div class="h-full flex flex-col items-center justify-center flex-1">
                <div class="w-full text-center pb-2">
                  <div class="text-2xl md:text-3xl font-bold mb-2">Success</div>
                  <p> I got your message. I'll get back to you soon.</p>
                </div>
                <button
                    @click="closeModal"
                    class="w-fit nx-auto px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black dark:text-white/70 dark:hover:text-white dark:hover:border-white transition-all">
                  Close
                </button>
              </div>
            </template>
            <template v-else>
              <div class="w-full text-2xl md:text-3xl font-bold pb-4">
                Send message
              </div>
              <label class="w-full flex flex-col gap-1">
                <span class="text-black/70 dark:text-white/70 text-[11px]">Message</span>
                <textarea ref="textareaEl"
                          v-model="state.message"
                          maxlength="200"
                          class="text-[15px] border border-black/20 bg-white/50 dark:bg-white/10 dark:border-white/20 rounded-md px-3 py-2 min-h-[120px] resize-none outline-none appearance-none focus:ring-2 ring-indigo-400"/>
                <div class="flex items-center justify-between pt-1 opacity-70">
                  <span
                      class="text-black/70 dark:text-white/70 text-[10px] leading-none"
                      v-if="state.message.length < 70">Minimum 70 characters</span>
                  <span class="text-black/70 dark:text-white/70 text-[10px] leading-none ml-auto">{{
                      state.message.length
                    }} / 200</span>
                </div>
              </label>
              <label class="w-full flex flex-col gap-1">
                <span class="text-black/70 dark:text-white/70 text-[11px]">Name</span>
                <input v-model="state.name" autocomplete="name" type="text" maxlength="40"
                       class="text-[15px] border border-black/20 bg-white/50 dark:bg-white/10 dark:border-white/20 rounded-md px-3 h-12 outline-none appearance-none focus:ring-2 ring-indigo-400"/>
                <div class="flex items-center justify-between pt-1 opacity-70">
                  <span
                      class="text-black/70 dark:text-white/70 text-[10px] leading-none"
                      v-if="state.name.length < 3">Minimum 3 characters</span>
                  <span class="text-black/70 dark:text-white/70 text-[10px] leading-none ml-auto">{{
                      state.name.length
                    }} / 40</span>
                </div>
              </label>
              <label class="w-full flex flex-col gap-1">
                <span class="text-black/70 dark:text-white/70 text-[11px]">Feedback Method</span>
                <ul class="grid grid-cols-2 gap-3 mt-1">
                  <li class="w-full h-12 block flex items-center justify-center rounded-md gap-2 text-sm cursor-pointer transition-all"
                      :class="state.contactMethod === 'Telegram' ? 'ring-2 dark:ring-indigo-400 ring-indigo-400 bg-indigo-50 dark:bg-white/10 text-indigo-300' : 'bg-gray-200 dark:bg-white/10 dark:ring-white/50 hover:ring-2 ring-black/50'"
                      @click="state.contactMethod = 'Telegram'; state.contactMethodValue = '';">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                      <path fill="currentColor"
                            d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757"/>
                    </svg>
                    Telegram
                  </li>
                  <li class="w-full h-12 block flex items-center justify-center rounded-md gap-2 text-sm cursor-pointer transition-all"
                      :class="state.contactMethod === 'Email' ? 'ring-2 dark:ring-indigo-400 ring-indigo-400 bg-indigo-50 dark:bg-white/10 text-indigo-300' : 'bg-gray-200 dark:bg-white/10 dark:ring-white/50 hover:ring-2 ring-black/50'"
                      @click="state.contactMethod = 'Email'; state.contactMethodValue = '';">
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
                         :autocomplete="state.contactMethod === 'Telegram' ? '' : 'email'"
                         maxlength="40"
                         class="text-[15px] border border-black/20 bg-white/50 dark:bg-white/10 dark:border-white/20 rounded-md pr-3 h-12 w-full appearance-none outline-none focus:ring-2 ring-indigo-400"
                         :class="state.contactMethod === 'Telegram' ? 'pl-[49px]' : 'pl-3'"/>

                </div>
                <div class="flex items-center justify-between pt-1 opacity-70">
                  <span
                      class="text-black/70 dark:text-white/70 text-[10px] leading-none"
                      v-if="state.contactMethodValue.length < (state.contactMethod === 'Telegram' ? 4 : 6)">Minimum {{
                      state.contactMethod === 'Telegram' ? 4 : 6
                    }} characters</span>
                  <span class="text-black/70 dark:text-white/70 text-[10px] leading-none ml-auto">{{
                      state.contactMethodValue.length
                    }} / 40</span>
                </div>
              </label>
              <button :disabled="!isValidForm"
                      class="text-[15px] w-full disabled:opacity-40 disabled:hover:bg-black bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white/80 dark:disabled:hover:bg-white  py-2 rounded-md text-base h-12 hover:bg-black/80 transition-all mt-2"
                      @click="sendMessage">
                {{ isValidForm ? 'Submit' : 'Please fill out all fields on the form' }}
              </button>
            </template>
          </div>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<style>
html {
  @apply m-0 h-full overflow-hidden;
}
</style>
<style module="header">
.root {
  @apply flex items-center p-3 w-full md:max-w-[440px] md:mx-auto gap-4;

  & > a {
    @apply opacity-70 hover:opacity-100 transition-all;
  }
}
</style>