<template>
    <section class="service-section service-2 color-3 pb-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="title-3">
                        <svg class="title-svg">
                            <use xlink:href="/svg/icons.svg#title-line"></use>
                        </svg>
                        <h2>{{ 'Provided' }} <span>{{ 'Services' }}</span></h2>
                        <p class="font-roboto">{{ 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening'}}</p>
                    </div>
                </div>
                <div class="row property-service column-space">
                    <div class="col-xl-4 col-md-6 fadeInUp" v-for="(item, index) in Services" :key="index">
                        <div class="service-box color-3">
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
                            <nuxt-link to="/page/otherpages/services"
                                class="btn btn-light-bg color-3 btn-flat"><span>{{ 'view more' }}</span></nuxt-link>
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
    title: string,
    details: string,
}
interface FetchResponse {
    data: {
        value: {
            services: Services[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
const { data } = await useFetch(useurl + '/data/services.json')
const Services: Services[] = data.value.services
</script>

<style lang="scss" scoped></style>