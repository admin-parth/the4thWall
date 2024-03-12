<template>
  <section class="about-main pb-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-4">
            <h2>Our Trusted Partner</h2>
            <!-- <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg> -->
          </div>
          <div class="logos">
            <div class="logos-slide">
              <img
                v-for="(item, index) in slides"
                :key="index"
                :src="item.image"
                alt=""
              />
            </div>

            <div class="logos-slide">
              <img
                v-for="(item, index) in slides"
                :key="index"
                :src="item.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 20px 0;
  background: white;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: inline-block;
  animation: 35s slide infinite linear;
}

.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
</style>
