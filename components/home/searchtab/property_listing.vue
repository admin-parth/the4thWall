<template>
    <section class="property-section slick-between slick-shadow">
        <div class="container">
            <div class="row ratio_landscape">
                <div class="col">
                    <div class="title-3 text-start">
                        <h2>{{ 'Latest property' }}</h2>
                        <p>{{ details }}</p>
                    </div>
                    <ElementPropertyLetest4 />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let details: string = 'Residences can be classified into different type of housing tenure can used for same physical type.'
</script>

<style lang="scss" scoped></style>