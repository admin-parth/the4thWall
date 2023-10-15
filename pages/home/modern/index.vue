<template>
    <head>
        <title>Modern home page </title>
    </head>

    <LayoutLayoutsLayout6>
        <HomeModern />
        <HomeModernPropertyListing />
        <HomeModernLookingProperty />
        <HomeModernPropertyoftheday />
        <HomeModernPropertyServices />
        <HomeModernFeatureCities />
        <HomeModernBanner />
        <HomeModernWhatspepolesay />
        <HomeModernBlog />
        <HomeModernBrand />
        <ElementTaptopTapTop4 />
    </LayoutLayoutsLayout6>
</template>

<script lang="ts" setup>
import { usecustomizerStore } from '~/store/costomizer'
let themes = ref({
    theme1: '--theme-default3',
    theme2: '--theme-default4',
})
usecustomizerStore().getproperty(themes.value)
</script>

<style lang="scss" scoped></style>