<template>
    <section class="my-gallery">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-1">
                        <span class="label label-gradient color-1">{{ 'city' }}</span>
                        <h2>{{ title }}</h2>
                        <hr>
                    </div>
                    <ElementFindpropertyFind1 />
                </div>
            </div>
        </div>
    </section>
</template>
    
<script lang="ts" setup>
let title: string = 'Find Properties in These Cities'
</script>
    
<style lang="scss" scoped></style>