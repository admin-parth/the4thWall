<template>
    <head>
        <title>Image with Content home page</title>
    </head>
    <LayoutLayoutsLayout5>
        <HomeImagecontentSlider />
        <HomeImagecontentRent />
        <HomeImagecontentFeatureproperty />
        <HomeImagecontentSale />
        <HomeImagecontentBanner />
        <HomeImagecontentFindcites />
        <HomeImagecontentHappyclient />
        <HomeImagecontentAgent />
        <HomeImagecontentOffer />
        <HomeImagecontentBrand />
        <ElementTaptopTapTop7 />
    </LayoutLayoutsLayout5>
</template>

<script lang="ts" setup>
import { usecustomizerStore } from '~/store/costomizer'
let themes = ref({
    theme1: '--theme-default',
    theme2: '--theme-default2',
})
usecustomizerStore().getproperty(themes.value)
</script>

<style lang="scss" scoped></style>