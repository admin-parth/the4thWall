<template>
    <section class="small-section bg-light brand-wrap">
        <div class="container">
            <div class="row">
                <div class="col">
                    <swiper :breakpoints="breakpoints" :loop="true" :slidesPerView="6" :spaceBetween="70"
                        class="slide-2 brand-slider">
                        <swiper-slide v-for="(item, index) in Brand_data" :key="index">
                            <nuxt-link to="javascript:void(0)" class="logo-box">
                                <img :src="item.src" alt="" class="img-fluid">
                            </nuxt-link>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
interface Brand {
    src: string;
}
interface FetchResponse {
    data: {
        value: {
            brand3: Brand[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/brand.json')
const Brand_data: Brand[] = data.value.brand3
let breakpoints = {
    320: {
        slidesPerView: 2
    },
    481: {
        slidesPerView: 3
    },
    768: {
        slidesPerView: 4
    },
    1200: {
        slidesPerView: 5
    },
    1367: {
        slidesPerView: 6
    },
}
</script>

<style lang="scss" scoped></style>