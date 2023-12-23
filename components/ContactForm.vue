<script setup lang="ts">
const showModal = ref(false);
const textareaEl = ref(null);
const openModal = () => {
  showModal.value = true;
  setTimeout(() => {
    textareaEl.value.focus();
  }, 100)
}
const closeModal = () => {
  showModal.value = false;
  form.value = JSON.parse(JSON.stringify(defaultForm));
}
const defaultForm = {
  message: "",
  name: "",
  contactMethod: "",
  contactMethodValue: ""
}
const form = ref(JSON.parse(JSON.stringify(defaultForm)));
</script>

<template>
  <div v-if="showModal"
       class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white/80 backdrop-blur-md z-[1000]">
    <div class="flex flex-col gap-3 w-full max-w-[400px] px-4">
      <label class="flex flex-col gap-1">
        <span class="text-black/70 text-[11px]">Message</span>
        <textarea ref="textareaEl"
                  v-model="form.message"
                  class="border border-black/20 rounded-md px-3 py-2 bg-white/50"/>
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-[11px]">Name</span>
        <input v-model="form.name" type="text" class="border border-black/20 rounded-md px-3 h-12 bg-white/50"/>
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-[11px]">Contact Method</span>
        <ul class="grid grid-cols-2 gap-3 mt-1">
          <li class="w-full h-10 block bg-gray-100 flex items-center justify-center rounded-md"
              @click="form.contactMethod = 'tg'">tg
          </li>
          <li class="w-full h-10 block bg-gray-100 flex items-center justify-center rounded-md"
              @click="form.contactMethod = 'e'">e
          </li>
        </ul>
        <div v-if="form.contactMethod" class="relative mt-2 flex items-center">
          <span v-if="form.contactMethod === 'tg'" class="absolute px-3 opacity-70">t.me/</span>
          <input type="text"
                 class="border border-black/20 rounded-md pr-3 h-12 bg-white/50 w-full"
                 :class="form.contactMethod === 'tg' ? 'pl-[49px]' : 'pl-3'"/>
        </div>
      </label>
      <button class="bg-black text-white py-2 rounded-md text-base h-12 hover:bg-black/80 transition-all mt-2"
              @click="closeModal">Submit
      </button>
    </div>
  </div>
</template>