<template>
  <div class="col-lg-12 col-sm-6">
    <div class="form-group m-0">
      <div class="price-range">
        <label for="amount"> {{ props.label }}: {{ state.range[0] }} - {{ state.range[1] }} sq ft </label>
        <ClientOnly>
          <VueSimpleRangeSlider :style="props.width ? props.width : 'width: 383px'" :min="1000" :max="6000" exponential
            v-model="state.range" @click="getarea()" class="area">
          </VueSimpleRangeSlider>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSidebarfilterStore } from '~/store/sidebarfilter'
let props = defineProps({
  label: String,
  width: String
})
let router = useRouter();
let route = useRoute();
let store = useSidebarfilterStore();
const state = ref({ range: [2500, 6000] });
function getarea() {
  store.filterarea(state.value.range);
  store.mapfilterdata();
}

</script>

<style lang="scss" scoped></style>