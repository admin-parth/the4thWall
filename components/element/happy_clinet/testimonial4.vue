<template>
    <div class="testimonial-4">
        <div class="modern-client row">
            <div class="col-lg-6">
                <swiper :loop="true" class="img-testimonial">
                    <swiper-slide v-for="(item, index) in alldata" :key="index">
                        <div class="img-left">
                            <img :src="item.img" alt="" class="img-fluid">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="col-xl-5 col-lg-6 col-md-9 col-sm-10">
                <div class="right-height">
                    <swiper :slidesPerView="1" :loop="true" :spaceBetween="70" class="comment-right">
                        <swiper-slide v-for="(item, index) in alldata" :key="index">
                            <div class="media">
                                <div class="media-body">
                                    <nuxt-link to="/page/user-panel/user-profile">
                                        <h3 class="d-flex">{{ item.name }} <span class="label-heart color-4 ms-2"><i
                                                    class="fas fa-heart"></i></span></h3>
                                    </nuxt-link>
                                </div>
                                <ul class="client-rating">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                            </div>
                            <h6>{{ item.title }}</h6>
                            <p class="font-roboto">{{ item.details }}</p>
                            <span class="font-roboto">{{ item.email }}</span>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
interface Client {
    img: string;
    name: string;
    title: string;
    details: string;
    email: string
}
interface FetchResponse {
    data: {
        value: {
            OurHappyClientInClassicLayout: Client[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>;
let { data } = await useFetch(useurl + '/data/clientAgent.json')
let alldata: Client[] = data.value.OurHappyClientInClassicLayout
</script>

<style lang="scss" scoped></style>