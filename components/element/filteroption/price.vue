<template>
  <div class="col-lg-12">
    <div class="form-group m-0">
      <div class="price-range">
        <label for="amount"> {{ props.label }}: ${{ state.range[0] }} - ${{ state.range[1] }} </label>
        <ClientOnly>
          <VueSimpleRangeSlider :style="props.width ? props.width : 'width: 383px'" :min="1000" :max="9000" exponential
            v-model="state.range" @click="getprice()" class="price">
          </VueSimpleRangeSlider>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts" type="module" setup>
import { useSidebarfilterStore } from '~/store/sidebarfilter'

interface range {
  range: number[]
}
let props = defineProps({
  label: String,
  width: String
})
let store = useSidebarfilterStore();
let route = useRoute();
let router = useRouter();
const state = ref<range>({ range: [2500, 8000] });
function getprice() {
  store.filterprice(state.value.range);
  store.mapfilterdata();
}


</script>

<style lang="scss" scoped></style>