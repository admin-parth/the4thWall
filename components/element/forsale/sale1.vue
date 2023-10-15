<template>
    <div class="col-xl-4 col-md-6 wow fadeInUp" v-for="(item, index) in props.data" :key="index">
        <div class="property-box">
            <div class="property-image">
                <nuxt-link to="/" class="bg-size d-block" :style="'background-image:url(' + item.img + ')'">
                    <img :src="item.img" class="bg-img d-none" alt="">
                    <div class="labels-left">
                        <div>
                            <span class="label"
                                :class="item.label[0] === 'no fees' ? 'label-dark' : 'label-shadow'">{{ item.label[0] }}</span>
                        </div>
                        <span v-if="item.label[1]" class="label label-success">{{ item.label[1] }}</span>
                    </div>
                </nuxt-link>
                <div class="bottom-property">
                    <div class="d-flex">
                        <div>
                            <h5>
                                <nuxt-link :to="'/property/single-property-8/' + item.id">{{ item.title }}</nuxt-link>
                            </h5>
                            <h6> ${{ item.price }} <small>/{{ 'start from' }}</small></h6>
                        </div>
                        <nuxt-link :to="'/property/single-property-8/' + item.id" class="btn btn-gradient mt-3"
                            :class="color ? color : 'color-6'" @click="getimg(item.img)">{{ 'details' }}</nuxt-link>
                    </div>
                    <div class="overlay-option">
                        <ul>
                            <li v-for="(option, index) in catagory" :key="index">
                                <span>{{ option.name }}</span>
                                <h6 v-if="option.key === 'area'">{{ item[option.key] }}m<sup>2</sup></h6>
                                <h6 v-else>{{ item[option.key] }}</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useurl } from '~/composable/apiurl'
import Option_Type from '~/static/data/types/letestforsale'
import Sale_Property from '~/static/data/types/letestforsaledata'
interface FetchResponse {
    data: {
        value: {
            options: Option_Type[]
        }
    }
}
interface MyProps {
    data: Sale_Property[];
    color: string
}
let props = defineProps<MyProps>()
declare function useFetch(url: string): Promise<FetchResponse>;
let { data: option } = await useFetch(useurl + '/data/letestforsaleoption.json')
let catagory: Option_Type[] = option.value.options
function getimg(value: string) {
    let img = useCookie('img');
    img.value = value
}
</script>

<style  scoped>
.bg-size {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>