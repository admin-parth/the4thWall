<template>
    <div class="row gx-3">
        <HomeFiltersliderFilterFilteroptionStatus :data="data" label="Property Status" />
        <HomeFiltersliderFilterFilteroptionType label="Property Type" :data="data" />
        <HomeFiltersliderFilterFilteroptionRooms label="Rooms" :data="data" />
        <HomeFiltersliderFilterFilteroptionBed label="Bed" :data="data" />
        <HomeFiltersliderFilterFilteroptionBath label="Bath" :data="data" />
        <HomeFiltersliderFilterFilteroptionAgencies label="Agencies" :data="data" />
        <HomeFiltersliderFilterFilteroptionPrice label="Price" />
        <HomeFiltersliderFilterFilteroptionArea label="Area" />
        <div class="col-lg-12">
            <nuxt-link to="/listing/grid_view/2_grid_view/left-sidebar" class="text-white btn btn-gradient color-6 mt-3 ">{{
                'Search' }}</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useFiltersStore } from '~/store/filter.js'

const data = useFiltersStore().data

</script>

<style lang="scss" scoped></style>