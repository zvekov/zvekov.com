<template>
  <section
    id="ways"
    class="inner flex flex-col lg:flex-row lg:justify-between lg:flex-wrap items-center py-12 lg:py-24 lg:px-4 xl:px-0"
  >
    <div class="w-full lg:w-1/2 px-4 lg:px-8">
      <h2
        class="font-bold text-4xl uppercase lg:pr-12 mb-4 lg:mb-2 text-center lg:text-left"
      >
        <span>Направления</span><br />
        нашей работы
      </h2>
      <ul class="text-lg max-w-sm hidden lg:block list-decimal pl-6">
        <li>
          Помогаем подобрать программу питания для набора, снижения веса, либо
          коррекции фигуры.
        </li>
        <li>
          Консультируем в выборе спортивного питания при силовых нагрузках.
        </li>
        <li>Организация марафонов стройности.</li>
        <li>Внутреннее и внешнее питание и уход за кожей.</li>
      </ul>
    </div>
    <div class="w-full lg:w-1/2 px-4 lg:px-8">
      <WayIcons />
    </div>
  </section>
</template>
<script>
import WayIcons from "~/components/atoms/WayIcons";
export default {
  components: { WayIcons },
};
</script>
