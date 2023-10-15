<template>
    <section class="property-section slick-shadow">
        <div class="container">
            <div class="row ratio_landscape">
                <div class="col">
                    <div class="title-3 text-start">
                        <h2>{{ title }}</h2>
                        <p class="font-roboto">{{ content }}</p>
                    </div>
                    <ElementPropertyLetest4 />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let title: string = 'Latest Property';
let content: string = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
</script>

<style lang="scss" scoped></style>