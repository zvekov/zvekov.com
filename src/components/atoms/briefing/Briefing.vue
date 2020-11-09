<template>
  <div class="flex items-center w-full h-full">
    <!-- <iframe
      v-if="this.$i18n.locale == 'ru-ru'"
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://zvekov.typeform.com/to/QKH8f3"
    ></iframe>
    <iframe
      v-if="this.$i18n.locale == 'en-gb'"
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://zvekov.typeform.com/to/Nx9DWn"
    ></iframe>
    <iframe
      v-if="this.$i18n.locale == 'es-es'"
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://dev524888.typeform.com/to/eU19aq"
    ></iframe>
    <iframe
      v-if="this.$i18n.locale == 'fr-fr'"
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://zvekov.typeform.com/to/zocspB"
    ></iframe> -->
    <flow-form
      ref="flowform"
      v-on:complete="onComplete"
      v-on:submit="onSubmit"
      v-bind:questions="questions"
      v-bind:language="language"
      v-bind:standalone="false"
    >
      <template v-slot:complete>
        <div class="f-section-wrap">
          <p class="flex flex-col flex-wrap">
            <span class="w-full pb-4 text-2xl font-bold">Thank you. 🙏</span>
            <span class="w-full text-lg">
              Great work, the survey is completed, and our demo is done. You can
              review your answers or press submit.
            </span>
          </p>
          <!-- <p class="f-description">
            Note: No data will be saved and/or sent in this demo.
          </p> -->
        </div>
      </template>
      <template v-slot:completeButton>
        <div class="f-submit" v-if="!submitted">
          <button
            class="o-btn-action"
            ref="button"
            type="submit"
            href="#"
            v-on:click.prevent="onSendData()"
            aria-label="Press to submit"
          >
            <span>{{ language.submitText }}</span>
          </button>
          <a
            class="f-enter-desc"
            href="#"
            v-on:click.prevent="onSendData()"
            v-html="language.formatString(language.pressEnter)"
          >
          </a>
        </div>

        <p class="text-lg font-bold text-success" v-if="submitted">
          Submitted succesfully.
          <g-link to="/contact/">назад</g-link>
        </p>
      </template>
    </flow-form>
  </div>
