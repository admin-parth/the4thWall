<template>
    <section class="service-section service-2 pb-0 color-7">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-3">
                        <svg class="title-svg color-7">
                            <use xlink:href="/svg/icons.svg#title-line"></use>
                        </svg>
                        <h2>{{ 'Provided' }} <span>{{ 'Services' }}</span></h2>
                        <p class="font-roboto">{{ details }}</p>
                    </div>
                    <div class="row property-service column-space">
                        <div class="col-xl-4 col-md-6 fadeInUp" v-for="(item, index) in Services_Data" :key="index">
                            <div class="service-box color-7">
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
                                <nuxt-link to="/page/otherpages/services">
                                    <h3>{{ item.title }}</h3>
                                </nuxt-link>
                                <p class="font-roboto">{{ item.details }}</p>
                                <nuxt-link to="/page/otherpages/service"
                                    class="btn btn-light-bg color-7 btn-flat"><span>{{ 'view more' }}</span></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
interface Services {
    svg: string;
    svg1: string;
    title: string;
    details: string;
}
interface FetchResponse {
    data: {
        value: {
            services: Services[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/services.json')
const Services_Data: Services[] = data.value.services
let details: string = 'Residences can be classified into different type of housing tenure can used for same physical type.'
</script>

<style lang="scss" scoped></style>