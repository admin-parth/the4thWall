<template>
  <section class="property-section">
    <div class="container">
      <div class="row ratio_landscape">
        <div class="col">
          <div class="title-3 text-start d-flex">
            <div>
              <h2>{{ title }}</h2>
              <p>{{ details }}</p>
            </div>
            <ElementListingListing4 @contentvalue="open" />
          </div>
          <ElementListingListing4FirstTab :data="listingcount" />
          <ElementListingListing4SecondTab :data="listingcount" />
          <ElementListingListing4ThirdTab :data="listingcount" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
let title: string = 'Listing Property';
let details: string = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening'
let listingcount = ref<number>(1)
function open(value: number) {
  listingcount.value = value;
}
</script>

<style lang="scss" scoped></style>