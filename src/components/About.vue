<script setup>
  import category1 from "../assets/images/category/category1-img.webp"
  import category2 from "../assets/images/category/category2-img.webp"
  import category3 from "../assets/images/category/category3-img.webp"

  const categories = [
    {
      title: 'Ghost',
      image: category1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
    {
      title: 'Witch',
      image: category2,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
    {
      title: 'Pumpkin',
      image: category3,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
  ]
</script>

<template>
  <section id="about" class="grid grid-flow-col grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
    <div class="md:p-10">
      <img src="../assets/images/category2-img.webp" alt="category2-img">
    </div>
    <div class="text-center flex flex-col items-center">
      <h2 class="text-5xl md:text-6xl font-bold text-white">What's that</h2>
      <div class="flex items-center gap-5">
        <h2 class="text-5xl md:text-6xl font-bold text-white">Halloween</h2>
        <img src="../assets/images/head2-img.png" class="w-9 md:w-12" alt="head2">
      </div>
      <p class="mt-8 md:mt-12 text-white text-lg md:text-xl w-full md:w-[80%]">Halloween or Hallowe'en is a celebration observed in many countries on 31 October, the eve of the Western Christian feast of All Hallows' Day. It is at the beginning of the observance of Allhallowtide, the time in the liturgical year dedicated to remembering the dead, including saints, martyrs, and all the faithful departed</p>
    </div>
  </section>
</template>