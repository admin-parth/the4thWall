<template>
    <div class="col-xl-2 col-md-3">
        <div class="footer-links footer-left-space">
            <h5 class="footer-title" @click="about = !about">{{ About }} <span class="according-menu"><i
                        :class="about ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i></span></h5>
            <ul class="footer-content" :class="about ? 'd-block' : 'd-none d-md-block'">
                <li v-for="(item, index) in About_Data" :key="index">
                    <nuxt-link :to="item.link">
                        <Icon name="material-symbols:chevron-right" />
                        {{ item.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-xl-2 col-md-3">
        <div class="footer-links footer-left-space">
            <h5 class="footer-title" @click="Buy = !Buy">{{ buy }} <span class="according-menu"><i
                        :class="Buy ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i></span></h5>
            <ul class="footer-content" :class="Buy ? 'd-block' : 'd-none d-md-block'">
                <li v-for="(item, index) in Buy_Data" :key="index">
                    <nuxt-link :to="item.link">
                        <Icon name="material-symbols:chevron-right" />
                        {{ item.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-xl-2 col-md-3">
        <div class="footer-links footer-left-space">
            <h5 class="footer-title" @click="Sale = !Sale">{{ sell }} <span class="according-menu"><i
                        :class="Sale ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i></span></h5>
            <ul class="footer-content" :class="Sale ? 'd-block' : 'd-none d-md-block'">
                <li v-for="(item, index) in Sell_Data" :key="index">
                    <nuxt-link :to="item.link">
                        <Icon name="material-symbols:chevron-right" />
                        {{ item.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-xl-3 col-md-6">
        <div class="footer-links footer-left-space">
            <h5 class="footer-title" @click="Reland = !Reland">{{ reland }} <span class="according-menu"><i
                        :class="Reland ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i></span></h5>
            <ul class="footer-content" :class="Reland ? 'd-block' : 'd-none d-md-block'">
                <li v-for="(item, index) in Estate_Data" :key="index">
                    <nuxt-link :to="item.link">
                        <Icon name="material-symbols:chevron-right" />
                        {{ item.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
interface Links {
    name: string;
    link: string
}
interface FetchResponse {
    data: {
        value: {
            Buy: [Links],
            Sell: [Links],
            estate: [Links],
            about: [Links],
        }
    }
}
let About: string = 'About';
let buy: string = 'Buy'
let sell: string = 'sell';
let reland: string = 'Reland Estate'
let { data }: FetchResponse = await useFetch(useurl + '/data/footer4.json')
const Buy_Data: Links[] = data.value.Buy
const Sell_Data: Links[] = data.value.Sell
const Estate_Data: Links[] = data.value.estate
const About_Data: Links[] = data.value.about
let about = ref<boolean>(false)
let Buy = ref<boolean>(false)
let Sale = ref<boolean>(false)
let Reland = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>