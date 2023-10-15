<template>
    <section class="layout-home4 p-0">
        <div class="container-fluid p-0">
            <div class="row m-0">
                <div class="col-lg-12 p-0">
                    <div class="sync-slider">
                        <swiper :loop="true" navigation :modules="setting" class="home-slider-4 arrow-image">
                            <swiper-slide v-for="(item, index) in alldata" :key="index">
                                <div class="slider-image bg-size background" :style="'background-image:url(' + item.img + ')'">
                                    <img :src="item.img" alt="" class="img-fluid bg-img d-none">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-7 col-md-8 col-sm-12">
                                                <div class="home-content">
                                                    <h6 class="line-right fadeInUp animated" data-delay-in="0.4"
                                                        data-animation-in="fadeInUp">{{ '#Realestate' }}</h6>
                                                    <h1 data-delay-in="0.6" class="fadeInUp animated h1-sizing"
                                                        data-animation-in="fadeInUp">{{ item.title }}</h1>
                                                    <p data-delay-in="0.8" data-animation-in="fadeInUp"
                                                        class="font-roboto fadeInUp animated">{{ item.details }}</p>
                                                    <h6 data-delay-in="0.8" data-animation-in="fadeInUp"
                                                        class="font-color4 font-roboto mb-0 fadeInUp animated">
                                                        <img src="/image/icon/bed.png" class="img-icon me-2" alt="">
                                                        {{ item.bedroom }} Bedroom
                                                        <span class="mx-2">|</span><img src="/image/icon/bathroom.png"
                                                            class="img-icon me-2" alt="">

                                                        {{ item.bathroom }} Bathroom
                                                        <span class="mx-2">|</span>
                                                        <img src="/image/icon/sq.png" class="img-icon" alt="">

                                                        {{ item.sqft }} Sq Ft
                                                    </h6>
                                                    <h2 data-delay-in="1.2" class="fadeInUp animated"
                                                        data-animation-in="fadeInUp">${{ item.price }}</h2>
                                                    <nuxt-link data-delay-in="1.4" data-animation-in="fadeInUp"
                                                        to="/property/single-property-8"
                                                        class="btn btn-gradient color-4 btn-lg fadeInUp animated">View
                                                        Details</nuxt-link>
                                                    <div data-delay-in="0.2" data-animation-in="fadeInLeft"
                                                        class="square-bg fadeInUp animated"></div>
                                                </div>
                                            </div>
                                        </div>
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
import { Navigation } from 'swiper'
interface BannnerData {
    img: string;
    title: string;
    details: string;
    bedroom: string;
    bathroom: string;
    sqft: string;
    price: string;
    id: string;
}
interface FetchResponse {
    data: {
        value: {
            HomeBannerDataInClassicLayout: BannnerData[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/property.json')
let alldata = data.value.HomeBannerDataInClassicLayout
let setting = [Navigation]
</script>

<style lang="scss" scoped></style>