<template>
  <section class="home-section layout-home2 layout-map">
    <div class="map" id="map-wrap">
      <ElementMapsLefletmap />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 feature-section">
          <div class="feature-content">
            <span class="label-cross">
              {{ alldata[0].label }}
            </span>
            <div class="details">
              <h3>
                <nuxt-link to="/listing/grid_view/2_grid_view/left-sidebar"><span>{{ alldata[0].title }}</span>{{
                  alldata[0].heading }}</nuxt-link>
                >
              </h3>
              <span>{{ alldata[0].details }}</span>
            </div>
            <ul class="detail-list">
              <li v-for="(item, index) in alldata[0].icon" :key="index">
                <div class="d-flex">
                  <span class="label label-light color-2 label-lg">
                    <img :src="item.path" class="img-fluid img-icon" alt="" />
                  </span>
                  <h6>{{ item.name }}</h6>
                </div>
              </li>
              <li>
                <span class="label label-light color-2 label-lg">{{ alldata[0].sqft }} Sq Ft</span>
              </li>
            </ul>
            <ul class="feature-price">
              <li>
                <h3>{{ alldata[0].price }}</h3>
                <h6>{{ alldata[0].tag }}</h6>
              </li>
              <li>
                <nuxt-link to="/agent/submit-property" class="btn btn-gradient btn-pill color-2 btn-lg">{{ "submit property" }}</nuxt-link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useurl } from '~/composable/apiurl'
interface Icon {
  name: string;
  path: string;
}
interface Filters {
  label: string;
  title: string;
  heading: string;
  details: string;
  icon: Icon[]
  sqft: string;
  price: string
  tag: string;
}
interface FetchResponse {
  data: {
    value: {
      data: Filters[]
    }
  }
}
declare function useFetch(url: string): Promise<FetchResponse>
let { data } = await useFetch(useurl + '/data/home12.json')
let alldata: Filters[] = data.value.data

</script>

<style scoped></style>
