<template>
  <section
    id="reviews"
    class="inner py-12 lg:py-24 lg:px-4 xl:px-0 lg:min-h-screen"
  >
    <h2 class="font-bold text-4xl uppercase text-center">
      <span>Отзывы клиентов</span>
    </h2>
    <!-- Setting for slider https://github.com/baianat/hooper -->
    <ClientOnly>
      <hooper
        class="mt-16 mb-8 lg:my-16"
        :playSpeed="7000"
        :transition="500"
        :infiniteScroll="true"
        :initialSlide="0"
        :mouseDrag="false"
        :autoPlay="true"
        :wheelControl="false"
      >
        <slide
          v-for="review in reviews"
          v-bind:key="review.id"
          class="flex lg:items-center justify-center"
        >
          <div
            class="review-photo flex flex-wrap lg:px-16 items-start w-full lg:mx-8"
          >
            <div class="w-full lg:w-3/12 px-8 flex flex-col justify-center">
              <g-image
                class="rounded-full h-full w-full"
                :src="review.photo"
                width="200"
                height="200"
                :alt="review.name"
              />
              <div class="flex flex-col pt-4 text-center pb-6">
                <span class="font-bold text-xl">{{ review.name }}</span>
                <span class="text-lg opacity-75">{{ review.profession }}</span>
              </div>
            </div>
            <div class="w-full lg:w-9/12 flex flex-col">
              <div
                v-html="review.text"
                class="text-lg bg-green-100 px-4 lg:px-8 pt-6 pb-4 rounded-lg"
              ></div>
            </div>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons">
          <svg
            slot="hooper-prev"
            width="38"
            height="64"
            fill="none"
            viewBox="0 0 38 64"
            class="opacity-0 lg:opacity-25 hover:opacity-100 transition-all duration-300"
          >
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="2"
              d="M35.41 1.11L1.568 31.049a1.346 1.346 0 000 2.012L35.409 63"
            />
          </svg>
          <svg
            slot="hooper-next"
            width="38"
            height="64"
            fill="none"
            viewBox="0 0 38 64"
            class="opacity-0 lg:opacity-25 hover:opacity-100 transition-all duration-300"
          >
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="2"
              d="M1.988 62.89l33.84-29.939a1.346 1.346 0 000-2.012L1.988 1"
            />
          </svg>
        </hooper-navigation>
      </hooper>
    </ClientOnly>
  </section>
</template>

