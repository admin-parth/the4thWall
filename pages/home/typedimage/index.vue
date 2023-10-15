<template>
   <head>
      <title>Sheltos - Typed Image home page</title>
   </head>
   <layout-layouts-layout9>
      <home-typedimage />
      <home-typedimage-forsale />
      <home-typedimage-feature-property />
      <home-typedimage-forrent />
      <home-typedimage-banner />
      <home-typedimage-cities />
      <home-typedimage-happyclient />
      <home-typedimage-agent />
      <home-typedimage-offer />
      <home-typedimage-brand />
      <element-taptop-tap-top7 />
   </layout-layouts-layout9>
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