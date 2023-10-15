<template>
  <section class="home-section layout-1">
    <div class="container-fluid">
      <div class="row m-0">
        <div class="col p-0">
          <div class="fnc-slider example-slider">
            <swiper :modules="setting" :autoplay="{
              delay: 3000,
            }" :loop="true" class="fnc-slider_slides">
              <swiper-slide v-for="(item, index) in slides" :key="index"
                class="fnc-slide m--blend-green m--active-slide">
                <div class="fnc-slide__inner background" :style="'background-image:url(' + item.img + ');height:100vh;'">
                  <div class="fnc-slide__mask">
                    <div class="fnc-slide__mask-inner "></div>
                  </div>
                  <div class="fnc-slide__content">
                    <h2 data-animate="bottom" class="fnc-slide__heading animeslide-heading">
                      <span class="fnc-slide__heading-line">
                        <span>{{ item.tag }}, </span>
                      </span>
                      <span class="fnc-slide__heading-line">
                        <span>{{ item.title }}</span>
                      </span>
                    </h2>
                    <nuxt-link to="/agent/submit-property" class="fnc-slide__action-btn">
                      <span>{{ item.submit }}</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </nuxt-link>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
interface Slides {
  img: string;
  tag: string;
  title: string;
  submit: string;
}
interface Slider {
  type: string;
  slides: Slides[]
}
interface FetchResponse {
  data: {
    value: {
      data: {
        type: string;
        slides: Slides[]
      }
    }
  }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/swiper.json')
let setting = [Autoplay, Pagination]
const slides = computed<Slider>(() => {
  return data.value.data.filter((item: Slider) => item.type === 'imagecontent')[0].slides
})

</script>

<style lang="scss" scoped></style>