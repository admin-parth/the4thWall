<template>
  <div class="col-lg-12">
    <div class="form-group">
      <div class="price-range">
        <label for="amount"> {{ props.label }}: {{ range[0] }} - {{ range[1] }} sq ft </label>
        <ClientOnly>
          <VueSimpleRangeSlider style="width: 383px" :min="0" :max="500" exponential v-model="range">

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
const vlaue = ref(10)
const range = ref<number[]>([20, 300])
</script>

<style lang="scss" scoped></style>