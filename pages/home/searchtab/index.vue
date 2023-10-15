<template>
    <head>
        <title>Sheltos - Filter Search tab & Fixed header home page</title>
    </head>
    <LayoutLayoutsLayout8>
        <HomeSearchtab />
        <HomeSearchtabProperty1 />
        <HomeSearchtabFetureProperty />
        <HomeSearchtabPropertyServices />
        <HomeSearchtabPropertyListing />
        <HomeSearchtabVideo />
        <HomeSearchtabHappyclient />
        <HomeSearchtabSubscribe />
        <HomeSearchtabAgent />
        <HomeSearchtabBrand />
        <ElementTaptopTapTop6 />
    </LayoutLayoutsLayout8>
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