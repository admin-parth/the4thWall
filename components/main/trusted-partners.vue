<template>
  <section class="about-main pb-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-4">
            <h2>Brands we trust</h2>
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
          image: "/image/4thWall/partners/asian-paints.webp",
        },
        {
          id: 2,
          image: "/image/4thWall/partners/astral.png",
        },
        {
          id: 3,
          image: "/image/4thWall/partners/centuryply.png",
        },
        {
          id: 4,
          image: "/image/4thWall/partners/fevicol.webp",
        },
        {
          id: 5,
          image: "/image/4thWall/partners/greenply.svg",
        },
        {
          id: 6,
          image: "/image/4thWall/partners/haefele.png",
        },
        {
          id: 7,
          image: "/image/4thWall/partners/hettich.svg",
        },
        {
          id: 8,
          image: "/image/4thWall/partners/jaquar.svg",
        },
        {
          id: 9,
          image: "/image/4thWall/partners/kitch.png",
        },
        {
          id: 10,
          image: "/image/4thWall/partners/nerolac.png",
        },
        {
          id: 11,
          image: "/image/4thWall/partners/philips.png",
        },
        {
          id: 12,
          image: "/image/4thWall/partners/rotolam.png",
        },
        {
          id: 13,
          image: "/image/4thWall/partners/royale-touche.png",
        },
        {
          id: 14,
          image: "/image/4thWall/partners/sintax.png",
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
  animation: 90s slide infinite linear;
}

.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
</style>
