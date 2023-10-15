<template>
    <ElementLoaderLoader1 />
    <LayoutCommonHeadersHeader3 />
    <ElementBradcrumbBridcrumb1 title="Portfolio" first="Home" current="Portfolio" />
    <ElementPortfolioGrid :data="Grid_Img" classes="col-lg-4 col-sm-6" />
    <LayoutCommonFootersFooter3 />
    <ElementTaptopTapTop1 />
</template>

<script setup lang="ts">
import { useurl } from '~/composable/apiurl'
interface Img {
    src: string;
    type: string;
}
interface FetchResponse {
    data: {
        value: {
            img3: Img[]
        }
    }
}
useHead({
    title: 'Sheltos- portfolio 3 grid page'
})
let { data }: FetchResponse = useFetch(useurl + '/data/grid.json')
const Grid_Img: Img[] = data.value.img3
</script>

<style scoped></style>