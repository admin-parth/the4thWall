<template>
  <section class="service-section service-2">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title-2 mb-4">
            <h2>{{ $t("ourDesignProcess.title") }}</h2>
            <svg class="title-svg">
              <use xlink:href="/svg/icons.svg#title-line"></use>
            </svg>
          </div>
          <div class="row property-service column-space about-service">
            <div
              class="col-xl-3 mx-auto fadeInUp d-flex flex-column flex-xl-row align-items-center"
              v-for="(item, index) in Services_data"
              :key="index"
              :style="{
                width: index === Services_data.length - 1 && 'fit-content',
              }"
            >
              <div class="service-box">
                <div class="hover-line">
                  <svg class="service-icon">
                    <use :xlink:href="item.svg"></use>
                  </svg>
                  <div>
                    <svg class="icon-line-color">
                      <use :xlink:href="item.svg1"></use>
                    </svg>
                  </div>
                </div>
                <!-- <nuxt-link to="/"> -->
                <h3>{{ item.title }}</h3>
                <!-- </nuxt-link> -->
                <p class="font-roboto three-lines-only">{{ item.details }}</p>
                <!-- <nuxt-link to="/main/design-process" class="btn btn-light-bg"
                  ><span>{{ "view more " }}</span></nuxt-link
                > -->
              </div>
              <div
                v-if="index !== Services_data.length - 1"
                class="arrow-1"
              ></div>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-3">
              <a class="btn btn-gradient btn-pill color-2 me-1"
                >Book Your Session</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const Services_data = [
  {
    svg: "/svg/icons.svg#home-heart",
    svg1: "/svg/icons.svg#line-straight",
    title: "Get your vision",
    details: t("ourDesignProcess.para1"),
  },
  {
    svg: "/svg/icons.svg#customer-service",
    svg1: "/svg/icons.svg#line-straight",
    title: "Design your idea",
    details: t("ourDesignProcess.para2"),
  },
  {
    svg: "/svg/icons.svg#key",
    svg1: "/svg/icons.svg#line-straight",
    title: "Worry-free installiation",
    details: t("ourDesignProcess.para3"),
  },
  {
    svg: "/svg/icons.svg#shield",
    svg1: "/svg/icons.svg#line-straight",
    title: "Review process",
    details: t("ourDesignProcess.para4"),
  },
];
</script>
<style scoped>
.arrow-1 {
  margin-top: 20px;
  width: 30px;
  height: clamp(20px, 50px, 100px);
  display: flex;
  flex-direction: column;
  color: #ed1f26;
}

.arrow-1:before {
  content: "";
  background: currentColor;
  width: 100%;
  height: clamp(20px, 50px, 100px);
  clip-path: polygon(
    10px 0,
    10px calc(100% - 15px),
    0 calc(100% - 15px),
    50% 100%,
    100% calc(100% - 15px),
    calc(100% - 10px) calc(100% - 15px),
    calc(100% - 10px) 0
  );
  /* animation: a1 1.5s infinite linear; */
}
@media (min-width: 1200px) {
  .arrow-1 {
    margin-left: 20px;
    width: clamp(20px, 50px, 100px);
    height: 30px;
    display: flex;
    color: #ed1f26;
  }
  .arrow-1:before {
    content: "";
    background: currentColor;
    width: clamp(20px, 50px, 100px);
    clip-path: polygon(
      0 10px,
      calc(100% - 15px) 10px,
      calc(100% - 15px) 0,
      100% 50%,
      calc(100% - 15px) 100%,
      calc(100% - 15px) calc(100% - 10px),
      0 calc(100% - 10px)
    );
    /*   animation: a1 1.5s infinite linear; */
  }
}
@media (min-width: 1024px) {
  .service-box {
    width: 250px;
    text-align: center;
  }
}
</style>
