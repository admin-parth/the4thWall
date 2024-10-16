<template>
    <section class="breadcrumb-section p-0 bg-size background">
        <!-- style="background-image:url('/image/4thWall/banner/aboutus.png')"> -->
        <img :src="`/image/4thWall/banner/${title}.png`" class="bg-img img-fluid " alt="">
        <!-- <div class="container">
            <div class="breadcrumb-content">
                <div class="text-dark">
                    <h2>{{ title }}</h2>
                    <nav aria-label="breadcrumb" class="theme-breadcrumb">
                        <ol class="breadcrumb ms-0">
                            <li class="breadcrumb-item"><nuxt-link href="/">{{ first }}</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">{{ current }}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div> -->
    </section>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    first: String,
    current: String
})
</script>

<style scoped>
.background {
    height: fit-content;
}
</style>