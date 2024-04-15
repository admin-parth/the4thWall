<template>
  <section id="about-us" class="values">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-4">
            <h2>{{ $t("whyChooseTheFourthWall.title") }}</h2>
            <!-- <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg> -->
          </div>

          <div
            class="small-section row property-service column-space about-service"
          >
            <swiper
              :breakpoints="breakpoints"
              :slidesPerView="4"
              :loop="false"
              navigation
              :pagination="{ clickable: true }"
              :modules="setting"
              class="slide-3 brand-slider"
              :autoplay="true"
            >
              <swiper-slide
                v-for="(item, index) in Services_data"
                :key="index"
                class="col-xl-3 fadeInUp d-flex flex-column align-items-center gap-3 p-3"
              >
                <img :src="item.img" alt="" class="svg-image" />
                <h2 class="title">{{ item.title }}</h2>
                <!-- <p class="text">{{ item.desc }}</p> -->
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from "swiper";
let setting = [Navigation, Pagination, Autoplay];

let breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 6,
  },
};
const Services_data = [
  {
    title: "Fully rendered RealVision 3D before booking",
    desc: "",
    img: "/image/main/t1.svg",
  },
  {
    title: "*10 year warranty",
    desc: "Choose interiors designed with superior quality material, leaving no room for defects.",
    img: "/image/main/t1.svg",
  },
  {
    title: "*60 day delivery",
    desc: "Get beautiful interiors for your new home in just 45 days. That’s our delivery guarantee.",
    img: "/image/main/t2.svg",
  },
  {
    title: "Post-installation service",
    desc: "Complete your design journey and get unwavering support from our dedicated care team.",
    img: "/image/main/t4.svg",
  },
  {
    title: "No hidden cost",
    desc: "",
    img: "/image/main/t3.svg",
  },
  {
    title: "Personalised designs",
    desc: "",
    img: "/image/main/t2.svg",
  }
];
</script>

<style lang="scss" scoped>
.svg-image {
  width: 80px;
  height: 80px;
}

.title {
  font-size: 18px;
}

.text {
  font-size: 14px;
  text-align: center;
  color: black;
}
</style>
