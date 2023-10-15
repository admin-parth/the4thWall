<template>
    <div class="search-with-tab">
        <ul class="nav nav-tabs" id="home-tab" role="tablist">
            <li class="nav-item"><nuxt-link data-bs-toggle="tab" class="nav-link active" to="#sell">{{ 'For sell'}}</nuxt-link></li>
            <li class="nav-item"><nuxt-link data-bs-toggle="tab" class="nav-link" to="#rent">{{ 'For rent' }}</nuxt-link></li>
        </ul>
        <div class="tab-content" id="home-tabContent">
            <ElementSearchWithTabsSelltab />
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>