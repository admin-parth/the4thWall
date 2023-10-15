<template>
    <head>
        <title>Sheltos - Map With Horizontal Search home page</title>
    </head>
    <LayoutLayoutsLayout12>
        <HomeHorizontalSearch />
        <HomeHorizontalSearchFilter />
        <HomeHorizontalSearchProperty />
        <HomeHorizontalSearchFeatureproperty />
        <HomeHorizontalSearchServices />
        <HomeHorizontalSearchPropertylisting />
        <HomeHorizontalSearchVideo />
        <HomeHorizontalSearchAgent />
        <HomeHorizontalSearchSubscribe />
        <HomeHorizontalSearchHappyclient />
        <HomeHorizontalSearchBrand />
        <ElementTaptopTapTop4 />
    </LayoutLayoutsLayout12>
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