<template>
    <section class="pricing-section slick-between slick-shadow color-7">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-3">
                        <svg class="title-svg color-7">
                            <use xlink:href="/svg/icons.svg#title-line"></use>
                        </svg>
                        <h2>{{ 'pricing' }} <span>{{ 'Plan' }}</span></h2>
                        <p class="font-roboto">{{ details }}</p>
                    </div>
                    <ElementPlan color="color-7" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let details: string = 'Residences can be classified into different type of housing tenure can used for same physical type.'
</script>

<style lang="scss" scoped></style>