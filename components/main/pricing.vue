<template>
  <section id="our-services" class="values">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-4">
            <h2>Our Pricing</h2>
            <!-- <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg> -->
          </div>

          <div
            class="small-section row property-service column-space about-service"
          >
            <swiper
              :breakpoints="breakpoints"
              :slidesPerView="3"
              :loop="true"
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
                <img :src="item.img" alt="" class="pricing-image" />
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

const Services_data = [
    { img: "/image/4thWall/pricing/1.png", },
    { img: "/image/4thWall/pricing/2.png", },
    { img: "/image/4thWall/pricing/3.png", }
];

let breakpoints = {
  0: {
    slidesPerView: 1,
  },
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 1,
  },
  992: {
    slidesPerView: Services_data.length,
  },
  1200: {
    slidesPerView: Services_data.length,
  },
};

</script>

<style lang="scss" scoped>
.pricing-image {
    max-width: 100%;
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
