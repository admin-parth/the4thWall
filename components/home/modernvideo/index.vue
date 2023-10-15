<template>
  <section class="layout-home2 banner-section video-layout p-0" style="height:800px">
    <video class="bgvideo" playsinline autoplay muted loop>
      <source src="/video/video.mp4" type="video/mp4">
    </video>
    <div class="container">
      <div class="row overlay-content">
        <div class="col-lg-12">
          <div class="video-details p-0">
            <div class="left-sidebar">
              <span class="label label-light label-flat color-2">{{ '#Realestate' }}</span>
              <nuxt-link to="/">
                <h2> {{ 'Sick about moving out?' }} </h2>
              </nuxt-link>
              <div class="row gx-2">
                <div class="col-md-6">
                  <ElementFilteroptionStatus label="Property Status" :data="data" />
                </div>
                <div class="col-md-6">
                  <ElementFilteroptionType label="Property-Type" :data="data" />
                </div>
                <ElementFilteroptionRooms label="Max Rooms" :data="data" />

                <ElementFilteroptionBed label="Bed" :data="data" />

                <ElementFilteroptionBath label="Bath" :data="data" />

                <div class="col-md-6">
                  <ElementFilteroptionAgencies label="Agencies" :data="data" />
                </div>
                <div class="col-lg-12">
                  <div class="price-range">
                    <ElementFilteroptionPrice label="price" />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="price-range">
                    <ElementFilteroptionArea label="Area" />
                  </div>
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

<script lang="ts" setup>
import { useFiltersStore } from "~/store/filter.js";

const data = useFiltersStore().data;
</script>

<style lang="scss" scoped></style>