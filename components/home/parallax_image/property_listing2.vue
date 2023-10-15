<template>
    <section class="property-section pb-0">
        <div class="container-fluid">
            <div class="row ratio_55 zoom-gallery property-box-flat">
                <div class="col">
                    <div class="title-3">
                        <svg class="title-svg color-7">
                            <use xlink:href="/svg/icons.svg#title-line"></use>
                        </svg>
                        <h2>{{ 'Property' }} <span>{{ 'Listing' }}</span></h2>
                        <p class="font-roboto">{{ details }}</p>
                    </div>
                    <ElementListingListing2 classes="col-xl-3 col-lg-4" color="color-7" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let details: string = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces withb kitchen opening.'
</script>

<style lang="scss" scoped></style>