<template>
    <Head>
        <Title>Sheltos-Filter search with Slider home page</Title>
    </Head>
    <LayoutLayoutsLayout1>
        <HomeFiltersliderHeroslider />
        <HomeFiltersliderSale />
        <HomeFiltersliderFeatureproperty />
        <HomeFiltersliderRent />
        <HomeFiltersliderNewOffer />
        <HomeFiltersliderFindproperty />
        <HomeFiltersliderBanner />
        <HomeFiltersliderAgent />
        <HomeFiltersliderHappyclient />
        <HomeFiltersliderBrand />
        <ElementTaptopTapTop2 />
    </LayoutLayoutsLayout1>
</template>

<script lang="ts" setup>
import { usecustomizerStore } from '~/store/costomizer'
let themes = ref({
    theme1: '--theme-default8',
    theme2: '--theme-default9',
})
usecustomizerStore().getproperty(themes.value)
</script>

<style lang="scss" scoped></style>