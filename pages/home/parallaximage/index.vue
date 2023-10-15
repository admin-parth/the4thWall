<template>
    <head>
        <title>Sheltos - Parallax Image home page</title>
    </head>
    <layout-layouts-layout7>
        <home-parallax-image />
        <home-parallax-image-property-listing />
        <home-parallax-image-feature-property />
        <home-parallax-image-provided-services />
        <home-parallax-image-property-listing2 />
        <home-parallax-image-pricing />
        <home-parallax-image-banner />
        <home-parallax-image-agent />
        <home-parallax-image-happyclient />
        <home-parallax-image-blog />
        <element-taptop-tap-top5 />
    </layout-layouts-layout7>
</template>

<script lang="ts" setup>
import { usecustomizerStore } from '~/store/costomizer'
let themes = ref({
    theme1: '--theme-default10',
    theme2: '--theme-default10',
})
usecustomizerStore().getproperty(themes.value)
</script>

<style lang="scss" scoped></style>