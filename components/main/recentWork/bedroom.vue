<template>
        <section class="portfolio-section portfolio-grid" :class="{'mb-4': props.content == 'office'}">
        <div class="container">
            <div class="row">
                <div class="title-2 py-4">
                    <h2>{{ props.title }}</h2>
                    <!-- <svg class="title-svg">
                        <use xlink:href="/svg/icons.svg#title-line"></use>
                    </svg> -->
                </div>
                <div class="column-sm row grid ratio2_3  zoom-gallery-multiple">
                    <div class="sale grid-item wow fadeInUp col-lg-3 col-sm-6" v-for="(item, index) in getdata"
                        :key="index">
                        <div class="grid-box">
                            <div class="overlay">
                                <div class="portfolio-image">
                                    <nuxt-link to="javascript:void(0)" :style="'background-image:url(' + item.src + ')'"
                                        class="bg-size background" @click="showsingle(index)">
                                        <img :src="item.src" class="bg-img d-none" alt="">
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </section>
    <vue-easy-lightbox scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index"
        @hide="handleHide"></vue-easy-lightbox>

</template>

<script setup>
import recenetWork from '~/static/data/recentWork'
let props = defineProps({
    content: String,
    title: String
})
const data = recenetWork[props.content]
let visible = ref(false)
let index = ref(0)
let imgs = ref([])
let getdata = computed(() => {
    return data
})
function showsingle(i) {
    index.value = i
    data.forEach((element) => {
        imgs.value.push(element.src)
    });
    visible.value = true
}
function handleHide() {
    visible.value = false
}
// function getvalue(value) {
//     active.value = value
// }

</script>
<style lang="scss" scoped>

</style>