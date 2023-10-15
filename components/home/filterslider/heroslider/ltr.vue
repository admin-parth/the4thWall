<template>
    <div class="col-lg-7">
        <div class="container">
            <div class="home-left">
                <div>
                    <swiper class="home-slider-1 arrow-light slick-shadow" :loop="true" navigation :modules="[Navigation]"
                        :slides-per-view="1" dir="ltr">
                        <swiper-slide class="home-content" v-for="(item, index) in slides" :key="index">
                            <div>
                                <img :src="item.img" class="img-fluid m-0" />
                                <h6>{{ item.description }}</h6>
                                <h1>{{ item.title }}</h1>
                                <nuxt-link :to="item.link" class="btn btn-gradient color-6">{{ props.button }}</nuxt-link>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="looking-icons" v-for="(item, index) in data.data" :key="index">
                    <h5>{{ item.heading }}</h5>
                    <ul>
                        <li v-for="(sub, index) in item.icons" :key="index">
                            <nuxt-link :to="sub.path" class="looking-icon">
                                <svg class="property-svg">
                                    <use :xlink:href="sub.icon"></use>
                                </svg>
                                <h6>{{ sub.name }}</h6>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <HomeFiltersliderFilter />
</template>

<script setup>
import { useurl } from '~/composable/apiurl'
import { Navigation } from 'swiper'
let props = defineProps({
    slides: Array,
    button: String
})
let { data } = await useFetch(useurl + '/data/looking-icon.json')
</script>

<style lang="scss" scoped></style>
