<template>
    <div class="user-about">
        <div class="row">
            <div class="col-xl-6 col-lg-6" :class="imageOnRight ? 'order-xl-2 order-lg-2' : 'order-xl-1 order-lg-1'">
                <div class="about-image">
                    <div class="img-box side-left">
                        <img :src="`/image/${image1}`" class="img-fluid" alt="">
                        <div class="side-effect"></div>
                    </div>
                    <div class="img-box img-abs side-right">
                        <img :src="`/image/${image2}`" class="img-fluid" alt="">
                        <div class="side-effect"></div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6" :class="imageOnRight ? 'order-xl-1 order-lg-1' : 'order-xl-2 order-lg-2'">
                <div class="about-content">
                    <h3>{{ title }}</h3>
                    <p class="font-roboto">{{ description }}</p>
                </div>
            </div>
        </div>
    </div>    
</template>
<script setup lang="ts">

defineProps({
    image1: String,
    image2: String,
    title: String,
    description: String,
    imageOnRight: {type: Boolean, default: false}
})
</script>