<template>
  <section class="layout-home2 banner-section p-0">
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-lg-12 p-0">
          <div class="video-bg position-relative h-auto" id="block" style="width: 100%">
            <div class="video-size">
              <video width="100%" height="100%" loop muted autoplay>
                <source src="/video/video2.mp4" type="video/mp4" />
                <source src="/video/video2.mp4" type="video/mp4" />
                <source src="/video/video2.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="home-main feature-section new-property video-bg">
              <div class="container">
                <div class="feature-content video-details text-start p-0 vertical-search mt-0">
                  <span class="label-cross">{{ "New !" }}</span>
                  <div class="left-sidebar">
                    <nuxt-link to="/">
                      <h2>{{ heading }}</h2>
                    </nuxt-link>
                    <div class="row gx-2">
                      <div class="col-md-6">
                        <!-- <ElementFilteroptionStatus label="Property Status" :data="data" /> -->
                      </div>
                      <div class="col-md-6">
                        <!-- <ElementFilteroptionType label="Property-Type" :data="data" /> -->
                      </div>
                      <!-- <ElementFilteroptionRooms label="Max Rooms" :data="data" /> -->

                      <!-- <ElementFilteroptionBed label="Bed" :data="data" /> -->

                      <!-- <ElementFilteroptionBath label="Bath" :data="data" /> -->

                      <div class="col-md-6">
                        <!-- <ElementFilteroptionAgencies label="Agencies" :data="data" /> -->
                      </div>
                      <div class="col-lg-12">
                        <div class="price-range">
                          <!-- <ElementFilteroptionPrice label="price" /> -->
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="price-range">
                          <!-- <ElementFilteroptionArea label="Area" /> -->
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <button type="button" class="btn btn-gradient color-4 mt-2">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
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
const heading = 'The 4th Wall';
const data = ref([]);
</script>
