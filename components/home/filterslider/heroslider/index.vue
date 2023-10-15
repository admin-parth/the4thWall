<template>
    <section class="home-section layout-1 layout-6">
        <div class="home-main">
            <div class="container">
                <div class="row">
                    <LazyHomeFiltersliderHerosliderLtr :slides="slides" button="submit property" />
                    <!-- <HomeFiltersliderFilter/> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
interface Slides {
    id: number;
    img: string;
    description: string;
    title: string;
    link: string;
}
interface Slider {
    type: string;
    slides: Slides[]
}
interface FetchResponse {
    data: {
        value: {
            data: {
                type: string;
                slides: Slides[]
            }
        }
    }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/swiper.json')
const slides = computed<Slider[]>(() => {
    return data.value.data.filter((item: Slider) => item.type === 'filter')[0].slides
})

</script>

<style lang="scss" scoped></style>