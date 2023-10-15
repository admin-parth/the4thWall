<template>
    <head>
        <title>Sheltos - Modern Video home page</title>
    </head>
    <LayoutLayoutsLayout10>
        <HomeModernvideo />
        <HomeModernvideoPropertyListing />
        <HomeModernvideoLookingProperty />
        <HomeModernvideoPropertyoftheday />
        <HomeModernvideoServices />
        <HomeModernvideoCites />
        <HomeModernvideoBanner />
        <HomeModernvideoWhatspepolesay />
        <HomeModernvideoBlog />
        <HomeModernvideoBrand />
        <ElementTaptopTapTop4 />
    </LayoutLayoutsLayout10>
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