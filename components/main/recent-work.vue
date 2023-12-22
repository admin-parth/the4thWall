<template>
  <section class="portfolio-section portfolio-grid">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-2 mb-5">
            <h2>Recent Work</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <masonry-wall
            :items="data"
            :ssr-columns="4"
            :column-width="300"
            class="column-sm row grid zoom-gallery-multiple"
          >
            <template #default="{ item }">
              <div class="sale grid-item wow fadeInUp col-sm-12">
                <div class="grid-box">
                  <div class="overlay">
                    <div class="portfolio-image">
                      <nuxt-link to="javascript:void(0)">
                        <img :src="item.src" class="bg-img img-fluid" alt="" />
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </masonry-wall>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-center mt-3">
      <a class="btn btn-gradient btn-pill color-2 me-1">Book Your Session</a>
      <a href="javascript:void(0)" class="btn btn-light-bg btn-pill color-2"
        ><span>View More</span></a
      >
    </div>
    <div class="d-flex align-items-center justify-content-center mt-3"></div>
  </section>
  <vue-easy-lightbox
    scrollDisabled
    escDisabled
    moveDisabled
  ></vue-easy-lightbox>
</template>

<script setup lang="ts">
import MasonryWall from "@yeger/vue-masonry-wall";
const data = [
  {
    src: "/image/property/13.jpg",
    type: "sale",
  },
  {
    src: "/image/property/12.jpg",
    type: "rent",
  },
  {
    src: "/image/property/16.jpg",
    type: "trend",
  },
  {
    src: "/image/property/11.jpg",
    type: "rent",
  },
  {
    src: "/image/property/8.jpg",
    type: "sale",
  },
  {
    src: "/image/property/17.jpg",
    type: "trend",
  },
  {
    src: "/image/property/18.jpg",
    type: "trend",
  },
  {
    src: "/image/property/19.jpg",
    type: "trend",
  },
  {
    src: "/image/property/5.jpg",
    type: "rent",
  },
];
</script>

<style scoped></style>
