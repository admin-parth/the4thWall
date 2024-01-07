<template>
  <section class="portfolio-section portfolio-grid">
    <div class="container">
      <div class="row">
        <div class="col-12">
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
    // src: "/image/property/13.jpg",
    src: "/image/main/gallery/1.jpg",
    type: "sale",
  },
  {
    src: "/image/main/gallery/2nd.jpg",
    type: "rent",
  },
  {
    src: "/image/main/gallery/3.jpg",
    type: "trend",
  },
  {
    src: "/image/main/gallery/4.jpg",
    type: "rent",
  },
  {
    src: "/image/main/gallery/6.jpg",
    type: "sale",
  },
  {
    src: "/image/main/gallery/5.jpg",
    type: "trend",
  },
  {
    src: "/image/main/gallery/7.jpg",
    type: "trend",
  },
  {
    src: "/image/main/gallery/8.jpg",
    type: "trend",
  },
  // {
  //   src: "/image/main/gallery/9.jpg",
  //   type: "rent",
  // },
];
</script>

<style scoped></style>
