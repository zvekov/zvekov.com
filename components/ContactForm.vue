<script setup lang="ts">
import {computed, ref} from "vue";
import {telegramSendMessage} from "@/composables/useTelegram";
import {useEmail, useMessage, useName, useTelegrram} from "@/helpers/validation";
import {useState} from "@/helpers/utilites";

const emit = defineEmits(["close"]);
const textareaEl = ref<HTMLTextAreaElement | null>(null);
const email = useEmail<string>();
const telegram = useTelegrram<string>();
const name = useName<string>()
const message = useMessage<string>();
const [isContactMethod, setContactMethod] = useState<"Email" | "Telegram" | string>("");
const [isError, setError] = useState<string>("");
const [isSubmit, setSubmit] = useState<boolean>(false)


const isValidForm = computed(() => {
  return !name.errorMessage.value
      && !message.errorMessage.value
      && isContactMethod.value
      && (isContactMethod.value === 'Telegram' ?
          !telegram.errorMessage.value && telegram.value.value?.length
          : !email.errorMessage.value && email.value.value?.length)
});
const setDefaultState = () => {
  email.value.value = "";
  telegram.value.value = "";
  name.value.value = "";
  message.value.value = "";
  setContactMethod("");
}
const closeModal = () => {
  setDefaultState();
  emit("close");
}
const sendMessage = async () => {
  const messageTg = 'New message from website:\n\n' +
      'Name: ' + name.value.value + '\n' +
      'Message: ' + message.value.value + '\n' +
      isContactMethod.value + ': ' +
      (isContactMethod.value === 'Telegram' ? "@" : "") +
      (isContactMethod.value === 'Telegram' ? telegram.value.value : email.value.value);

    await telegramSendMessage(messageTg).then(() => {
    setSubmit(true);
  }).catch(() => {
    setError('Something went wrong. Please try again.');
  })
};

onMounted(() => {
  textareaEl.value?.focus({preventScroll: true});
});
</script>

