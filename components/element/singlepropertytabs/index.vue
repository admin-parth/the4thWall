<template>
    <ul class="nav nav-tabs line-tab" id="top-tab" role="tablist">
        <li class="nav-item"><nuxt-link to="#about" data-bs-toggle="tab" class="nav-link active">about</nuxt-link></li>
        <li class="nav-item"><nuxt-link data-bs-toggle="tab" class="nav-link" to="#feature">feature</nuxt-link></li>
        <li class="nav-item"><nuxt-link data-bs-toggle="tab" class="nav-link" to="#gallery">gallery</nuxt-link></li>
        <li class="nav-item"><nuxt-link data-bs-toggle="tab" class="nav-link" to="#video">video</nuxt-link></li>
        <li class="nav-item"><nuxt-link data-bs-toggle="tab" class="nav-link" to="#floor_plan">Floor plan</nuxt-link></li>
        <li class="nav-item"><nuxt-link data-bs-toggle="tab" class="nav-link" to="#location-map">Location</nuxt-link></li>
    </ul>
    <div class="tab-content" id="top-tabContent">
        <ElementSinglepropertytabsAbout />
        <ElementSinglepropertytabsFeature />
        <ElementSinglepropertytabsGallery />
        <ElementSinglepropertytabsVideo />
        <ElementSinglepropertytabsFlorpaln />
        <ElementSinglepropertytabsLocation />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>