<template>
    <head>
        <Title>Classic home page</Title>
    </head>
    <LayoutLayoutsLayout4>
        <HomeClassicSlider />
        <HomeClassicLetestProperty />
        <HomeClassicFeatureproperty />
        <HomeClassicPropertyServices />
        <HomeClassicPropertyListing />
        <HomeClassicVideo />
        <HomeClassicAgent />
        <HomeClassicSubscribe />
        <HomeClassicHappyclient />
        <HomeClassicBrand />
        <ElementTaptopTapTop6 />
    </LayoutLayoutsLayout4>
</template>

<script lang="ts" setup>
import { usecustomizerStore } from '~/store/costomizer'
let themes = ref({
    theme1: '--theme-default6',
    theme2: '--theme-default7',
})
usecustomizerStore().getproperty(themes.value)
</script>

<style lang="scss" scoped></style>