<script>
import "hooper/dist/hooper.css";
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from "hooper";
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  data() {
    return {
      reviews: [
        {
          photo: "/img/review1.jpg",
          text:
            "<p class='pb-2'>В Клуб ЗОЖ я пришла октябре 2019 года. Последней каплей стал мой поход в магазин. Я никогда не была худышкой, но новость о том, что я ношу 54-56 размер одежды поверг меня в шок. Вернувшись домой из магазина, я проплакала часа два.</p><p class='pb-2'>Успокоившись, я твердо решила: нужно срочно что-то менять и обратилась за помощью к консультанту Ирине Стефановой, которая до этого уже приглашала меня поучаствовать в Марафоне Стройности.</p><p class='pb-2'> Посещая клуб и соблюдая все рекомендации консультанта, я стала замечать, что самочувствие мое улучшилось, отечность ушла, появилось больше энергии. За 6 месяцев, участвуя в Марафонах Стройности, я снизила вес на 16 кг, чему очень рада.</p>Спасибо моему консультанту и Марафонам Стройности, это на самом деле нужный проект!",
          name: "Алла Савицкая",
          profession: "мастер на Молочном заводе",
        },
        {
          photo: "/img/review2.jpg",
          text:
            "<p class='pb-2'>Здравствуйте, меня зовут Ирина, мне 53 года.</p><p class='pb-2'>В клуб пришла в ноябре 2019 года с весом 81 кг. При моем миниатюрном росте 152 см, этакий колобок на ножках. Вечно уставшая, раздраженная, с многими болячками, недовольная жизнью, пожилая женщина… </p><p class='pb-2'>Спасибо большое моему ангелу, моему консультанту Ирочке Стефановой! Она познакомила меня с продуктами компании Гербалайф, научила меня правильно питаться, иметь физические нагрузки согласно моего возраста, пригласила участвовать в Марафонах Стройности и поддерживала во всем.</p><p class='pb-2'>Благодаря такой поддержке и Марафонам Стройности, я снизила вес на 20 кг за 3 месяца. Ко мне вернулась моя молодость, красота, прекрасное самочувствие и желание жить. <p class='pb-2'>Спасибо большое Ирочка)</p>",
          name: "Ирина Кунделева",
          profession: "бригадир колесно-роликового участка Вагонного депо",
        },
        {
          photo: "/img/review3.jpg",
          text:
            "<p class='pb-2'>Самая трудная борьба в жизни – это борьба с самим собой со своим лишним весом! И в этой борьбе очень трудно победить в одиночку! И когда я пришла в клуб ЗОЖ, я получила здесь, пожалуй, самое главное - поддержку единомышленников!</p> <p class='pb-2'>Я много раз пыталась похудеть с помощью диет, голодания и пробежек на стадионе! Но всегда, все это я делала в одиночку! И вот 10 месяцев назад я впервые ощутила насколько проще все преодолеть, работать над собой, когда твоей, даже самой маленькой победе радуются. Казалось бы, совершенно чужие люди, но радуются по-настоящему. Потому что верят, что у них тоже все получится, если получилось у меня. </p><p class='pb-2'>За 6 месяцев я снизила вес на 31 кг, чему очень счастлива! Поэтому большое спасибо за продукт, который оказался эффективно действующим, за грамотные консультации, за тренировки и марафоны стройности!</p><p class='pb-2'>Но самое большое спасибо, за доброе, дружеское окружение!</p>",
          name: "Ирина Илькова",
          profession: "тренер по спортивно-бальным танцам",
        },
      ],
    };
  },
};
</script>

<style scoped>
.review-photo {
  min-width: 200px;
}
/* hooper start */
.hooper-slide {
  flex-shrink: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
.hooper-progress {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background-color: #efefef;
}
.hooper-progress-inner {
  height: 100%;
  background-color: #4285f4;
  transition: 300ms;
}
.hooper-pagination {
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  padding: 5px 10px;
}
.hooper-indicators {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #4285f4;
}
.hooper-indicator {
  margin: 0 2px;
  width: 12px;
  height: 4px;
  border-radius: 4px;
  border: none;
  padding: 0;
  background-color: #fff;
  cursor: pointer;
}
.hooper-pagination.is-vertical {
  bottom: auto;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.hooper-pagination.is-vertical .hooper-indicators {
  flex-direction: column;
}
.hooper-pagination.is-vertical .hooper-indicator {
  width: 6px;
}
.hooper-next,
.hooper-prev {
  background-color: transparent;
  border: none;
  padding: 1em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.hooper-next.is-disabled,
.hooper-prev.is-disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.hooper-next {
  right: 0;
}
.hooper-prev {
  left: 0;
}
.hooper-navigation.is-vertical .hooper-next {
  top: auto;
  bottom: 0;
  transform: initial;
}
.hooper-navigation.is-vertical .hooper-prev {
  top: 0;
  bottom: auto;
  right: 0;
  left: auto;
  transform: initial;
}
.hooper-navigation.is-rtl .hooper-prev {
  left: auto;
  right: 0;
}
.hooper-navigation.is-rtl .hooper-next {
  right: auto;
  left: 0;
}
.hooper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  /* height: 200px; */
}
.hooper * {
  box-sizing: border-box;
  border: 0;
}
.hooper-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.hooper-track {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.hooper.is-vertical .hooper-track {
  flex-direction: column;
  height: 200px;
}
/* .hooper-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
} */
/* hooper end */

.hooper {
  height: auto;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #1d327a !important;
}
.hooper:hover,
.hooper:focus,
.hooper:active {
  outline: none;
}
</style>
