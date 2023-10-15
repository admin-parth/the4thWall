<template>
    <head>
        <title>Sheltos - Map With Vertical Search home page</title>
    </head>
    <LayoutLayoutsLayout11>
        <HomeVerticalSearch />
        <HomeVerticalSearchProperty />
        <HomeVerticalSearchFeatureProperty />
        <HomeVerticalSearchServices />
        <HomeVerticalSearchPropertyListing />
        <HomeVerticalSearchVideo />
        <HomeVerticalSearchAgent />
        <HomeVerticalSearchSubscribe />
        <HomeVerticalSearchHappyclient />
        <HomeVerticalSearchBrand />
        <ElementTaptopTapTop4 />
    </LayoutLayoutsLayout11>
</template>

<script setup lang="ts">
import { usecustomizerStore } from '~/store/costomizer'
let themes = ref({
    theme1: '--theme-default6',
    theme2: '--theme-default7',
})
usecustomizerStore().getproperty(themes.value)
</script>

<style scoped></style>