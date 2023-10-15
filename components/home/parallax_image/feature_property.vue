<template>
    <section class="feature-section ratio_landscape pb-0">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-3">
                        <svg class="title-svg color-7">
                            <use xlink:href="/svg/icons.svg#title-line"></use>
                        </svg>
                        <h2>{{ 'Featured' }} <span>{{ 'Property' }}</span></h2>
                        <p class="font-roboto">{{ details }}</p>
                    </div>
                    <ElementFeaturepropertyProperty7 />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let details: string = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening'
</script>

<style lang="scss" scoped></style>