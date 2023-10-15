<template>
  <swiper :loop="true" v-bind="setting" class="home-slider-3 arrow-image">
    <swiper-slide v-for="item in slides" :key="item">
      <div class="bg-layout-3 light-bg-1">
        <div class="banner-3">
          <span class="label label-light label-flat color-3">{{ item.tag }}</span>
          <h1>{{ item.title }}</h1>
          <p>{{ item.details }}</p>
          <nuxt-link to="/property/single-property-8" class="btn btn-solid color-3 btn-flat">{{
            "View More"
          }}</nuxt-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { useurl } from '~/composable/apiurl'
import { Navigation } from "swiper";
let { data } = await useFetch(useurl + '/data/swiper.json')
let setting = {
  navigation: true,
  modules: [Navigation],
};
const slides = computed(() => {
  return data.value.data.filter((item) => item.type === "corporate")[0].slides;
});
</script>

<style  scoped></style>