</template>
<script>
import FlowForm, {
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LanguageModel,
} from "@ditdot-dev/vue-flow-form";
export default {
  components: {
    FlowForm,
  },
  data() {
    return {
      language: new LanguageModel({
        continue: this.$t("organisms.briefing.continue"),
        pressEnter: this.$t("organisms.briefing.pressEnter") + " Enter ↵",
        submitText: this.$t("organisms.briefing.submitText"),
        otherPrompt: this.$t("organisms.briefing.otherPrompt"),
        thankYouText: "На этом 😉 Жми отправить бриф",
      }),
      questions: [
        // QuestionModel array
        // new QuestionModel({
        //   title: "Что обсудим?",
        //   type: QuestionType.MultipleChoice,
        //   // tagline: "Path B",
        //   subtitle: "Вау! 😉",
        //   helpText: "Выберите один или несколько вариантов",
        //   multiple: false,
        //   allowOther: true,
        //   options: [
        //     new ChoiceOption({
        //       label: "Веб-сайт",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "Веб-сервис",
        //       value: "webservice",
        //     }),
        //     new ChoiceOption({
        //       label: "Интернет-магазин",
        //       value: "ecommerce",
        //     }),
        //     new ChoiceOption({
        //       label: "Мобильное приложение",
        //       value: "nativeapp",
        //     }),
        //     new ChoiceOption({
        //       label: "Декстоп приложение",
        //       value: "desctopapp",
        //     }),
        //   ],
        //   jump: {
        //     website: "website",
        //     ecommerce: "ecommerce",
        //     webservice: "webservice",
        //     nativeapp: "nativeapp",
        //     desctopapp: "decstopapp",
        //   },
        // }),
        // new QuestionModel({
        //   id: "website",
        //   title: "Тип сайта",
        //   type: QuestionType.MultipleChoice,
        //   // tagline: "Разработка веб-сайта",
        //   subtitle: "Выберите тип будущего сайта.",
        //   helpText: "Выберите один или несколько вариантов",
        //   multiple: false,
        //   options: [
        //     new ChoiceOption({
        //       label: "Сайт-визитка",
        //       value: "business_site",
        //     }),
        //     new ChoiceOption({
        //       label: "Лендинг",
        //       value: "landing_page",
        //     }),
        //     new ChoiceOption({
        //       label: "Многостраничный сайт",
        //       value: "full_site",
        //     }),
        //     new ChoiceOption({
        //       label: "Каталог продукции",
        //       value: "catalog_site",
        //     }),
        //   ],
        // }),
        // new QuestionModel({
        //   id: "website",
        //   title: "Тип сайта",
        //   type: QuestionType.MultipleChoice,
        //   // tagline: "Path B",
        //   subtitle: "Вау! 😉",
        //   helpText: "Выберите один или несколько вариантов",
        //   multiple: false,
        //   options: [
        //     new ChoiceOption({
        //       label: "Лендинг",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "Многостраничный сайт",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "Каталог продукции",
        //       value: "ecommerce",
        //     }),
        //     new ChoiceOption({
        //       label: "Сайт-визитка",
        //       value: "nativeapp",
        //     }),
        //   ],
        // }),
        // new QuestionModel({
        //   id: "ecommerce",
        //   title: "Тип сайта",
        //   type: QuestionType.Dropdown,
        //   // tagline: "Path B",
        //   subtitle: "Вау! 😉",
        //   helpText: "Выберите один или несколько вариантов",
        //   multiple: false,
        //   options: [
        //     new ChoiceOption({
        //       label: "Беларусь",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "Россия",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "Каталог продукции",
        //       value: "США",
        //     }),
        //     new ChoiceOption({
        //       label: "Сайт-визитка",
        //       value: "nativeapp",
        //     }),
        //   ],
        // }),
        // new QuestionModel({
        //   title: "Расскажите о задаче",
        //   type: QuestionType.LongText,
        //   // tagline: "Path B",
        //   subtitle:
        //     "Ответы на вопросы: что, для кого, конкуренты/примеры, главные отличия.",
        // }),
        // new QuestionModel({
        //   title: "Срок выполнения",
        //   type: QuestionType.MultipleChoice,
        //   // tagline: "Path B",
        //   subtitle: "Path A sounds like a winner! 😉",
        //   help: "aasa",
        //   options: [
        //     new ChoiceOption({
        //       label: "до месяца",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "1-2 месяца",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "2-3 месяца",
        //       value: "ecommerce",
        //     }),
        //     new ChoiceOption({
        //       label: "обсуждаемо",
        //       value: "nativeapp",
        //     }),
        //   ],
        // }),
        // new QuestionModel({
        //   title: "Планируемый бюджет",
        //   type: QuestionType.MultipleChoice,
        //   // tagline: "Path B",
        //   subtitle: "Path A sounds like a winner! 😉",
        //   help: "aasa",
        //   options: [
        //     new ChoiceOption({
        //       label: "до $1000",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "$1000 – $2500",
        //       value: "website",
        //     }),
        //     new ChoiceOption({
        //       label: "$2500 – $5000",
        //       value: "ecommerce",
        //     }),
        //     new ChoiceOption({
        //       label: "свыше $5000",
        //       value: "nativeapp",
        //     }),
        //   ],
        // }),
        // new QuestionModel({
        //   title: "Ваше имя",
        //   type: QuestionType.Text,
        //   // tagline: "Path B",
        //   subtitle: "Как мне к Вам обращаться.",
        // }),
        new QuestionModel({
          title: "Способ связи",
          type: QuestionType.MultipleChoice,
          // tagline: "Path B",
          subtitle: "Выберите наиболее удобный способ связи.",
          helpText: "aasa",
          options: [
            new ChoiceOption({
              label: "Telegram",
              value: "telegram",
            }),
            new ChoiceOption({
              label: "Whatsapp",
              value: "whatsapp",
            }),
            new ChoiceOption({
              label: "Viber",
              value: "viber",
            }),
            new ChoiceOption({
              label: "E-Mail",
              value: "email",
            }),
            new ChoiceOption({
              label: "Skype",
              value: "skype",
            }),
            new ChoiceOption({
              label: "Facebook Messenger",
              value: "facebook",
            }),
          ],
          jump: {
            telegram: "telegram_id",
            email: "email_id",
            skype: "skype_id",
            viber: "viber_id",
            facebook: "facebook_id",
            whatsapp: "whatsapp_id",
          },
        }),
        new QuestionModel({
          id: "telegram_id",
          title: "Логин в Telegram",
          type: QuestionType.Text,
          subtitle: "Path A sounds like a winner! 😉",
          helpText: "aasa",
          jump: {
            _other: "_submit",
          },
        }),
        new QuestionModel({
          id: "facebook_id",
          title: "Логин в Facebook",
          type: QuestionType.Text,
          subtitle: "Path A sounds like a winner! 😉",
          helpText: "aasa",
          jump: {
            _other: "_submit",
          },
        }),
        new QuestionModel({
          id: "viber_id",
          title: "Номер в Viber",
          type: QuestionType.Text,
          subtitle: "Укажите номер телефона в международном формате.",
          helpText: "aasa",
          placeholder: "Например +375 99 999-99-99",
          jump: {
            _other: "_submit",
          },
        }),
        new QuestionModel({
          id: "whatsapp_id",
          title: "Номер в Whatsapp",
          type: QuestionType.Text,
          subtitle: "Укажите номер телефона в международном формате.",
          helpText: "aasa",
          placeholder: "Например +375 99 999-99-99",
          jump: {
            _other: "_submit",
          },
        }),
        // new QuestionModel({
        //   id: "whatsapp_id",
        //   title: "Номер в Whatsapp",
        //   type: QuestionType.SectionBreak,
        //   subtitle: "Укажите номер телефона в международном формате",
        //   helpText: "aasa",
        //   placeholder: "Например +375 (99) 999-99-99",
        //   value: "whatsapp_number",
        // }),
        new QuestionModel({
          id: "skype_id",
          title: "Логин в Skype",
          type: QuestionType.Text,
          subtitle: "Path A sounds like a winner! 😉",
          helpText: "aasa",
          jump: {
            _other: "_submit",
          },
        }),
        new QuestionModel({
          id: "email_id",
          title: "Ваш E-Mail",
          type: QuestionType.Email,
          // tagline: "Path B",
          subtitle:
            "Ответы на вопросы: что, для кого, конкуренты/примеры, главные отличия.",
        }),
      ],
    };
  },
  mounted() {
    document.addEventListener("keyup", this.onKeyListener);
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.onKeyListener);
  },
  methods: {
    onKeyListener($event) {
      // We've overriden the default "complete" slot so
      // we need to implement the "keyup" listener manually.
      if ($event.key === "Enter" && this.completed && !this.submitted) {
        this.onSendData();
      }
    },
    /* eslint-disable-next-line no-unused-vars */
    onComplete(completed, questionList) {
      // This method is called whenever the "completed" status is changed.
      // this.completed = completed;
      this.onSendData();
    },
    /* eslint-disable-next-line no-unused-vars */
    onSubmit(questionList) {
      // This method will only be called if you don't override the
      // completeButton slot.
      this.onSendData();
    },

    onSendData() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.
      this.$refs.flowform.submitted = true;
      this.submitted = true;
      /* eslint-disable-next-line no-unused-vars */
      const data = this.getData();
      /*
          You can use Fetch API to send the data to your server, eg.:
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        */
    },
    getData() {
      const data = {
        questions: [],
        answers: [],
      };
      this.questions.forEach((question) => {
        if (question.title) {
          let answer = question.answer;
          if (typeof answer === "object") {
            answer = answer.join(", ");
          }
          data.questions.push(question.title);
          data.answers.push(answer);
        }
      });
      return data;
    },
  },
  head() {
    return {
      script: [
        {
          src: "https://embed.typeform.com/embed.js",
        },
      ],
    };
  },
};
</script>

