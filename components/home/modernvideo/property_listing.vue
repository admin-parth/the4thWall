<template>
  <section class="property-section property-list-view">
    <div class="container">
      <div class="row ratio_55">
        <div class="col">
          <div class="title-2">
            <h2>{{ heading }}</h2>
            <p>{{ details }}</p>
          </div>
          <ElementListingListing10 />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
let heading: string = 'Latest Property Listing';
let details: string = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more'
</script>

<style lang="scss" scoped></style>