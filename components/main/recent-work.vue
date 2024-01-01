<template>
  <section class="portfolio-section portfolio-grid">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-2 mb-4">
            <h2>Recent Work</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <masonry-wall
            :items="data"
            :ssr-columns="4"
            :column-width="300"
            class="d-none d-md-flex column-sm row grid zoom-gallery-multiple"
          >
            <template #default="{ item }">
              <div class="sale grid-item wow fadeInUp col-sm-12">
                <div class="grid-box">
                  <div class="overlay grid-item">
                    <div class="portfolio-image">
                      <!-- <nuxt-link to="javascript:void(0)"> -->
                      <img :src="item.src" class="bg-img img-fluid" alt="" />
                      <!-- </nuxt-link> -->
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </masonry-wall>
          <div class="d-block d-md-none">
            <div class="pic-ctn">
              <img
                v-for="(item, index) in data"
                :key="index"
                :src="item.src"
                :alt="item.type"
                height="300px"
              />
            </div>
          </div>
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
  //   src: "/image/main/gallery/1.jpg",
  //   type: "rent",
  // },
];
</script>

<style scoped>
.pic-ctn {
  width: 100vw;
  height: 200px;
}

@keyframes display {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
}

.pic-ctn {
  position: relative;
  width: 100vw;
  height: 300px;
  margin-block: 5vh;
}

.pic-ctn > img {
  width: 50vw;
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  opacity: 0;
  animation: display 10s infinite;
}

img:nth-child(2) {
  animation-delay: 2s;
}
img:nth-child(3) {
  animation-delay: 4s;
}
img:nth-child(4) {
  animation-delay: 6s;
}
img:nth-child(5) {
  animation-delay: 8s;
}
</style>
