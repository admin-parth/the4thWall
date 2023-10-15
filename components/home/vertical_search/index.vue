<template>
    <section class="layout-map vertical-map">
        <div class="map" id="map">
            <ElementMapsLefletmap />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 search-withmap">
                    <div class="vertical-search">
                        <div class="left-sidebar">
                            <div class="row gx-2">
                                <div class="col-lg-12">
                                    <ElementFilteroptionStatus label="Property Status" :data="data" />
                                </div>
                                <div class="col-lg-12">
                                    <ElementFilteroptionType label="Property-Type" :data="data" />
                                </div>
                                <ElementFilteroptionRooms label="Max Rooms" :data="data" />
                                <ElementFilteroptionBed label="Bed" :data="data" />
                                <ElementFilteroptionBath label="Bath" :data="data" />
                                <div class="col-sm-6">
                                    <ElementFilteroptionAgencies label="Agencies" :data="data" />
                                </div>
                                <div class="col-lg-12">
                                    <ElementFilteroptionPrice label="price" />
                                </div>
                                <div class="col-lg-12">
                                    <ElementFilteroptionArea label="Area" />
                                </div>
                                <div class="col-lg-12">
                                    <nuxt-link to="/listing/grid_view/2_grid-view/left-sidebar"
                                        class="btn btn-gradient color-4 mt-2">Search</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useFiltersStore } from "~/store/filter.js";

const data = useFiltersStore().data;
</script>

<style scoped></style>