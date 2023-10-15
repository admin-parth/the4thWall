<template>
  <Head>
    <Title>Sheltos-Corporate home page</Title>
  </Head>
  <LayoutLayoutsLayout2>
    <HomeCorporateHeroslider />
    <HomeCorporatePropertyListing />
    <HomeCorporateProvidedServices />
    <HomeCorporatePropertyListing2 />
    <HomeCorporatePricing />
    <HomeCorporateFeatureproperty />
    <HomeCorporateBanner />
    <HomeCorporateAgent />
    <HomeCorporateHappyclient />
    <HomeCorporateBlog />
    <ElementTaptopTapTop3 />
  </LayoutLayoutsLayout2>
</template>

<script setup>
import { usecustomizerStore } from '~/store/costomizer'
let themes = ref({
  theme1: '--theme-default5',
  theme2: '--theme-default5',
})
usecustomizerStore().getproperty(themes.value)
</script>

<style lang="scss" scoped></style>