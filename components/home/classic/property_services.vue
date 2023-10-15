<template>
    <section class="service-section service-bg">
        <div class="container">
            <div class="title-3 text-start">
                <h2>{{ title }}</h2>
                <p class="font-roboto">{{ details }}</p>
            </div>
        </div>
        <ElementServicesServices4 />
    </section>
</template>

<script lang="ts" setup>
let title: string = 'property Services';
let details: string = 'Residences can be classified into different type of housing tenure can used for same physical type.';
</script>

<style lang="scss" scoped></style>