<style lang="postcss">
.vff .f-container,
header.vff-header .f-container,
.vff .fh2,
.vff h2 {
  @apply p-0;
}
.vff ul.f-radios {
  @apply flex max-w-full min-h-full flex-wrap;
}
.vff ul.f-radios li {
  @apply border border-gray-700 rounded-md font-normal w-full;
}
@screen md {
  .vff ul.f-radios li {
    @apply mr-4;
    width: calc(50% - 1rem);
  }
}
.vff ul.f-radios li:hover {
  @apply bg-gray-700 text-white cursor-pointer;
}
.f-selected {
  @apply bg-gray-700 text-white;
}

.vff span.f-text {
  @apply text-2xl;
}
.vff .fh2 span.f-sub,
.vff .fh2 span.f-tagline {
  @apply text-lg;
}
.vff span.f-sub span + span.f-help {
  @apply text-base opacity-50;
}
.vff span.f-text,
.vff .fh2 span.f-sub,
.vff .fh2 span.f-tagline,
.vff .f-enter,
.vff span.f-sub + .f-answer.f-full-width,
.vff .text-alert,
.vff .f-invalid {
  @apply mx-2;
}
.vff button {
  @apply border border-gray-700 rounded-md px-4 py-1;
}

.vff .f-full-width input[type="email"],
.vff .f-full-width input[type="number"],
.vff .f-full-width input[type="password"],
.vff .f-full-width input[type="tel"],
.vff .f-full-width input[type="text"],
.vff .f-full-width input[type="url"],
.vff .f-full-width span.faux-form,
.vff .f-full-width textarea {
  @apply text-lg font-normal;
}
</style>