<template>
  <section class="about-main pb-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-4">
            <h2>Our Trusted Partner</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <div class="slider">
            <div class="slide-track">
              <div class="slide" v-for="(item, index) in slides" :key="index">
                <img :src="item.image" alt="" />
              </div>
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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

@mixin white-gradient {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

$animationSpeed: 20s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(250px * 3.5);
  }
  100% {
    transform: translateX(calc(-250px * 3.5));
  }
}

@media screen and (max-width: 768px) {
  @keyframes scroll {
    0% {
      transform: translateX(250px * 2);
    }
    100% {
      transform: translateX(calc(-250px * 3.5));
    }
  }
}
// Styling
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 760px;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 4);
  }

  .slide {
    height: 100px;
    width: 300px;
    img {
      height: 80px;
      margin-top: 10px;
      width: 250px;
    }
  }
  // @media screen and (max-width: 768px) {
  //   .slider {
  //     width: 90vw;
  //   }
  //   .slide-track {
  //     width: 50vw;
  //   }
  // }
}
</style>
