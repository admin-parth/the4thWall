<template>
    <div :class="rowclass">
        <div>
            <masonry-wall :items="getdata()" :ssr-columns="2" :column-width="masonerywidth" class="blog-grid row">
                <template #default="{ item }">
                    <div class="blog-wrap wow fadeInUp">
                        <div class="blog-image">
                            <div>
                                <img :src="item.src" class="bg-img img-fluid " alt="">
                            </div>
                            <div class="blog-label">
                                <div>
                                    <h3>{{ item.date }}</h3>
                                    <span>{{ item.month }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="blog-details">
                            <span>
                                <Icon name="majesticons:map-marker-line" />{{ item.place }}
                            </span>
                            <h3><nuxt-link to="/page/blog_details/left-sidebar">{{ item.title }}</nuxt-link></h3>
                            <p class="font-roboto">{{ item.details }}</p>
                            <nuxt-link to="/page/blog_details/left-sidebar">read more</nuxt-link>
                        </div>
                    </div>
                </template>
            </masonry-wall>
        </div>
        <nav class="theme-pagination" v-if="alldata.length > parpagedata">
            <ul class="pagination">
                <li class="page-item">
                    <nuxt-link class="page-link" to="javascript:void(0)" aria-label="Previous" @click="currentpage--">
                        <span aria-hidden="true">«</span>
                    </nuxt-link>
                </li>
                <li class="page-item" :class="currentpage == page ? 'active' : ''" v-for="(page, index) in  totalpage"
                    :key="index"><nuxt-link class="page-link" to="javascript:void(0)" @click="pageview(page)">{{ page
                    }}</nuxt-link></li>
                <li class="page-item">
                    <nuxt-link class="page-link" to="javascript:void(0)" aria-label="Next" @click="currentpage++">
                        <span aria-hidden="true">»</span>
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useurl } from '~/composable/apiurl'
import MasonryWall from '@yeger/vue-masonry-wall'
interface List {
    src: string,
    date: string,
    month: string,
    title: string,
    details: string,
    place: string,
    order: boolean
}
interface FetchResponse {
    data: {
        value: {
            list: List[];
        }
    }
}
let props = defineProps({
    classes: String,
    rowclass: String,
    masonerywidth: Number
})
declare function useFetch(url: string): Promise<FetchResponse>;
let { data } = await useFetch(useurl + '/data/blogpage.json')
let alldata: List[] = data.value.list
let parpagedata = ref<number>(6)
let currentpage = ref<number>(1)
let totalpage: number = Math.ceil(alldata.length / parpagedata.value)
function getdata() {
    let start = (currentpage.value - 1) * parpagedata.value;
    let end = start + parpagedata.value
    return alldata.slice(start, end)
}
function pageview(page: number) {
    currentpage.value = page
}

</script>

<style scoped></style>