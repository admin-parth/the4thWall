<template>
    <section class="banner-section layout3-bg parallax-image">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="banner-3" v-for="item in data.banner2" :key="item">
                        <span class="label label-light label-flat color-3">#{{ 'Realestate' }}</span>
                        <h2> {{ item.title }} <br /> {{ item.title2 }} </h2>
                        <p>{{ item.details }}</p>
                        <nuxt-link to="/agent/submit-property" class="btn btn-solid color-3 btn-flat">{{ 'Submit property'}}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useurl } from '~/composable/apiurl'
let { data } = await useFetch(useurl + '/data/banner.json')
</script>

<style lang="scss" scoped></style>