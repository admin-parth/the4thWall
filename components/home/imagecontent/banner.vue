<template>
    <section class="banner-section layout1-bg parallax-image">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-1">
                        <span class="label label-gradient color-1">{{ heading }}</span>
                    </div>
                    <div class="light-bg banner-1">
                        <span class="big-gradient">*</span>
                        <span class="small-white">*</span>
                        <h6>{{ title }}</h6>
                        <h2>{{ details }}</h2>
                        <div class="button-banner">
                            <nuxt-link to="/agent/submit-property" class="btn btn-gradient color-1">{{ 'Submit property'
                            }}</nuxt-link>
                            <nuxt-link to="/page/portfolio/details" class="btn btn-white color-1">Browse Details</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let heading: string = 'Buy or sell';
let title: string = 'Sheltos real estate';
let details: string = 'Looking to Buy a new property or Sell an existing one? Real Homes provides an easy solution!'
</script>

<style lang="scss" scoped></style>