<template>
  <div
      :class="contact.root">
    <div
        v-if="!isSubmit"
        :class="contact.header">
      <button
          @click="closeModal"
          class="px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black dark:text-white/70 dark:hover:text-white dark:hover:border-white transition-all">
        Cancel
      </button>
    </div>
    <div :class="contact.content">
      <template v-if="isError">
        <div>
          <div class="w-full text-center pb-4">
            <div class="w-full text-2xl md:text-3xl font-bold pb-4 pt-12 text-center md:pt-0">
              {{ isError }} 😱
            </div>
            <button
                @click="setDefaultState"
                class="w-fit nx-auto px-3 py-1 text-sm border border-solid rounded-md text-black/70 hover:border-black hover:text-black dark:text-white/70 dark:hover:text-white dark:hover:border-white transition-all">
              Try again
            </button>
          </div>
        </div>
      </template>
      <template v-else-if="isSubmit">
        <div class="h-full flex flex-col items-center justify-center flex-1">
          <div class="w-full text-center pb-4">
            <div class="text-2xl md:text-3xl font-bold pb-2">Success 🥳</div>
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
                    v-model="message.value.value"
                    maxlength="200"
                    class="text-black/70 dark:text-white/70 text-[15px] border border-black/20 bg-white/50 dark:bg-white/10 dark:border-white/20 rounded-md px-3 py-2 min-h-[120px] resize-none outline-none appearance-none focus:ring-2 ring-indigo-400"/>
          <div class="flex items-center justify-between pt-1 opacity-70">
                  <span
                      class="text-black/70 dark:text-white/70 text-[10px] leading-none"
                      v-if="message.errorMessage.value">
                    {{ message.errorMessage.value }}
                  </span>
            <span class="text-black/70 dark:text-white/70 text-[10px] leading-none ml-auto">{{
                message.value.value.length
              }} / 200</span>
          </div>
        </label>
        <label class="w-full flex flex-col gap-1">
          <span class="text-black/70 dark:text-white/70 text-[11px]">Name</span>
          <input v-model="name.value.value" autocomplete="name" type="text" maxlength="40"
                 class="text-black/70 dark:text-white/70 text-[15px] border border-black/20 bg-white/50 dark:bg-white/10 dark:border-white/20 rounded-md px-3 h-12 outline-none appearance-none focus:ring-2 ring-indigo-400"/>
          <div class="flex items-center justify-between pt-1 opacity-70">
                  <span
                      class="text-black/70 dark:text-white/70 text-[10px] leading-none"
                      v-if="name.errorMessage.value">{{ name.errorMessage.value }}</span>
            <span class="text-black/70 dark:text-white/70 text-[10px] leading-none ml-auto">{{
                name.value.value.length
              }} / 40</span>
          </div>
        </label>
        <label class="w-full flex flex-col gap-1">
          <span class="text-black/70 dark:text-white/70 text-[11px]">Feedback Method</span>
          <ul class="grid grid-cols-2 gap-3 mt-1">
            <li class="w-full h-12 block flex items-center justify-center rounded-md gap-2 text-sm cursor-pointer transition-all border"
                :class="isContactMethod === 'Telegram' ? 'ring-2 border border-black/20 dark:border-white/20 dark:ring-indigo-400 ring-indigo-400 bg-indigo-50 dark:bg-white/10 text-indigo-400 dark:text-indigo-300' : 'border-transparent bg-gray-200 dark:bg-white/10 dark:ring-white/50 hover:ring-2 ring-black/50'"
                @click="setContactMethod('Telegram')">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                <path fill="currentColor"
                      d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757"/>
              </svg>
              Telegram
            </li>
            <li class="w-full h-12 block flex items-center justify-center rounded-md gap-2 text-sm cursor-pointer transition-all border"
                :class="isContactMethod === 'Email' ? 'ring-2 border border-black/20 dark:border-white/20 dark:ring-indigo-400 ring-indigo-400 bg-indigo-50 dark:bg-white/10 text-indigo-400 dark:text-indigo-300' : 'border-transparent bg-gray-200 dark:bg-white/10 dark:ring-white/50 hover:ring-2 ring-black/50'"
                @click="setContactMethod('Email')">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                <path fill="currentColor"
                      d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757"/>
              </svg>
              Email
            </li>
          </ul>
          <div v-if="isContactMethod" class="relative mt-2 flex items-center">
            <template v-if="isContactMethod === 'Telegram'">
              <span class="absolute px-3 opacity-40">t.me/</span>
              <input type="text"
                     v-model="telegram.value.value"
                     maxlength="40"
                     class="pl-[49px] text-black/70 dark:text-white/70 text-[15px] border border-black/20 bg-white/50 dark:bg-white/10 dark:border-white/20 rounded-md pr-3 h-12 w-full appearance-none outline-none focus:ring-2 ring-indigo-400"
            </template>

            <template v-else>
              <input type="text"
                     v-model="email.value.value"
                     autocomplete="email"
                     maxlength="40"
                     class="pl-3 text-black/70 dark:text-white/70 text-[15px] border border-black/20 bg-white/50 dark:bg-white/10 dark:border-white/20 rounded-md pr-3 h-12 w-full appearance-none outline-none focus:ring-2 ring-indigo-400"
              />
            </template>

          </div>
          <div
              v-if="(isContactMethod === 'Telegram' && telegram.errorMessage.value) || (isContactMethod === 'Email' && email.errorMessage.value)"
              class="flex items-center justify-between pt-1 opacity-70">
                  <span
                      class="text-black/70 dark:text-white/70 text-[10px] leading-none"
                  >
                    <template v-if="telegram.errorMessage.value">
                        {{ telegram.errorMessage.value }}
                    </template>
                    <template v-if="email.errorMessage.value">
                      {{ email.errorMessage.value }}
                    </template>
                  </span>
            <span class="text-black/70 dark:text-white/70 text-[10px] leading-none ml-auto">{{
                isContactMethod === 'Telegram' ? telegram.value.value.length : email.value.value.length
              }} / 40</span>
          </div>
        </label>
        <button :disabled="!isValidForm"
                class="text-[15px] disabled:cursor-not-allowed w-full disabled:opacity-40 disabled:hover:bg-black bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white/80 dark:disabled:hover:bg-white  py-2 rounded-md text-base h-12 hover:bg-black/80 transition-all mt-2"
                @click="sendMessage">
          {{
            isValidForm ? 'Submit' : 'Please fill out all fields on the form'
          }}
        </button>
      </template>
    </div>
  </div>
</template>

<style module="contact">
.root {
  @apply h-full w-full fixed overflow-hidden top-0 left-0 right-0 bottom-0 flex items-start md:items-center justify-center bg-white/80 dark:bg-[#212121]/90 backdrop-blur-md z-[1000] py-3;
}
.content {
  @apply h-fit flex flex-col items-center gap-3 w-full md:max-w-[400px] px-3 h-full md:justify-center;
}

.header {
  @apply absolute right-0 top-0 md:left-auto md:right-auto p-3 w-full md:max-w-[400px] mx-auto flex items-end;

  & > button {
    @apply ml-auto;
  }
}
</style>