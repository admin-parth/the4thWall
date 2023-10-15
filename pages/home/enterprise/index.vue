<template>
    <head>
        <Title>Sheltos - Enterprise Home Page</Title>
    </head>
    <LayoutLayoutsLayout3>
        <HomeEnterprise />
        <HomeEnterprisePropertyServices />
        <HomeEnterprisePropertyoftheday />
        <HomeEnterprisePropertyListing />
        <HomeEnterpriseLookingProperty />
        <HomeEnterpriseFeatureCites />
        <HomeEnterpriseBanner />
        <HomeEnterpriseHappyclient />
        <HomeEnterpriseBlog />
        <HomeEnterpriseBrand />
        <ElementTaptopTapTop4 />
    </LayoutLayoutsLayout3>
</template>

<script setup>
import { usecustomizerStore } from '~/store/costomizer'
let themes = ref({
    theme1: '--theme-default3',
    theme2: '--theme-default4',
})
usecustomizerStore().getproperty(themes.value)
</script>

<style lang="scss" scoped></style>