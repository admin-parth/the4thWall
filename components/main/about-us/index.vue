<template>
  <section class="about-main">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2">
            <h2>About Us</h2>
            <!-- <div v-for="(item, index) in Services_data" :key="index">
              <p class="font-roboto" v-html="item.desc"></p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="default-bg-white">
  </div> -->
  <MainAboutUsBlog />
  <!-- <MainValues /> -->
  <MainAboutUsWhyChoose />
  <MainAboutUsServices />
</template>

<script setup lang="ts">
// import { MainAboutUsServices } from "#build/components";

const Services_data = [
  {
    title: "Punctuality Assured",
    desc: "At The Fourth Wall, we are dedicated to the belief that every individual deserves a home that seamlessly marries beauty with functionality. As a leading interior design firm, we offer an extensive array of interior design services, ranging from meticulous space planning to the selection of exquisite furnishings and those all-important finishing touches.",
  },
  {
    title: "Satisfaction Unquestioned",
    desc: "Our team comprises seasoned and exceptionally talented designers who collaborate with you to craft a space that epitomizes your distinct style and personality. We're your partners in transforming your vision into a stunning reality.",
    img: "/image/main/t1.svg",
  },
  {
    title: "Comprehensive Service Spectrum",
    desc: "Our unwavering commitment rests on delivering the highest echelon of service and products to our esteemed clients. We pledge that your project will not only be executed with precision but will also be completed within the stipulated timeframe and budget. Furthermore, our satisfaction guarantee ensures that your affection for the final outcome is paramount.",
    img: "/image/main/t2.svg",
  },
  {
    title: "Seasoned and Artistic Design Team",
    desc: "At The Fourth Wall, we don't merely design spaces; we create living experiences that reflect your essence and enhance your lifestyle. Your journey to the perfect living space begins here.",
    img: "/image/main/t4.svg",
  },
];
</script>

<style scoped></style>
