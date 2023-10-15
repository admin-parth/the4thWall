<template>
    <section class="banner-section layout7-bg parallax-image">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="banner-3" v-for="(item, index) in Banner_data" :key="index">
                        <span class="label label-light label-flat color-7">#{{ 'Realestate' }}</span>
                        <h2> {{ item.title }} <br /> {{ item.title2 }} </h2>
                        <p>{{ item.details }}</p>
                        <nuxt-link to="/agent/submit-property" class="btn btn-solid color-7 btn-flat">{{ 'Submit property'}}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
interface Banner {
    title: string;
    title2?: string;
    details: string
}
interface FetchResponse {
    data: {
        value: {
            banner2: Banner[]
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/banner.json')
const Banner_data: Banner[] = data.value.banner2
</script>

<style lang="scss" scoped></style>