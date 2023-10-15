<template>
    <section class="layout-home8 bg-img-2 ratio_landscape">
        <div class="container p-0">
            <div class="row m-0">
                <div class="col-xl-7 col-lg-8">
                    <div class="home-left-content">
                        <div class="home-content">
                            <h1 class="mx-0 p-0">{{ 'You are local Real estate' }}<br />{{ 'professionals' }}</h1>
                            <h6 class="font-roboto">{{ details }}</h6>
                        </div>
                    </div>
                    <ElementSearchWithTabs />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
let details: string = 'Residences can be classified by and connected to residences. Different types of housing  can be use same physical type.'
</script>

<style lang="scss" scoped></style>