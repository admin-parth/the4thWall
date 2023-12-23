<template>
  <section class="about-main">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-5">
            <h2>Our Trusted Partner</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <div class="swiper-container overflow-hidden">
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div
                v-for="group in slideGroups"
                :key="group.id"
                class="swiper-slide"
              >
                <div
                  v-for="slide in group.slides"
                  :key="slide.id"
                  class="slide-content"
                >
                  <img :src="slide.image" :alt="slide.title" class="img-row" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          title1: "Favicol",
          link: "javascript:void(0)",
          colSize: 6,
          image: "https://super.homelane.com/fev02.jpg",
        },
        {
          id: 2,
          title1: "Jaguar",
          link: "javascript:void(0)",
          colSize: 6,
          image:
            "https://www.jaquar.com/Themes/Jaquar2022/Content/images/logo.svg",
        },
        {
          id: 3,
          title1: "Asian Paints",
          link: "javascript:void(0)",
          colSize: 6,
          image:
            "https://static.asianpaints.com/content/dam/asianpaints/home-page/header-icons/asian-paint-logo.png",
        },
        {
          id: 4,
          title1: "Favicol",
          link: "javascript:void(0)",
          colSize: 6,
          image: "https://super.homelane.com/fev02.jpg",
        },
        {
          id: 5,
          title1: "Jaguar",
          link: "javascript:void(0)",
          colSize: 6,
          image:
            "https://www.jaquar.com/Themes/Jaquar2022/Content/images/logo.svg",
        },
        {
          id: 6,
          title1: "Asian Paints",
          link: "javascript:void(0)",
          colSize: 6,
          image:
            "https://static.asianpaints.com/content/dam/asianpaints/home-page/header-icons/asian-paint-logo.png",
        },
      ],
    };
  },
  computed: {
    slideGroups() {
      // Split the slides into groups of 3
      const groups = [];
      for (let i = 0; i < this.slides.length; i += 3) {
        groups.push({
          id: i / 3 + 1,
          slides: this.slides.slice(i, i + 3),
        });
      }
      return groups;
    },
  },
  mounted() {
    const swiper = new SwiperCore(".swiper-container", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      centeredSlides: true,
      touchEventsTarget: "wrapper",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
    });
  },
};
</script>

<style scoped>
/* Center the Swiper container */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 481px) {
  .slide-content img {
    width: 100px;
  }
}
.slide-content {
  margin-right: 20px; /* Adjust the spacing between images */
}

/* Add your custom styles here */
</style>
