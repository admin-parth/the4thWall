<template>
  <div class="col-lg-12">
    <div class="form-group">
      <div class="price-range">
        <label for="amount"> {{ props.label }}: ${{ state.range[0] }} - ${{ state.range[1] }} </label>
        <ClientOnly>
          <VueSimpleRangeSlider style="width: 383px" :min="0" :max="487" exponential v-model="state.range">

          </VueSimpleRangeSlider>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

let props = defineProps({
  label: String
})
const state = ref({ range: [20, 300], number: 10 });
</script>

<style lang="scss" scoped></style>